










import routes from "./routes/AppRoutes";


import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter(routes);
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  



  return (
    <>
      <CartProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
        
      </CartProvider>
    </>
  );
}

export default App;
