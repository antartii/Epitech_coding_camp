let money_counter_el = document.getElementById("money_counter");
let cookie_counter_el = document.getElementById("cookie_counter");
let milk_counter_el = document.getElementById("milk_counter");
let cookie_el = document.getElementById("cookie");
let buy_cookie_el = document.getElementById("buy_cookie");
let buy_milk_el = document.getElementById("buy_milk");
let milk_price_el = document.getElementById("milk_price");
let cookie_price_el = document.getElementById("cookie_price");
let cookie_count = 0;
let cookie_price = 100;
let milk_count = 0;
let milk_price = 1000;
let money = 0;

cookie_el.addEventListener("click", click_cookie);
buy_cookie_el.addEventListener("click", buy_a_cookie);
buy_milk_el.addEventListener("click", buy_a_milk);

show_elements();
setInterval(do_every_second, 1000);

function show_elements()
{
    money_counter_el.innerHTML = "money : " + money + "$";
    cookie_counter_el.innerHTML = "number of cookies : " + cookie_count;
    milk_counter_el.innerHTML = "number of milk multiplier : " + milk_count;
    cookie_price_el.innerHTML = "price of cookie : " + cookie_price;
    milk_price_el.innerHTML = "price of milk : " + milk_price;
}

function do_every_second()
{
    show_elements();
    add_money();
}

function click_cookie()
{
    money += 1;
    show_elements();
}

function add_money()
{
    if (milk_count == 0) {
        money += 1 + cookie_count;
    } else {
        money += (1 + cookie_count) * milk_count;
    }
}

function buy_a_cookie()
{
    if (money >= cookie_price) {
        cookie_count += 1;
        money -= cookie_price;
        cookie_price *= 1.2;
    }
}

function buy_a_milk()
{
    if (money >= milk_price) {
        milk_count += 1;
        money -= milk_price;
        milk_price *= 2;
    }
}