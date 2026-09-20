

import {Link} from "react-router"

export default function Footer() { 
   return (
     <footer className="site-footer">
      <div className="wrap">
         <div className="footer-grid">
            <div>
               <p className="nav__logo" style={{textAlign: "left", marginBottom: "12px"}}>ATELIER</p>
               <p className="small">Considered clothing,<br/>made to last.</p>
               <div className="social-row">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"></circle></svg></a>
          <a href="#" aria-label="Pinterest"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M9 17c1-3 1.5-5.5 1.5-7A2.5 2.5 0 0 1 13 7.5c1.4 0 2.5 1 2.5 2.7 0 2.6-1.4 4.8-3.4 4.8-1 0-1.7-.5-2-1.2"></path></svg></a>
        </div>
            </div>

            <div>
               <h4>Shop</h4>
               <ul>
          <li><Link to="/shop" className="small">New Arrivals</Link></li>
          <li><Link to="/shop" className="small">Outerwear</Link></li>
          <li><Link to="/shop" className="small">Tailoring</Link></li>
          <li><Link to="/shop" className="small">Sale</Link></li>
        </ul>
            </div>

            <div>
               <h4>Help</h4>
               <ul>
          <li><Link to="/contact" className="small">Contact</Link></li>
          <li><Link to="#" className="small">Shipping &amp; Returns</Link></li>
          <li><Link to="#" className="small">Size Guide</Link></li>
          <li><Link to="#" className="small">FAQ</Link></li>
        </ul>
            </div>

           <div>
        <h4>Stay in Touch</h4>
        <form className="newsletter-form" data-validate="" data-success-target="#footer-news-success">
          <input type="email" className="w-1" placeholder="Email address" required="" aria-label="Email address"/>
        </form>
        <button type="submit" className="btn btn--secondary mt-5">Join</button>
        <p id="footer-news-success" className="small mt-2" style={{display:"none"}}>Thank you — you're subscribed.</p>
      </div>
         </div>

         <div className="footer-bottom small">
      <span>© 2026 Atelier Studio. All rights reserved.</span>
      <span>Privacy · Terms</span>
    </div>
      </div>
     </footer>
   )
}