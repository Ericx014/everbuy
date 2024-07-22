const QuantityInput = ({quantity, setQuantity}) => {
  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-row justify-center bg-white w-fit items-center text-center">
      <button
        className="border-[#e3e3e3] border w-8 h-8 flex items-center justify-center rounded-l-md"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="border-[#e3e3e3] border w-12 h-8 flex items-center justify-center">
        {quantity}
      </span>
      <button
        className="border-[#e3e3e3] border w-8 h-8 flex items-center justify-center rounded-r-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};
export default QuantityInput;