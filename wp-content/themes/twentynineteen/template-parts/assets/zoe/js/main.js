$(document).ready(function () {
  $(document).click(function (e) {
    e.preventDefault()
    $target = $(e.target)

    const clickOnNavbar = $target.closest('.navbar').length > 0;
    if (clickOnNavbar) {
      $('.navbar').toggleClass('show')
    } else {
      $('.navbar').removeClass('show')
    }
  })

  $(window).scroll(function() {
    if ($(window).scrollTop() >= ($('.entry-summary').offset().top + $('.entry-summary').height())) {
      $('.btn-scroll-top').addClass('show');
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
    const $cart = $('.cart-fix-bottom')
    if ($cart.hasClass('show')) return

    $cart.addClass('show')
    // Sync value from product
    const $img = $('.woocommerce-product-gallery img').clone()
    const $title = $('.entry-summary .product_title').clone()
    const $price = $('.woocommerce-variation-price .amount').clone()

    const $selectVariant = $('table.variations select')
    const $selectQuantity = $('.single_variation_wrap .quantity')

    const $btnAddToCart = $('.single_variation_wrap button[type="submit"]')
    const $btnAddToCartCloned = $btnAddToCart.clone()
    $btnAddToCartCloned.click(function (e) {
      $('.single_variation_wrap button[type="submit"]').click()
    })

    const $infoElem = $('<div>').attr('class', 'info')
      .append($img)
      .append($('<div>').attr('class', 'content').append($title)
    )

    $cart.html('')
      .append($infoElem)
      .append($selectVariant.clone())
      .append('<i class="fas fa-chevron-down"></i>')
      .append($selectQuantity.clone())
      .append($price)
      .append($btnAddToCartCloned)

    const bothselects = $("table.variations select, .cart-fix-bottom select");
    bothselects.change(function(e) {
      bothselects.val(this.value);
    });

    $('.cart-fix-bottom .quantity >.fa-minus').click(function () {
      this.nextElementSibling.stepDown()
      $selectQuantity.find('input[type=number]')[0].stepDown()
    })
    $('.cart-fix-bottom .quantity >.fa-plus').click(function () {
      this.previousElementSibling.stepUp()
      $selectQuantity.find('input[type=number]')[0].stepUp()
    })
  }
});
