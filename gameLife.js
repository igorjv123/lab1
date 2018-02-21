const HEIGTH =40;
const WIDTH = 40;
const FILL = 0.5;

function getRandom() {
  return Math.random() <= FILL;
}

function newBoard() {
    var b = [];
    for(var i = 0; i < HEIGTH; i++){
      b[i] = [];
      for(var j =0; j < WIDTH; j++){
          b[i][j] = getRandom();
          process.stdout.write(b[i][j].toString());
      }
      console.log('');
    }

    return b;
}


function outBoard() {
  for (var i = 0; i < HEIGTH; i++) {
    for (var j =0; j < WIDTH; j++) {
      if(temp[i][j] == 1){
        process.stdout.write('•');
      }
      else{
      process.stdout.write('◦');
      }
    }
    console.log('');
  }
  console.log('');
  console.log('');
}

function validIndex(i, j) {
  return i >= 0 && j >= 0 && i < HEIGTH && j < WIDTH;
}

function startLife(){
  var neighborhood;
  var temp2 = [];
    for(var i = 0; i < HEIGTH; i++){
      temp2[i]=[];
      for(var j = 0; j < WIDTH; j++){

          neighborhood = 0;

          if (validIndex(i-1, j) && temp[i-1][j] == 1) neighborhood++;
          if (validIndex(i,j+1)  && temp[i][j+1] == 1) neighborhood++;
          if (validIndex(i+1,j) && temp[i+1][j] == 1) neighborhood++;
          if (validIndex(i,j-1)  && temp[i][j-1] == 1) neighborhood++;
          if (validIndex(i-1,j+1)  && temp[i-1][j+1] == 1) neighborhood++;
          if (validIndex(i+1,j+1)  && temp[i+1][j+1] == 1) neighborhood++;
          if (validIndex(i-1,j-1)  && temp[i-1][j-1] == 1) neighborhood++;
          if (validIndex(i+1,j-1)  && temp[i+1][j-1] == 1) neighborhood++;

          if (temp[i][j] == 1 && (neighborhood == 2 || neighborhood == 3)) {
              temp2[i][j] = 1;
            }
          else if (temp[i][j] == 0 && neighborhood == 3) {
            temp2[i][j] = 1;
           }
          else{
            temp2[i][j] = 0;
           }
      }
    }
    console.log('');

    temp = temp2;

    console.log('\033c');

    outBoard();
    var time = setTimeout(startLife, 100);

}

var temp = newBoard();
outBoard();
var timer = setTimeout(startLife,100);
