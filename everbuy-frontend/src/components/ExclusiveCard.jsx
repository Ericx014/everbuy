const ExclusiveCards = () => {
  const cardsCount = 6;

  return (
    <section className="flex flex-row flex-wrap justify-center gap-[20px] w-[70vw] mb-[2rem]">
      {Array.from({length: cardsCount}, (_, i) => (
        <div key={i} className="bg-[#CDE8E5] w-[20rem] h-[12rem]"></div>
      ))}
    </section>
  );
};

export default ExclusiveCards;
