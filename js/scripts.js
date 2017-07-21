function Pizza(topping, size) {
  this.toppings = topping;
  this.size = size;
  this.price = 0;
}

function Order() {
  this.pizzas = [];
  this.orderTotal = 0;
}

var getToppings = function() {
  var chosenToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function(){
    chosenToppings.push($(this).val());
  });
  return chosenToppings;
}

var displayOrder = function() {
  $("#orderDisplay").text("You ordered: ");
  for (var i = 0; i < orderIndex; i++) {
    $("#orderDisplay").append("<br>" + "1 " + currentOrder.pizzas[i].size + " pizza with <br>");
    for (var j = 0; j < currentOrder.pizzas[i].toppings.length; j++) {
      $("#orderDisplay").append(currentOrder.pizzas[i].toppings[j] + "<br>");
    }
    if (currentOrder.pizzas[i].toppings.length === 0) {
      $("#orderDisplay").append("No toppings" + "<br>");
    }
    currentOrder.orderTotal += currentOrder.pizzas[i].price
  }
  $("#orderDisplay").append("Cost: $" + currentOrder.orderTotal);
}

Pizza.prototype.addTopping = function() {
  this.toppings = getToppings();
}

Pizza.prototype.chooseSize = function() {
  this.size = $("#size").val();
}

Pizza.prototype.getCost = function() {
  this.price = 5;
  this.price += this.toppings.length;
  if (this.size === "Small") {
    this.price -= 1;
  } else if (this.size === "Large") {
    this.price += 3;
  }
}

Order.prototype.newPizza = function() {
  currentOrder.pizzas[orderIndex] = new Pizza([], "")
}

//var orderedPizza = new Pizza([], "Medium");
var currentOrder = new Order();
var orderIndex = 0;

$(function() {
  $("#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    currentOrder.newPizza();
    currentOrder.pizzas[orderIndex].addTopping();
    currentOrder.pizzas[orderIndex].chooseSize();
    currentOrder.pizzas[orderIndex].getCost();

    orderIndex++;
  });

  $("#orderFinish").submit(function(event) {
    event.preventDefault();

    displayOrder();
    orderIndex = 0;
    currentOrder.orderTotal = 0;
  });
});
