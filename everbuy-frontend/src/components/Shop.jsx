import {useContext, useState} from "react";
import {ProdContext} from "../App";
import ShopNav from "./ShopNav";
import Catalogue from "./Catalogue";
import ProductsList from "./ProductsList";

const Shop = () => {
  const groups = ["men", "women", "kids"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);
  const {allProd} = useContext(ProdContext);
  const handleClick = (index) => setActiveGrp(groups[index]);

  const menProds = allProd.filter((product) => product.group === "men");
  const womenProds = allProd.filter((product) => product.group === "women");
  const kidsProds = allProd.filter((product) => product.group === "kids");

  const menProducts = (
    <ProductsList productInfo={menProds} />
  );
  const womenProducts = (
    <ProductsList productInfo={womenProds} />
  );
  const kidsProducts = (
    <ProductsList productInfo={kidsProds} />
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
