;/* safify.js
 *
 * https://github.com/jamiesonbecker/safify.js
 * Copyright (c) 2013 Jamieson Becker, http://jamiesonbecker.com
 * MIT License
 * 
 */

function html_safify(htm) {

    return htm || ""
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .replace(/\n/g, ' <br> ');

}

function safer_html(htm) {

    // restore just a few safe HTML tags, see also
    // https://github.com/cowboy/javascript-linkify

    return html_safify(htm)
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

function html_unsafify(htm) {
    // this is a minimal amount of escaping according to
    // https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet
    // to prevent XSS.
    return htm
        .replace(/<br>/g, '\n')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, '/');
}
