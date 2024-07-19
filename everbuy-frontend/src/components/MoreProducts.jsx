import {useContext} from "react";
import {Link} from "react-router-dom";
import {ProdContext} from "../App";

const SimilarProducts = ({group, category}) => {
  const {allProd, setActiveProd} = useContext(ProdContext);

  const similarProd = allProd.filter(
    (prod) => group === prod.group && category === prod.category
  );

  const handleSelect = (product) => {
    setActiveProd(product);
    localStorage.setItem("activeProd", JSON.stringify(product));
    console.log(product);
  };

  const prodToDisplay = (
    <div className="w-fit flex flex-row flex-wrap gap-7 justify-center">
      {similarProd.map((product, index) => (
        <Link to="/product" key={index} onClick={() => handleSelect(product)}>
          <div className="text-center lg:w-[265px] lg:h-[400px] mb-10">
            <div className="bg-[#F4F4F4] lg:mb-4 transition-all hover:shadow-[0_0px_40px_2px_rgba(0,0,0,0.2)]">
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
    </div>
  );

  return (
    <section className="flex justify-center items-center flex-col py-10">
      <h1 className="font-semibold text-[1.2rem] text-center pb-4">Products you might be interested in</h1>
      {prodToDisplay}
    </section>
  );
};

export default SimilarProducts;
