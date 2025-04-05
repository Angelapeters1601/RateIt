import ProductCategoryPage from "../categories/ProductCategoryPage";

function Haircare() {
  return (
    <ProductCategoryPage
      categoryKey="haircare"
      title="Luxury Haircare"
      subtitle="Professional products for strong and healthy hair."
      paragraph={`The Architecture of Luminance
From root to ritual, we engineer hair's most magnificent expressions. These are not mere products—they're the invisible couture of your crown. For hair that moves like poetry and shines with intention`}
    />
  );
}

export default Haircare;

