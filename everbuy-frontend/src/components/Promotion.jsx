import {BiSolidPhoneCall} from "react-icons/bi";

const Promotion = () => {
  return (
    <section className="w-[100vw] h-fit mt-[1rem] mb-[6vh] flex justify-center">
      <div className="w-[70%] h-[50vh] bg-gray-100 rounded-lg overflow-hidden flex flex-row gap-[3rem] justify-center px-[6rem]">
        <div className="w-fit h-full flex flex-col justify-center py-[5rem] ">
          <p className="custom-font text-[1.2rem]">Starting At Only RM0.99</p>
          <div>
            <p className="uppercase font-bold text-[3rem] tracking-[0.05rem] leading-[3.5rem] inline">
              black{" "}
            </p>
            <p className="uppercase text-[#4D869C] font-bold text-[3rem] tracking-[0.05rem] leading-[3.5rem] inline">
              friday <br /> sale
            </p>
          </div>
          <p className="mt-[1rem]">Free shipping for purchases over RM20</p>
          <div className="flex flex-row gap-[1rem] mt-[1rem]">
            <button className="bg-[#4D869C] w-[8rem] h-[2.5rem] rounded-md uppercase text-white font-semibold">
              Shop Now
            </button>
            <div className="flex flex-row gap-[0.5rem] items-center text-[#4D869C]">
              <BiSolidPhoneCall size={30} />
              <p className="text-[20px]">+6 012 12345678</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] relative flex flex-row justify-center">
          <img src="man.png" alt="image" className="w-[70%] absolute bottom-0 " />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
