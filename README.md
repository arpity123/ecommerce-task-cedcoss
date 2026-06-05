# TrendZone Fashion Store

TrendZone is a small, polished fashion storefront built with plain HTML, CSS, and JavaScript. Shoppers can browse products, filter by section, open a product detail page, choose a size, add items to a cart, adjust quantities, and place a simple checkout order.


## Project Overview

This project is made for a clean online shopping experience. The interface includes product cards, sale and new badges, responsive layouts, image galleries, cart management, and a checkout form.

The main idea is simple:

1. The shopper lands on the TrendZone storefront.
2. They browse all products or use the navigation filters.
3. They click a product to view details.
4. They select a size and add the product to the bag.
5. They open the cart, update quantities, remove items if needed, and place an order.



## What Each File Does

### `index.html`

This is the main page structure. It contains:

- Header with the TrendZone brand, category navigation, and cart button.
- Storefront section where product cards are rendered.
- Product detail section with image gallery, description, size picker, and add-to-cart button.
- Cart section with cart items, order summary, and checkout form.
- Link to `styles.css`.
- Link to `script.js`.

### `styles.css`

This file handles the complete visual design of the store. It includes:

- Color variables and global styling.
- Header, navigation, and cart button styling.
- Product grid and product card layout.
- Sale badge animations and sparkle effect on the Sale navigation link.
- Product detail page layout.
- Image gallery and thumbnail styling.
- Size selector styling.
- Cart page, quantity controls, checkout form, and empty cart state.
- Responsive media queries for tablets and mobiles.

### `script.js`

This file brings the store to life. It includes:

- Product data for all TrendZone items.
- Product filtering for Home, New In, Women, Men, and Sale.
- Product card rendering.
- Product detail rendering.
- Gallery image switching.
- Size selection.
- Add-to-cart logic.
- Cart count updates.
- Quantity increase and decrease.
- Remove item behavior.
- Subtotal, delivery, and total calculation.
- Checkout form handling.

### `assets/images/`

This folder contains the product images used throughout the store. The olive utility shacket has multiple image angles, while the other products currently use their main product image.

## Store Sections

The navigation has five sections:

- `Home`: shows every product.
- `New In`: shows products marked as new.
- `Women`: shows products from the women segment.
- `Men`: shows products from the men segment.
- `Sale`: shows products marked for discount.

These sections are controlled by the `pageContent` object in `script.js`.

## Products Included

The project currently includes 10 products:

1. Olive Utility Shacket
2. Black Cropped Bomber Jacket
3. Ivory Ribbed Knit Top
4. Charcoal Wide Leg Trousers
5. Indigo Denim Overshirt
6. Black Satin Midi Skirt
7. Khaki Cargo Mini Skirt
8. Sky Blue Linen Blend Shirt
9. Stone Quilted Nehru Vest
10. Rose Cotton Blend Hoodie

Each product has details such as:

- Product ID
- Name
- Category
- Segment
- Price
- MRP
- New or sale status
- Description
- Main image
- Tags
- Optional gallery images

## Step By Step: How To Run The Project

### 1. Open The Project Folder

Make sure you are inside the project folder

### 2. Open The Website

Because this is a static project, you can open `index.html` directly in your browser.

You can also use a simple local server if you prefer:


### 3. Browse Products

Use the navigation bar to switch between Home, New In, Women, Men, and Sale. The products update instantly without reloading the page.

## Important Project Elements

### Product Data

All products are stored in the `products` array inside `script.js`. To add a new product, add a new object to that array and place its image inside `assets/images/`.

### Views

The app has three main views:

- Storefront view
- Product detail view
- Cart view

Only one view is shown at a time. The `showOnly()` function controls this.

### Cart

The cart is stored in a JavaScript array while the page is open. It is not saved to local storage, so refreshing the page will reset the cart.

### Image Gallery

The product detail page supports image galleries. The olive utility shacket already has front, back, and detail images. For other products, the app repeats the main image when extra gallery images are not available.

### Responsive Design

The layout adapts for different screen sizes:

- Desktop: five-column product grid.
- Medium screens: three-column product grid.
- Mobile: two-column product grid and stacked product/cart layouts.

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Final Note

TrendZone is a friendly, browser-ready fashion store demo. It keeps the code easy to understand while still giving the shopper a complete flow from browsing to checkout. That makes it a good project for learning frontend structure, DOM manipulation, responsive styling, and basic ecommerce logic.
