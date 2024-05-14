import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {name: "hoodie", imagesrc: "hoodie.png"},
    {name: "pants", imagesrc: "pants.png"},
    {name: "pants", imagesrc: "pants.png"},
  ];

  return (
    <section className="w-full h-fit px-[16px] py-[1.5rem] flex justify-center">
      <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] gap-[1rem] flex flex-start items-center overflow-auto">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
