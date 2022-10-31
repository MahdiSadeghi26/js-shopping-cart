//variable
const $ = document;
const itemContainer = $.querySelector(".cart-items");
const addBtn=$.querySelectorAll('.shop-item-button')
// funciton
function addToCart(e) {
    let item;
    addBtn.forEach(element => {
        element.addEventListener('click',(e)=>{
            item={
                itemImage:e.target.parentElement.parentElement.children[1],
                itemTitle:e.target.parentElement.parentElement.children[0].innerHTML,
                itemPrice:e.target.previousElementSibling.innerHTML,
                itemCount:1
            }
            
        })
    });
}
function itemGenerator(item) {
    
}
// event listener
window.addEventListener('load',addToCart)