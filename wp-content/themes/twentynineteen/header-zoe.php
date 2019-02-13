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
    <link rel="stylesheet" type="text/css" href="<?php echo get_assets_path('zoe')?>/css/main.min.css">
  </head>

  <body <?php body_class(); ?>>
    <header>
      <div class="header-wrapper container">
        <div class="logo">Zoe Beautycorner
          <!-- <img src="<?php echo get_assets_path('zoe')?>/media/logo.png" /> -->
        </div>
        <div class="navbar"></div>
        <div class="navbar-mobile"></div>
      </div>
    </header>
