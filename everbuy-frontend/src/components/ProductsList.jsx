import {Link} from "react-router-dom";

const ProductsList = ({productInfo, handleSelect}) => {
  return (
    <section className="flex flex-wrap justify-center gap-5 md:px-[3rem] lg:px-[5rem] pb-6">
      {productInfo.map((product, index) => (
        <Link to="/product" key={index} onClick={() => handleSelect(product)}>
          <div className="text-center lg:w-[265px] lg:h-[400px] mb-10">
            <div className="bg-[#F4F4F4] lg:mb-4 transition-all hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.15)]">
              <img
                className="lg:w-[265px] lg:h-[360px]"
                src={product.image}
                alt={product.name}
              />
            </div>
            <p>{product.name}</p>
            <p>RM{product.price}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductsList;
