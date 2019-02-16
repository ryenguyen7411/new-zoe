$(document).ready(function () {
  $('select#color').after('<i class="fas fa-chevron-down"></i>')

  $('.quantity > input[type=number]').before('<i class="fas fa-minus"></i>')
  $('.quantity > input[type=number]').after('<i class="fas fa-plus"></i>')

  $('.quantity >.fa-minus').click(function () { this.nextElementSibling.stepDown() })
  $('.quantity >.fa-plus').click(function () { this.previousElementSibling.stepUp() })

  $('.woocommerce-cart-form > table').before('<h4 class="cart-title">Cart</h4>')
});
