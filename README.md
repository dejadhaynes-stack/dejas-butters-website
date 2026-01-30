# Deja's Butters E-Commerce Website

A beautiful, fully-functional e-commerce website for an organic body butter brand.

## Features

### Pages
- **Home (index.html)** - Main landing page with all 9 signature products
- **Product Detail (product.html)** - Dynamic product pages with full details, ingredients, and benefits
- **About Us (about.html)** - Brand story, values, and mission
- **FAQ (faq.html)** - Comprehensive frequently asked questions

### Functionality
- **Shopping Cart** - Add products, view cart, remove items, see total
- **Persistent Cart** - Cart saves to local storage (survives page refresh)
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Product Filtering** - Click product cards to see detailed information
- **Smooth Animations** - Professional transitions and hover effects

## Products

The website features 9 signature organic body butters:

1. **Golden Glow Shea** ($24.99) - Pure shea butter with golden radiance
2. **Chocolate Dream Cocoa** ($26.99) - Rich cocoa butter with chocolate scent
3. **Tropical Paradise Coconut** ($22.99) - Virgin coconut oil
4. **Green Goddess Avocado** ($28.99) - Creamy avocado butter with vitamins
5. **Soothing Aloe Essence** ($25.99) - Calming aloe vera butter
6. **Sunset Mango Bliss** ($27.99) - Luxurious mango butter
7. **Mediterranean Olive Elixir** ($23.99) - Extra virgin olive oil
8. **Youth Revival Collagen** ($32.99) - Collagen peptides blend
9. **Nature's Aromatherapy Blend** ($29.99) - Essential oils mix

## File Structure

```
Deja's Butters Website/
├── index.html          # Homepage with product grid
├── product.html        # Product detail page (dynamic)
├── about.html          # About Us page
├── faq.html           # FAQ page
├── styles.css         # All styling
├── script.js          # Shopping cart & interactions
└── README.md          # This file
```

## How to Use

1. **Open the website**: Double-click `index.html` to open in your browser
2. **Browse products**: Scroll down to see all 9 products
3. **View details**: Click "View Details" on any product card
4. **Add to cart**: Click "Add to Cart" buttons
5. **View cart**: Click the cart icon in the navigation
6. **Checkout**: Click "Proceed to Checkout" in the cart

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with gradients, flexbox, and grid
- **Vanilla JavaScript** - No frameworks needed
- **Local Storage** - Persistent shopping cart

## Color Scheme

- Primary Green: #7d9b76 (organic, natural)
- Secondary Gold: #d4a574 (luxury, warmth)
- Accent Cream: #e8c39e (softness)
- Background: #fafaf8 (off-white)

## Customization

### To Change Product Prices
Edit the prices in both `index.html` and the `productData` object in `script.js`

### To Add New Products
1. Add a new product card in `index.html`
2. Add product data in `script.js` under `productData`
3. Use the same structure as existing products

### To Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #7d9b76;
    --secondary-color: #d4a574;
    --accent-color: #e8c39e;
}
```

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Next Steps (Optional Enhancements)

- Add payment integration (Stripe, PayPal)
- Add product images (currently uses emoji icons and gradients)
- Add user authentication
- Add product reviews/ratings
- Connect to a backend database
- Add email marketing integration
- Add size/quantity selectors

## Support

For questions or customization help, refer to the inline comments in the code files.

---

**Built with love for Deja's Butters - Pure. Organic. Natural.**
