const HEIGTH = 20;
const WIDTH = 20;
const MAX = 2;
const MIN = 0;

function getRandom() {
  return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function newBoard() {
    var b = [];
    for(var i = 0; i < HEIGTH; i++){
      b[i] = [];
      for(var j =0; j < WIDTH; j++){
          b[i][j] = getRandom();
      }
    }
    return b;
}

function outBoard() {
    for (var i = 0; i < HEIGTH; i++) {
      for (var j =0; j < WIDTH; j++) {
        if(temp[i][j] == 1){
          process.stdout.write('*');
        }
        else{
        process.stdout.write('  ');
        }
      }
      console.log('');
    }
    console.log('');
    console.log('');

}

function startLife(){
  var temp2 = [];
    for(var i = 0; i < HEIGTH; i++){
      temp2[i]=[];
      for(var j =0; j < WIDTH; j++){
          var neighborhood = 0;

          if (temp[fpm(i)-1][j]==1) neighborhood++;
          if (temp[i][fpp(j)+1]==1) neighborhood++;
          if (temp[fpp(i)+1][j]==1) neighborhood++;
          if (temp[i][fpm(j)-1]==1) neighborhood++;

          if (temp[fpm(i)-1][fpp(j+1)] == 1) neighborhood++;
          if (temp[fpp(i)+1][fpp(j+1)] == 1) neighborhood++;
          if (temp[fpm(i)-1][fpm(j-1)] == 1) neighborhood++;
          if (temp[fpp(i)+1][fpm(j-1)] == 1) neighborhood++;

          if(neighborhood == 2 || neighborhood == 3) {
            temp2[i][j] = 1;
          }
          else {
            temp2[i][j] = 0;
          }
      }
    }

    for(var i = 0; i < HEIGTH; i++){
      for(var j =0; j < WIDTH; j++){
        temp[i][j] = temp2[i][j];
      }
    }
    console.log('\033c');
    outBoard();

    var timer = setTimeout(startLife,100);

    //console.clear();
}

function fpm(i){
  if(i==0) return 20;
  else return i;
}

function fpp(i){
  if (i==19) return -1;
  else return i;
}

var temp = newBoard();
outBoard();
var timer = setTimeout(startLife,1000);





//startLife();
