$(function () {
    $("#jobs").on("click", function () {
        // Holds API parameters 
        var queryURL = "http://api.adzuna.com:80/v1/api/jobs/us/histogram?app_id=0a8e3b3c&app_key=5012c69d179c3977a351ac16021305e6&what=javascript%20developer&where=Illinois"
        
        // Credentials: app_id = 0a8e3b3c app_key = 5012c69d179c3977a351ac16021305e6
        // 
        // 20 Dev jobs in US
        // what_exclude=java&where=london&sort_by=salary&salary_min=30000&full_time=1&permanent=1&content-type=application/json
        
      //  console.log(queryURL); //! success
        // Calling function:
        getJobs();
  
        function getJobs() {
          $.get(queryURL, function (data, status) {
             console.log(data); //! success
              for (var i = 0; i < 5; i++) {
                var obj = data[i]; //! error 'cannot read property 0 of undefined
                console.log(obj); 
                var div = $("<div>");
        //        div.html(obj.location);
         //       console.log(obj.location);
         //       console.log(obj.description);
         //       $("#selection").append(div);
              //  $("#description").append(div);
         //       var selection = $("<h5>").text(obj.company.display_name);
         //       $("#selection").append(selection);
         //       var description = $("<h6>").text(obj.description);
        //        $("#selection").append(description);
                /*  getJobs();
                  function getJobs() {
                    $.ajax({
                      url: queryURL,
                      data: results,
                      success: success,
                      dataType: 'json'
                    }); */
                //  $.get(queryURL, function (results, status) {
  
          }
        })
      }
    })
  })