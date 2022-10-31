//variable
const $ = document;
const itemContainer = $.querySelector(".cart-items");
const addBtn=$.querySelectorAll('.shop-item-button')
// funciton
function addToCart(e) {
    let itemObj;
    addBtn.forEach(item => {
        item.addEventListener('click',(e)=>{
            itemObj={
                itemImage:e.target.parentElement.parentElement.children[1],
                itemTitle:e.target.parentElement.parentElement.children[0].innerHTML,
                itemPrice:e.target.previousElementSibling.innerHTML,
            }
            
        })
    });
}
function itemGenerator(item) {
    let rowDiv=$.createElement('div')
        rowDiv.classList.add(cart-row)
    let infoDev=$.createElement('div')
        infoDev.classList.add('cart-item','cart-column')
    
        let itemImage=$.createElement('img')
        itemImage.classList.add('cart-item-image')
    let priceSpan=$.createElement('span')
        priceSpan.classList.add('cart-price','cart-column')
    let countDiv=$.createElement('div')
        countDiv.classList.add('cart-quantity' ,'cart-column')
    let inputNumber=$.createElement('input')
        inputNumber.setAttribute=('type','number')
    let removebtn=$.createElement('button')
        removebtn.classList.add('btn','btn-danger')
        removebtn.innerHTML='Remove'
    rowDiv.append(infoDev,priceSpan,countDiv)
}
// event listener
window.addEventListener('load',addToCart)