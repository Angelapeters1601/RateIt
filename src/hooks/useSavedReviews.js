import { useEffect, useState } from "react";

export function useSavedReviews() {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedReviews')) || [];
    setSavedItems(items);
  }, []);

  const toggleSave = (product) => {
    let newItems;
    if (savedItems.some(item => item.id === product.id)) {
      newItems = savedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...savedItems, product];
    }
    
    localStorage.setItem('savedReviews', JSON.stringify(newItems));
    setSavedItems(newItems);
  };

  return { savedItems, toggleSave };
}