// https://scontent-lga3-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/11855885_10100926718367775_5383542053096323050_n.jpg?oh=999ca0e8dedca9ddb002bc335b8f141c&oe=573FE88A

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
    checkDiagonals(column, row);
    checkRows(row);
    console.log(board);
  });

  var checkRows = function(r){
    var row = r;
    var rowArray = [];

    for(var i = 0; i < 7; i++){
      rowArray.push(board[i][row]);
    }
    var arrayString = String(rowArray);
    checkRed(arrayString);
    checkBlack(arrayString);
  };

  var checkDiagonals = function(c, r){
    diagonalBaseLeft(c, r);
    diagonalBaseRight(c, r);
  };

  var diagonalBaseLeft = function(c, r){
    var column = c;
    var row = r;
    while ((column > 0) && (row > 0)){
      column -= 1;
      row -= 1;
    }
    // console.log('column=' + column + 'row=' + row + 'base left');
    var arrayString = diagonalLeftArray(column, row);
    checkRed(arrayString);
    checkBlack(arrayString);
  }

   var diagonalLeftArray = function(c, r) {
    var column = c;
    var row = r;
    var valueArray = []
    do {
      valueArray.push(board[column][row]);
      column += 1;
      row += 1;
    }
    while((column < 7) && (row < 6));
    return String(valueArray);
  };

  var diagonalBaseRight = function(c, r){
    var column = c;
    var row = r;
    while ((column < 6) && (row > 0)){
      column += 1;
      row -= 1;
    }
    console.log('column=' + column + 'row=' + row +'base right')
    var arrayString = diagonalRightArray(column, row);
    checkRed(arrayString);
    checkBlack(arrayString);
  };

  var diagonalRightArray = function(c, r) {
    var column = c;
    var row = r;
    var valueArray = []
    do {
      valueArray.push(board[column][row]);
      column -= 1;
      row += 1;
    }
    while((column > -1) && (row < 6));
    return String(valueArray);
  };

  var checkRed = function(string) {
    if(string.match('red,red,red,red')){
      alert("RED WINNNNSSSSS!!!!!");
    }
  };

  var checkBlack = function(string) {
    if(string.match('black,black,black,black')){
      alert("BLACK WINNNNSSSSS!!!!!")
    }
  };
});


