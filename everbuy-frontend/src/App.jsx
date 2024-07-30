import {useEffect, createContext, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Liked from "./components/Liked";
import Cart from "./components/Cart";
import Results from "./components/Results";

export const ProdContext = createContext();

const menProductInfo = [
  {
    id: 1101,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
    category: "tops",
  },
  {
    id: 1102,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
    category: "tops",
  },
  {
    id: 1103,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
    category: "tops",
  },
  {
    id: 1104,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
    category: "tops",
  },
  {
    id: 1105,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
    category: "tops",
  },
  {
    id: 1106,
    image: "product-images/menshoes1.png",
    name: "Naike Air Max 1 Essential",
    price: "299.90",
    liked: false,
    group: "men",
    category: "shoes",
  },
  {
    id: 1107,
    image: "product-images/menshoes1.png",
    name: "Naike Air Max 1 Essential",
    price: "299.90",
    liked: false,
    group: "men",
    category: "shoes",
  },
  {
    id: 1108,
    image: "product-images/menshoes1.png",
    name: "Naike Air Max 1 Essential",
    price: "299.90",
    liked: false,
    group: "men",
    category: "shoes",
  },
  {
    id: 1109,
    image: "product-images/menshoes1.png",
    name: "Naike Air Max 1 Essential",
    price: "299.90",
    liked: false,
    group: "men",
    category: "shoes",
  },
  {
    id: 1110,
    image: "product-images/menshoes1.png",
    name: "Naike Air Max 1 Essential",
    price: "299.90",
    liked: false,
    group: "men",
    category: "shoes",
  },
];
const womenProductInfo = [
  {
    id: 2101,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2102,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2103,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2104,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2105,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2106,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2107,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
  {
    id: 2108,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
    category: "tops",
  },
];
const kidsProductsInfo = [
  {
    id: 3101,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3102,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3103,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3104,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3105,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3106,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3107,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
  {
    id: 3108,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
    category: "tops",
  },
];

const App = () => {
  const initialActiveProd =
    JSON.parse(localStorage.getItem("activeProd")) || null;
  const [activeProd, setActiveProd] = useState(initialActiveProd);

  const initialLikedProd =
    JSON.parse(localStorage.getItem("likedProducts")) || [];
  const [likedProd, setLikedProd] = useState(initialLikedProd);

  const intialCartProd = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const [cartProd, setCartProd] = useState(intialCartProd);

  const [allProd, setAllProd] = useState([
    ...menProductInfo,
    ...womenProductInfo,
    ...kidsProductsInfo,
  ]);

  const groups = ["men", "women", "kids"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);

  const storedSearchedProds =
    JSON.parse(localStorage.getItem("searchProducts")) || [];
  const [searchedProds, setSearchedProds] = useState(storedSearchedProds);

	const storedSearchInput =
    JSON.parse(localStorage.getItem("searchInput")) || "";
	const [searchInput, setSearchInput] = useState(storedSearchInput);

  useEffect(() => {
    const updatedAllProd = allProd.map((prod) => {
      for (let i = 0; i < likedProd.length; i++) {
        if (likedProd[i].id === prod.id) {
          return likedProd[i];
        }
      }
      return prod;
    });
    setAllProd(updatedAllProd);
  }, []);

  useEffect(() => {
    localStorage.setItem("activeProd", JSON.stringify(activeProd));
  }, [activeProd]);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProd));
  }, [likedProd]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProd));
  }, [cartProd]);

  useEffect(() => {
    localStorage.setItem("searchProducts", JSON.stringify(searchedProds));
  }, [searchedProds]);

  return (
    <>
      <ProdContext.Provider
        value={{
          activeProd,
          setActiveProd,
          likedProd,
          setLikedProd,
          menProductInfo,
          womenProductInfo,
          kidsProductsInfo,
          cartProd,
          setCartProd,
          allProd,
          setAllProd,
          groups,
          activeGrp,
          setActiveGrp,
          searchedProds,
          setSearchedProds,
					searchInput,
					setSearchInput
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </ProdContext.Provider>
    </>
  );
};
export default App;
