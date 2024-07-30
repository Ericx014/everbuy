import { useContext } from "react";
import { ProdContext } from "../App";
import ProductsList from "./ProductsList";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Results = () => {
	const {searchedProds, searchInput} = useContext(ProdContext);

	return (
    <>
      <Navbar />
			<Filter />
      {searchedProds.length > 0 ? (
				<section>
					<h1 className="font-semibold text-2xl items-center flex flex-row justify-center mt-12">Search results for "{searchInput}"</h1>
					<ProductsList productInfo={searchedProds} />
				</section>
			) : (
				<section className="h-svh flex flex-row justify-center mt-12 font-semibold text-2xl capitalize">No products found</section>
			) 
			}
      <Footer />
    </>
  );
}
export default Results;