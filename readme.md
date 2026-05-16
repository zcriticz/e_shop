<div align="center">
    <h1>E·Shop</h1>
</div>

**E·Shop** is a responsive e-commerce web application built with vanilla HTML, CSS, and JavaScript. Products are fetched from a public API and displayed with category filtering, discount pricing, and a fully functional shopping cart.

This repository contains the complete solution, technologies used, and instructions for running the project.

## Overview

The project is a frontend-only web application with no build tools or external dependencies. All product data is consumed from a public REST API, and all interactions — including filtering, cart management, and checkout — are handled entirely on the client side using vanilla JavaScript.

## Features

- **Product Listing**: Fetches and displays products dynamically from the DummyJSON API
- **Discount Pricing**: Shows the discounted price alongside the original crossed-out price
- **Category Filter**: Dropdown to filter products by category in real time
- **Shopping Cart**: Slide-in cart panel with item list, quantities, and total price
- **Add / Remove Items**: Add products to the cart or remove them individually
- **Cart Badge**: Live item count displayed on the cart icon
- **Checkout**: Clears the cart and shows a success notification
- **Toast Notifications**: Animated feedback messages for cart actions
- **Responsive Design**: Fully adapted for mobile and desktop screens

## Technologies Used

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**External resources:**

- **DummyJSON API**: Public REST API used as the product data source
- **Font Awesome 6.7.2**: Icon library (cart, labels, etc.)
- **Google Fonts**: Montserrat typeface for the interface

## API

Products are fetched from:

- **Endpoint**: `GET https://dummyjson.com/products`
- **Data**: Each product includes a title, description, category, price, discount percentage, and image
- **Discount Calculation**: The discounted price is calculated on the client side:

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- An active internet connection (required to load products from the API, fonts, and icons)

## Getting Started

No build tools or dependencies to install.

1. Clone the repository

```sh
git clone https://github.com/zcriticz/e_shop.git
cd e_shop
```

2. Open `index.html` in your browser

You can simply double-click the file, or use a local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.

> **⚠️ Important: an active internet connection is required to load products from the API, fonts, and icons.**

## Author:

- **Cristian Santos** - **Frontend Developer**
  - [GitHub Profile](https://github.com/zcriticz)

## License

This project was built as part of a JavaScript course. Feel free to use it for learning purposes.
