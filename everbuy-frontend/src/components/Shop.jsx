import {useState} from "react";
import {Link} from "react-router-dom";
import ShopNav from "./ShopNav";

const Shop = () => {
  const groups = ["men", "women", "kids"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);

  const handleClick = (index) => setActiveGrp(groups[index]);

  const menProductInfo = [
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

  const womenProductInfo = [
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
    {
      image: "product-images/buttonfrontdress.png",
      name: "Button-Front Dress",
      price: "99.95",
    },
  ];

  const kidsProductsInfo = [
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
    {
      image: "product-images/kidslongsleeve.png",
      name: "Ribbon Cotton Jersey Cropped Top",
      price: "39.95",
    },
  ];

  const menProducts = (
    <section className="flex flex-wrap justify-center gap-5 md:px-[7rem] lg:px-[10rem] pb-6">
      {menProductInfo.map((product) => (
        <Link>
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
        </Link>
      ))}
    </section>
  );

  const womenProducts = (
    <section className="flex flex-wrap justify-center gap-5 md:px-[7rem] lg:px-[10rem] pb-6">
      {womenProductInfo.map((product) => (
        <Link>
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
        </Link>
      ))}
    </section>
  );

  const kidsProducts = (
    <section className="flex flex-wrap justify-center gap-5 md:px-[7rem] lg:px-[10rem] pb-6">
      {kidsProductsInfo.map((product) => (
        <Link>
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
        </Link>
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
      {activeGrp == "men" && menProducts}
      {activeGrp == "women" && womenProducts}
      {activeGrp == "kids" && kidsProducts}
    </section>
  );
};

export default Shop;
