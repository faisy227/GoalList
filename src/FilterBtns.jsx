import FilterBtn from "./FilterBtn";
function FilterBtns({filters}) {
  
  return (
    <div className="section-header">
      <h2 className="section-title">
        <i className="fas fa-list-check"></i> My Goals
      </h2>
      <div className="filter-controls">
       {filters.map(filter =>{
        return <FilterBtn key={filter} filterCondition={filter}/>
       })}
      </div>
    </div>
  );
}

export default FilterBtns;
