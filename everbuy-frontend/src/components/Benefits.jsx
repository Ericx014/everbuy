const Benefits = () => {
  const benefits = [
    {
      icon: "benefits-icons/free-delivery.png",
      heading: "free shipping",
      description: "Free shipping for all local orders or order above RM200.",
    },
    {
      icon: "benefits-icons/return.png",
      heading: "15 days return",
      description: "All items can be returned for any reason within 15 days.",
    },
    {
      icon: "benefits-icons/secure-payment.png",
      heading: "secured payment",
      description: "Protected transactions and confidentiality for all.",
    },
  ];

  return (
    <section className="snap-center flex overflow-x-auto scroll-children">
      {benefits.map((benefit, index) => {
        return (
          <div
            className="shrink-0 w-[18rem] sm:w-[60vw] md:w-[40%] lg:w-1/3 flex flex-col justify-center items-center border border-gray-300 p-12 md:px-6 lg:px-20"
            key={index}
          >
            <div>
              <img
                src={benefit.icon}
                alt={benefit.heading}
                className="w-[3rem]"
              />
            </div>
            <h3 className="font-semibold uppercase">{benefit.heading}</h3>
            <p className="text-center">{benefit.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Benefits;
