import React, { useState } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import TodoFilter from "./components/ToDoFilter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <TodoForm addTask={addTask} />

      <TodoFilter setFilter={setFilter} />

      <TodoList
        tasks={filteredTasks()}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
