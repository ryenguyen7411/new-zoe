<?php /* Template Name: ZoeHome */

$template_slug = 'zoe';
get_header($template_slug);
?>

<section class="banner">
  Hello there
</section>

<?php echo do_shortcode('[product_page id="9"]') ?>

<?php echo get_template_directory_uri()?>

<?php
get_footer($template_slug);
