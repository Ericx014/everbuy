import React, {useContext} from "react";
import {ProdContext} from "../App";
import ProductsList from "./ProductsList";
import Heading from "./Heading";

const Liked = () => {
  const {likedProd} = useContext(ProdContext);

  return (
    <section className="">
			<Heading text="My likes" />
      {likedProd.length > 0 ? (
        <ProductsList productInfo={likedProd} />
      ) : (
        <section className="h-svh">
          <p className="w-full text-center">No liked products yet!</p>
        </section>
      )}
    </section>
  );
};

export default Liked;
