---
layout: page
title: "SnipsManager Version 2.3 Released"
date: 2012-02-06
categories: [ Announcements]
teaser: "The new version of SnipsManager is available for download. We fixed some bugs and added a few more features: Fixed the text wrapping bug in snippets containing long strings of text without spaces. Improved snippet"

---
The new version of SnipsManager is available for download. We fixed some bugs and added a few more features:

- Fixed the text wrapping bug in snippets containing long strings of text without spaces.
- Improved snippet submission summary page, parse.php.
- Added a Use CAPTCHA checkbox to the snippet submission page to display a CAPTCHA image before displaying the snippet.Useful for snippets that you don't want indexed by search engines.
- Added URL shortening. Now snippet links are example.com/123 instead of example.com/show.php?id=123.
- Added a few more functions for those of you integrating SnipsManager with other scripts: **ch_getcodetitle:** Get a snippets title. **ch_codeexists:** Checks if the supplied snippet ID exists in the codes table. **ch_getcodepassword:** Returns a snippet's password. **ch_getcodecaptcha:** Checks if the code should ask for CAPTCHA. **ch_getcodetype:** Returns a snippet's programming language/script ID.

We also posted updated the [FAQ](/faq/).

As always, please [let me know](/contact/) if you have any questions or concerns. You can also visit the [features page](/snipsmanager/features/) for a complete list of the features and try the [online demo](/snipsmanager/demo/) of the front end and admin area.