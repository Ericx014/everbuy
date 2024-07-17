import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/Shop";
import Giftcards from "./components/Giftcards";
import Product from "./components/Product";
import Liked from "./components/Liked";
import {useEffect, createContext, useState} from "react";

export const ProdContext = createContext();

const menProductInfo = [
  {
    id: 1101,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1102,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1103,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1104,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1105,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1106,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1107,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1108,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1109,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1110,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1111,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
  },
  {
    id: 1112,
    image: "product-images/loosefitprinted1.png",
    name: "Loose Fit Printed T-Shirt",
    price: "59.90",
    liked: false,
    group: "men",
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
  },
  {
    id: 2102,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2103,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2104,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2105,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2106,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2107,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2108,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2109,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2110,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2111,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
  },
  {
    id: 2112,
    image: "product-images/buttonfrontdress.png",
    name: "Button-Front Dress",
    price: "99.95",
    liked: false,
    group: "women",
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
  },
  {
    id: 3102,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3103,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3104,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3105,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3106,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3107,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3108,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3109,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3110,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3111,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
  {
    id: 3112,
    image: "product-images/kidslongsleeve.png",
    name: "Ribbon Cotton Jersey Cropped Top",
    price: "39.95",
    liked: false,
    group: "kids",
  },
];

const App = () => {
  const initialActiveProd =
    JSON.parse(localStorage.getItem("activeProd")) || null;
  const [activeProd, setActiveProd] = useState(initialActiveProd);

  const initialLikedProd =
    JSON.parse(localStorage.getItem("likedProducts")) || [];
  const [likedProd, setLikedProd] = useState(initialLikedProd);

  const [allProd, setAllProd] = useState([
    ...menProductInfo,
    ...womenProductInfo,
    ...kidsProductsInfo,
  ]);

  useEffect(() => {
    localStorage.setItem("activeProd", JSON.stringify(activeProd));
  }, [activeProd]);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProd));
  }, [likedProd]);

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
          allProd,
          setAllProd,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/giftcards" element={<Giftcards />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProdContext.Provider>
    </>
  );
};
export default App;
