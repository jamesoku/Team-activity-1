import { setLocalStorage, getLocalStorage } from "./utils.js";

export default class ProductDetails {
  // pass in category name: ex. tents
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    console.log(this.dataSource);
    this.product = await this.dataSource.findProductById(this.productId);
    console.log(this.product);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    // add listener to Add to Cart button
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    let cartList = getLocalStorage("so-cart");
    if (!cartList) {
      cartList = [];
    }
    
    cartList.push(this.product);
    setLocalStorage("so-cart", cartList);
  }
  renderProductDetails() {
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>

        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.NameWithoutBrand}"
        />
        <p class="product__initialPrice">$${this.product.SuggestedRetailPrice}</p>
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div></section>`;
  }
}
