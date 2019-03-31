<?php /* Template Name: ZoeHome */

$template_slug = 'zoe';
get_header($template_slug);
?>

<section class="banner container">
  <img class="desktop" src="<?php echo get_field('zoe_banner') ?>" />
  <img class="mobile" src="<?php echo get_field('zoe_banner_mobile') ?>" />
</section>

<?php echo do_shortcode('[product_page id="'.get_field('product_id').'"]') ?>

<section class="detail container">
  <div class="figure">
    <div class="before" style="background-image: url('<?php echo get_assets_path('zoe') ?>/media/before_600x.jpg')">
    </div>
    <div class="after" style="background-image: url('<?php echo get_assets_path('zoe') ?>/media/after_600x.jpg')"></div>
  </div>
  <div class="content">
    <small>— BEFORE & AFTER</small>
    <h3>EYEBROW<br />TRANSFORMATION</h3>
    <p>Say goodbye to gaps! With sparse brows, there’s always room for improvement. Brow Tattoo Pen makes it its job to
      make up for lost brow impact by offering up soft hair-like strokes. The end result is a full, naturally-defined
      brow.</p>
  </div>
</section>

<section class="main-content container">
  <img class="desktop" src="<?php echo get_assets_path('zoe') ?>/media/main-content.png" />
  <img class="mobile" src="<?php echo get_assets_path('zoe') ?>/media/main-content-mobile.jpg" />
</section>

<section class="reason container">
  <h4>WHY YOU'LL LOVE IT</h4>
  <div class="reason-item">
    <h5>WHAT IS IT</h5>
    <p>Brow Tattoo Pen Makeup fills in eyebrows with natural-looking hair-like strokes that last up to 24 hours.
    </p>
  </div>
  <div class="reason-item">
    <h5>BENEFITS</h5>
    <p>Achieving perfectly defined natural-looking eyebrows has never been easier! Our 1st eyebrow tinting pen
      features
      an exclusively-designed multi-prong tip that delivers the look of natural, hair-like strokes instantly. Our
      long-lasting formula delivers up to 24 hour wear that is smudge-proof and transfer-proof.
    </p>
  </div>
  <div class="reason-item">
    <h5>COST EFFECTIVE, NO PAIN
    </h5>
    <p>The Brow Tattoo Pen give you basically the exact micro-blading's look without the huge bill and pain.
    </p>
  </div>
  <div class="reason-item">
    <h5>LONG-LASTING
    </h5>
    <p>Brow Tattoo Pen fills in eyebrows with natural-looking hair-like strokes that last up to 24 hours.
    </p>
  </div>
  <div class="reason-item">
    <h5>NATURRALLY DEFINED BROWS
    </h5>
    <p>Achieving perfectly defined natural-looking eyebrows has never been easier.
    </p>
  </div>
  <div class="reason-item">
    <h5>WATER-PROOF
    </h5>
    <p>Our long-lasting formula delivers up to 24 hour wear that is smudge-proof and water-proof.
    </p>
  </div>
  <div class="reason-item">
    <h5>HOW TO USE/APPLY
    </h5>
    <p>Step 1. Always apply the Brow Tattoo Pen on clean eyebrows and use before applying other face makeup.
    </p>
    <p>Step 2. Angle the multi-prong tip up across the eyebrow and draw hair-like strokes from eyebrow anchor to tail
      using a small, slow motion. Repeat as desired for added intensity.
    </p>
    <p>Step 3. To saturate the tip of the Brow Tattoo Pen, hold the pen face down for 5 seconds or gently wipe the tip
      on a clean tissue before continuing the application.
    </p>
  </div>
</section>

<?php
get_footer($template_slug);
