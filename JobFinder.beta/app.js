// JQuery - Document Ready
$(document).ready(function () {

  // Holds API parameters 
  var queryURL = "https://api.careeronestop.org/v1/occupation/et6abP3EMSuWNka/FullStackDeveloper/y/0/10" 

  $.ajax({
    url: queryURL,
    data: data,
    success: success,
    dataType: json
  })
})