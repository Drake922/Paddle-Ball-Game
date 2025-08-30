// Js: create Game Loop; Detect collission(detect event when ball touches wall);
// Js: Movement; Move of paddle when i press < > arrow keys left and right
//Js: State Management: when game is one, or when it is game over, score
//Js: Timers: setInterval, requestAnimationFrame(libry)

// JQuery: Dom Maninpulation: to easily select elements, change text
           //Event Handling
           //Animations

           
$(document).ready(function(){
    // alert("document is ready and linked to jquery")
    let score = 0;
    let ballX = 0;
    let ballY = 0;
    let ballSpeedX = 4;
    let ballSpeedY = 4;
    let paddleX=0;
    let paddleY=0;
    let ballSize = 20;
    let paddleWidth = 80
    let paddleHeight = 20
    let paddleSpeed = 8
    let gameAreaHeight;
    let gameAreaWidth;


    let requestAnimationFrameId;
    let isGameRunning = false;

})
    const $scoreDisplay = $('#score');
        const $startButton = $('#start button');
        const $gameArea = $('#gameArea');    
        const $restartButton = $('#restartButton');    
        const $ball = $('#ball');
        const $paddle = $('#paddle');
        const $gameOverMessage = $('#game-over-message');  
        const $finalScoreDisplay = $('#final score');  
    function initializeGame(){
        gameAreaHeight= $game-area.height();
        gameAreaWidth = $gameArea.width();
        score = 0;
        $scoreDisplay.text(score);
        $gameOverMessage.hide();
        $startButton.show();
        $startButton.prop('diabled',false).text("Start Game");
        ballX = gameAreaWidth/2 - ballSize/2;
        ballY = gameAreaHeight/2 -ballSize/2;
        paddleX = gameAreaWidth/2 - ballSize/2;
        ballSpeedX =(Math.random()>0.5 ? 1 : -1)*4;
        ballSpeedY =4;



    }; 
    $startButton.on("click",function(){
      initializeGame();
      ballX+=ballSpeedX;  
    })           
    

function gameLoop(){
        if(!isGameRunning) return
    ballX+=ballSpeedX
    ballY+=ballSpeedY
    if(ballX+ballSize>gameAreaWidth || ballX<0 ){
        ballSpeedX *=-1
    }
    if (ballY<0){
      ballSpeedY+=-1
      ballY =0 
    }
    const ballBottom=ballY+ballSize;
    const paddleTop= gameAreaHeight -paddleHeight
    const paddleLeft= paddleX
    const paddleRight= paddleX+paddleWidth
    if(ballBottom>=paddleTop&&
        ballX +ballSize> paddleLeft&&
        ballX<paddleRight){
            ballSpeedY*=-1;
            ballY=paddleTop-ballSize
            score++
            $scoreDisplay.text(score);
            if (Math.abs(ballSpeedY)<15){
                ballSpeedY*=1.05;
            }
            if (Math.abs(ballSpeedX)<15){
                ballSpeedX*=1.05;
            }



        }
        if (ballY +ballSize>gameAreaHeight){
            endGame();
            return;

        }
        updateElementPositions();
        animationFrameId = requestAnimationFrameId(gameloop);
        
        function updateElementPositions(){
            $ball.css({left: ballX + "px", top:ballY + "px"});
            $paddle.css({left: paddleXX + "px"});

        }
let keyPressed= {}
    $(document).on("keydown", function(e) {
    keysPressed[e.key] = true;
});

    $(document).on("keyup", function(e) {
    keysPressed[e.key] = false;
});


    }
    function hanlePaddleMovement(){
      if(isGameRunning){
        if(keyPressed["ArrowLeft"]|| keyPressed["a"]){
            paddleX -= paddleSpeed;
        }
        if(keyPressed["ArrowRight"]|| keyPressed["d"]){
            paddleX -= paddleSpeed;
        }
         paddleX=Math.max(0,Math.min(paddleX,gameAreaWidth-paddleWidth));
         updateElementPositions();
      } 
      requestAnimationFrame(hanlePaddleMovement);
    }

