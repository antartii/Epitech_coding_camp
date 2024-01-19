//main clicker
let epitech_el = document.getElementById("epitech");

//infos and counts
let infos_el = document.getElementById("informations");
let years_el = document.getElementById("years");
let GPA_el = document.getElementById("GPA");
let credits_el = document.getElementById("credit_count");
let xp_el = document.getElementById("xp_count");
let win_el = document.getElementById("win");
document.getElement

//workshop shop
let price_workshop_el = document.getElementById("price_workshop");
let workshop_count_el = document.getElementById("workshop_count");
let buy_workshop_el = document.getElementById("buy_workshop");

//years shop
let shop_el = document.getElementById("shop");
let price_year_el = document.getElementById("price_year");
let year_count_el = document.getElementById("years_count");
let buy_year_el = document.getElementById("buy_year");

//other variables
let years = 0;
let GPA = 0;
let credits = 0;
let xp = 0;
let workshop_price = 3;
let workshop_count = 0;
let price_year = 60;

function reset_values()
{
    credits = 0;
    xp = 0;
    workshop_price = 3;
    workshop_count = 0;
    price_year = 60;
}

function animate_epitech()
{
    if (epitech.style.width != "60%") {
        epitech_el.style.transition = "0s";
        epitech_el.style.width = "60%";
    }
    setTimeout(() => {
        epitech_el.style.width = "57%";
        epitech_el.style.transition = "0.05s";
    }, 1);
    setTimeout(() => {
        epitech_el.style.transition = "0s";
        epitech_el.style.width = "60%";
    }, 50);
}

function show()
{
    years_el.innerHTML = "year : " + years;
    GPA_el.innerHTML = "GPA : " + GPA;
    credits_el.innerHTML = "credits : " + credits;
    xp_el.innerHTML = "xp : " + xp;

    price_workshop_el.innerHTML = "price for a workshop : " + workshop_price + " xp";
    workshop_count_el.innerHTML = "number of workshops : " + workshop_count;

    price_year_el.innerHTML = "price for a year : " + 60 + " credits";
    year_count_el.innerHTML = "year : " + years;
}

function add_xp(xp_added)
{
    xp += xp_added;
    if (xp >= 10) {
        add_credit(Math.floor(xp / 10));
        xp %= 10;
    }
}

function add_credit(credit_added)
{
    credits += credit_added;
    if (credits >= 100) {
        xp = 0;
        credits = 100;
        GPA = ((xp + (credits * 10) - 600) / (400 / 40)) / 10;
        add_year(Math.floor(credits / 100));
        reset_values();
    }
}

function add_year(year_added)
{
    years += year_added;
    if (years >= 6) {
        win();
    }
}

function buy_a_workshop(workshop_buyed)
{
    if (xp + (credits * 10) >= workshop_price * workshop_buyed) {
        xp -= Math.ceil(workshop_price * (2.5**(workshop_buyed - 1)));
        if (xp < 0) {
            credits -= Math.ceil(Math.abs(xp) / 10);
            add_xp(Math.ceil(Math.abs(xp) / 10) * 10);
        }
        workshop_price = Math.ceil(workshop_price * (2.5**workshop_buyed));
        workshop_count += 1;
    }
}

function buy_a_year(year_buyed)
{
    let old_GPA = GPA;

    if (credits >= price_year * year_buyed) {
        GPA = ((xp + (credits * 10) - 600) / (400 / 40)) / 10;
        if (years > 0) {
            GPA = (old_GPA * years + GPA) / (years + 1)
        }
        credits -= price_year;
        add_year(1 * year_buyed);
        reset_values();
    }
}

function win()
{
    infos_el.hidden = true;
    shop_el.style.display = "none";
    win_el.hidden = false;
}

//button events
epitech_el.addEventListener("click", function() {add_xp(1 + (1 * workshop_count)), show(), animate_epitech()});
buy_workshop_el.addEventListener("click", function() {buy_a_workshop(1), show()});
buy_year_el.addEventListener("click", function() {buy_a_year(1), show()})

show();
