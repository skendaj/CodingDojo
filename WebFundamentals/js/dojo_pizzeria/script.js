function pizzaOven( crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var sausageChicago = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"])
var capricciosa = pizzaOven ("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives","onions"])

// 2 pizzas extra
var diavola = pizzaOven ("hand tossed", "marinara", "mozzarella", ["spicy salami", "hot chilli peppers"])
var napoletana = pizzaOven ("napoletana", "traditional", "mozzarella di bufala", ["fresh basil","olive oil"])

// bonus
var pizzas = [sausageChicago, capricciosa, diavola, napoletana];
var randomPizza = pizzas[Math.floor(Math.random() * pizzas.length)];

console.log(randomPizza);