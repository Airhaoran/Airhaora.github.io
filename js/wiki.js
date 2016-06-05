<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

var playListURL1 = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
var playListURL2 = '&callback=?'
var response;

function myFunction() {
  var x = document.getElementById("search");
  text = x.elements[0].value;
  response = text;
};

//lalan = myFunction();
$(".mysearch").click(function() {
  var turn = response;
  document.getElementById("search-box").style.paddingTop = "50px";
  $.getJSON(playListURL1 + turn + playListURL2, function(data) {
    var html = " ";

    var turn = response;

    for (var i = 0; i < Object.keys(data.query.pages).length; i++) {

      var keys = Object.keys(data.query.pages)[i];

      html += "<div class='block'>" + "<a href='http://en.wikipedia.org/?curid=" + keys + "' target='_blank'>";
      html += "<p class='inner'>" + data.query.pages[keys].title + "</p>"
      html += "<p class='inner'>" + data.query.pages[keys].extract + turn + "</p>" + "</a></div>";

    }

    $("#try").html(html);

  });
});

$(function() {
  $("form").submit(function() {
    return false;
  });
});

//$('#searchB').click();
$("#searchB").keypress(function(event) {
  if (event.keyCode == 13) {
    $('#searchB').click();
    //  validate(); doesn't need to be called from here
  }
});
