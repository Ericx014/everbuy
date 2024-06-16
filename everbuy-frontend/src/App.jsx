import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
