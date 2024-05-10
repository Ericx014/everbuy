import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import {useState, useEffect, useRef} from "react";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideImages, setSlideImages] = useState([]);
	const nextSlideRef = useRef(null);

  useEffect(() => {
    const imgSrc = [
      "istockphoto-1317323736-612x612.jpg",
      "istockphoto-1337232523-612x612.jpg",
      "istockphoto-1458782106-612x612.jpg",
    ];
    setSlideImages(imgSrc);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slideImages.length - 1 : current - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slideImages.length - 1 ? 0 : current + 1
    );
  };
	
	nextSlideRef.current = nextSlide;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlideRef.current();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="h-96 w-7/12 flex overflow-hidden relative transition-transform ease-out duration-500">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{transform: `translateX(-${currentSlide * 100}%)`}}
      >
        {slideImages.map((imgsrc) => (
          <img
            src={imgsrc}
            alt="slide image"
            className="w-screen h-screen object-cover"
          />
        ))}
      </div>
      <button
        className="bg-white absolute top-1/2 left-4 rounded-full p-[4px] text-sm transition-all ease-in-out duration-200 hover:bg-gray-300"
        onClick={prevSlide}
      >
        <GoChevronLeft />
      </button>
      <button
        className="bg-white absolute top-1/2 right-4 rounded-full p-[4px] text-sm transition-all ease-in-out duration-200 hover:bg-gray-300"
        onClick={nextSlide}
      >
        <GoChevronRight />
      </button>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slideImages.map((img, i) => (
            <button
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currentSlide === i ? "" : "bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slides;
