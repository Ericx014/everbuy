const Catalogue = ({menProds, womenProds, kidsProds, activeGrp}) => {
  return (
    <>
      {activeGrp == "men" && menProds}
      {activeGrp == "women" && womenProds}
      {activeGrp == "kids" && kidsProds}
    </>
  );
};
export default Catalogue;
