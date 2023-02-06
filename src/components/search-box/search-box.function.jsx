import './search-box.style.css';

const SearchBox = ({className, onSearchBox, placeholder}) => {
  return (
    <input 
        className={`search-box ${className}`} 
        type="search" 
        placeholder={placeholder} 
        onChange={onSearchBox}/>
    )
}

export default SearchBox 