import GoalItem from "./GoalItem";
function GoalList({goals, deleteGoals, startEdit}) {
  const emptyState = (
    <div className="empty-state" id="emptyState">
      <i className="fas fa-clipboard-list"></i>
      <h3>No goals yet</h3>
      <p>Add your first goal using the form above to get started!</p>
    </div>
  );
  return (
    <div className="goals-list" id="goalsList">
        {goals.length === 0 && emptyState}
      {goals.map(goal =>{
        return <GoalItem key={goal.id} goal={goal} deleteGoals={deleteGoals} startEdit={startEdit}/>
      })}
    </div>
  );
}

export default GoalList;
