const Featured = () => {
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
