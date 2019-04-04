<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>

    <link rel="stylesheet" type="text/css" href="<?php echo get_assets_path('zoe')?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="<?php echo get_assets_path('zoe')?>/css/main.min.css">
  </head>

  <body <?php body_class(); ?>>
    <header>
      <div class="header-wrapper container">
        <div class="logo">
          <img src="<?php echo get_assets_path('zoe')?>/media/logo.png" />
        </div>
        <div class="navbar">
          <i class="fa fa-bars"></i>
          <ul>
            <?php echo $GLOBALS['global_cf']['cart_url'] ?>
            <li><a href="/">Home</a></li>
            <li><a href="<?php echo get_option('cart_url') ?>">Cart</a></li>
            <li><a href="<?php echo get_option('faqs_url') ?>">Faqs</a></li>
          </ul>
        </div>
      </div>
    </header>
