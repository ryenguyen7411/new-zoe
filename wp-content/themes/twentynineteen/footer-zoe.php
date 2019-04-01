<?php
$template_slug = 'zoe';
?>
<script src="<?php echo get_assets_path($template_slug) ?>/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<?php echo get_assets_path($template_slug) ?>/js/vendor/bootstrap.js"></script>
<script src="<?php echo get_assets_path($template_slug) ?>/js/main.js"></script>

<?php wp_footer();?>

<section class="social container">
  <img src="<?php echo get_assets_path('zoe') ?>/media/fb.svg" />
  <img src="<?php echo get_assets_path('zoe') ?>/media/instagram.svg" />
</section>

<footer>
  <div class="container">
    <div class="logo">Zoe Beautycorner</div>
    <div class="copyright">Copyright © 2019 Zoe</div>

    <div class="partners">
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/amex.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/apple-pay.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/diner.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/discover.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/jcb.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/mastercard.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/paypal.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/vimeo.svg" />
      <img src="<?php echo get_assets_path('zoe') ?>/media/partners/visa.svg" />
    </div>
  </div>
</footer>

<div class="pulse-button btn-scroll-top">
  <span class="icon"><i class="fa fa-shopping-cart"></i></span>
  SHOP NOW
</div>

<div class="cart-fix-bottom">
  <div class="info">

  </div>
  <div class="variant">
    <!-- SELECT VARIANT -->
    <!-- QUANTITY SELECT -->
  </div>

  <div class="btn-add-to-cart">
    <div class="price-info">
      {% if product.compare_at_price_max > product.price %}
      <div class="old-price">{{ current_variant.compare_at_price | money }}</div>
      {% endif %}
      <div class="new-price">{{ current_variant.price | money }}</div>
    </div>
    <button type="submit" name="add" id="AddToCart-{{ section.id }}"
      class="btn btn--fill btn--regular btn--color{% if section.settings.enable_payment_button %} btn--shopify-payment-btn btn--secondary-accent{% endif %}">
      <span id="AddToCartText-{{ section.id }}">Add to cart</span>
    </button>
  </div>
</div>

</body>

</html>
