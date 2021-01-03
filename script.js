// Hamburger change
function myFunction(x) {
  x.classList.toggle("change");
}
// when click up arrow adding ticket numbers
let minusPlus = {
  // We need to stop minus at 0
  stopCounting: false
};
// First upArrow clicking and adding ticket quantity and price
let adding = document.getElementById("up-arrow1");
let count = document.getElementById("quantity1");
let addingAdult = document.getElementById("adult-ticket");
adding.addEventListener("click", arrowPlus);
adding.addEventListener("click", totalNumber);

function arrowPlus() {
  count.innerHTML = parseInt(count.innerHTML) + 1;
  plusAdult();
}
function plusAdult() {
  addingAdult.innerHTML = parseInt(addingAdult.innerHTML) + 30;
}

let adding2 = document.getElementById("up-arrow2");
let count2 = document.getElementById("quantity2");
let addingChildren = document.getElementById("children-ticket");
adding2.addEventListener("click", arrowPlusSecond);
adding2.addEventListener("click", totalNumber);

function arrowPlusSecond() {
  count2.innerHTML = parseInt(count2.innerHTML) + 1;
  plusChildren();
}
function plusChildren() {
  addingChildren.innerHTML = parseInt(addingChildren.innerHTML) + 20;
}
function totalNumber() {
  let priceChildren = document.getElementById("children-ticket");
  let adultTicket = document.getElementById("adult-ticket");
  let totalPrice = document.getElementById("main-total");
      totalPrice.innerHTML = parseInt(adultTicket.innerHTML) +
      parseInt(priceChildren.innerHTML);
}
// when click down arrow minus ticket numbers
let minus1 = document.getElementById("down-arrow1");
let countForMinus = document.getElementById("quantity1");
let minusAdult = document.getElementById("adult-ticket");
minus1.addEventListener("click", arrowminus);
 
// minus adult and children prices
function arrowminus() {
  if(parseInt(countForMinus.innerHTML) <= 0) {
    minusPlus["stopCounting"] = true;
   }
  // Min price 0 ticket = 0$
  if (minusPlus["stopCounting"] === false) {
    countForMinus.innerHTML = parseInt(countForMinus.innerHTML) - 1;
    minusPrice();
    differentialTotal();
  }
  if (parseInt(countForMinus.innerHTML) <= 0) {
    minusPlus["stopCounting"] = true;
  }
  if (parseInt(countForMinus.innerHTML) > 0) {
    minusPlus["stopCounting"] = false;
  }
}
function minusPrice() {
  minusAdult.innerHTML = parseInt(minusAdult.innerHTML) - 30;
}

let minus2 = document.getElementById("down-arrow2");
let countForMinus2 = document.getElementById("quantity2");
let minusChildren = document.getElementById("children-ticket");
minus2.addEventListener("click", arrowMinus2);

function arrowMinus2() {
  if(parseInt(countForMinus2.innerHTML) <= 0) {
    minusPlus["stopCounting"] = true;
   }
  
  if (minusPlus["stopCounting"] === false) {
    countForMinus2.innerHTML = parseInt(countForMinus2.innerHTML) - 1;
    childrenPrice();
    differentialTotalSecond();
  }
  if (parseInt(countForMinus2.innerHTML) <= 0) {
    minusPlus["stopCounting"] = true;
  }
  if (parseInt(countForMinus2.innerHTML) > 0) {
    minusPlus["stopCounting"] = false;
  }
}
function childrenPrice() {
  minusChildren.innerHTML = parseInt(minusChildren.innerHTML) - 20;
}
// Plus Minus and stop at 0 done now adding sum for total amount

// Total Price


function differentialTotal() {
  let adultTicket = document.getElementById("adult-ticket");
  let totalPrice = document.getElementById("main-total");
  totalPrice.innerHTML -= 30;
  
}

function differentialTotalSecond() {
  let childrenTicket = document.getElementById("children-ticket");
  let totalPrice = document.getElementById("main-total");
  totalPrice.innerHTML -= 20;
}
