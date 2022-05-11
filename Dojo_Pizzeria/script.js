function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var sandwich = {};
    sandwich.crustType = crustType;
    sandwich.sauceType = sauceType;
    sandwich.cheeses = cheeses;
    sandwich.toppings = toppings;
    return sandwich;
}

function randomPizza(){
    var sandwich = {};

    // arrays containing each var type data
    var crustType = ["flatbread", "deep dish", "hand tossed"]; 
    var sauceType = ["traditional", "marinara", "alfredo"];
    var cheeses = ["mozzarela", "feta", "cheddar", "four cheese"];
    var toppings = ["pepperoni", "sausage", "ham", "mushrooms", "olives", "onions"];

    // the variable is = to the random index of the array, dictated by .lrngth - 1, rounded down. 
    sandwich.crustType = crustType[Math.floor(Math.random() * (crustType.length - 1))];
    sandwich.sauceType = sauceType[Math.floor(Math.random() * (sauceType.length - 1))];
    sandwich.cheeses = cheeses[Math.floor(Math.random() * (cheeses.length - 1))];
    sandwich.toppings = toppings[Math.floor(Math.random() * (toppings.length - 1))];
    
    return sandwich;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("deep dish", "marinara", "four cheese", ["pepperoni", "ham"]);
var p4 = pizzaOven("flatbread", "traditional", "cheddar", ["pepperoni", "sausage"]);

var p5 = randomPizza();
console.log(p5);

