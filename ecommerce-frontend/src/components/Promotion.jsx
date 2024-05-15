const Promotion = () => {
  return (
    <section className="w-screen flex justify-center px-[1rem] lg:py-[3rem] bg-gray-100">
      <div className="w-[95%] sm:w-[85%] md:w-[75%] max-w-[30rem] md:max-w-[40rem] lg:max-w-[65rem] h-[30vh] md:h-[35vh] bg-gray-100 rounded-lg px-[10%]">
        <div className="h-full flex flex-col justify-center gap-[1rem] lg:gap-[2rem]">
          <div className="flex flex-col lg:gap-[0.5rem]">
            <p className="capitalize text-kaushanscript text-[0.8rem] md:text-[1.2rem] lg:text-[1.4rem]">
              Starting at only RM0.99
            </p>
            <h2 className="uppercase font-bold text-[1.7rem] md:text-[2.2rem] lg:text-[3rem] leading-7 md:leading-8 lg:leading-10 text-[#4D869C]">
              <span className="text-black">black</span> friday <br /> sale
            </h2>
          </div>
          <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem]">
            <p className="font-light text-[0.8rem] lg:text-[1.2rem]">
              Free shipping for purchases over RM20
            </p>
            <button className="bg-[#4D869C] text-white w-[35%] min-w-[5rem] max-w-[7rem] sm:max-w-[100px] md:max-w-[8rem] h-fit text-[0.7rem] lg:text-[1rem] py-1.5 md:py-2 lg:py-2.5 rounded-md">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
