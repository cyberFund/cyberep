$(document).ready(function(){
  if (analytics) {
    $('a[target=_blank]').click(function (e) {
      var url = this.getAttribute("href") ||  this.getAttribute("xlink:href");
      analytics.track("Clicked Cyberep External Link", {url: url});
    });

    $('a.share-reveal-facebook').click(function (e) {
         var url = this.getAttribute("href") ||  this.getAttribute("xlink:href");
         analytics.track("Clicked Cyberep Social", {url: url});
       });
       
    $('a.twitter-share-button').click(function (e) {
         var url = this.getAttribute("href") ||  this.getAttribute("xlink:href");
         analytics.track("Clicked Cyberep Social", {url: url});
       });

    window.onpopstate = function (event) {
      analytics.page("Slide", {url: location.href});
    }
  }
});
