import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/Shop";
import Giftcards from "./components/Giftcards";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/giftcards" element={<Giftcards />} />
        </Routes>
				<Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
