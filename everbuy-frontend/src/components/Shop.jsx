import {useContext} from "react";
import {ProdContext} from "../App";
import ShopNav from "./ShopNav";
import Catalogue from "./Catalogue";
import ProductsList from "./ProductsList";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Shop = () => {
  const {allProd, groups, activeGrp, setActiveGrp} = useContext(ProdContext);
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
      <Navbar />
      <ShopNav
        groups={groups}
        activeGrp={activeGrp}
        handleClick={handleClick}
      />
			<Filter />
      <Catalogue
        menProds={menProducts}
        womenProds={womenProducts}
        kidsProds={kidsProducts}
        activeGrp={activeGrp}
      />
      <Footer />
    </section>
  );
};

export default Shop;
