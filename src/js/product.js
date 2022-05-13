import ProductData from "./productData.js";
import ProductDetails from './productDetails.js';
import { getParams } from "./utils.js";

const productId = getParams("product");
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();

console.log(dataSource.findProductById(productId));

let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  setLocalStorage("so-cart", product);
}

// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);









