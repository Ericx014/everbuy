const Promotion = () => {
  return (
    <section className="w-[100vw] h-fit mt-[1rem] mb-[6vh] flex justify-center">
      <div className="lg:w-[70%] md:w-[90%] w-[95%] lg:h-[50vh] md:h-[40vh] h-[30vh] bg-gray-100 rounded-lg overflow-hidden flex flex-row gap-[0.5vw]  justify-center px-[6rem] md">
        <div className="w-fit h-full flex flex-col justify-center py-[5rem] ">
          <p className="custom-font lg:text-[1.2rem] md:text-[0.9rem] text-[0.75rem]">
            Starting At Only RM0.99
          </p>
          <div>
            <p className="uppercase font-bold md:text-[3vw] text-[1.5rem] tracking-[0.05rem] inline">
              black{" "}
            </p>
            <p className="uppercase text-[#4D869C] font-bold lg:text-[3vw] text-[1.5rem] md:text-[2rem] tracking-[0.05rem] leading-[2rem] inline">
              friday <br /> sale
            </p>
          </div>
          <p className="mt-[1rem] lg:text-[1.5vh] md:text-[0.9rem] text-[0.65rem]">
            Free shipping for purchases over RM20
          </p>
          <div className="flex flex-row gap-[1rem] mt-[1rem]">
            <button className="bg-[#4D869C] lg:w-[8vw] md:w-[7rem] w-fit lg:h-[2.5rem] md:h-[2.0rem] h-fit px-[1rem] py-[0.5rem] rounded-md uppercase text-white lg:font-semibold text-[0.5rem]">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-[40%] relative flex flex-row justify-center lg:min-w-[350px]">
          <img
            src="man.png"
            alt="image"
            className="lg:w-[70%] md:w-[100%] absolute bottom-0 "
          />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
