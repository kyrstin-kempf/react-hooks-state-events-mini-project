import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [ text, setText] = useState("");
  const [ category, setCategory] = useState("Code");

  const optionList = categories.filter(option => option !== "All").map(option => {
    return (
      <option
      key={option}
      >
      {option}  
      </option>
    )
  });

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        type="select"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
        >
          {optionList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
