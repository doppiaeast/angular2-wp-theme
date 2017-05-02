<?php

    function shortcode_func( $atts, $content=null ) {
        ob_start(); ?>

        <app-shortcode <?php foreach($atts as $att => $val){ echo $att.'="'.$val.'"'; } ?> >
            <?php echo do_shortcode($content); ?>
        </app-shortcode>

        <?php return ob_get_clean();
    }
    add_shortcode( 'shortcode', 'shortcode_func' );

?>
