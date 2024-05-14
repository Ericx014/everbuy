import {CiSearch} from "react-icons/ci";
import {FaRegUser, FaRegHeart} from "react-icons/fa";
import {MdOutlineShoppingCart} from "react-icons/md";

const Navbar = () => {
  const search = (e) => {
    e.preventDefault();
    console.log("Search button is pressed");
  };

  return (
    <nav className="flex justify-between bg-white-400 items-center w-full">
      <h2 className="text-[1rem] uppercase">everbuy</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search in Everbuy"
          className="text-[0.7rem] w-fit pl-3 py-1 border-solid border border-gray-400 rounded-md placeholder-gray-400"
        />
        <button onClick={(e) => search(e)}>
          <CiSearch
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
          />
        </button>
      </div>
      <div className="flex gap-[1rem] text-sm items-center">
        <a href="#">
          <FaRegUser size={20} />
        </a>
        <a href="#">
          <FaRegHeart size={20} />
        </a>
        <a href="#">
          <MdOutlineShoppingCart size={22} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
