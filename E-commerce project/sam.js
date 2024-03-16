/*
In the provided JavaScript code, I have created an array of products with their respective names, prices, and image URLs.

Then, I have looped through the array and dynamically created a product card for each product. The product card includes an image, name, price, and an "Add to Cart" button.

The product cards are appended to the "product-cards" div element in the HTML code.

Feel free to add more products to the array or customize the functionality according to your needs.
*/
// Array of Products
let products = [
  {
    name: "Product 1",
    price: 99.99,
    image: "product1.jpg",
  },
  {
    name: "Product 2",
    price: 149.99,
    image: "product2.jpg",
  },
  // Add more products here
];

let productCardsContainer = document.getElementById("product-cards");

products.forEach((product) => {
  let productCard = document.createElement("div");
  productCard.className = "product-card";

  let productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;

  let productName = document.createElement("h3");
  productName.textContent = product.name;

  let productPrice = document.createElement("p");
  productPrice.textContent = "$" + product.price.toFixed(2);

  let addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";

  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productPrice);
  productCard.appendChild(addToCartButton);
  productCardsContainer.appendChild(productCard);
});
