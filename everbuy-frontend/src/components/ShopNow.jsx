import {useState} from "react";
// import { Link } from "react-router-dom";
import ShopNav from "./ShopNav";

const ShopNow = () => {
  const groups = ["men", "women", "kids"];
	const categories = ["tops", "bottoms", "footwear"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);
	
  const handleClick = (index) => setActiveGrp(groups[index]);

  return (
    <section className="snap-center w-full mt-[1.5rem] pt-[1rem] pb-[5rem]">
      <h2 className="uppercase font-bold tracking-tight text-[1.5rem] text-center mb-[1rem]">
        shop now
      </h2>
      <ShopNav
        groups={groups}
        activeGrp={activeGrp}
        handleClick={handleClick}
      />
      <div className="flex flex-row justify-center flex-wrap items-center gap-[2rem] md:gap-[2.8rem] lg:gap-[3.5rem] px-[0.5rem] sm:px-[1rem] md:px-[2.8rem] lg:px-[4rem] mt-[3rem]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-[0.75rem] text-lg hover:text-xl transition-all"
          >
            <img
              src={`category-images/${activeGrp}-${category}.png`}
              alt={category}
              className="object-cover w-[15rem] lg:w-[18rem] rounded-lg hover:scale-105 transition-all"
            />
            <p className="capitalize font-semibold text-center">
              {category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopNow;
