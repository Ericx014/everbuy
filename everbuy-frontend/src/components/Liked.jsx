import React, {useContext} from "react";
import {ProdContext} from "../App";
import ProductsList from "./ProductsList";
import Heading from "./Heading";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Liked = () => {
  const {likedProd} = useContext(ProdContext);

  return (
    <section className="">
      <Navbar />
      <Heading text="My likes" />
      {likedProd.length > 0 ? (
        <ProductsList productInfo={likedProd} />
      ) : (
        <section className="h-svh">
          <p className="w-full text-center">No liked products yet!</p>
        </section>
      )}
      <Footer />
    </section>
  );
};

export default Liked;
