//variable
const $ = document;
const itemContainer = $.querySelector(".cart-items");
const addBtn = $.querySelectorAll(".shop-item-button");
const totalPrice = $.querySelector(".cart-total-price");
// funciton
function addToCart(e) {
  let itemObj;
  addBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      itemObj = {
        itemImage:
          e.target.parentElement.parentElement.children[1].getAttribute("src"),
        itemTitle: e.target.parentElement.parentElement.children[0].innerHTML,
        itemPrice: e.target.previousElementSibling.innerHTML,
      };
      itemGenerator(itemObj);
      sumPrice(itemObj);
    });
  });
}
function itemGenerator(obj) {
  let rowDiv = $.createElement("div");
  rowDiv.classList.add("cart-row");
  let infoDev = $.createElement("div");
  infoDev.classList.add("cart-item", "cart-column");

  let itemImage = $.createElement("img");
  itemImage.classList.add("cart-item-image");
  let itemTitle = $.createElement("span");
  itemTitle.classList.add("cart-item-title");
  let priceSpan = $.createElement("span");
  priceSpan.classList.add("cart-price", "cart-column", "price");
  let countDiv = $.createElement("div");
  countDiv.classList.add("cart-quantity", "cart-column");
  let inputNumber = $.createElement("input");
  inputNumber.setAttribute("type", "number");
  inputNumber.setAttribute("value", "1");
  inputNumber.classList.add("cart-quantity-input");
  let removebtn = $.createElement("button");
  removebtn.classList.add("btn", "btn-danger");
  removebtn.innerHTML = "Remove";
  removebtn.addEventListener('click',(e)=>e.target.parentElement.parentElement.remove())
  // passing values
  itemImage.setAttribute("src", obj.itemImage);
  itemTitle.innerHTML = obj.itemTitle;
  priceSpan.innerHTML = obj.itemPrice;

  countDiv.append(inputNumber, removebtn);
  infoDev.append(itemImage, itemTitle);
  rowDiv.append(infoDev, priceSpan, countDiv);
  itemContainer.append(rowDiv);
}
function sumPrice(item) {
//    changing types to number to sum
    let total=Number(totalPrice.innerHTML)
    let itemPrice=Number(item.itemPrice)
    let sum=totalPrice.innerHTML=total+itemPrice
    
}
// event listener
window.addEventListener("load", addToCart);
