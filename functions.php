<?php

    function shortcode_func( $atts, $content=null, $tag='' ) {
        
        $output = '<'.$tag.' ';               // opening tag
        foreach($atts as $att => $val) {
            $output .= $att.'="'.$val.'" ';   // echo all attributes from the shorcode
        }
        $output .= '>';                       // close the opening tag
        $output .= do_shortcode($content);    // content
        $output .= '</'.$tag.'>';             // closing tag

        return $output;

    }
    add_shortcode( 'app-shortcode', 'shortcode_func' );
    add_shortcode( 'any-tag-name-you-want', 'shortcode_func' );

?>
