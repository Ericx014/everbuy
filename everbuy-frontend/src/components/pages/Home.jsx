import MainAd from "../MainAd";
import Benefits from "../Benefits";
import ShopNow from "../ShopNow";
import Promotion from "../Promotion";
import GiftCardPromo from "../GiftCardPromo";
import ViewMore from "../ViewMore";

const Home = () => {
  return (
    <section className="h-screen snap-y snap-proximity overflow-y-scroll">
      <MainAd />
      <Benefits />
      <ShopNow />
      <Promotion />
			<GiftCardPromo />
			<ViewMore />
    </section>
  );
};

export default Home;
