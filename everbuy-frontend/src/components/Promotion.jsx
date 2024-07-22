const Promotion = () => {
  const promotionProducts = [
    {
      name: "relaxed fit short-sleeved shirt",
      desc: "Relaxed-fit shirt in a cotton weave with a turn-down collar, classic front and a yoke at the back.",
      img: "promotion-images/promotion1.png",
      price: "54.95",
    },
    {
      name: "pleat-detail poplin skirt",
      desc: "Ankle-length, loose fit with a high waist and a concealed zip and button at one side. ",
      img: "promotion-images/promotion2.png",
      price: "149.95",
    },
  ];

	return (
    <section className="snap-center flex flex-row flex-wrap gap-[1.5rem] justify-center bg-[#F6F6F6] py-[2.5rem]">
      {promotionProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-center bg-white p-[2.5rem] rounded-[1rem] w-[90vw] md:w-[345px] g:min-w-[450px] lg:w-[40vw] lg:h-[70vh] shadow-md shadow-gray-300"
        >
          <h3 className="font-bold capitalize text-xl lg:text-[30px] leading-5 mb-3 tracking-tight">
            {product.name}
          </h3>
          <p className="text-[#636363] text-[1rem] leading-4 mb-6 max-w-[24rem]">
            {product.desc}
          </p>
          <div className="w-[60%] flex flex-row justify-center mb-2">
            <img
              src={product.img}
              alt={product.name}
              className="object-cover max-h-[140px] lg:max-h-[220px]"
            />
          </div>
          <p className="font-semibold mb-5">RM{product.price}</p>
          <div className="flex flex-row justify-center gap-[2rem]">
            <button className="underline font-semibold">Buy now</button>
            <button className="bg-white border-black border-[2px] rounded-md py-2 px-3 capitalize">
              view similar
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Promotion;
