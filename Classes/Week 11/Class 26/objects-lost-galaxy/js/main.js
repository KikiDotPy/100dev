//Create a pizza object that has four properties and three methods

const pizza = {};

pizza.salsa = true;
pizza.cheese = true;
pizza.toppings = [mushrooms, peperoni, ananas];
pizza.price = 5.30;

pizza.cooked = function() {
    console.log("Pizza is ready!")
}
pizza.inforna = function() {
    console.log("Time to infornare")
}
