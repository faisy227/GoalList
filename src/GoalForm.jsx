import React, { useState, useEffect } from "react";

function GoalForm({ addGoals, editingGoal, setGoals, seteditingGoal }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(editingGoal);
    if (editingGoal) {
      setTitle(editingGoal.title);
      setDescription(editingGoal.description);
      setPriority(editingGoal.priority);
    } else {
      resetValues();
    }
  }, [editingGoal]);

  const updateGoals = () => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === editingGoal.id) {
          return {...editingGoal, title, priority, description};
        } else {
          return goal;
        }
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingGoal) {
      updateGoals();
      resetValues();
      // seteditingGoal(null);
      
    } else {
      formValidation();
      resetValues();
    }
  };

  const formValidation = () => {
    let values = [title, priority, description];
    const allFieldsFilled = values.every((value) => !!value);

    if (allFieldsFilled) {
      alert("Success");
      addGoals({ title, priority, description });
    } else {
      alert("Error Fill in all Fields");
    }
  };

  const resetValues = () => {
    setTitle("");
    setPriority("low");
    setDescription("");
  };

  return (
    <section className="form-section">
      <h2 className="form-title">
        <i className="fas fa-plus-circle"></i> {!editingGoal ? "Add" : "Edit"} New Goal
      </h2>
      <form className="goal-form" id="goalForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="goalTitle">Goal Title</label>
          <input
            type="text"
            id="goalTitle"
            className="form-control"
            placeholder="Learn JavaScript fundamentals"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="goalPriority">Priority</label>
          <select
            id="goalPriority"
            className="form-control priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low Priority</option>
            <option value="medium">
              Medium Priority
            </option>
            <option value="high">High Priority</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="goalDescription">Description</label>
          <input
            type="text"
            id="goalDescription"
            className="form-control"
            placeholder="Complete JavaScript course and build 3 projects"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-plus"></i> {!editingGoal ? "Add" : "Edit"} Goal
        </button>
      </form>
    </section>
  );
}

export default GoalForm;
