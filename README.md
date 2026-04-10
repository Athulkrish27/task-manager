Task Manager Application
📌 Overview

This is a simple full-stack Task Manager application that allows users to create, view, update, and delete tasks. The project demonstrates basic frontend and backend integration using React and FastAPI.

🚀 Features
Frontend
Add new tasks
View all tasks
Mark tasks as completed / undo
Delete tasks
Simple and clean UI
Backend
REST API using FastAPI
In-memory task storage
Basic validation
JSON responses
🛠️ Tech Stack

Frontend:

React.js
HTML, CSS

Backend:

Python
FastAPI
📂 Project Structure

task-manager/
│
├── backend/
│ └── main.py
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
│
└── README.md

⚙️ Setup Instructions
🔹 Backend Setup
Navigate to backend folder:
cd backend
Create virtual environment:
python -m venv venv
Activate environment:
Windows:
venv\Scripts\activate
Install dependencies:
pip install fastapi uvicorn
Run the server:
uvicorn main --reload
Backend runs on:
http://127.0.0.1:8000
🔹 Frontend Setup
Navigate to frontend folder:
cd frontend
Install dependencies:
npm install
Run the app:
npm start
Frontend runs on:
http://localhost:3000
🔗 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create new task
PATCH	/tasks/{id}	Toggle task status
DELETE	/tasks/{id}	Delete task
📊 Task Model
id: Unique identifier
title: Task name
completed: Boolean status
createdAt: Timestamp
💡 Assumptions & Notes
Tasks are stored in memory (data resets on server restart)
UI is kept simple focusing on functionality
No authentication implemented
🔮 Future Improvements
Add database (SQLite / MongoDB)
Edit task feature
Filter tasks (Completed / Pending)
User authentication
Improved UI/UX
📎 Conclusion

This project demonstrates core full-stack development skills including API design, frontend integration, and state management in a simple and clean manner.
