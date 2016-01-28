$(document).ready(function(){

  for (var i=0; i<7; i++) {
    $("#board").append("<div class='column-div' id='c" + i + "'></div>");

    // console.log($('#' + arrayOfColumnNames[i]));
    var thisColumn = $('#c' + i);

    for (var j=0; j<6; j++) {
      $('#c' + i).append("<div class='row-div' id='c" + i + "-" + j + "'></div>");
    }
  }


});
