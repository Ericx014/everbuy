const CategoryCard = ({category}) => {
  return (
    <div className="w-[9rem] md:w-[30%] min-w-[8rem] md:min-w-[10rem] lg:max-w-[15rem] lg:h-[15rem] min-h-[11rem] p-[0.5rem] bg-gray-200 rounded-lg flex flex-col justify-center overflow-hidden hover:bg-gray-100 transition-colors duration-100">
      <div className="flex justify-center">
        <img
          src={category.imagesrc}
          alt={category.name}
          className="w-[80%] min-w-[6rem] max-h-[7.5rem] md:max-h-[8rem] lg:max-h-[11rem] object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
