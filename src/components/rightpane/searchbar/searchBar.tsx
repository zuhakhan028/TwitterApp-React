import "./searchBar.css"
import search_ic from "../../../Images/search.svg"
function SearchBar(){
    return (
        <div className="searchBar">
             <div className="searchBartDiv">
                <img src={search_ic} alt="searchIcon" className="searchIcon"></img>
                <input type="text" placeholder="Search Twitter" className="inputSearch"></input>
             </div>
        </div>
    )
}
export default SearchBar