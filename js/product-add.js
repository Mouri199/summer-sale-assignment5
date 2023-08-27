// function handleClick(target){
//     const cartItemContainer = document.getElementById('cartItem')
//     const itemName = target.children[2].children[0].innerText
//     const li = document.createElement('li');
//     li.innerText = itemName;
//     console.log(li);
//     cartItemContainer.appendChild(li);
// }


let countNubmer = 0;
let total = 0;
let discount = 0;

function handleClick(target){
    countNubmer++
    const cartItemContainer = document.getElementById('cartItem')
    const itemName = target.children[2].children[0].innerText;
    const price = target.children[2].children[1].innerText;
    
    const li = document.createElement('li');
    li.innerText = ' '+countNubmer+'. '+ itemName;
    console.log(li);
    cartItemContainer.appendChild(li);

    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total").innerText = total;
    document.getElementById("totalPrice").innerText = total;

   
    let applyButtone = document.getElementById('applyButton');
let makePurchasee = document.getElementById('makePurchase');
let pricee = document.getElementById('totalPrice').innerText;
let mainPrice = parseFloat(pricee);

if( mainPrice >= 200){
  let applyButtone = document.getElementById('applyButton');
  applyButtone.removeAttribute('disabled');
}else {
  let applyButtone = document.getElementById('applyButton');
  applyButtone.setAttribute('disabled','true');
}

if(mainPrice == 0){
  let makePurchasee = document.getElementById('makePurchase');
  makePurchasee.setAttribute('disabled', 'true')
}else{
  let makePurchasee = document.getElementById('makePurchase');
  makePurchasee.removeAttribute('disabled');
}

}



document.getElementById('applyButton').addEventListener('click', function(event){
  event.preventDefault(); 

  let input = document.getElementById('cuponCode');
  let inputValue = input.value;
 
  if(inputValue === 'SELL200'){
    let price = document.getElementById('totalPrice');
    let discount = parseFloat(price.innerText) * 0.2;
    document.getElementById('discount').innerText = discount.toFixed(2);

  let totalMoney = document.getElementById('total');
  let discountTotal = parseFloat(price.innerText) - (parseFloat(price.innerText) * 0.2);
  totalMoney.innerText = discountTotal.toFixed(2);
  }

  
});

let homeButton = document.getElementById('home');
homeButton.addEventListener('click',function(){
  let totalMoney = document.getElementById('total');
  let price = document.getElementById('totalPrice');
  let discount = document.getElementById('discount');
  let cartItemContainer = document.getElementById('cartItem');
totalMoney.innerText = '0.00'
price.innerText ='0.00'
discount.innerText = '0.00'
cartItemContainer.innerHTML = ''
countNubmer= 0;

})


let applyButtone = document.getElementById('applyButton');
let makePurchasee = document.getElementById('makePurchase');
let pricee = document.getElementById('totalPrice').innerText;
let mainPrice = parseFloat(pricee);

if( mainPrice >= 200){
  let applyButtone = document.getElementById('applyButton');
  applyButtone.removeAttribute('disabled');
}else {
  let applyButtone = document.getElementById('applyButton');
  applyButtone.setAttribute('disabled','true');
}

if(mainPrice == 0){
  let makePurchasee = document.getElementById('makePurchase');
  makePurchasee.setAttribute('disabled', 'true')
}else{
  let makePurchasee = document.getElementById('makePurchase');
  makePurchasee.removeAttribute('disabled');
}







