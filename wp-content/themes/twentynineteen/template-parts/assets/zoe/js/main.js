$(document).ready(function () {
  $('.navbar > .fa-bars').click(function () {
    $('.navbar').addClass('show')
  })

  $(document).click(function (e) {
    $target = $(e.target)
    if (!$target.closest('.navbar').length){
      $('.navbar').removeClass('show')
    }
  })

  $(window).scroll(function() {
      if ($(window).scrollTop() >= ($('.entry-summary').offset().top + $('.entry-summary').height())) {
        $('.btn-scroll-top').addClass('show');
        $('.cart-fix-bottom').addClass('show');
        $('.xoo-wsc-basket').removeClass('show');
        syncBottomCart();
      } else {
        $('.btn-scroll-top').removeClass('show');
        $('.cart-fix-bottom').removeClass('show');
        $('.xoo-wsc-basket').addClass('show');
      }
    });

    $('.btn-scroll-top').click(function() {
      var productListTop = $('.entry-summary').offset().top - 64
      $('html, body').stop().animate({scrollTop: productListTop}, 500)
    })

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

  function syncBottomCart() {
    // Sync value from product

  }
});
