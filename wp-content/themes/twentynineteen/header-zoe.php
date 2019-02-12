<!DOCTYPE html>
<html>

<head>
	<?php if (have_posts()) {
    $title = get_the_title();
    $description = get_field("zoe-description");
}

$template_slug = 'zoe';
?>
	<title>
		<?php echo $title ?>- Zoe</title>
	<!-- META TAGS -->
	<meta charset="utf-8" />
	<meta name="description" content="<?php echo $description ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="canonical" href="<?php echo get_field("sub_domain") ?>">
	<link rel="icon" href="<?php echo get_bloginfo('template_url') ?>/favicon.svg"
	 sizes="any" type="image/svg+xml">
	<!-- LINK TAGS -->

	<link rel="stylesheet" type="text/css" href="<?php echo get_assets_path($template_slug)?>/css/bootstrap.min.css">

</head>

<body>
<header>
	<div class="logo"><img src="<?php echo get_assets_path($template_slug)?>/media/logo.png" /></div>
	<div class="navbar"></div>
	<div class="navbar-mobile"></div>
</header>
