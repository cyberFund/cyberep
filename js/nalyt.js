$(document).ready(function(){
  if (analytics) {
    $('a[target=_blank]').click(function (e) {
      var url = this.getAttribute("href") ||  this.getAttribute("xlink:href");
      analytics.track("externalLink", {url: url});
    });

    window.onpopstate = function (event) {
      analytics.page("Slide", {url: location.href});
    }
  }
});