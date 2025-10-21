const Filter = ({filter,setFilter,setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-opitions">
         <div>
            <p>Status:</p>
            <select name="" id="" onChange={(e)=>setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplet">Incompletas</option>
            </select>
         </div>
         <div>
            <p>Orem Alfabetica:</p>
            <button onClick={()=>setSort("Asc")}>Asc</button>
            <button onClick={()=>setSort("Dsc")}>Desc</button>
         </div>
      </div>
    </div>
  )
}

export default Filter
