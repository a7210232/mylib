import AI from "./ai.js";
import w from "./win.js"
import board from "./board.js"
var  ai = new AI();
export function Start(first,round) {

     
    if(board.board){

        for(var i=0;i<board.board.length;i++) {
            for(var j=0;j<board.board[i].length;j++) {
              // 空位，对双方都打分
              board.board[i][j] = 0
              
              // board[i][j] = R.empty
            }
          }
          if(first){
            board.board[7][7] = 1
          }
    }
   
    ai.start(first,round);
  
    console.info(board.toString())
}
export function begin() {
    ai.begin();
}
export function put(x,y) {
    console.info(x+":"+y)
   let p= ai.turn(x,y);
   console.info(p)
   return p;
}

export function backward() {
    ai.backward();
}
export function forward() {
    ai.forward();
}
export function isWin() {
    console.info(board.toString())
   return w(board.board)
}
export function set (x, y, r) {
    console.info(x+":"+y+"--"+r);
  ai.set(x, y, r)
}