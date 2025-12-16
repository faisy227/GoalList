import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css";
import Header from './Header';
import Hero from './Hero';
import GoalForm from './GoalForm';
import Stats from './Stats';
import FilterBtns from './FilterBtns';
import GoalList from './GoalList';

function App() {
  let filters = [
    "all",
    'high priority'
  ]
  const initialGoals = [
  {
    id: crypto.randomUUID(),
    title: "Learn Advanced JavaScript",
    description: "Master closures, promises, async/await, and design patterns",
    priority: "high",
    dueDate: "2023-12-15",
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: "Build a CRUD Application",
    description: "Create a full CRUD web app with JavaScript and local storage",
    priority: "medium",
  },
  {
    id: crypto.randomUUID(),
    title: "Practice CSS Grid & Flexbox",
    description: "Complete 10 layout challenges using modern CSS techniques",
    priority: "low",
  
  },
  {
    id: crypto.randomUUID(),
    title: "Learn React Fundamentals",
    description: "Understand components, state, props, and hooks",
    priority: "high",
   
  }
];

const [goals, setGoals] = useState(initialGoals);

const [editingGoal, seteditingGoal] = useState(null);

const addGoals = (newGoall) => {
  setGoals(prevGoals => [...prevGoals, newGoall]);
  seteditingGoal(null)
}
const deleteGoals = (goalId) => {
  setGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId))
}

const startEdit = (goal) => {
  seteditingGoal(goal);
  
}
  return (
    <>
      <div className="container">
        <Header/>
        <main>
          <Hero/>
          <GoalForm addGoals={addGoals} editingGoal={editingGoal} setGoals={setGoals} seteditingGoal={seteditingGoal}/>
          <Stats goals={goals}/>

           <section className="goals-section">
            <FilterBtns filters={filters}/>
            <GoalList goals={goals} deleteGoals={deleteGoals} startEdit={startEdit}/>
           </section>
        </main>
      </div>
      
    </>
  )
}

export default App
