const CategoryCard = ({category}) => {
  return (
    <div className="w-[10rem] min-w-[9rem] h-[12rem] p-[0.5rem] bg-gray-200 rounded-lg flex flex-col justify-center overflow-hidden">
      <div className="flex justify-center">
        <img
          src={category.imagesrc}
          alt={category.name}
          className="w-[70%] min-w-[6rem] max-h-[120px] object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
