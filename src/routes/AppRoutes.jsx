
import Home from "../pages/HomePage";
import Contact from "../pages/ContactPage"; 

import Cart from "../pages/CartPage";
import RootLayout from "../components/layout/RootLayout"
import ProductDetails from "../pages/ProductPage";
import { SignUp } from "../pages/SignUpPage";




import Search from "../pages/SearchPage";

import Shop from "../pages/ShopPage"; 


const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index:true, element: <Home/>},
      {path: "shop", element: <Shop/>},
      {path: "contact", element: <Contact/>},
      {path: "cart", element: <Cart/>},
      {path: "product/:id", element: <ProductDetails/>},
      {path:"signUp", element:<SignUp/>},
      {path:"search", element: <Search/>}
    ]
  }
]

export default routes
