function GoalItem({goal, deleteGoals, startEdit}) {
let goalClasses = 'goal-priority priority-' + goal.priority;
  return (
    <div className="goal-item">
      <div className="goal-info">
        <h3 className="goal-title">{goal.title}</h3>
        <p className="goal-description">
         {goal.description}
        </p>
        <div className="goal-meta">
          <span className={goalClasses}>
            <i className="fas fa-exclamation-circle"></i> {goal.priority} Priority
          </span>
         
        </div>
      </div>
      <div className="goal-actions">
        <button className="action-btn edit-btn" onClick={() => startEdit(goal)}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="action-btn delete-btn" onClick={() => deleteGoals(goal.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default GoalItem;
