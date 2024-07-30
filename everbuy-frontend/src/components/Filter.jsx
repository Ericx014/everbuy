import {Link} from "react-router-dom";
import {useState, useContext} from "react";
import {ProdContext} from "../App";
import {IoFilterOutline} from "react-icons/io5";
import {BsSortDown} from "react-icons/bs";
import {FaSearch} from "react-icons/fa";

const Filter = () => {
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [sortModalIsOpen, setSortModalIsOpen] = useState(false);
  const {allProd, setSearchedProds, searchInput, setSearchInput} =
    useContext(ProdContext);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleFilterModal = () => {
    setFilterModalIsOpen(!filterModalIsOpen);
  };

	const toggleSortModal = () => {
    setSortModalIsOpen(!sortModalIsOpen);
  };

  const handleSubmit = () => {
    if (searchInput) {
      const foundProds = allProd.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(foundProds);
      if (foundProds.length > 0) {
        setSearchedProds(foundProds);
      } else {
        localStorage.removeItem("searchedProds");
        setSearchedProds([]);
        console.log("No products found");
      }
    }
  };

	const filterModal = (
    <>
      {filterModalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl mb-4">Filter Options</h2>
            {/* Add your filter options here */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => toggleFilterModal()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );

	const sortModal = (
    <>
      {sortModalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl mb-4">Sort Options</h2>
            {/* Add your filter options here */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => toggleSortModal()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <section className="flex flex-row justify-center mt-[2rem]">
      <div className="flex flex-row justify-center items-center gap-8">
        <form className="relative">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Search"
            className="border-[1px] border-black rounded-md py-1 px-3 w-[15rem]"
            required
          />
          {searchInput ? (
            <Link to="/results">
              <button type="submit" onClick={() => handleSubmit()}>
                <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 mr-2" />
              </button>
            </Link>
          ) : (
            <button type="submit" onClick={() => handleSubmit()}>
              <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 mr-2" />
            </button>
          )}
        </form>
        <button
          onClick={() => toggleFilterModal()}
          className="hover:scale-110 hover:text-[#cea85c]  transition-all flex flex-row items-center gap-2"
        >
          <IoFilterOutline className="text-[1.5rem]" />
          <p className="text-[1.1rem]">Filter</p>
        </button>
        <button
          onClick={() => toggleSortModal()}
          className="hover:scale-110 hover:text-[#cea85c]  transition-all flex flex-row items-center gap-2"
        >
          <BsSortDown className="text-[1.5rem]" />
          <p className="text-[1.1rem]">Sort</p>
        </button>
      </div>			
			{filterModal}
			{sortModal}
    </section>
  );
};

export default Filter;
