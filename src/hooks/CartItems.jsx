








import { useEffect, useState} from "react"




  




export function useGetCart() {
  const [cart, setCart] = useState(() => {
  try {
    const stored = JSON.parse(localStorage.getItem("Cart"));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
});

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {

    
    setCart((prev) => {
      const existing = prev.find((c) => c.productId === item.productId && c.size === item.size );
      const updated = existing
        ? prev.map((c) =>  (c.productId === item.productId && c.size === item.size  ?  {...c, qty: c.qty + item.qty, qtyPrice: c.price * (c.qty + item.qty)} : c))
        : [...prev, item];
      return updated;
    });
  }

  return { cart, setCart, addToCart };
}


