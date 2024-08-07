import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      <Link to={category.name}>
				<div className="w-[8rem] lg:w-[2rem] md:w-[25%] min-w-[8rem] md:min-w-[12rem] md:max-w-[13.5rem] lg:max-w-[15rem] lg:h-[15rem] min-h-[10rem] p-[0.5rem] bg-gray-200 rounded-lg flex flex-col justify-center overflow-hidden hover:bg-gray-100 transition-colors duration-100">
					<button className="flex justify-center">
						<img
							src={category.imagesrc}
							alt={category.name}
							className="w-[80%] min-w-[6rem] max-h-[6rem] md:max-h-[8rem] lg:max-h-[11rem] object-contain"
						/>
					</button>
				</div>
			</Link>
      <Link to={category.name}>
        <p
          className="capitalize lg:text-[1.1rem] flex justify-center cursor-pointer transition-colors ease-in-out hover:text-[#4D869C]"
          href="#"
        >
          {category.name}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
