import ProductCategoryPage from "../categories/ProductCategoryPage";

function Makeup() {
  return (
    <ProductCategoryPage
      categoryKey="makeup"
      title="Makeup Collection"
      subtitle="Explore our premium range of makeup products"
      paragraph={`Wearable Artistry
Pigments that rival nature's palette, textures that defy expectation. Our makeup collection is crafted for those who view their face as a canvas and application as a ceremony. Where every stroke celebrates the art of becoming.`}
    />
  );
}

export default Makeup;