/* eslint-disable react/prop-types */
const MainDashboard = ({
  toggle,
  searchTerm,
  handleSearch,
  handleFilter,
  filteredData,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col justify-center container ml-auto mr-12 p-6 mt-[275px] bg-[#131313] h-[95%] ${
          toggle ? "w-[71%]" : "w-[85%]"
        } h-[600px] rounded-2xl transition-all duration-500`}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <button
            onClick={() => handleFilter("Game")}
            className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Filter Category 1
          </button>
          <button
            onClick={() => handleFilter("Ratings")}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Filter Category 2
          </button>
        </div>

        <div className="flex justify-evenly items-center">
          <DataComponent
            filteredData={filteredData}
            category="Game"
            attribute="name"
          />
          <DataComponent
            filteredData={filteredData}
            category="Ratings"
            attribute="rating"
          />
          <DataComponent
            filteredData={filteredData}
            category="Release Date"
            attribute="released"
          />
          <DataComponent
            filteredData={filteredData}
            category="Owned"
            attribute="added_by_status.owned"
          />
          <DataComponent
            filteredData={filteredData}
            category="Metacritic"
            attribute="metacritic"
          />
        </div>
      </div>
    </div>
  );
};

const DataComponent = ({ filteredData, category, attribute }) => {
  return (
    <div>
      <h2
        className={`text-xl font-bold mb-2 ${
          attribute === "name" ? "text-start" : null
        }`}
      >
        {category}
      </h2>
      <ul>
        {filteredData.map((item) => (
          <li
            key={item.id}
            className={`mb-2 ${attribute === "name" ? "text-start" : null}`}
          >
            {attribute === "rating"
              ? `${item[attribute]} / 5`
              : attribute === "metacritic"
              ? `${item[attribute]} / 100`
              : attribute.includes("added_by_status")
              ? item.added_by_status[attribute.split(".")[1]]
              : item[attribute]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainDashboard;
