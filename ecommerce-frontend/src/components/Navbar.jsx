import {Link} from "react-router-dom";
import {FaRegHeart} from "react-icons/fa";
import {IoSearch} from "react-icons/io5";
import {MdOutlineShoppingCart} from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-[100vw] rounded-lg border border-solid justify-between px-[2rem] md:px-[3rem] py-[0.75rem] sm:py-[1rem]">
      <Link to="/">
        <h2 className="text-[1.1rem] lg:text-[1.5rem] font-semibold">Logo</h2>
      </Link>
      <div className="flex flex-row justify-between w-[25%] md:w-[15%] lg:w-[10%] items-center">
        <a href="#">
          <IoSearch className="text-[1.1rem]" />
        </a>
        <a href="#">
          <FaRegHeart className="text-[1.1rem]" />
        </a>
        <a href="#">
          <MdOutlineShoppingCart className="text-[1.2rem]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
