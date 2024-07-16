import Promotion from "../Promotion";
import Popular from "../Popular";
import Categories from "../Categories";

const Home = () => {
  return (
    <section className="overflow-hidden">
      <Promotion />
			{/* <Popular /> */}
      <Categories />
    </section>
  );
};

export default Home;
