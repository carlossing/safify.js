;/* safify.jquery.js
 *
 * https://github.com/jamiesonbecker/jquery-safify
 * Copyright (c) 2013 Jamieson Becker, http://jamiesonbecker.com
 * MIT License
 * 
 */

function safify(htm) {

    // this prevents possible HTML attacks using the absolutely bare-minimum
    // essentials as specified by OWASP
    // https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet

    // See jQuery plugin at end for example usage

    return htm
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .replace(/\n/g, ' <br> ');

}

function saferify(htm) {

    // This runs normal safify but puts back in
    // a few safer HTML tags.
    // This may eventually be supplemented with
    // https://github.com/cowboy/javascript-linkify

    return safify(htm)
        // bold
        .replace(/&lt;b&gt;/gi, " <b> ")
        .replace(/&lt;&#x2F;b&gt;/gi, " </b> ")
        // emphasis
        .replace(/&lt;em&gt;/gi, " <em> ")
        .replace(/&lt;&#x2F;em&gt;/gi, " </em> ")
        // italics
        .replace(/&lt;i&gt;/gi, " <i> ")
        .replace(/&lt;&#x2F;i&gt;/gi, " </i> ")
        // h1
        .replace(/&lt;h1&gt;/gi, " <h1> ")
        .replace(/&lt;&#x2F;h1&gt;/gi, " </h1> ")
        // li
        .replace(/&lt;li&gt;/gi, " <li> ")
        .replace(/&lt;&#x2F;li&gt;/gi, " </li> ")
        // ul
        .replace(/&lt;ul&gt;/gi, " <ul> ")
        .replace(/&lt;&#x2F;ul&gt;/gi, " </ul> ")
        // ol
        .replace(/&lt;ol&gt;/gi, " <ol> ")
        .replace(/&lt;&#x2F;ol&gt;/gi, " </ol> ")
        // table
        .replace(/&lt;table&gt;/gi, " <table> ")
        .replace(/&lt;&#x2F;table&gt;/gi, " </table> ")
        // tr
        .replace(/&lt;tr&gt;/gi, " <tr> ")
        .replace(/&lt;&#x2F;tr&gt;/gi, " </tr> ")
        // td
        .replace(/&lt;td&gt;/gi, " <td> ")
        .replace(/&lt;&#x2F;td&gt;/gi, " </td> ")
        // p
        .replace(/&lt;p&gt;/gi, " <p> ")
        .replace(/&lt;&#x2F;p&gt;/gi, " </p> ")
        // br
        .replace(/&lt;br&gt;/gi, " <br> ")
        ;
}

function unsafify(htm) {
    // only use this for input or non-HTML textarea plugins
    // (don't use with Javascript HTML editors!)
    return htm
        .replace(/<br>/g, '\n')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, '/');
}


/*
 *  jQuery Safify
 *  Ignored if jQuery is not loaded.
 *
 *  This allows some minimal HTML while keeping out the bad stuff.
 *  (If you want to convert all HTML to plain text like pure safify.js, jQuery
 *  already has $.text built-in.)
 *
 *  To use, just replace your normal:
 *      $("div").html("some unknown html");
 *         or:
 *      $("div").text("some unknown html");
 *
 *  with:
 *      $("div").safify("some unknown html");
 *
 *  It's really that simple!
 *
 *  var evil = "<script>alert(1);</script>";
 *  $("body") safify(evil);
*/

(function($) {
    $.fn.safify = function(evil) {
        this.html(saferify(evil));
        return this;
    }
})(jQuery);

