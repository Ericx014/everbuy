import Navbar from "../Navbar";
import Promotion from "../Promotion";
import Categories from "../Categories";

const Home = () => {
	return (
		<section className="overflow-hidden">
			<Navbar />
			<Promotion />
			<Categories />
		</section>
	)
}
 
export default Home;