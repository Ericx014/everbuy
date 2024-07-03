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

  const productsAd = (
    <div className="flex flex-row flex-wrap gap-[1.5rem] justify-center">
      {promotionProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-center bg-white p-[2.5rem] rounded-[1rem] w-[90vw] md:w-[345px] lg:min-w-[450px] lg:w-[40vw] lg:h-[70vh] shadow-md shadow-gray-300"
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
    </div>
  );

  const giftCardAd = (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center bg-white p-[2.5rem] sm:px-[3rem] md:px-[4rem] lg:px-[6rem] rounded-[1rem] w-[90vw] md:w-[720px] lg:min-w-[920px] lg:w-[81vw] sm:h-[250px] md:h-[300px] lg:h-[375px] shadow-md shadow-gray-300">
        <div className="flex flex-col justify-center lg:gap-[0rem]">
          <h3 className="text-xl md:text-2xl lg:text-3xl capitalize font-bold mb-1">
            gift card
          </h3>
          <p className="md:text-lg lg:text-xl leading-4 mb-6">
            Sign up now to receive a gift card of your choice.
          </p>
          <div className="text-white capitalize font-semibold flex flex-row gap-5">
            <button className="rounded-md bg-[#DFCAA0] py-2.5 px-6 lg:text-lg">
              Explore
            </button>
            <button className="rounded-md bg-[#DFCAA0] py-2.5 px-6 lg:text-lg">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const viewMore = (
    <div className="flex justify-center">
      <div className="flex justify-center items-center w-[90vw] md:w-[720px] lg:min-w-[920px] lg:w-[81vw]">
        <img
          src="promotion-images/bg-img.png"
          alt="background"
          className="bg-black w-full h-[25vh] object-cover rounded-[1rem] sm:h-[250px] md:h-[300px] lg:h-[375px]"
        />
        <div className="absolute flex flex-col w-[100%] justify-center gap-[0.5rem] md:gap-[0.75rem] lg:gap-[1.25rem]">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center drop-shadow-lg">
            Didn't see anything you like?
          </h3>
          <div className="flex flex-row justify-center">
            <button className="bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-md lg:rounded-lg font-semibold tracking-tight">
              More products
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F6F6F6] p-[1.5rem] flex flex-col gap-[1.5rem] h-fit pb-[3rem]">
      {productsAd}
      {giftCardAd}
      {viewMore}
    </section>
  );
};

export default Promotion;
