<?php /* Template Name: FaqsPage */

$template_slug = 'zoe';
get_header($template_slug);
?>

<div class="faqs-container bg-gray">
  <div class="container">
    <div class="help-center faqs-content">
      <div class="title">Help Center</div>
      <div class="search-container">
        <input id="search-box" class="search-box" placeholder="Start typing">
        <div class="search-suggestions hide">
        </div>
      </div>
    </div>
    <div class="faqs faqs-content">
      <div class="title">FAQS</div>
      <div class="content">
      </div>
    </div>
  </div>
</div>

<script src="<?php echo get_assets_path($template_slug) ?>/js/faqs.js"></script>
<?php
get_footer($template_slug);
