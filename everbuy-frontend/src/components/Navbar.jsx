import {CiSearch} from "react-icons/ci";
import {FaRegUser, FaRegHeart} from "react-icons/fa";
import {MdOutlineShoppingCart} from "react-icons/md";

const Navbar = () => {
  const search = (e) => {
    e.preventDefault();
    console.log("Search button is pressed");
  };

  return (
    <nav className="flex justify-between px-10 py-3 bg-white-400 items-center">
      <h2 className="text-[1.5rem] uppercase">everbuy</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search in Everbuy"
          className="text-[1rem] w-[25vw] pl-3 py-1 bg-white border-solid border border-gray-400 rounded-md placeholder-gray-400 text-[10px]"
        />
        <button onClick={(e) => search(e)}>
          <CiSearch
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
            size={20}
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
