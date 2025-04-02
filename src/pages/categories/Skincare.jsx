import useFetchProducts from "../../hooks/useFetchProducts";

function Skincare () {
  const { products, loading } = useFetchProducts("skincare");

  return (
    <div>
      <h1>Skincare Products</h1>
      <hr />
      {loading ? <p>Loading...</p> : products.map((item) => 
      <p key={item.id}>{item.name}</p>)}
    </div>
  );
};

export default Skincare;
