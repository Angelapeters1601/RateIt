// // let cachedProducts = null;
// // let lastFetchTime = 0;
// // const CACHE_DURATION = 5 * 60 * 1000;
// // const apiKey = import.meta.env.VITE_API_KEY;


// // export const fetchAllBeautyProducts = async () => {
// //   if (cachedProducts && Date.now() - lastFetchTime < CACHE_DURATION) {
// //     return cachedProducts;
// //   }

// //   try {
// //     const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?apiKey=${apiKey}`);
// //     cachedProducts = await response.json();
// //     lastFetchTime = Date.now();
// //     return cachedProducts;
// //   } catch (error) {
// //     console.error("API failed, using fallback data");
// //     return mockProducts; 
// //   }
// // };

// // export const getProductsByCategory = async (category) => {
// //   const allProducts = await fetchAllBeautyProducts();
// //   return allProducts.filter(product => 
// //     product.product_type.toLowerCase() === category.toLowerCase()
// //   );
// // };

// import { useEffect, useState } from "react";

// const useFetchProducts = (category) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const apiKey = import.meta.env.VITE_API_KEY;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           `https://makeup-api.herokuapp.com/api/v1/products.json?apiKey=${apiKey}&product_type=${category}`
//         );
//         const data = await response.json();
//         setProducts(data.slice(0, 5)); // Get only 5 items
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

// export default useFetchProducts;
