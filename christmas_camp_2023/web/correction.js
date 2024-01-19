let money_counter_el = document.getElementById("money_counter"); // getElementById try to find the html element by his attribute "id" here it tries to find the id "money_counter"
let cookie_counter_el = document.getElementById("cookie_counter");
let milk_counter_el = document.getElementById("milk_counter");
let cookie_el = document.getElementById("cookie");
let buy_cookie_el = document.getElementById("buy_cookie");
let buy_milk_el = document.getElementById("buy_milk");
let milk_price_el = document.getElementById("milk_price");
let cookie_price_el = document.getElementById("cookie_price");

//initilization of variables
let cookie_count = 0;
let cookie_price = 100;
let milk_count = 0;
let milk_price = 1000;
let money = 0;

//add functions when you click on those element
cookie_el.addEventListener("click", click_cookie); //for example : here it adds the function "click_cookie()" when you click on the element
buy_cookie_el.addEventListener("click", buy_a_cookie);
buy_milk_el.addEventListener("click", buy_a_milk);

show_elements(); //shows every variables at the start
setInterval(do_every_second, 1000); //use the "do_every_second()" function every 1000ms so every 1sec

//show all variables (or visually update them)
function show_elements()
{
    money_counter_el.innerHTML = "money : " + money + "$";
    cookie_counter_el.innerHTML = "number of cookies : " + cookie_count;
    milk_counter_el.innerHTML = "number of milk multiplier : " + milk_count;
    cookie_price_el.innerHTML = "price of cookie : " + cookie_price;
    milk_price_el.innerHTML = "price of milk : " + milk_price;
}

// do those functions every second
function do_every_second()
{
    show_elements();
    add_money();
}

// when you click on cookie you gain +1 money
function click_cookie()
{
    money += 1;
    show_elements();
}

// add money every second at + (1 money + the number of cookies) multiplied buy milk_count
function add_money()
{
    if (milk_count == 0) {
        money += 1 + cookie_count;
    } else {
        money += (1 + cookie_count) * milk_count;
    }
}

// when you try to buy a cookie we try to know if the player have enough money, if so he can buy 1
// when he buy one we substract to his money, the price of the cookie then we mutiply the price of cookies by 1.2, so the next cookie will be harder to get
function buy_a_cookie()
{
    if (money >= cookie_price) {
        cookie_count += 1;
        money -= cookie_price;
        cookie_price *= 1.2;
    }
}

// same thing when you buy milk multiplier but the price will be multiplied by 2
function buy_a_milk()
{
    if (money >= milk_price) {
        milk_count += 1;
        money -= milk_price;
        milk_price *= 2;
    }
}