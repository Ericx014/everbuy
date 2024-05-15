import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {name: "hoodie", imagesrc: "hoodie.png"},
    {name: "pants", imagesrc: "pants.png"},
    {name: "sneakers", imagesrc: "sneakers.png"},
    {name: "bag", imagesrc: "bag.png"},
    {name: "cap", imagesrc: "cap.png"}
  ];

  return (
    <section className="w-screen h-fit py-[1.5rem] lg:py-[2.5rem] flex justify-center">
      <div className="w-full h-full flex flex-wrap justify-center bg-white py-[2%] lg:py-[1%] pb-[8%] sm:pb-[6%] md:pb-[4%] lg:pb-[3%] items-center">
        <h2 className="w-full text-center text-[1.5rem] pt-[0.5rem] pb-[1rem]">
          Categories
        </h2>
        <div className="w-[90%] gap-[1rem] flex flex-wrap justify-center items-center ">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
