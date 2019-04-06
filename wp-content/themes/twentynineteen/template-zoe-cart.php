<?php /* Template Name: ZoeCartPage */

$template_slug = 'zoe';
get_header($template_slug);
?>

<?php echo do_shortcode('[woocommerce_cart]') ?>

<?php
get_footer($template_slug);
