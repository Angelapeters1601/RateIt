import ProductCategory from "../categories/ProductCategoryPage";

function Skincare() {
  return (
    <ProductCategory
      categoryKey="skincare"
      title="Skincare Essentials"
      subtitle="Dermatologist-approved products for your skincare routine."
      paragraph={`The Alchemy of Radiance.
      Where science meets serenity in sacred self-care rituals. 
      Our skincare is a symphony of clinical precision and botanical intelligence—
      each formulation a love letter to your skin's potential. 
      This is not maintenance; it's transformation bottled.`}
    />
  );
}

export default Skincare;
