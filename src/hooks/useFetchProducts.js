// import React, { useState, useEffect } from 'react';
// const validCategories = ['skincare', 'makeup', 'fragrances', 'hair_care']; 

// const useFetchProducts = (category) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const apiKey = import.meta.env.VITE_API_KEY;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!validCategories.includes(category)) {
//         console.error("Invalid category:", category);
//         return ; 
//       }

//       try {
//         const response = await fetch(
//             `https://makeup-api.herokuapp.com/api/v1/products.json?apiKey=${apiKey}&product_type=${category}`
//         );
//         const data = await response.json();

//         setProducts(data.slice(0, 5)); 
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   return { products, loading };
// };
// export default useFetchProducts

import { useState, useEffect } from 'react';

// List of valid categories that match the API's expected values
const validCategories = ['blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 
                        'foundation', 'lip_liner', 'lipstick', 'mascara', 'nail_polish'];

const useFetchProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when category changes
    setLoading(true);
    setError(null);
    setProducts([]);

    const fetchProducts = async () => {
      // Validate the category parameter
      if (!validCategories.includes(category)) {
        setError(`Invalid category: "${category}". Valid categories are: ${validCategories.join(', ')}`);
        setLoading(false);
        return;
      }

      try {
        // Makeup API doesn't require an API key
        const response = await fetch(
          `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
        );

        // Check for HTTP errors
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Filter for products that actually have images
        const validProducts = data.filter(product => product.image_link).slice(0, 5);
        
        if (validProducts.length === 0) {
          throw new Error('No products found with images');
        }

        setProducts(validProducts);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};

export default useFetchProducts;