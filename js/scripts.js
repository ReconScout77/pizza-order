function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 5;
}

var getToppings = function() {
  var chosenToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function(){
    chosenToppings.push($(this).val());
  });
  return chosenToppings;
}

Pizza.prototype.addTopping = function() {
    this.topping = getToppings();
    this.price += (1 * this.topping.length);
}

Pizza.prototype.chooseSize = function() {
  this.size = $("#size").val();
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

    $("#orderDisplay").text("$" + orderedPizza.price);
  });
});
