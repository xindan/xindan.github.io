/*!
 * EmailSpamProtection (jQuery Plugin)
 * Version: 1.0
 * Date: 2010 July
 * Author: Mike Unckel
 * Description and Demo: http://unckel.de/labs/jquery-plugin-email-spam-protection
 *
 * HTML: <span class="email">info [at] domain.com</span>
 * JavaScript: $("body").emailSpamProtection("email");
 *
 */
(function(a){a.fn.emailSpamProtection=function(b){return a(this).find("."+b).each(function(){var d=a(this);var c=d.text().replace(" [at] ","&#64;");d.html('<a href="mailto:'+c+'">'+c+"</a>")})}})(jQuery);
