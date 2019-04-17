<?php /* Template Name: ZoeContactPage */

$template_slug = 'zoe';
get_header($template_slug);
?>

<section class="page-content mw-720">
  <div class="container">
    <h3><?php the_title(); ?></h3>
    <?php
  // TO SHOW THE PAGE CONTENTS
    while ( have_posts() ) : the_post(); ?>
    <?php the_content(); ?>
    <?php
  endwhile; //resetting the page loop
  wp_reset_query(); //resetting the page query
  ?>

    <?php echo do_shortcode('[wpforms id="' .get_field('contact_form_id'). '" title="false" description="false"]') ?>
  </div>
</section>

<?php
get_footer($template_slug);
