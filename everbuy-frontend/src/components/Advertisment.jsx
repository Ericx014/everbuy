import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import {useState, useEffect} from "react";

const Advertisement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    const adImagesSrc = ["shirt.png", "collartee.png"];
    setSlideImages(adImagesSrc);
  }, []);

  return (
    <section>
      <div className="w-full h-fit py-[3rem] bg-[#EEF7FF] flex justify-center items-center">
        <div className="w-fit h-full flex flex-row gap-[7rem]">
          <div className="w-fit h-full bg-[#EEF7FF] flex flex-col justify-center gap-[1.5rem] self-center">
            <h2 className="font-semibold text-[2.0rem] capitalize leading-[2rem] tracking-[0.1rem] calligraphy">
              Best Sellers
            </h2>
            <div className="flex flex-col gap-[0.5rem] tracking-[0.1rem] text-[1.2rem]">
              <div>
                <FaRegArrowAltCircleRight className="inline" /> Free Shipping
              </div>
              <div>
                <FaRegArrowAltCircleRight className="inline" /> 100% Secured
                Transactions
              </div>
              <div>
                <FaRegArrowAltCircleRight className="inline" /> Quality Ensured
              </div>
            </div>
            <div className="w-[80%] flex flex-rows items-center justify-between">
              <button className="w-[8rem] h-[2.5rem] rounded-md bg-[#7AB2B2] text-white text-[1rem] shadow-lg">
                Browse
              </button>
              <div className="flex flex-row gap-[1rem]">
                <button>
                  <IoChevronBackOutline size={"1.5rem"} />
                </button>
                <button>
                  <IoChevronForwardOutline size={"1.5rem"} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[15rem] overflow-hidden self-center">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full h-full"
              style={{transform: `translateX(-${currentSlide * 100}%)`}}
            >
              {slideImages.map((imgsrc, index) => (
                <img
                  key={index}
                  src={imgsrc}
                  alt="slide image"
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
