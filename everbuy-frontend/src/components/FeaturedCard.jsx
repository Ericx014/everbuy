import {IoMdStar} from "react-icons/io";

const FeaturedCard = ({imgsrc, alt, rating, label, price, numOfRating}) => {
  const stars = new Array(rating).fill(null);

  return (
    <div className="w-[30%] h-[80%] flex flex-col items-center justify-center rounded-lg gap-[1rem]">
      <div className="bg-gray-100 w-[80%] h-[90%] mt-3 rounded-md flex justify-center">
        <img
          src={imgsrc}
          alt={alt}
          className="w-[80%] object-contain"
        />
      </div>
      <div className="w-[80%] text-[1rem] flex justify-between items-center px-[0.2rem]">
        <div className="flex flex-row gap-0">
          {stars.map((_, i) => (
            <IoMdStar
              key={i}
              className="text-yellow-400 self-center"
							size={15}
            />
          ))}
          <p>({numOfRating})</p>
        </div>
        <p className="uppercase font-medium tracking-wider">{label}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
