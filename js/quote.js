var haha = "";
var haha1 = "";
var haha2 = "";
function setbackground() {
  window.setTimeout("setbackground()", 5000); // 5000 milliseconds delay

  var index = Math.round(Math.random() * 9);

  var ColorValue = "FFFFFF"; // default color - white (index = 0)

  if (index == 1)
    ColorValue = "FFCCCC"; //peach
  if (index == 2)
    ColorValue = "CCAFFF"; //violet
  if (index == 3)
    ColorValue = "A6BEFF"; //lt blue
  if (index == 4)
    ColorValue = "99FFFF"; //cyan
  if (index == 5)
    ColorValue = "D5CCBB"; //tan
  if (index == 6)
    ColorValue = "99FF99"; //lt green
  if (index == 7)
    ColorValue = "FFFF99"; //lt yellow
  if (index == 8)
    ColorValue = "FFCC99"; //lt orange
  if (index == 9)
    ColorValue = "CCCCCC"; //lt grey

  document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

var safeColors = ['00', '33', '66', '99', 'cc', 'ff'];
var rand = function() {
  return Math.floor(Math.random() * 6);
};
var randomColor = function() {
  window.setTimeout("setbackground()", 5000); // 5000 milliseconds delay

  var index = Math.round(Math.random() * 9);
  var r = safeColors[rand()];
  var g = safeColors[rand()];
  var b = safeColors[rand()];
  return "#" + r + g + b;
};

$(document).ready(function() {
  $('#button3').click(function() {
    $('#boxA').each(function() {
      $(this).css('background', randomColor());
    });
  });
  $('#button3').click(function() {
   
   var cb = Math.round(new Date().getTime() / 1000); $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="+cb, function(a) {
      haha = a[0].content + "<p>&mdash; " + a[0].title + "</p>"
      haha1 = a[0].content;
      haha2 = a[0].title
  $(".quote").html(haha);
});
});
  $('#button1').click(function() {  
    var link = document.getElementById("tweet");
    var twee = "";
    var ha123 = "123"
    haha1 = haha1.replace("<p>", '"');
    haha1 = haha1.replace("</p>", '"');
    twee =  "http://twitter.com/home/?status=" + haha1 + haha2 ;
   
    //twee = twee.concat(haha);
    //twee = twee.concat(haha);
    link.setAttribute('href', twee);
   });


});
