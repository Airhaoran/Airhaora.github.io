var flag = 0;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=a7bfc2959a8766c57fecaf821f0675aa", function(json) {

      var a = "<p>123</p>"
      name = json.name;
      country = json.sys.country;
      ic = json.weather[0].icon;
      weather = json.weather[0].main;
      temp = json.main.temp;
      temp = temp - 273;
      temp = Math.round(temp);
      tempF = (temp+32)*(9/5);
      tempF = Math.round(tempF);
      $(".city").html(name + " ," + country);
      $(".weather").html(temp+ "C ,  " + weather);
      $(".icon").html("<img  src='http://openweathermap.org/img/w/" + ic + ".png'>");
      if (temp > 0 && temp < 10) {
        $(".com").html("It's chill, put on your jacket");
      } else if (temp > -15 && temp < 0) {
        $(".com").html("Shit, it's frozen!");
      } else if (temp < -15) {
        $(".com").html("Let it go, let it go~~~");
      } else if (temp > 10 && temp < 25) {
        $(".com").html("It's just about right temp!");
      } else if (temp > 25) {
        $(".com").html("It's hot!");
      }
      $(".change").click(function(){
        if(flag == 1){
          $(".weather").html(temp+ "C ," + weather);
          flag = 0;
        }
        else{
          $(".weather").html(tempF+ "F ," + weather);
          flag =1;
        }
      });
    });

  });

}
