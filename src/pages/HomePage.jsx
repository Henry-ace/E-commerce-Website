







import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img7 from "../assets/img7.jpg"
import { Link, Links } from "react-router";
import useProductDetails from "../hooks/ProductData";
import ProductCardSkeleton from "../components/common/loading";














export default function Home() {

  const { data, error, loading } = useProductDetails();


   return (
      <main>
  {/* Hero */}
  <section className="hero">
    
    <div className="ph ph--tall">
      <img src={img2} alt="" className="home__photo"/>
    </div>
    <div className="hero__content">
      <p className="label hero__eyebrow">Autumn 2026</p>
      <h1 className="display text-white">Clothes that speak<br />quietly.</h1>
      <p className="body-lg">Considered pieces, cut from natural fibers and built to be worn for years, not seasons.</p>
      <Link to="shop" className="btn btn--primary">Shop</Link>
    </div>
  </section>

  {/* Category strip */}
  <section className="wrap section--tight">
    <div className="tile-row">

        <figure>
          <div className="ph ph--3-4">
            <img src={img3} alt=""className="home__photo"/>
            </div>
          <figcaption className="label text-center">Outerwear</figcaption>
        </figure>


        <figure>
          <div className="ph ph--3-4">
            <img src={img4} alt=""className="home__photo"/>
            </div>
          <figcaption className="label text-center">Tailoring</figcaption>
        </figure>


        <figure>
          <div className="ph ph--3-4">
            <img src={img1} alt="" className="home__photo"/>
            </div>
          <figcaption className="label text-center">Knitwear</figcaption>
        </figure>
 
    </div>
  </section>

  {/* Featured collection */}
  <section className="wrap section">
    <div className="section-head">
      <h2>The Essentials</h2>
      <Link to="/shop" className="text-link">View All</Link>
    </div>
    <div className="product-grid">
      {error && <p className="muted text-center">Couldn't load products right now.</p>}

      {
        loading ? (<div className="product-grid">
            {Array.from({ length: 1 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>) : (
             <>
            { 
        data && 
        data.filter((item, index) => index <= 5).map((item) => (
          <Link className="product-card" to={`/product/${item.id}`} key={item.id}>
        <div className="product-card__img ph ph--3-4">
          <img src={item.images[0]} alt={item.title} className="product-card__photo pb-10" />
          <span>{item.title}</span></div>
        <div className="product-card__info">
          <div>
            <h4 className="product-card__name">{item.title}</h4>
          </div>
          <p className="product-card__price">{`$${item.qtyPrice}`}</p>
        </div>
      </Link>
      
        ))
      }
      </>
          )
      }
      
      

    </div>
  </section>

  {/* Editorial */}
  <section className="editorial">
    <div className="ph ph--16-9 ph--tall">
      <img src={img7} alt="" className="home__photo"/>
      <span>Editorial Image — Lookbook, 16:9</span></div>
    <div className="editorial__caption">
      <h2 className="h2">Autumn, considered.</h2>
      <p className="body mt-2">Six pieces, worn seven ways — this season's capsule is built around fewer, better things.</p>
      <Link href="#" className="text-link mt-4" style={{ display: 'inline-block' }}>Read the Story</Link>
    </div>
  </section>

  {/* Newsletter */}
  <section className="section--ivory">
    <div className="wrap text-center" style={{ maxWidth: '520px' }}>
      <h2 className="h2">Join the List</h2>
      <p className="body mt-2 muted">Early access to new arrivals and quiet sales. No noise.</p>
      <form className="newsletter-form" style={{ marginLeft: 'auto', marginRight: 'auto' }} data-validate="" data-success-target="#newsletter-success">
        <input type="email" placeholder="Email address" required aria-label="Email address" />
        <button type="submit" className="btn btn--primary">Join</button>
      </form>
      <p id="newsletter-success" className="small mt-4" style={{ display: 'none' }}>You're on the list. Welcome to ATELIER.</p>
    </div>
  </section>
</main>
   )
}