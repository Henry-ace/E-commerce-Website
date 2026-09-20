import useProductDetails from "../hooks/ProductData";
import { useState } from "react";
import ProductCardSkeleton from "../components/common/loading";







import {Link} from "react-router";

export default function Shop() {
   const { data, error, loading } = useProductDetails();
  const [sortOption, setSortOption] = useState("newest")
   const [showMore, setShowMore] = useState(false)
    const sortedData = sortProducts(data, sortOption)

    

 
  


   function sortProducts(products, sortOption) {
  const sorted = [...products];

  switch (sortOption) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "newest":
    default:
      return sorted;
  }
}

   function handleShowMore() {
      setShowMore(prev => 
         !prev
      )
   }

   const changeBtn = !showMore ? <p>Show More</p> : <p>Show Less</p>
   

   
  
   
   return(
      <>
                     {error && <p className="text-center mt-6">Something went wrong loading products.</p>}
                     <main className="wrap section">
                        
                        <p className="breadcrumb small">
                           <Link to="/">Home</Link>
                            / Shop All
                        </p>
                        <div className="section-head">
                           <h1 className="h1"> Shop All</h1>
                        </div>
                        <div className="filter-bar">
                           <div className="filter-bar__group">
                              <select className="select-plain" aria-label="Filter by category" onChange={(e) => setSortOption(e.target.value)}>
                                 <option >All Categories</option>
                                    <option value="name-asc" >Mens Shirts</option>
                                    <option value="name-desc">Mens Shoes</option>
                              </select>
                           </div>
                           <select className="select-plain" aria-label="Sort Product"onChange={(e) => setSortOption(e.target.value)} >
                              <option  value="price-asc">Sort: Low to High</option>
                              <option  value="price-desc">Sort: High to Low</option>
                           </select>
                        </div>

                        {loading ? (
                           <div className="product-grid">
    {Array.from({ length: 6 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
                        ) : (
                           <>
                                <div className="product-grid">
                               {sortedData
                               .filter((item, index) => index <= 5)
                               .map((item) => (
               
                                    
                                 <Link className="product-card" to={`/product/${item.id}`} key={item.id}>
  <div className="product-card__img ph ph--3-4">
    <img src={item.images[0]} alt={item.title} className="product-card__photo pb-10" />
    <span>{item.title}</span>
  </div>
  <div className="product-card__info">
    <div>
      <h4 className="product-card__name">{item.title}</h4>
      <p className="small product-card__meta">4 sizes</p>
    </div>
    <p className="product-card__price">${item.price}</p>
  </div>
</Link>
                               ))}
                                 {showMore && sortedData
                              .filter((item, index) => index > 5)
                              .map((item) => (
                                   <Link className="product-card" to={`/product/${item.id}`} key={item.id}>
  <div className="product-card__img ph ph--3-4">
    <img src={item.images[0]} alt={item.title} className="product-card__photo pb-10" />
    <span>{item.title}</span>
  </div>
  <div className="product-card__info">
    <div>
      <h4 className="product-card__name">{item.title}</h4>
      <p className="small product-card__meta">4 sizes</p>
    </div>
    <p className="product-card__price">${item.price}</p>
  </div>
</Link>
                              ))}
                           </div>
                            
                           </>
                        )}
                        <div className="text-center mt-6">
                            <button onClick={handleShowMore} className="btn btn--secondary">{changeBtn}</button>
                           </div>
                       
                     
                         
                        
                     </main>

      </>
   )
}
