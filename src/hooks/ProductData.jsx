import { useState, useEffect } from "react";









const useProductDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const controller = new AbortController();
    

    const fetchProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const responses = await Promise.all([
         fetch('https://dummyjson.com/products/category/mens-shirts', { signal: controller.signal }),
         fetch('https://dummyjson.com/products/category/mens-shoes', { signal: controller.signal }),
        ])

         responses.forEach((res) => {
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
    });

        const [shirts, shoes] = await Promise.all(responses.map(r => r.json()));

        const array = [...shirts.products, ...shoes.products]

        const getObj = array.map((arr) => {
         return {
            id: arr.id,
            title: arr.title,
            images: [...arr.images],
            price: Math.floor(arr.price),
            discount: arr.discountPercentage,
            details: arr.description,
            rating: arr.rating,
            sizes: [`S`, `M`, `L`, `XL`],
            category:arr.category,
            shippingInformation: arr.shippingInformation,
            warrantyInformation: arr.warrantyInformation,
         }

        })

        setData(getObj);
      } catch (error) {
        // Don't treat an intentional abort as an error
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return { data, error, loading, };
};

export default useProductDetails;
