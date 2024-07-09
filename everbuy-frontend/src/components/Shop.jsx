import {useState} from "react";
import ShopNav from "./ShopNav";

const Shop = () => {
  const groups = ["men", "women", "kids"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);

  const handleClick = (index) => setActiveGrp(groups[index]);

  const productInfo = [
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
    {
      image: "product-images/loosefitprinted1.png",
      name: "Loose Fit Printed T-Shirt",
      price: "59.90",
    },
  ];

  const products = (
    <section className="flex flex-wrap justify-center gap-5 px-[10rem]">
      {productInfo.map((product) => (
        <div className="text-center lg:w-[265px] lg:h-[400px] mb-10">
          <div className="bg-[#F4F4F4] lg:mb-4">
            <img
              className="lg:w-[265px] lg:h-[360]"
              src={product.image}
              alt={product.name}
            />
          </div>
          <p>{product.name}</p>
          <p>RM{product.price}</p>
        </div>
      ))}
    </section>
  );

  return (
    <section>
      <ShopNav
        groups={groups}
        activeGrp={activeGrp}
        handleClick={handleClick}
      />
      {products}
    </section>
  );
};

export default Shop;
