$(document).ready(function(){
  for (var i=0; i<7; i++) {
    var thisColumn = 'c' + i;

    $("#board").append("<div class='column-div yellow-background-gradient' id=" + thisColumn + "></div>");

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
  var game_finished;
  $('#turn-counter').html("Player 1 Turn");

  $('.column-div').on('click', function(){
    //gives us column that was clicked on
    if(!game_finished) {
      var column = parseInt($(this).attr('id').slice(-1));
      //alternates red and black pieces depending on turn count
      if (board[column].length < 6){
        turns += 1;
        var color = (turns % 2) ? "red" : "black";
        //adds piece to board
        board[column].push(color);
        var row = board[column].length - 1;
        if (color === 'red'){
          $('#c' + column + '-' + row).append('<img src="https://scontent-lga3-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/11855885_10100926718367775_5383542053096323050_n.jpg?oh=999ca0e8dedca9ddb002bc335b8f141c&oe=573FE88A" class="circle-img"/>');
          $('#turn-counter').html("Player 2 Turn");
        } else {
          $('#c' + column + '-' + row).css('background-color', color);
          $('#turn-counter').html("Player 1 Turn");
        }
      }
      checkForWin(column, row);
      // if(!!game_finished){
      //   console.log(game_finished);
      // }
    }
  });

  // if(!!game_finished) {
  //   console.log("test")
  //   $('body').on('click', function(){
  //     debugger;
  //     $('.overlay-words').remove();
  //   })
  // }

  var checkForWin = function(c, r){
    checkDiagonals(c, r);
    checkRows(r);
    checkColumns(c);
  }
    // take target array and turn it into a string (ex string(7)
    // then and deliver that array to the check red/ check black methods

  var checkColumns = function(c){
    var column = c;
    var arrayString = String(board[column]);
    checkRed(arrayString);
    checkBlack(arrayString)
  };

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
    // console.log('column=' + column + 'row=' + row +'base right')
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
      game_finished = "YOU'VE BEEN HUNTED!!!!!!";
      jQuery('<div class="overlay-words overlay">' + game_finished + '<img src="https://scontent-lga3-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/11855885_10100926718367775_5383542053096323050_n.jpg?oh=999ca0e8dedca9ddb002bc335b8f141c&oe=573FE88A" class="fifty-percent-size"/></div>').appendTo(document.body);
      setTimeout(function() {
        $('.overlay-words.overlay').fadeOut('slow');
      }, 2000);
    }
  };

  var checkBlack = function(string) {
    if(string.match('black,black,black,black')){
      game_finished = "BLACKNESS WINS!!!!!!";
      jQuery('<div class="overlay-words overlay">' + game_finished + '</div>').appendTo(document.body);
      setTimeout(function() {
        $('.overlay-words.overlay').fadeOut('slow');
      }, 2000);
    }
  };
  // take target array and turn it into a string (ex string(7)
    // then and deliver that array to the check red/ check black methods

  var stringColumn = function(c){
    var column = c;
    var columnString = String(board[column]);
    return columnString;
  };
});


