$(document).ready(function(){
  for (var i=0; i<7; i++) {
    var thisColumn = 'c' + i;

    $("#board").append("<div class='column-div yellow-background-gradient' id=" + thisColumn + "></div>");

    for (var j=6; j>=0; j--) {
      if(j === 6){
        $('#' + thisColumn).append("<div class='row-div no-background' id=" + thisColumn + "-" + j + "></div>");
      } else {
        $('#' + thisColumn).append("<div class='row-div' id=" + thisColumn + "-" + j + "><div class='circle-img holes centered'></div></div>");
      }
    }
  }

  $('form').on('submit', function(){
    location.reload();
  })

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

  var hover_effect = function(){
    if(turns % 2 === 0) {
      $('.column-div').hover(function() {
        var column = parseInt($(this).attr('id').slice(-1));
        $('#c' + column + '-6').html('<img src="https://scontent-lga3-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/11855885_10100926718367775_5383542053096323050_n.jpg?oh=999ca0e8dedca9ddb002bc335b8f141c&oe=573FE88A" class="token"/>')
      }, function() {
        var column = parseInt($(this).attr('id').slice(-1));
        $('#c' + column + '-6').empty();
      });
    } else {
      $('.column-div').hover(function() {
        var column = parseInt($(this).attr('id').slice(-1));
        $('#c' + column + '-6').html('<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1mB6fWO499QeabseMxpa67okKCEI6-0joJSRhBC-uDa98cn1ctg" class="token"/>')
      }, function() {
        var column = parseInt($(this).attr('id').slice(-1));
        $('#c' + column + '-6').empty();
      });
    }
  }

  hover_effect();

  $('.column-div').on('click', function(e){

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

        // lines 39-42 are the logic for dropping a circle.
        console.log($(this));
        var wrapper = $(this);
        console.log(wrapper);
        var parentOffset = wrapper.offset();
        console.log(parentOffset);
        var relX = e.pageX - parentOffset.left + wrapper.scrollLeft();
        var relY = e.pageY - parentOffset.top + wrapper.scrollTop();

        if (color === 'red'){
          console.log($('#c' + column + '-' + row + ' .holes'));
          $('#c' + column + '-' + row + ' .holes').replaceWith('<img src="https://scontent-lga3-1.xx.fbcdn.net/hprofile-xpt1/v/t1.0-1/p160x160/11855885_10100926718367775_5383542053096323050_n.jpg?oh=999ca0e8dedca9ddb002bc335b8f141c&oe=573FE88A" class="circle-img centered"/>');
          $('#c' + column + '-6').empty();
        } else {
          $('#c' + column + '-' + row + ' .holes').replaceWith('<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1mB6fWO499QeabseMxpa67okKCEI6-0joJSRhBC-uDa98cn1ctg" class="circle-img centered"/>');
          $('#c' + column + '-' + row + ' .holes').replaceWith("<div class='circle-img black-token centered'></div>");
          $('#c' + column + '-6').empty();
        }
      }
      checkForWin(column, row);
      hover_effect();
    }
  });

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
      game_finished = "THE HUNTER HAS BECOME THE HUNTED!!!!!!";
      jQuery('<div class="overlay-words overlay">' + game_finished + '<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1mB6fWO499QeabseMxpa67okKCEI6-0joJSRhBC-uDa98cn1ctg" class="fifty-percent-size"/></div>').appendTo(document.body);
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


