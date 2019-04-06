<?php /* Template Name: ZoeCheckoutPage */

$template_slug = 'zoe';
get_header($template_slug);
?>

<?php echo do_shortcode('[woocommerce_checkout]') ?>

<?php
get_footer($template_slug);
