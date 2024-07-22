import {Link} from "react-router-dom";

const MainAd = () => {
  return (
    <section className="snap-start snap-mandatory snap-y">
      <div className="relative">
        <img
          src="home-img/model.png"
          alt="image"
          className="h-[92vh] w-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-15 h-full w-full flex flex-col justify-center px-[1.5rem] sm:px-[3rem] lg:px-[5rem]">
          <h1 className="text-white text-3xl font-bold tracking-[-0.02rem] mb-2 drop-shadow-lg">
            Latest Collection
          </h1>
          <p className="text-white text-lg leading-5 mb-8 sm:w-[60%] md:w-[55%] lg:w-[30%] drop-shadow-lg">
            Enjoy 15% off sitewide with min. spend of RM179. From t-shirt,
            jeans, shorts, watches, bags
          </p>
          <div>
            <Link to="/shop">
              <button className="bg-white text-black uppercase py-3 px-5 rounded-[0.3rem] font-bold hover:scale-110 transition-all">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAd;
