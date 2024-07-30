const ShopNav = ({groups, activeGrp, handleClick}) => {
  return (
    <div className="w-full bg-[#F4E4C3] flex justify-center">
      {groups.map((group, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`capitalize font-semibold lg:text-[1.2rem] py-4 px-8 sm:px-10 md:px-13 lg:px-16 ${
            activeGrp === group ? "bg-[#DFCAA0]" : "bg-[#F4E4C3]"
          } transition-all hover:text-gray-500`}
        >
          {group}
        </button>
      ))}
    </div>
  );
};

export default ShopNav;
