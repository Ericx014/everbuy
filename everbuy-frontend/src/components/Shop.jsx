import { useState } from "react";
import ShopNav from "./ShopNav";

const Shop = () => {
  const groups = ["men", "women", "kids"];
  const [activeGrp, setActiveGrp] = useState(groups[0]);

  const handleClick = (index) => setActiveGrp(groups[index]);

	return (
		<section>
			<ShopNav groups={groups} activeGrp={activeGrp} handleClick={handleClick}/>
		</section>
	)
}

export default Shop;