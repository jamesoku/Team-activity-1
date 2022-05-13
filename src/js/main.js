import ProductData from "./productData.js";
import ProductList from "./productList.js";


const dataSource = new ProductData('tents');

const listElement = document.querySelector('.product-list');

// what does new do //

const productList = new ProductList('tents', dataSource, listElement);
productList.init();