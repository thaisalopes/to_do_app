const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Creates database
const db = new sqlite3.Database("./db.sqlite", (error) => {
  if (error) {
    console.log("Database connection error:", error.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Deletes table if it exists and creates new To Do table
db.serialize(() => {
  db.run("DROP TABLE IF EXISTS todos");
  db.run(`
    CREATE TABLE todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      deadline DATE NOT NULL,
      completed BOOLEAN DEFAULT FALSE
    )
  `);
});

// GET - all To DO items
app.get("/api/todos", (req, res) => {
  const sql = "SELECT * FROM todos";

  db.all(sql, {}, (error, rows) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json({ todos: rows });
  });
});

// GET - To Do item by ID
app.get("/api/todos/:id", (req, res) => {
  const sql = "SELECT * FROM todos WHERE id = $id";
  const id = req.params.id;

  db.get(sql, { $id: id }, (error, row) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }
    res.json({ todo: row });
  });
});

// POST - creates new To DO item
app.post("/api/todos", (req, res) => {
  const { title, deadline } = req.body;
  if (!title) {
    res.status(400).json({ error: "Title is required" });
    return;
  }

  const sql = `
    INSERT INTO todos (title, deadline, completed)
    VALUES ($title, $deadline, $completed)
  `;

  db.run(
    sql,
    {
      $title: title,
      $deadline: deadline,
      $completed: false,
    },
    function (error) {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.status(201).json({
        id: this.lastID,
        title,
        deadline,
        completed: false,
      });
    },
  );
});

// PUT - updates To Do item to completed/incomplete
app.put("/api/todos/:id", (req, res) => {
  const sql = `
    UPDATE todos
    SET completed = $completed
    WHERE id = $id
  `;

  db.run(
    sql,
    {
      $completed: req.body.completed ? 1 : 0,
      $id: req.params.id,
    },
    function (error) {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: "Todo not found" });
        return;
      }
      res.json({ updated: true });
    },
  );
});

// DELETE - deletes To Do item
app.delete("/api/todos/:id", (req, res) => {
  const sql = "DELETE FROM todos WHERE id = $id";

  db.run(sql, { $id: req.params.id }, function (error) {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }
    res.json({ deleted: true });
  });
});

module.exports = app;
