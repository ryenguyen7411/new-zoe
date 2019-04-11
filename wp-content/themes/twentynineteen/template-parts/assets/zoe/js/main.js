const DISCOUNT_TABLE = [
  { min: 5, discount: 0.3 },
  { min: 4, discount: 0.25 },
  { min: 3, discount: 0.2 },
  { min: 2, discount: 0.15 },
]

$(document).ready(function () {
  $(document).click(function (e) {
    $target = $(e.target)

    const clickOnNavbar = $target.closest('.navbar .navbar-btn').length > 0;
    if (clickOnNavbar) {
      e.preventDefault()
      $('.navbar').toggleClass('show')
      $('.navbar .navbar-btn').toggleClass('fa-bars fa-times')
    } else {
      $('.navbar').removeClass('show')
      $('.navbar .navbar-btn').addClass('fa-bars').removeClass('fa-times')
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() >= ($('.entry-summary').offset().top + $('.entry-summary').height())) {
      $('.btn-scroll-top').addClass('show');
      $('.xoo-wsc-basket').removeClass('show');
      //syncBottomCart();
    } else {
      $('.btn-scroll-top').removeClass('show');
      $('.cart-fix-bottom').removeClass('show');
      $('.xoo-wsc-basket').addClass('show');
    }
  });

  $('.btn-scroll-top').click(function () {
    var productListTop = $('.entry-summary').offset().top - 64
    $('html, body').stop().animate({ scrollTop: productListTop }, 500)
  })

  function rearrange() {
    $('select#color').after('<i class="fas fa-chevron-down"></i>')

    $('.quantity > input[type=number]').before('<i class="fas fa-minus"></i>')
    $('.quantity > input[type=number]').after('<i class="fas fa-plus"></i>')

    $('.quantity >.fa-minus').click(function () { this.nextElementSibling.stepDown() })
    $('.quantity >.fa-plus').click(function () { this.previousElementSibling.stepUp() })

    $('.woocommerce-cart-form > table').before('<h4 class="cart-title">Cart</h4>')

    const $title = $('.entry-summary .product_title').clone().addClass('mobile')
    $('.entry-summary .product_title').addClass('desktop')
    $('.single-product .product').prepend($title)

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
    const $price = $('.single_variation_wrap .woocommerce-variation-price') || $('.entry-summary .price')
    // STILL HAVE EMPTY PRICE

    const $selectVariant = $('table.variations select')
    const $selectQuantity = $('.single_variation_wrap .quantity')

    const $btnAddToCart = $('.single_variation_wrap button[type="submit"]')
    const $btnAddToCartCloned = $btnAddToCart.clone()
    $btnAddToCartCloned.click(function (e) {
      $('.single_variation_wrap button[type="submit"]').click()
    })

    const $infoElem = $('<div>').attr('class', 'info')
      .append($img)
      .append($('<div>').attr('class', 'content').append($title).append($price.clone()))
    const $optionElem = $('<div>').attr('class', 'option')
      .append($selectVariant.clone())
      .append('<i class="fas fa-chevron-down"></i>')
      .append($selectQuantity.clone())
    const $actionElem = $('<div>').attr('class', 'action')
      .append($btnAddToCartCloned)

    $cart.html('')
      .append($infoElem)
      .append($optionElem)
      .append($actionElem)

    const bothselects = $("table.variations select, .cart-fix-bottom select");
    bothselects.change(function (e) {
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

  // var mutationObserver = new MutationObserver(function(mutations) { handleUpdatePopupCart() });
  // mutationObserver.observe($('.xoo-wsc-modal').get(0), { attributes: true, });

  function handleUpdatePopupCart() {
    const $products = $('.xoo-wsc-product');

    let productCount = 0;
    $products.each(function () {
      const quantity = $(this).find('.xoo-wsc-price span').first();
      productCount += parseInt(quantity.html()) || 0
    })
    const discount = DISCOUNT_TABLE.find(d => d.min <= productCount);

    $products.each(function () {
      $(this).find('.xoo-wsc-price-updated').remove()
      $(this).find('.xoo-wsc-price').addClass('hide')

      const quantity = parseInt($(this).find('.xoo-wsc-price span').first().html()) || 0;
      const priceElem = $(this).find('.xoo-wsc-price .old-price .amount').first()
      const currency = priceElem.html().split('</span>')[0].split('<span class="woocommerce-Price-currencySymbol">').pop()

      const oldPrice = parseFloat(priceElem.html().split('</span>')[1].replace(',', ''))
      const newPrice = oldPrice - oldPrice * (DISCOUNT_TABLE[productCount] || 0)

      const newPriceElem = $('<div class="xoo-wsc-price-updated">')
        .append(`<p>Subtotal: ${currency}${oldPrice}</p>`)
        .append(discount ? `<p>
            ${discount.min} items discount applied:
            - ${currency}${discount.discount * oldPrice}
          </p>` : '')
        .append(`<p>Total: ${currency}${newPrice}</p>`)

      $(this).append(newPriceElem)
    })
  }
});
