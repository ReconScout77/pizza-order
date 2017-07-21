function Pizza(topping, size) {
  this.toppings = topping;
  this.size = size;
  this.price = 0;
}

// function Order() {
//   this.pizzas = [];
//   this.orderTotal = 0;
// }

var getToppings = function() {
  var chosenToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function(){
    chosenToppings.push($(this).val());
  });
  return chosenToppings;
}

var displayOrder = function() {
  $("#orderDisplay").text("You ordered: ");
  $("#orderDisplay").append("<br>" + "1 " + orderedPizza.size + " pizza with <br>");
  for (var i = 0; i < orderedPizza.toppings.length; i++) {
    $("#orderDisplay").append(orderedPizza.toppings[i] + "<br>");
  }
  if (orderedPizza.toppings.length === 0) {
    $("#orderDisplay").append("No toppings" + "<br>");
  }
  $("#orderDisplay").append("Cost: $" + orderedPizza.price);
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

var orderedPizza = new Pizza([], "Medium");

$(function() {
  $("#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    orderedPizza.addTopping();
    orderedPizza.chooseSize();
    orderedPizza.getCost();

    displayOrder();
  });
});
