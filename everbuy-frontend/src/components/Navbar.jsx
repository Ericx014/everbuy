import {Link} from "react-router-dom";

const Navbar = () => {
	const clearActiveProd = () => {
		localStorage.removeItem("activeProd");
	}

  return (
    <nav className="static top-0 display flex w-full h-[8vh] items-center shadow-md border-b-2 snap-y snap-start">
      <div className="w-full flex justify-between px-[1rem] md:px-[1.8rem] lg:px-[2.5rem]">
        <div className="flex flex-row gap-5">
          <Link to="/">
            <h1 className="text-[1.6rem] font-bold">Logo</h1>
          </Link>
          <div className="flex justify-center gap-5 items-center">
            <Link to="/shop" className="lg:text-[1.2rem] font-semibold" onClick={() => clearActiveProd()}>
              Shop
            </Link>
          </div>
        </div>
        <div className="flex gap-7 items-center">
          {/* <Link to="/results">
            <img
              src="icons/search-icon.png"
              alt="search icon"
              className="w-[1.3rem]"
            />
          </Link> */}
          <Link to="/liked">
            <img
              src="icons/heart-icon.png"
              alt="favourites icon"
              className="w-[1.3rem]"
            />
          </Link>
          {/* <Link>
            <img
              src="icons/profile-icon.png"
              alt="profile icon"
              className="w-[1.3rem]"
            />
          </Link> */}
          <Link to="/cart">
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
