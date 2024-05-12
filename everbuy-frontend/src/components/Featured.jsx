import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const featuredProducts = [
    {
      name: "Handbag",
      image: "handbag.png",
      rating: 5,
      price: 39.99,
      numOfRating: 45,
    },
    {
      name: "Shoes",
      image: "blackshoes.png",
      rating: 5,
      price: 99.0,
      numOfRating: 98,
    },
    {
      name: "Shirt",
      image: "polotee.png",
      rating: 5,
      price: 19.99,
      numOfRating: 77,
    },
    {
      name: "Earbuds",
      image: "earbuds.png",
      rating: 5,
      price: 78.99,
      numOfRating: 33,
    }
  ];

  return (
    <section className="w-[70vw] h-[40vh] mx-auto my-0 flex justify-between">
      {featuredProducts.map((product, index) => (
        <FeaturedCard
          key={index}
          imgsrc={product.image}
          alt={product.name}
          rating={product.rating}
          label={product.name}
          price={product.price}
          numOfRating={product.numOfRating}
        />
      ))}
    </section>
  );
};

export default Featured;
