








import { useState, useEffect, useMemo } from "react";
import useProductDetails from "../hooks/ProductData";
import { useParams, Link} from "react-router";
import ProductCardSkeleton from "../components/common/loading";
import {useCart} from "../context/CartContext";






export default function ProductDetails() {
 const { id } = useParams();
  const { data, error, loading } = useProductDetails();
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState("");
  const [isActive, setIsActive] = useState(0);
 
  const {addToCart} = useCart();

  const product = data.find((p) => p.id === Number(id)); // safe: data defaults to [], .find() on [] just returns undefined

  useEffect(() => {
    window.scrollTo(0,0) 
  }, [id])

  const related = useMemo(
    () => (product ? getRandomRelated(data, product, 3) : []),
    [data, product]
  );

  // NOW it's safe to branch — every hook above has already run, unconditionally, every render

  
  if (error) return <p>Something went wrong.</p>;
  if (loading) return <ProductCardSkeleton/>
  if (!product) return null;

  const handleItems = () => {
    const setItems = {
      uniqueId: crypto.randomUUID(),
      productId: product.id,
      price: product.price,
      img: product.images[selectedImage],
      size: product.sizes[size] || "S",
      ProductName: product.title,
      qty: 1,
      qtyPrice: product.price
    };

    addToCart(setItems)
  };


  


  
  function getRandomRelated(data, product, count = 3) {
    const others = data.filter((item) => item.id !== product.id);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);

  }

   

 

  
  

 








  return (
   
    <main className="wrap section">
  
           <p className="breadcrumb small"><Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.title}</p>

      <div className="pdp">
    <div className="pdp__gallery">

      <div className="ph ph--4-5 ph--tall"> 
        {
          selectedImage ? (<img src={product.images[selectedImage]} 
        alt={product.title} className="product-card__photo" 
        />): (
          <img src={product.images[0]} 
        alt={product.title} className="product-card__photo" 
        />
        )
        }
        
    <span>{product.title}</span></div>


        <div className="pdp__thumbs">
        {product.images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`ph ph--1-1 thumb-btn ${i === selectedImage ? "is-selected" : ""}`}
            onClick={() => setSelectedImage(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={img} alt="" className="product-card__photo" />
          </button>
        ))}
      </div>
       
    </div>

    <div className="pdp__info">
      <h1 className="h1">{product.title}</h1>
      <p className="pdp__price">{`$${product.price}`}</p>
      <p className="pdp__desc flex gap-1">{`Rating: ${product.rating}`}<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg></p>
      <p className="pdp__desc">{product.details}</p>

      

      <div className="pdp__field">
        <div  style={{display:"flex", justifyContent:"space-between"}}>
          <p className="label">Size</p>
          <a href="#" className="text-link">Size Guide</a>
        </div>
        <div className="size-row">
          {
            product.sizes.map((item, i) => (
              <button 
              className= {` size-btn ${i === size ? "is-selected" : ""} `}
              key={i}
              onClick={() => setSize(i)}
              >{item}
              </button>
            ))
          }
          
        </div>
      </div>

      <div className="pdp__actions">
        <button onClick={handleItems} className="btn btn--primary btn--full">Add to Bag</button>
      </div>

     

      <div className="accordion">
        <div className={`accordion__item  ${isActive === 0 ? "is-open": ""}`}>
          <button className="accordion__trigger" onClick={() => setIsActive(0)}>Materials &amp; Care<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
          <div className="accordion__panel"><p>70% wool, 30% recycled polyester. Dry clean only. Store on a padded hanger.</p></div>
        </div>
        <div className={`accordion__item  ${isActive === 1 ? "is-open": ""}`}>
          <button className="accordion__trigger" onClick={() => setIsActive(1)}>Fit<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
          <div className="accordion__panel"><p>True to size, relaxed through the body. Model is 5'10" wearing a size .</p></div>
        </div>
        <div className={`accordion__item  ${isActive === 2 ? "is-open": ""}`}>
          <button className="accordion__trigger" onClick={() => setIsActive(2)}>Shipping &amp; Returns<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
          <div className="accordion__panel"><p>{product.shippingInformation}. Free returns within 30 days of delivery.</p></div>
        </div>
      </div>
    </div>
  </div>

  <section className="mt-6" style={{marginTop:"var(--space-8)"}}>
    <div className="section-head">
      <h2>You May Also Like</h2>
    </div>

    
    <div className="product-grid">

      

{related.map((item) => (
  <Link key={item.id} to={`/product/${item.id}`} className="product-card">
    
    <div className="product-card__img ph ph--3-4">
      <img className="product-card__photo "  src={item.images[0]} alt={item.title}  />
      <span>{item.title}</span></div>
        <div className="product-card__info"><div><h4 className="product-card__name">{item.title}</h4></div><p className="product-card__price">{`$${item.price}`}</p></div>
  </Link>
))}
    </div>

  </section>
  

    </main>
  );
}