**To-Do Application**

A full-stack to-do application built with React (front end) and Node.js with Express (back end).
This app allows users to add, complete, and delete tasks, each with a title and deadline.

---

**Features**

* Add new to-do items
* Mark items as completed
* Delete items
* View all tasks in a list

---

**Tech Stack**

* Frontend: React
* Backend: Node.js, Express
* Database: SQLite

---

Getting Started

**1. Clone the repository**

Open the project folder (`to_do_app`) in VS Code.

---

**2. Install dependencies**

Backend:

cd backend
npm install

Frontend:

cd frontend
npm install

---

**3. Run the Back End**

cd backend
node src/server.js

The backend server will run on:
http://localhost:4000

---

**4. Run the Front End**

Open a new terminal:

cd frontend
npm start

The React app will run on:
http://localhost:3000

**5. Using the Application**

**Add a To-Do**

* Enter a title
* Enter a deadline
* Click submit

**Mark as Completed**

* Click the checkbox to toggle completion

**Delete a To-Do**

* Click the trash icon on the right side

---

**API Endpoints**

* GET /api/todos
* POST /api/todos
* PUT /api/todos/:id
* DELETE /api/todos/:id

---

**Notes**

* Make sure both frontend and backend servers are running at the same time
* Backend runs on port 4000, frontend on port 3000
