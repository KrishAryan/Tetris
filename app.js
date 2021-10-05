document.addEventListener('DOMContentLoaded',() => {
 const grid=document.querySelector('.grid')
 let squares = Array.from(document.querySelectorAll('.grid div'))
 const ScoreDisplay= document.querySelector('#score')
 const StartBtn= document.querySelector('#start-button')
 const displaySquares=document.querySelectorAll('.mini-grid div')
 let nextRandom=0
 const displayWidth=4
 const displayIndex=0
 const width=10
 const upNextTetrominoes=[
  [1,displayWidth+1,(displayWidth*2)+1,2],
  [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
  [1, displayWidth, displayWidth + 1, displayWidth + 2],
  [0, 1, displayWidth, displayWidth + 1],
  [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1]
 ]
 function displayShapes(){
   displaySquares.forEach( index=>{index.classList.remove('tetromino')})

 upNextTetrominoes[nextRandom].forEach(index=>{displaySquares[displayIndex+index].classList.add('tetromino')})
}
 
 const lTetromino=[
     [1,width+1,(width*2)+1,2],
     [width,width+1,width+2,width*2+2],
     [1,width+1,width*2,width*2+1,width*2+1],
     [width,width*2,width*2+1,width*2+2]
 ]
 const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]

const theTetrominoese = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

let currentPosition = 6
let currentRotation =0
nextRandom=Math.floor(Math.random()*theTetrominoese.length)
console.log(nextRandom)
let random=nextRandom
let current = theTetrominoese[random][currentRotation]
function draw() {
   current.forEach(index=> {squares[currentPosition+index].classList.add('tetromino') })

}
draw()
function undraw() {
  current.forEach(index=>{
    squares[currentPosition+index].classList.remove('tetromino')
  })
  
}
let timerId=setInterval(moveDown,1000)
function moveDown(){
  undraw()
  currentPosition+=width
  draw()
  freeze()
 
}
function controls(e)
{
  if(e.keyCode===37)
  {
    moveLeft()
  } 
  else if(e.keyCode===38)
  {
    rotate()
  }
  else if(e.keyCode===39)
  {
    moveRight()
  }
  else if(e.keyCode===40)
  {
    moveDown()
  }
 
}
 document.addEventListener('keyup',controls)

function freeze(){
  if(current.some(index=>squares[currentPosition +index + width].classList.contains('taken'))){
    current.forEach(index=>squares[currentPosition +index].classList.add('taken'))
    currentRotation =0
    random=Math.floor(Math.random()*theTetrominoese.length)
    current = theTetrominoese[random][currentRotation]
    currentPosition = 4
    console.log(nextRandom)
     displayShapes()
    draw()
   
  }
}
function rotate(){
  undraw()
  currentRotation++
  if(currentRotation===current.length){
    currentRotation=0
  }
  current = theTetrominoese[random][currentRotation]
  draw()
}
function moveLeft(){
  undraw()
const isAtLeftEdge = current.some(index=>(currentPosition+index)%width===0)
if(!isAtLeftEdge) currentPosition-=1
if(current.some(index=>squares[currentPosition +index].classList.contains('taken'))){
  currentPosition+=1
}
draw()
}
function moveRight(){
  undraw()
  const isAtRightEdge = current.some(index=>(currentPosition+index)%width===9)
  if(!isAtRightEdge) currentPosition+=1
  if(current.some(index=>squares[currentPosition +index].classList.contains('taken'))){
    currentPosition-=1
  }
  draw()
  }
}


)
