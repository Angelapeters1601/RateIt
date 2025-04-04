import fetchProducts  from '../hooks/useFetchProducts'; 
import { allProducts } from '../mockApi/allProductsData'; 

const searchProducts = async (query) => {
    // 1. Fetch API products correctly
    const apiProducts = await fetchProducts(); 
    if (!apiProducts) return [];

    console.log("API Products:", apiProducts);

    const apiResults = apiProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product?.description.toLowerCase().includes(query.toLowerCase())
    );
    console.log("All products data:", allProducts);

  
    // 2. Search in mock products
    const mockResults = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product?.description?.toLowerCase().includes(query.toLowerCase())
    );
  
    // Combine and deduplicate results
    const combined = [...apiResults, ...mockResults];
    const uniqueResults = combined.filter(
      (product, index, self) => index === self.findIndex(p => p.id === product.id)
    );

    console.log("All products data:", allProducts);

  
    return uniqueResults;
  };
  export default searchProducts;
  