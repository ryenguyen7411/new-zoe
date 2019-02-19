$(document).ready(function () {
  function rearrange() {
    $('select#color').after('<i class="fas fa-chevron-down"></i>')

    $('.quantity > input[type=number]').before('<i class="fas fa-minus"></i>')
    $('.quantity > input[type=number]').after('<i class="fas fa-plus"></i>')

    $('.quantity >.fa-minus').click(function () { this.nextElementSibling.stepDown() })
    $('.quantity >.fa-plus').click(function () { this.previousElementSibling.stepUp() })

    $('.woocommerce-cart-form > table').before('<h4 class="cart-title">Cart</h4>')

    $('.return-to-shop').after(`<p class="return-to-homepage">
      <a class="button btn-primary" href="/">
        Return to homepage</a>
    </p>`)

    const couponElem = $('.woocommerce-cart-form__contents .actions > .coupon')
    couponElem.children('button[type=submit]').text('Apply')
    $('.wc-proceed-to-checkout').before(couponElem)

    $('button[name=apply_coupon]').text('Apply')
  }

  rearrange()
  $('input[type=number]').change(() => {
    rearrange()
  })
});
