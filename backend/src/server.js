const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const app = express();
const PORT = 3000;
const db = new sqlite3.Database('./db.sqlite');

app.use(express.json());
app.use(cors());



db.run(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    deadline TEXT,
    completed INTEGER NOT NULL
  )
`);

app.get('/api/todos', (req, res) => {
  db.all("SELECT * FROM todos", (error, rows) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/todos', (req, res) => {
  const { title, deadline } = req.body;

  db.run(
    "INSERT INTO todos (title, deadline, completed) VALUES (?, ?, ?)",
    [title, deadline, 0],
    function (error) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(201).json({
          id: this.lastID,
          title,
          deadline,
          completed: 0
        });
      }
    }
  );
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  db.run(
    "UPDATE todos SET completed = ? WHERE id = ?",
    [completed ? 1 : 0, id],
    function (error) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json({ updated: true });
      }
    }
  );
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;

  db.run(
    "DELETE FROM todos WHERE id = ?",
    [id],
    function (error) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json({ deleted: true });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});