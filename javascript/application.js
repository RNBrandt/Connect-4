var board = [
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

// Click on column
//jquery will know that you clicked on a specific column
//CSS will provide links for the specific columns
//(#:id).on('click', function(){
// board.(this.attr[:id])
// })


// add turn counter
// How to know we've won
// everytime a piece is placed we need to run a JS function to check for connect 4
// check for 4 in a column (easy)
//  - for loop : 0 index -> 2nd index
//      check next three values, if all are the same, return won
//       (only check the column that was clicked on)
// check for 4 in a row (harder)
//  - for loop: look at the row in which the piece lands, and right and left
//  - recursion? base cases 1) color doesnt' match, 2) there are 4 in a row
//  -   needs to look to the right and left (target column -1 or + 1) of the placed piece (or until it reaches the edge of the board)
//  - while loop? While there are matching colors || there aren' 4 in a row || you haven't hit the edge keep looking
// check for 4 diagonal (tricky)
//  - from every piece placed, look over one, up one, recursion(see if we can kick it's ass)
//        - base cases 1) color doesn't match
//        -            2)there are 4 in a row
//  - for every piece placaed, look down one over one.
