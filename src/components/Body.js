import { RestrauntList } from "../config";
import RestrauntCard from "./restaurntcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const filterdata = (searchText, MenuList) => {
  return MenuList.filter((restraunt) => 
    restraunt.info.name.toLowerCase().includes(searchText.toLowerCase()) // Case-insensitive filtering
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState(""); // For the search input
  const [MenuList, setMenuList] = useState([]); // Initially empty
  const [allRestaurants, setAllRestaurants] = useState([]); // Keep the unfiltered list

  useEffect(() => {
    getRestaurants();
  }, []);

  // Fetch restaurant data
  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Extract restaurant list
      const restaurants = json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // Update both state variables
      setMenuList(restaurants || []); // Safeguard if the structure doesn't match
      setAllRestaurants(restaurants || []); // Store the original data for reset
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (allRestaurants.length === 0) return <Shimmer />; // Show shimmer until data is loaded

  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          className="searchbar"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update the search input state
        />
        <button
          className="search_button"
          onClick={() => {
            const filteredData = filterdata(searchText, allRestaurants); // Use the full list for filtering
            setMenuList(filteredData); // Update the menu list
          }}
        >
          Search
        </button>
      </div>

      {/* Show message if no restaurants are found */}
      {MenuList.length === 0 ? (
        <h1>NO restaurant is found ....</h1>
      ) : (
        <div className="restrauntcard">
          {MenuList.map((restraunt) => (
            <RestrauntCard
              key={restraunt.info.id}
              name={restraunt.info.name}
              cloudinaryImageId={restraunt.info.cloudinaryImageId}
              rating={restraunt.info.avgRating || "N/A"} // Default rating to "N/A" if not available
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
