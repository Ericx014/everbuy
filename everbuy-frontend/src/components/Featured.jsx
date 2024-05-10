const Featured = () => {
  return (
    <section className="w-[70vw] h-[40vh] mx-auto my-0 flex justify-between">
      <div className="w-[40%] flex flex-col items-center justify-center rounded-lg gap-2">
        <div className="bg-gray-100 w-[80%] h-[90%] mt-3 rounded-md flex justify-center">
          <img
            src="handbag.png"
            alt="handbag"
            className="w-[80%] object-contain px-2 py-3"
          />
        </div>
        <div className="w-[80%] text-[12px] flex justify-between">
          <p>Rating</p>
          <p>Handbag</p>
        </div>
      </div>
      <div className="w-[40%] flex flex-col items-center justify-center rounded-lg gap-2">
        <div className="bg-gray-100 w-[80%] h-[90%] mt-3 rounded-md flex justify-center">
          <img
            src="handbag.png"
            alt="handbag"
            className="w-[80%] object-contain px-2 py-3"
          />
        </div>
        <div className="w-[80%] text-[12px] flex justify-between">
          <p>Rating</p>
          <p>Handbag</p>
        </div>
      </div>
      <div className="w-[40%] flex flex-col items-center justify-center rounded-lg gap-2">
        <div className="bg-gray-100 w-[80%] h-[90%] mt-3 rounded-md flex justify-center">
          <img
            src="handbag.png"
            alt="handbag"
            className="w-[80%] object-contain px-2 py-3"
          />
        </div>
        <div className="w-[80%] text-[12px] flex justify-between">
          <p>Rating</p>
          <p>Handbag</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
