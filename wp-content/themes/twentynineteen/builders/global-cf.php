<?php

//Custom Fields Settings
function add_global_cf() {
	add_options_page('Global Custom Fields', 'Global Custom Fields', '8', 'functions', 'global_cf');
}

add_action('admin_menu', 'add_global_cf');

function global_cf() {
?>
<div class='wrap'>
  <h2>Global Custom Fields</h2>
  <form method="post" action="options.php">
    <?php wp_nonce_field('update-options') ?>
    <?php $global_cf = array(
      (object)['title' => 'Cart URL', 'field' => 'cart_url'],
      (object)['title' => 'Faqs URL', 'field' => 'faqs_url']
    ) ?>

    <?php foreach($global_cf as $var) { ?>
    <p>
      <strong><?php echo $var->title ?>:</strong><br />
      <input type="text" name="<?php echo $var->field ?>" size="45" value="<?php echo get_option($var->field); ?>" />
    </p>
    <?php } ?>

    <p><input type="submit" name="Submit" value="Update Options" /></p>

    <input type="hidden" name="action" value="update" />
    <input type="hidden" name="page_options"
      value="<?php echo join(',', array_map(function($item) { return $item->field; }, $global_cf)) ?>" />
  </form>
</div>
<?php
}
?>
