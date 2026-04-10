from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from datetime import datetime

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = []

class Task(BaseModel):
    title: str

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def create_task(task: Task):
    new_task = {
        "id": len(tasks) + 1,
        "title": task.title,
        "completed": False,
        "createdAt": str(datetime.now())
    }
    tasks.append(new_task)
    return new_task

@app.patch("/tasks/{task_id}")
def update_task(task_id: int):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = not task["completed"]   # 🔥 toggle
            return task
    return {"error": "Task not found"}

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return {"message": "Deleted"}