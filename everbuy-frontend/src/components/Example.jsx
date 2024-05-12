import { useState } from "react";

const Featured = () => {
	const [ratingOne, setRatingOne] = useState(0);
	const [ratingTwo, setRatingTwo] = useState(0);
	const [ratingThree, setRatingThree] = useState(0);

	const featuredImages = [
		{product: "handbag", image: "handbag.png"},
		{product: "shoes", image: "shoespng"},
		{product: "earbuds", image: "earbudspng"}
	]

  return (
    <section className="w-[70vw] h-[40vh] mx-auto my-[2rem] flex justify-between">
			
      <div className="w-[30%] h-[70%] bg-gray-100 shadow rounded-lg flex items-center justify-center relative">
        <img
          src="handbag.png"
          alt="product image"
          className="w-[70%] object-contain"
        />
      </div>
      <div className="w-[30%] h-[70%] bg-gray-100 shadow rounded-lg flex items-center justify-center relative">
        <img
          src="shoes.png"
          alt="product image"
          className="w-[70%] object-contain"
        />
      </div>
      <div className="w-[30%] h-[70%] bg-gray-100 shadow rounded-lg flex items-center justify-center relative">
        <img
          src="earbuds.png"
          alt="product image"
          className="w-[70%] object-contain"
        />
      </div>
    </section>
  );
};

export default Featured;
