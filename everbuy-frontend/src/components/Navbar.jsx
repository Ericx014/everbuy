import {Link} from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="display flex w-full h-[8vh] items-center">
      <button>
        <img
          src="icons/hamburger-icon.png"
          alt="icon"
          className="w-[1.3rem] h-[1.3rem] ml-[0.7rem] hamburger-icon"
        />
      </button>
      <div className="w-full flex justify-between px-[1rem] md:px-[1.8rem] lg:px-[2.5rem]">
        <h1 className="text-[1.5rem] font-[600]">Logo</h1>
        <div className="navigation-links flex justify-between items-center md:w-[30%] lg:w-[18%] lg:min-w-[18rem]">
          <Link to="/shop" className="lg:text-[1.2rem]">Shop</Link>
          <Link className="lg:text-[1.2rem]">Explore</Link>
          <Link className="lg:text-[1.2rem]">Gift Cards</Link>
        </div>
        <div className="flex justify-between items-center w-[40%] sm:w-[25%] md:w-[20%] lg:w-[10%] lg:min-w-[150px]">
          <Link>
            <img
              src="icons/search-icon.png"
              alt="search icon"
              className="w-[1.3rem]"
            />
          </Link>
          <Link>
            <img
              src="icons/heart-icon.png"
              alt="favourites icon"
              className="w-[1.3rem]"
            />
          </Link>
          <Link>
            <img
              src="icons/profile-icon.png"
              alt="profile icon"
              className="w-[1.3rem]"
            />
          </Link>
          <Link>
            <img
              src="icons/cart-icon.png"
              alt="cart icon"
              className="w-[1.3rem]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
