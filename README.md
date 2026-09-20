# E-Commerce Website

A React-based e-commerce website where users can browse products, search and filter by category or price, view product details, manage a shopping cart, and create an account.

## Features

- **Home** — landing page
- **Shop** — product listing with category filtering, price sorting, and "Show More" pagination
- **Search** — live search by product title or category, with quick-filter chips and price sorting
- **Product Details** — dedicated page for each product (`/product/:id`)
- **Cart** — view and manage items added to cart
- **Sign Up** — create an account (name, email, password), with a "Continue with Google" option
- **Contact** — contact page

## Tech Stack

- **React** — UI library
- **React Router** — client-side routing with a shared layout and nested page routes
- **Context API** — shared search state across pages

## Project Structure

```
src/
├── components/     # Shared UI components and layout
├── context/        # React Context providers (e.g. search state)
├── hooks/          # Custom hooks (e.g. product data fetching)
├── pages/          # Route-level pages (Home, Shop, Search, Product, Cart, SignUp, Contact)
└── routes/         # Route configuration
```


| Path            | Page            |
|-----------------|-----------------|
| `/`             | Home            |
| `/shop`         | Shop            |
| `/search`       | Search          |
| `/product/:id`  | Product Details |
| `/cart`         | Cart            |
| `/signUp`       | Sign Up         |
| `/contact`      | Contact         |

## License

MIT