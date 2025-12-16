function Stats({goals}) {
  return (
    <section className="stats-section">
      <div className="stat-card stat-1">
        <div className="stat-icon">
          <i className="fas fa-bullseye"></i>
        </div>
        <div className="stat-info">
          <h3>{goals.length}</h3>
          <p>Total Goals</p>
        </div>
      </div>
    
      <div className="stat-card stat-4">
        <div className="stat-icon">
          <i className="fas fa-flag"></i>
        </div>
        <div className="stat-info">
          <h3>{goals.filter(item => item.priority == "high").length}</h3>
          <p>High Priority</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
