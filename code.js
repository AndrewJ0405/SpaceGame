/**
 * Lab Goal: This lab was designed to teach you
 * how to find collisions with many objects
 * 
 * Lab Description: Detect Collision
 */

// Initialize variables
var bg1={x:0, y:0, w:320, h:450, s:2, img:"bg1"};
var bg2={x:-320, y:0, w:320, h:450, s:2, img:"bg2"};
var ast1={x:randomNumber(0,320), y:-10, w:50, h:50, s:2, img:"ast1"};
var ast2={x:randomNumber(0,320), y:-10, w:50, h:50, s:2, img:"ast2"};
var ast3={x:randomNumber(0,320), y:-10, w:50, h:50, s:2, img:"ast3"};
var rkt={x:randomNumber(0,320), y:360, w:50, h:100, s:2, img:"rkt"};
var score=0;
var maxScore=30;

drawBackground();



timedLoop(100, scrollBg);

function drawBackground(){
  image(bg1.img, "assets/6062b.png");
  image(bg2.img, "assets/6062a.png");
  textLabel('score', "Score: " + score);
  setPosition("score", 10, 10, 100, 25);
  setProperty(bg1.img,"fit", "cover");
  setProperty(bg2.img,"fit", "cover");
  
}



function scrollBg(){
  bg1.x+=bg1.s;
  bg2.x+=bg2.s;
setPosition(bg1.img, bg1.x, bg1.y, bg1.w, bg1.h);
setPosition(bg2.img, bg2.x, bg2.y, bg2.w, bg2.h);
}

drawAsteroids();
function drawAsteroids(){
  image(ast1.img, "assets/meteor.png");
  image(ast2.img, "assets/meteor2.png");
  image(ast3.img, "assets/rock.png");
  setPosition(ast1.img, ast1.x, ast1.y, ast1.w, ast1.h);
  setPosition(ast2.img, ast2.x, ast2.y, ast2.w, ast2.h);
  setPosition(ast3.img, ast3.x, ast3.y, ast3.w, ast3.h);

}

drawRocket();
function drawRocket(){
  image(rkt.img, "assets/rocket.gif");
  setPosition(rkt.img, rkt.x, rkt.y, rkt.w, rkt.h);
}

timedLoop(100, moveAsteroids);
function moveAsteroids(){
        ast1.y = ast1.y + ast1.s;
        ast2.y = ast2.y + ast2.s;
        ast3.y = ast3.y + ast3.s;
  setPosition("ast1", ast1.x, ast1.y, 50, 50);
        setPosition("ast2", ast2.x, ast2.y, 50, 50);
         setPosition("ast3", ast3.x, ast3.y, 50, 50);
         
  checkCollision(rkt, ast1);

checkCollision(rkt, ast2);

checkCollision(rkt, ast3);

reachBottom(ast1);
reachBottom(ast2);
reachBottom(ast3);
}

function bounce(){
  for(var i = 0; i < 4; i++){
    if (ball.x>320 || ball.x<=0 ){
    ball.speedX=-ball.speedX;
  }
  if(ball.y>450 || ball.y<=0){
    ball.speedY=-ball.speedY;
  }
  }
}


 function checkCollision(obj1, obj2){
 var xOv=Math.max(0, Math.min(obj1.x+obj1.w, obj2.x+obj2.w)-Math.max(obj1.x,obj2.x)+1)>0 ;
  var yOv=Math.max(0, Math.min(obj1.y+obj1.h, obj2.y+obj2.h)-Math.max(obj1.y,obj2.y)+1)>0 ;
 if (xOv>0 && yOv>0){
   startOver(obj2);
   score=score+2;
   setText("score", "Score: "+ score);
if (score>=maxScore){
stopTimedLoop();
} 
}
}
  
  
function startOver(obj1){
            obj1.y = randomNumber(-50,-20);
            obj1.x = randomNumber(10,300);
            obj1.s = randomNumber(3,8);
            setPosition(obj1.img, obj1.x, obj1.y, obj1.w, obj1.h);
  
 }
 


 function reachBottom(obj1){
   if (obj1.y>=450){
     startOver(obj1);
     score=score-1;
     setText("score", "Score: "+score);
   }
 }
 
 onEvent("screen1", "keydown", function(event) {
    if (event.key === "Left") {
        rkt.x = rkt.x - rkt.s; 
    }
    if (event.key === "Right") {
        rkt.x = rkt.x + rkt.s; 
    }
    if (event.key === "Down") {
        rkt.y = rkt.y + rkt.s; 
    }
    if (event.key === "Up") {
        rkt.y = rkt.y - rkt.s; 
    }
    setPosition("rkt", rkt.x, rkt.y, rkt.w, rkt.h);
   
 });
 
 
