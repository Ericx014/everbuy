import React, {useContext} from "react";
import {ProdContext} from "../App";

const Liked = () => {
  const {likedProd} = useContext(ProdContext);

  return (
    <section className="h-svh">
      {likedProd.length > 0 ? (
        likedProd.map((prod, index) => (
          <div key={index}>
            <p>{prod.name}</p>
          </div>
        ))
      ) : (
        <p>No liked products yet!</p>
      )}
    </section>
  );
};

export default Liked;
