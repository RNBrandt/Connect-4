$(document).ready(function(){
  for (var i=0; i<7; i++) {
    var thisColumn = 'c' + i;

    $("#board").append("<div class='column-div' id=" + thisColumn + "></div>");

        for (var j=5; j>=0; j--) {
      $('#' + thisColumn).append("<div class='row-div' id=" + thisColumn + "-" + j + "></div>");
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
    // console.log(column);
    // console.log(row);
    stringColumn(column);
    console.log(column);
    console.log(columnString);
    diagonalBaseLeft(column, row);
    diagonalBaseRight(column,row);
    checkRed(columnString);
    checkBlack(columnString);
    // console.log(board);
  });

  var diagonalBaseLeft = function(c, r){
    var column = c;
    var row = r;
    while ((column > 0) && (row > 0)){
      column -= 1;
      row -= 1;
    }
    console.log('column=' + column + 'row=' + row + 'base left');
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
    //console.log(valueArray);
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
    //console.log(valueArray);
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
  // take target array and turn it into a string (ex string(7)
    // then and deliver that array to the check red/ check black methods

  var stringColumn = function(array){
    var column = array
    columnString = String(board[column]);
    return columnString;
  };


});


