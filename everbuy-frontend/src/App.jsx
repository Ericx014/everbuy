import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Shop from "./components/Shop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
					<Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
