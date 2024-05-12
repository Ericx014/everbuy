import ExclusiveNavbar from "./ExclusiveNavbar";
import ExclusiveCards from "./ExclusiveCard";

const Exclusive = () => {
	const categories = [
		"clothings",
		"pants",
		"shoes",
		"watches",
		"glasses"
	]

	return (
    <section className="bg-gray-100 mt-10 flex flex-col">
      <div className="flex flex-row justify-center">
        <h1 className="w-fit text-[1.5rem] py-[0.75rem] tracking-wider">
          Just For You
        </h1>
      </div>
      <ExclusiveNavbar categories={categories} />
			<div className="flex flex-row justify-center">
				<ExclusiveCards />
			</div>
    </section>
  );
}

export default Exclusive;