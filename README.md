safify.js
=========


jQuery Safify is a simple jQuery plugin to sanitize potentially risky HTML to
safe HTML based on OWASP while leaving in safe HTML tags. Put another way, it
does things like convert `<script>` to `&lt;script&gt;` for on-screen display
while leaving safe tags like `<b>` in place.


Introduction
------------

If you're loading HTML from untrusted sources (for example, a comment from a
website user) and don't know how clean the HTML is, this plugin is for you.

Here's an easy test to see if your code is currently unsafe.

Insert this into an input field, save it the data, and display the saved HTML
in a div (not back in the same textarea or input field):

    <script>  alert(1);  </script>

If you get an alert box, then your code is vulnerable to XSS. Or, put another
way, `$(".div").html("   <script> alert(1) </script>   ")` is unsafe, but replacing
`html()` with `safify()` will fix it.



How to Use
----------

jQuery safify is very easy to use. Instead of using $.html, just use $.safify
instead.

    var evil = "<h1>Headline</h1><p>This is evil: <script>alert(1);</script></p>";
    $("body").safify(evil);


The jQuery safify plugin relies on included pure Javascript methods:
`safify()`, `unsafify()`, and `strict_safify()`:

*   `safify()` includes safify but then reverses some safe HTML, such as bold,
    italics, etc. This is the most useful version generally. The following tags
    are restored (no attributes are allowed):

    -   `b`
    -   `strong`
    -   `em`
    -   `i`
    -   `table`
    -   `tr`
    -   `td`
    -   `li`
    -   `ul`
    -   `ol`
    -   `h1`
    -   `h2`
    -   `h3`
    -   `h4`
    -   `h5`
    -   `h6`
    -   `p`
    -   `br`

*   `strict_safify()` escapes HTML according to OWASP standards and escapes all
    dangerous characters.

*   `unsafify()` removes that escaping, which is useful before displaying in an
    input or textarea field (although disable HTML-ified editors', such as MCE,
    on those input fields since those HTML editors might not be safe.)



Reference
---------

[https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet]
