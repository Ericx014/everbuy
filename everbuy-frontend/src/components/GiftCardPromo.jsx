const GiftCardPromo = () => {
	const buttonStyle =
    "rounded-md bg-[#DFCAA0] py-2.5 px-6 lg:text-lg hover:scale-110 hover:bg-[#d9b265] transition-all";

	return (
    <section className="snap-center flex justify-center bg-[#F6F6F6] pb-[3rem]">
      <div className="flex flex-row justify-center lg:gap-[20%] bg-white p-[2.5rem] sm:px-[3rem] md:px-[4rem] lg:px-[6rem] rounded-[1rem] w-[90vw] md:w-[720px] lg:min-w-[920px] lg:w-[81vw] h-[250px] md:h-[280px] lg:h-[320px] shadow-md shadow-gray-300">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl capitalize font-bold mb-1">
            gift card
          </h3>
          <p className="md:text-lg lg:text-xl leading-4 mb-6">
            Sign up now to receive a gift card of your choice.
          </p>
          <div className="text-white capitalize font-semibold flex flex-row gap-5">
            <button className={buttonStyle}>Explore</button>
            <button className={buttonStyle}>Sign up</button>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-[20rem]">
          <img src="giftcard.png" alt="giftcard" className="hidden md:block object-contain" />
        </div>
      </div>
    </section>
  );
}

export default GiftCardPromo;