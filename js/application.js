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

    for (var j=5; j>=0; j--) {
      $('#' + arrayOfColumnNames[i]).append("<div class='row-div' id=" + arrayOfColumnNames[i] + "-" + j + "></div>");
    }
  }

  var board = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];

  var turns = 0;

  $('.column-div').on('click', function(){
    //gives us column that was clicked on
    var column = parseInt($(this).attr('id').slice(-1));
    //alternates red and black pieces depending on turn count
    if (board[column].length < 6){
      turns += 1;
      var color = (turns % 2) ? "red" : "black";
      //adds piece to board
      board[column].push(color);
      var row = board[column].length - 1;
      $('#c' + column + '-' + row).css('background-color', color);
    }
    console.log(board);
  });

});
