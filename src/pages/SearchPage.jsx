










import { useSearch } from "../context/SearchContext";
import useProductDetails from "../hooks/ProductData";
import { Link } from "react-router";
import { useState } from "react";



export default function Search() {

  const {search, setSearch} = useSearch();
  const [sortOption, setSortOption] = useState("");
  const { data, error,} = useProductDetails();
  
  

  if(!data) return null


    const searchResult = data.filter((item) => search ? item.title.toLowerCase().includes(search.toLowerCase().trim()) || item.category.toLowerCase().includes(search.toLowerCase().trim()) : data  )

  
  
  const sortedData = sortProducts(searchResult, sortOption)

    
    function sortProducts(products, sortOption) {
  const sorted = [...products];

  switch (sortOption) {
    case "price-desc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-asc":
      return sorted.sort((a, b) => b.price - a.price);
    case "shirt":
      return sorted.filter((item) => item.category === "mens-shirts");
      case "shoes":
      return sorted.filter((item) => item.category === "mens-shoes");
    case "all":
    default:
      return sorted;
  }
}

if(error) return <p>SOMETHING WENT WRONG</p>

 
   return (
      <>
         <main data-search-page>

        

  {/* ============ SEARCH HERO ============ */}
  <section className="wrap search-hero">
    <div className="wrap search-hero__row">
      <div className="search-hero__title">
        <p className="label">Search</p>
       {search ? <h1 className="h1">Results for <span className="search-hero__query">&ldquo;{search}&rdquo;</span></h1> : ""}
        <p className="body muted mt-2"><span data-search-count>{searchResult.length}</span> results</p>
      </div>

      <form className="search-hero__form" data-search-form role="search">
        <label htmlFor="search-page-input" className="sr-only">Search products</label>
        <input id="search-page-input" type="text" name="q"  onChange={(e) => setSearch(e.target.value )} placeholder="Search" data-search-input autoComplete="off"/>
      </form>
    </div>
  </section>
  {/* ============ /SEARCH HERO ============ */}

  {/* ============ TOOLBAR ============ */}
  <div className="wrap search-toolbar">
    <div className="wrap search-toolbar__filters" data-search-filters role="group" aria-label="Filter by category">
      <button className={`chip ${sortOption === "all" ? "is-active" : ""}`} onClick={() => setSortOption("all" )}>All</button>
      <button className={`chip ${sortOption === "shirt" ? "is-active" : ""}`} onClick={() => setSortOption("shirt")}>shirt</button>
      <button className={`chip ${sortOption === "shoes" ? "is-active" : ""}`} onClick={() => setSortOption("shoes")}>shoes</button>
    </div>

    <label className=" wrap search-toolbar__sort">
      Sort by
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option >Relevance</option>
        <option value="price-desc">Price: Low to High</option>
        <option value="price-asc">Price: High to Low</option>
      </select>
    </label>
  </div>
   {/* ============ /TOOLBAR ============ */}

  {/* ============ RESULTS ============ */}


    

      {/* ============ RESULTS ============ */}
<section className="search-results">

  {sortedData.length !== 0 ? (
    <div className="product-grid" data-search-results-grid>
      {sortedData.map((item) => (
        <Link key={item.id} className="product-card" to={`/product/${item.id}`} >
          <div className="product-card__img ph ph--3-4">
            <img className="product-card__photo pb-10" src={item.images[0]} alt={item.title}  />
            <span>{item.title}</span></div>
          <div className="product-card__info">
            <div>
              <h4 className="product-card__name">{item.title}</h4>
            </div>
            <p className="product-card__price">{`$${item.price}`}</p>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="search-empty" data-search-empty>
      <svg className="search-empty__icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <p className="label mt-4">No results for <span data-search-empty-query>&ldquo;{search}&rdquo;</span></p>
      <p className="body muted mt-2">Try checking your spelling, or explore a category instead.</p>
      <a href="shop.html" className="btn btn--secondary mt-4" style={{display:"inline-flex", marginTop:"24px"}}>Continue Shopping</a>
    </div>
  )}

</section>
{/* ============ /RESULTS ============ */}
  {/* ============ /RESULTS ============ */}

   {/* ============ EMPTY STATE ============ */}

  
  {/* ============ /EMPTY STATE ============ */}

</main>
      </>
   )
}