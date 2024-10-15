import React from "react";

function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
