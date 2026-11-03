// The support email address, split up so basic spam bots can't read it from the page.
// To change it, edit these two lines.
var SUPPORT_EMAIL_NAME = 'ticketrader.support';
var SUPPORT_EMAIL_DOMAIN = 'gmail.com';

document.querySelectorAll('[data-support-email]').forEach(function (el) {
  var address = SUPPORT_EMAIL_NAME + '@' + SUPPORT_EMAIL_DOMAIN;
  var link = document.createElement('a');
  link.href = 'mailto:' + address + '?subject=' + encodeURIComponent('Ticket Trader support');
  link.textContent = address;
  el.replaceChildren(link);
});
