








import { useState } from "react";
import {Link, useNavigate} from "react-router"
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";











export default function Header() { 

     const [menuOpen, setMenuOpen] = useState(false);
     const {cart} = useCart();
     const {search, setSearch} = useSearch()
     const [openSearchForm, setOpenSearchForm] = useState(false)
     const navigate = useNavigate();
 
     

      
      const count = cart.reduce((acc, cur) => acc + cur.qty, 0);

      function closeForm() {
         setOpenSearchForm(false)
      }

      function handleForm() {
        setSearch("")
        setOpenSearchForm(true)
      }

        function handleSearchSubmit(e) {
      e.preventDefault();
      navigate(`/search?q=${encodeURIComponent(search)}`);
      closeForm();
   }
 
     


   
   

   


  return (
   <header className="site-header is-scrolled">
      <div className="wrap nav">
         {!openSearchForm ? (
            <>
               <nav className={`nav__links ${menuOpen ? "is-open" : ""}`}>
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link to="shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                  <Link to="contact" onClick={() => setMenuOpen(false)}>Contact</Link>
               </nav>
               <Link to="/" className="nav__logo">ATELIER</Link>
               <div className="nav__icons">
                  <button className="icon-btn" aria-label="search" onClick={handleForm}>
                     <svg viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="7"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                     </svg>
                  </button>
                  <Link to="signUp" className="icon-btn" aria-label="Account">
                     <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path></svg>
                  </Link>
                  <Link to="cart" className="icon-btn" aria-label="Bag">
                     <svg viewBox="0 0 24 24"><path d="M6 8h12l-1 12H7L6 8z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path></svg>
                     <span className="cart-count" style={{display: count > 0 ? "flex": "none"}}>{count}</span>
                  </Link>
               </div>
               <button className="nav__toggle" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
                  <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
               </button>
            </>
         ) : (
             <form className="header-search" role="search" onSubmit={handleSearchSubmit}>
      <label htmlFor="header-search-input" className="sr-only">Search products</label>
      <input
         id="header-search-input"
         type="text"
         name="q"
         placeholder="Search for coats, knitwear, accessories…"
         autoComplete="off"
         value={search}
         autoFocus
         onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" aria-label="Submit search">
         <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="13 6 19 12 13 18"></polyline>
         </svg>
      </button>
      <button type="button" className="header-search__close" aria-label="Close search" onClick={closeForm}>
         <svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>
      </button>
   </form>
         )}
      </div>
   </header>
);
}