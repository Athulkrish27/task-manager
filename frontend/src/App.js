import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("http://127.0.0.1:8000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await fetch("http://127.0.0.1:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });

    setTitle("");
    fetchTasks();
  };

  const completeTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
      method: "PATCH"
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
      method: "DELETE"
    });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>

      <div className="inputBox">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="taskList">
        {tasks.length === 0 ? (
          <p className="empty">No tasks yet...</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`taskCard ${task.completed ? "done" : ""}`}
            >
              <span>{task.title}</span>

               <div className="actions">
                <button onClick={() => completeTask(task.id)}>✔</button>
                <button onClick={() => deleteTask(task.id)}>❌</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;