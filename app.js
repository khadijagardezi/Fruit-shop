// Taking input from user and also showing 
function input() {
let inputEle = document.querySelector("input").value;
console.log(inputEle);
let budgetline = document.querySelector("p");
budgetline.innerHTML = "Your Budget is : " + inputEle;

 };


//  1st fruit
 let quantityApple =0;
 let priceApple =15;
 let budget;
 let balance =0;
 let total =0;
//  2nd fruit
let quantityBanana =0;
 let priceBanana =20;

 // 3rd fruit
 let quantityOrange =0;
 let priceOrange =30;

// 4th fruit >> Cherry
 let quantityCherry =0;
 let priceCherry =20;

// 5th 
 let quantityGrapes =0;
 let priceGrapes =40;

// 6th 
let quantityAvocado =0;
let priceAvocado =20;

// 1st fruit
function addd() {
    budget = document.querySelector("input").value;
    if(budget==0) 
    alert("Go back home and bring some money");
    else{
    quantityApple++ // quantityApple=quantityApple+1;
    // It will show value after ++ on screen.
    document.querySelector("#quantityApple").innerHTML = quantityApple;

    total = quantityApple*priceApple;
    document.querySelector("#total").innerHTML = "Subtracting from your budget : " + total;

    balance = budget-total;
    document.querySelector("#balance").innerHTML = "And your balance is : " + balance;
    }

};

function minuss() {
    if(quantityApple !==0) {
        quantityApple--;
        document.querySelector("#quantityApple").innerHTML = quantityApple;
        total = quantityApple*priceApple;
        document.querySelector("#total").innerHTML = total;
        balance = budget-total;
        document.querySelector("#balance").innerHTML = balance;
    }
};

// 2nd fruit
function add4() {
    budget = document.querySelector("input").value;
    if(budget==0) 
    alert("Go back home and bring some money");
    else{
        quantityBanana++ // quantityApple=quantityApple+1;
    // It will show value after ++ on screen.
    document.querySelector("#quantityBanana").innerHTML = quantityBanana;

    total = quantityBanana*priceBanana;
    document.querySelector("#total").innerHTML = "Subtracting from your budget : " + total;

    balance = budget-total;
    document.querySelector("#balance").innerHTML = "And your balance is : " + balance;
    }

};

function minus4() {
    if(quantityBanana !==0) {
        quantityBanana--;
        document.querySelector("#quantityBanana").innerHTML = quantityBanana;
        total = quantityBanana*priceBanana;
        document.querySelector("#total").innerHTML = total;
        balance = budget-total;
        document.querySelector("#balance").innerHTML = balance;
    }
};
// 3rd 

function add2() {
    budget = document.querySelector("input").value;
    if(budget==0) 
    alert("Go back home and bring some money");
    else{
        quantityOrange++ // quantityApple=quantityApple+1;
    document.querySelector("#quantityOrange").innerHTML =  quantityOrange;

    total =  quantityOrange*priceOrange;
    document.querySelector("#total").innerHTML = "Subtracting from your budget : " + total;

    balance = budget-total;
    document.querySelector("#balance").innerHTML = "And your balance is : " + balance;
    }

};

function minus2() {
    if(quantityOrange !==0) {
        quantityOrange--;
        document.querySelector("#quantityOrange").innerHTML =  quantityOrange;
        total =  quantityOrange*priceOrange;
        document.querySelector("#total").innerHTML = total;
        balance = budget-total;
        document.querySelector("#balance").innerHTML = balance;
    }
};

// 4th fruit 

function add3() {
    budget = document.querySelector("input").value;
    if(budget==0) 
    alert("Go back home and bring some money");
    else{
    quantityCherry++;
    document.querySelector("#quantityCherry").innerHTML =  quantityCherry;

    total =  quantityCherry*priceCherry;
    document.querySelector("#total").innerHTML = "subtracting from your budget : " + total;

    balance = budget-total;
    document.querySelector("#balance").innerHTML = "And your balance is : " + balance;
    }

};

function minus3() {
    if(quantityCherry !==0) {
        quantityCherry--;
        document.querySelector("#quantityCherry").innerHTML =  quantityCherry;
        total =  quantityCherry*priceCherry;
        document.querySelector("#total").innerHTML = total;
        balance = budget-total;
        document.querySelector("#balance").innerHTML = balance;
    }
};

// 5th fruit
function add5() {
    budget = document.querySelector("input").value;
    if(budget==0) 
    alert("Go back home and bring some money");
    else{
    quantityGrapes++;
    document.querySelector("#quantityGrapes").innerHTML = quantityGrapes;

    total =  quantityGrapes*priceGrapes;
    document.querySelector("#total").innerHTML = "Subtracting from your budget : " + total;

    balance = budget-total;
    document.querySelector("#balance").innerHTML = "And your balance is : " + balance;
    }

};

function minus5() {
    if(quantityGrapes !==0) {
        quantityGrapes--;
        document.querySelector("#quantityGrapes").innerHTML =  quantityGrapes;
        total =  quantityGrapes*priceGrapes;
        document.querySelector("#total").innerHTML = total;
        balance = budget-total;
        document.querySelector("#balance").innerHTML = balance;
    }
};

// 6th
function add6() {
    budget = document.querySelector("input").value;
    if(budget==0) 
    alert("Go back home and bring some money");
    else{
    quantityAvocado++;
    document.querySelector("#quantityAvocado").innerHTML = quantityAvocado;

    total =  quantityAvocado*priceAvocado;
    document.querySelector("#total").innerHTML = "subtracting from your budget : " + total;

    balance = budget-total;
    document.querySelector("#balance").innerHTML = "And your balance is : " + balance;
    }

};

function minus6() {
    if(quantityAvocado !==0) {
        quantityAvocado--;
        document.querySelector("#quantityAvocado").innerHTML =  quantityAvocado;
        total =  quantityAvocado*priceAvocado;
        document.querySelector("#total").innerHTML = total;
        balance = budget-total;
        document.querySelector("#balance").innerHTML = balance;
    }
};
