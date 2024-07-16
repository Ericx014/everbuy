import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Hoodie from "./components/pages/Hoodie";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="hoodie" element={<Hoodie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
