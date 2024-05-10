import Navbar from "../Navbar"
// import Slides from "../Slides";
import Promotion from "../Promotion";
import Featured from "../Featured";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Slides />		 */}
			<Promotion />
			<Featured />
    </>
  );
};

export default Home;
