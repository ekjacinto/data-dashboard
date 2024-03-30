import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./MainDashboard";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rawg.io/api/games");
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, filterCategory);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    filterData(searchTerm, category);
  };

  const filterData = (searchTerm, category) => {
    let filtered = data.filter((item) => {
      return item[category].toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const totalItems = data.length;
  const filteredItems = filteredData.length;

  return (
    <div>
      <Sidebar toggle={toggle} handleToggle={handleToggle} />
      <MainDashboard
        toggle={toggle}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        totalItems={totalItems}
        filteredItems={filteredItems}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
