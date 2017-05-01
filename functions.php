<?php

    // [divider class="divider" style="property:value;" ]<p>raw HTML content</p>[/divider]
    function divider_func( $atts, $content=null ) {
        extract( shortcode_atts( array( // extract turns the array['vars'] into individual $vars
            'class' => '',
            'style' => '',
        ), $atts , 'divider' ));

        $classList    = $class != '' ? ' class="'.$class.'" ' : '' ;
        $inlineStyles = $style != '' ? ' style="'.$style.'" ' : '' ;

        $div  = '<app-divider '.$classList.$inlineStyles.'><!--app-divider-->';
        $div .= do_shortcode($content);
        $div .= '</app-divider>';

        return $div;
    }
    add_shortcode( 'divider', 'divider_func' );

?>
