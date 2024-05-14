import Navbar from "../Navbar"
// import Slides from "../Slides";
import Promotion from "../Promotion";
import Featured from "../Featured";
import Exclusive from "../Exclusive";
import Advertisement from "../Advertisment";
import Comments from "../Comments";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Slides />		 */}
      <Promotion />
      <Featured />
      <Advertisement />
      <Comments />
      <Footer />
    </>
  );
};

export default Home;
