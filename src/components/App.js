import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDelete(deletedTask) {
    setTasks(currentTasks.filter((task) => task.text !== deletedTask));
  }

  function handleAdd(newTask) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  const filteredTasks = currentTasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectClass={category}
      buttonSelectClass={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleAdd}
      />
      <TaskList 
      tasks={filteredTasks} 
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
