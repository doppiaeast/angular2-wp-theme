<?php

    // [divider class="divider" style="property:value;" ]<p>raw HTML content</p>[/divider]
    function divider_func( $atts, $content=null ) {
        ob_start(); ?>

        <app-divider <?php foreach($atts as $att => $val){ echo $att.'="'.$val.'"'; } ?> >
            <?php echo do_shortcode($content); ?>
        </app-divider>

        <?php return ob_get_clean();
    }
    add_shortcode( 'divider', 'divider_func' );

?>
