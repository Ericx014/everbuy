const SliderNav = ({bgimg, setBgimg}) => {
  return (
    <div className="flex gap-3 absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <button
        className={`w-2 h-2 bg-slate-300 rounded-full ${bgimg == "black" && "bg-slate-600"}`}
        onClick={() => setBgimg("black")}
      ></button>
      <button
        className={`w-2 h-2 bg-slate-300 rounded-full ${bgimg == "red" && "bg-slate-600"}`}
        onClick={() => setBgimg("red")}
      ></button>
      <button
        className={`w-2 h-2 bg-slate-300 rounded-full ${bgimg == "blue" && "bg-slate-600"}`}
        onClick={() => setBgimg("blue")}
      ></button>
    </div>
  );
};

export default SliderNav;