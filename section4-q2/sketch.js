// テキスト「アニメーション」
let x, y, vx, vy;
let angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 5;
  vy = 5;
  angle = 0;
}

function draw(){
  background(15, 76, 129);
  // BLANK[2] (hint: 作った star 関数を使います)
  x += vx;
  y += vy;
  angle += 0.03;
  noStroke();
  fill(255, 241, 0);
  star(x,y,30,angle);

  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
