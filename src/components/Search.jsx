function Search({search,setSearch}) {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input type="text" name="" id="" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Digite sua pesquisa aqui..."/>

    </div>
  )
}

export default Search
