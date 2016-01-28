$(document).ready(function(){
  var arrayOfColumnNames = [
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
  ];

  for (var i=0; i<7; i++) {
    $("#board").append("<div class='column-div' id=" + arrayOfColumnNames[i] + "></div>");

    // console.log($('#' + arrayOfColumnNames[i]));
    var thisColumn = $('#' + arrayOfColumnNames[i]);

    for (var j=0; j<6; j++) {
      $('#' + arrayOfColumnNames[i]).append("<div class='row-div' id=" + arrayOfColumnNames[i] + "-" + j + "></div>");
    }
  }



});
