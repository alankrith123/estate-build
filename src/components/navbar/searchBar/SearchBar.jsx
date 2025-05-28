import React from 'react'
import "./SearchBar.scss"

const types = ["buy", "rent"];
const SearchBar = () => {
  const[query, setQuery] = React.useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 1000000
  })
  
  const switchType = (val) => {
    setQuery((prev) => ({
      ...prev,
      type: val
    }));
  };

  return (
    <div className="searchBar">
      <div className="type">
    {types.map((type) => (
      <button 
        key={type} 
        onClick={() => switchType(type)} 
        className={query.type === type ? "active" : ""}
      >
        {type}
      </button>
    ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input 
        type="number" 
        name="minPrice" 
        min={0} max={1000000} 
        placeholder="Min Price" />
        <input 
        type="number"
         name="maxPrice" 
         min={0} max={1000000} 
         placeholder="Max Price" />
         <button>
          <img src="/search.png" alt="" />
         </button>
      </form>
    </div>
  )
}

export default SearchBar