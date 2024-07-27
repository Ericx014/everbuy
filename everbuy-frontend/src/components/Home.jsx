import MainAd from "./MainAd"
import Benefits from "./Benefits";
import ShopNow from "./ShopNow";
import Promotion from "./Promotion";
import GiftCardPromo from "./GiftCardPromo";
import ViewMore from "./ViewMore";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Navbar />
      <MainAd />
      <Benefits />
      <ShopNow />
      <Promotion />
      <GiftCardPromo />
      <ViewMore />
      <Footer />
    </section>
  );
};

export default Home;
