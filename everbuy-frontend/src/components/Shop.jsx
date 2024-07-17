import {useContext, useState} from "react";
import ShopNav from "./ShopNav";
import Catalogue from "./Catalogue";
import ProductsList from "./ProductsList";
import {ProdContext} from "../App";

const Shop = () => {
  const groups = ["men", "women", "kids"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);
  const {setActiveProd, allProd} = useContext(ProdContext);
  const handleClick = (index) => setActiveGrp(groups[index]);

  const handleSelect = (product) => {
    setActiveProd(product);
    localStorage.setItem("activeProd", JSON.stringify(product));
    console.log(product);
  };

	const menProds = allProd.filter((product) => product.group === "men");
	const womenProds = allProd.filter((product) => product.group === "women");
	const kidsProds = allProd.filter((product) => product.group === "kids");

  const menProducts = (
    <ProductsList productInfo={menProds} handleSelect={handleSelect} />
  );
  const womenProducts = (
    <ProductsList productInfo={womenProds} handleSelect={handleSelect} />
  );
  const kidsProducts = (
    <ProductsList productInfo={kidsProds} handleSelect={handleSelect} />
  );

  return (
    <section>
      <ShopNav
        groups={groups}
        activeGrp={activeGrp}
        handleClick={handleClick}
      />
      <Catalogue
        menProds={menProducts}
        womenProds={womenProducts}
        kidsProds={kidsProducts}
        activeGrp={activeGrp}
      />
    </section>
  );
};

export default Shop;
