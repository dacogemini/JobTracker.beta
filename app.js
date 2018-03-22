// JQuery - Document Ready
$(function () {
  $("#jobs").on("click", function () {
    // Holds API parameters 
    var queryURL = "http://api.adzuna.com:80/v1/api/jobs/us/search/3?app_id=0a8e3b3c&app_key=5012c69d179c3977a351ac16021305e6&what=javascript"
    console.log(queryURL);
   
    function getJobs() {
      $.ajax({
        url: queryURL,
        data: data,
        success: success,
        dataType: 'JSON'
      });
    //  $.get(queryURL, function (results, status) {
         console.log(data);
        //    console.log(data._embedded.events[0].name);
        //    console.log(data._embedded.events.length);
        for (var i = 0; i < 5; i++) {
          var obj = data.description[i];
          console.log(obj);
          console.log(obj.description);
          var div = $("<div>"); // Create a div
          div.html(obj.description);
          $("#job-results").append(div);
          var jobDescription = $("<h1>").text(obj.description);
        }
      }
    })
  })
 
