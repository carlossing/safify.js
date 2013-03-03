safify.js
=========

Safify.js converts potentially risky HTML to 'safer' HTML based on OWASP.

Safify.js is a very small and lightweight library to do a minimal amount of escaping according to
[https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet]
to help reduce XSS attacks.

Use before displaying or using untrusted text in an Javascript app:

    var bad_html = '<script>alert("you've been XSSd");</script>';
    $(".body").html( html_safify(bad_html) );

There's also a minimal `html_unsafify()` to get back to the potentially evil html and a `safer_html()` function that leaves a few trusted tags in if they don't have any attributes. (This list is minimal, pull requests accepted)
