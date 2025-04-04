import fetchProducts from '../hooks/useFetchProducts'; 
import { allProducts } from '../mockApi/allProductsData';

const searchProducts = async (query) => {
  try {
    const { data: apiProducts } = await fetchProducts();
    
    const searchInProducts = (products) => 
      products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product?.description?.toLowerCase().includes(query.toLowerCase()) ||
        product?.category?.toLowerCase().includes(query.toLowerCase())
      );

    const apiResults = apiProducts ? searchInProducts(apiProducts) : [];
    const mockResults = searchInProducts(allProducts);
  
    // Combine and deduplicate results
    const combined = [...apiResults, ...mockResults];
    return combined.filter(
      (product, index, self) => index === self.findIndex(p => p.id === product.id)
    );
  } catch (error) {
    console.error("Search failed:", error);
    // Fallback to mock data if API fails
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product?.description?.toLowerCase().includes(query.toLowerCase()) ||
      product?.category?.toLowerCase().includes(query.toLowerCase())
    );
  }
};

export default searchProducts;


