import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SearchBar.scss"

const types = ["buy", "rent"];
const SearchBar = () => {
  const navigate = useNavigate();
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

  const handleInputChange = (e) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (query.location) searchParams.set('city', query.location);
    if (query.minPrice > 0) searchParams.set('minPrice', query.minPrice);
    if (query.maxPrice < 1000000) searchParams.set('maxPrice', query.maxPrice);
    if (query.type) searchParams.set('type', query.type);
    
    navigate(`/list?${searchParams.toString()}`);
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
      </div>      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          name="location" 
          placeholder="City Location" 
          value={query.location}
          onChange={handleInputChange}
        />
        <input 
          type="number" 
          name="minPrice" 
          min={0} 
          max={1000000} 
          placeholder="Min Price"
          value={query.minPrice}
          onChange={handleInputChange}
        />
        <input 
          type="number"
          name="maxPrice" 
          min={0} 
          max={1000000} 
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={handleInputChange}
        />
         <button type="submit">
          <img src="/search.png" alt="" />
         </button>
      </form>
    </div>
  )
}

export default SearchBar