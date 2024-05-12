import {useState} from "react";

const ExclusiveNavbar = ({categories}) => {
  const [activeButton, setActiveButton] = useState("all");

  const handleClick = (e) => {
    setActiveButton(e.target.value);
    console.log(e.target.value, "button is clicked");
  };

  const buttonStyling = `w-[6.5rem] h-[2.3rem] capitalize bg-[#CDE8E5] rounded-md px-[2px] py-[4px] text-black text-[14px] tracking-[1px]`;
	const activeButtonStyling = `w-[6.5rem] h-[2.3rem] capitalize bg-black rounded-md px-[2px] py-[4px] text-white text-[14px] tracking-[1px]`;

  return (
    <section className="flex flex-row justify-center gap-[14px] mb-[2rem]">
      <button
        value="all"
        className={
          activeButton === "all" ? activeButtonStyling : buttonStyling
        }
        onClick={(e) => handleClick(e)}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={
            activeButton === category ? activeButtonStyling : buttonStyling
          }
          value={category}
          onClick={(e) => handleClick(e)}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default ExclusiveNavbar;
