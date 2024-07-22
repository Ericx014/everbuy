const ViewMore = () => {
  return (
    <section className="snap-center flex justify-center bg-[#F6F6F6] pb-[2.5rem]">
      <div className="relative flex justify-center items-center w-[90vw] md:w-[720px] lg:min-w-[920px] lg:w-[81vw]">
        <img
          src="promotion-images/bg-img.png"
          alt="background"
          className="bg-black w-full object-cover rounded-[1rem] h-[250px] md:h-[280px] lg:h-[320px]"
        />
        <div className="absolute flex flex-col w-[100%] justify-center gap-[0.5rem] md:gap-[0.75rem] lg:gap-[1.25rem]">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center drop-shadow-lg px-[5rem]">
            Didn't see anything you like?
          </h3>
          <div className="flex flex-row justify-center">
            <button className="bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-md lg:rounded-lg font-semibold tracking-tight hover:scale-110 transition-all">
              More products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewMore;
