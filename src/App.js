import React from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";
import AddTask from "./component/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Practice Coding",
      day: "Feb 5th at 2:30pm",
      remainder: true,
    },
    {
      id: 2,
      text: "Implement Coding",
      day: "Feb 15th at 2:30pm",
      remainder: false,
    },
    {
      id: 3,
      text: "Go to the hub",
      day: "Feb 5th at 2:30pm",
      remainder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle remainder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
