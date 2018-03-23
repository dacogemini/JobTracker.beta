// JQuery - Document Ready
$(function () {
      $("#jobs").on("click", function () {
          // Holds API parameters 
          var queryURL = "https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=0a8e3b3c&app_key=5012c69d179c3977a351ac16021305e6&results_per_page=10&what=javascript"
          console.log(queryURL);
          // Calling function:
          getJobs();

          function getJobs() {
            $.get(queryURL, function (data, status) {
               // console.log(data); //! success
                for (var i = 0; i < 5; i++) {
                  var obj = data.results[i]; 
                  console.log(obj); 
                  var div = $("<div>");
                  div.html(obj.company);
                  console.log(obj.company.display_name);
                  console.log(obj.description);
                  $("#selection").append(div);
                //  $("#description").append(div);
                  var selection = $("<h5>").text(obj.company.display_name);
                  $("#selection").append(selection);
                  var description = $("<h6>").text(obj.description);
                  $("#selection").append(description);
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
