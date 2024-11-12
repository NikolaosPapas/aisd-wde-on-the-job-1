const storeName = "Jaime's Cookie Shop";

console.log(`Welcome to ${storeName}! We are the best cookie shop in town.`);
console.log("Here are the products we currently offer:");

const product1 = "Half Dozen Chocolate Chunk Cookie";
const product2 = "A Dozen Chocolate Chunk Cookie";
const product3 = "Half Dozen Italian Butter Cookie";
const product4 = "A Dozen Italian Butter Cookie";
const product5 = "Half Dozen Plain Chocolate Cookie";
const product6 = "A Dozen Plain Chocolate Cookie";

const price1 = 12.99;
const price2 = 19.99;
const price3 = 13.99;
const price4 = 22.99;
const price5 = 9.99;
const price6 = 14.99;

const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

console.log(storeName);
console.log(product1, price1);
console.log(product2, price2);
console.log(product3, price3);
console.log(product4, price4);
console.log(product5, price5);
console.log(product6, price6);
console.log(storeHours); 

let products = [product1, product2, product3, product4, product5, product6];
let prices = [price1, price2, price3, price4, price5, price6];

// Display the initial product list
console.log("Products:", products);
console.log("Prices:", prices);

// Example of push: Add a new product to the store
products.push("Coconut Cookies");
prices.push(15.00);
console.log("We've added a new product! Products:", products);
console.log("Updated Prices:", prices);

// Example of pop: Remove the last product from the store
products.pop();
prices.pop();
console.log("Unfortunately, Coconut Cookies are out of stock. Products:", products);
console.log("Updated Prices:", prices);

// Example of slice: Show a selection of featured products
let featuredProducts = products.slice(0, 3);
console.log("This week, our featured products are:", featuredProducts);

// Example of concat: Add new products from a shipment to the store's inventory
let newProducts = ["Cat Toy", "Dog Leash"];
let newPrices = [9.99, 14.99];
products = products.concat(newProducts);
prices = prices.concat(newPrices);

console.log("We have new arrivals! Products:", products);
console.log("Updated Prices:", prices);

console.log(`Thanks for visiting ${storeName}`);
console.log(`Here are our store hours for reference: ${storeHours}`);
