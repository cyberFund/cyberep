$(document).ready(function(){
  if (analytics) {
    $('a[target=_blank]').click(function (e) {
      var url = this.getAttribute("href") ||  this.getAttribute("xlink:href");
      analytics.track("Clicked External Link", {url: url});
    });

    window.onpopstate = function (event) {
      analytics.page("Slide", {url: location.href});
    }
  }
});
