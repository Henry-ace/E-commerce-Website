import { useCart } from "../context/CartContext"

import { useState } from "react"







import { Link } from "react-router"







export default function Cart() {  


   const {cart, setCart} = useCart()

   const total = cart.reduce((acc, curr) => acc + curr.qtyPrice, 0)
   


   const deleteItems = (id) => {
      setCart(prev => (
         prev.filter((item) => item.uniqueId !== id)
      ))
   }

   const incrementPrice = (item, callback) => {
      setCart((prev) => {
         const existing = prev.find((c) => c.productId === item.productId && c.size === item.size );
         const increment = existing ?
        prev.filter((c) =>  c.qty >= 1).map((c) => {
         if(c.productId === item.productId && c.size === item.size) {
            if(callback === "increment") {
               return {...c, qty: c.qty + 1, qtyPrice: c.price * (c.qty + 1)}
            }else{
               return {...c,  qty: c.qty > 0 ? c.qty - 1  : c.qty, qtyPrice: c.qtyPrice > 0 ? c.qtyPrice - c.price : c.qtyPrice }
            }
         }else {
            return c
         }
        }):  [...prev, item]
        return increment
      })
   }



   

   
   return (

    <main className="wrap section" data-cart-root="">
  <h1 className="h1 mt-4" style={{ marginBottom: 'var(--space-6)' }}>Your Bag</h1>
   
  <div className="cart-layout">
 
    <div>
        {
      cart.map((item) => (
      <div data-cart-lines="" key={item.uniqueId} style={{ display: 'block' }}>
        <div className="cart-line" data-idx="0">
          <div className="ph ph--4-5 cart-line__thumb"> 
            <img className="product-card__photo"  src={item.img} alt={item.ProductName}  />
            <span></span></div>
          <div>
            <h4 className="cart-line__name">{item.ProductName}</h4>
            <p className="small">{`sizes ${item.size}`}</p>
            <div className="flex gap-5 item-center justify-center">
                <div className="qty-stepper">
              <button data-qty="dec" aria-label="Decrease quantity" onClick={() =>{
                incrementPrice(item, "decrement");
                if(item.qty <= 1) deleteItems(item.uniqueId)
              } }>−</button>
              <span>{item.qty}</span>
              <button data-qty="inc" aria-label="Increase quantity" onClick={() => incrementPrice(item, "increment")}>+</button>
              
            </div>
                <button  onClick={() => deleteItems(item.uniqueId)}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="3 6 5 6 21 6"></polyline>
  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
  <path d="M10 11v6"></path>
  <path d="M14 11v6"></path>
  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
</svg></button>
            </div>
           

           
          </div>
          <p className="cart-line__price">{`$${item.qtyPrice}`}</p>
        </div>
      </div>
      ))
   }
   


      <div data-cart-empty="" className={`cart-empty ${cart.length  === 0 ? "is-visible" : "" }`}>
        <p className="label mt-4">Your bag is empty</p>
        <p className="body muted mt-2">Nothing here yet — let's fix that.</p>
        <Link to="/shop" className="btn btn--secondary mt-4" style={{ display: 'inline-flex', marginTop: '24px' }}>Continue Shopping</Link>
      </div>
    </div>


    <div className="cart-summary" data-cart-summary="" style={{ display: 'block' }}>
      <h3 className="mt-2" style={{ marginBottom: 'var(--space-4)' }}>Order Summary</h3>
      <div className="summary-row"><span>Subtotal</span><span data-subtotal="">{`$${total}`}</span></div>
      <div className="summary-row"><span>Shipping</span><span>Free</span></div>
   <div className="summary-row total"><span>Total</span><span data-total="">{`$${total}`}</span></div>
      <button className="btn btn--primary btn--full mt-4" style={{ marginTop: 'var(--space-4)' }}>Checkout</button>
      <Link to="/shop" className="text-link mt-4" style={{ display: 'block', textAlign: 'center', marginTop: 'var(--space-4)' }}>Continue Shopping</Link>
    </div>
  </div>
</main>
   )
}