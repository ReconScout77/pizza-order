function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 5;
}

Pizza.prototype.addTopping = function() {
  this.topping = $("#toppings").val();
  this.price += 1;
}

Pizza.prototype.chooseSize = function() {
  this.size = $("#size").val();
  if (this.size === "Small") {
    this.price -= 1;
  } else if (this.size === "Large") {
    this.price += 3;
  }
}

var orderedPizza = new Pizza("none", "Medium");

$(function() {
  $("#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    orderedPizza.addTopping();
    orderedPizza.chooseSize();

    $("#orderDisplay").text("$" + orderedPizza.price);
  });
});
