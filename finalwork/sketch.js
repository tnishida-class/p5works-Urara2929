// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  a = windowWidth / 2;
  b = windowHeight / 1.1;
}

function draw(){
  background(255, 192, 203);
  //noStroke();
  fill(0);
  ellipse(x, y, 30);
  x += vx;
  y += vy;
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || (b-y-15 < 0 && x > a-100 && x < a+100)){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, y);
  if(y > height){return collision();}

  strokeWeight(5);
  line(a - 100, b, a + 100, b);
  if(keyIsDown(LEFT_ARROW)){ a -= 10; }
  if(keyIsDown(RIGHT_ARROW)){ a += 10; }
  a = constrain(a, 100, width - 100);

  function collision(){
    background(153,102,255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("GAME OVER", width/2, height/2);
    text("RETRY ENTER", width/2, height/1.8);
    if(keyIsDown(ENTER)){return setup();}
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
