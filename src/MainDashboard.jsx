/* eslint-disable react/prop-types */
const MainDashboard = ({
  toggle,
  searchTerm,
  handleSearch,
  handleFilter,
  totalItems,
  filteredItems,
  filteredData,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col justify-center container ml-auto mr-12 p-4 mt-[300px] bg-[#131313] ${
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
            onClick={() => handleFilter("category1")}
            className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Filter Category 1
          </button>
          <button
            onClick={() => handleFilter("category2")}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Filter Category 2
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold">Summary Statistics</h2>
          <p>Total Items: {totalItems}</p>
          <p>Filtered Items: {filteredItems}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Data List</h2>
          <ul>
            {filteredData.map((item) => (
              <li key={item.id} className="mb-2">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
