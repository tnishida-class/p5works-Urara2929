// 小手調べ
function setup(){
  createCanvas(200,200);
}

function draw() {
  for(let i = 0; i < 10; i++){
    let x = (i + 1)*10;
    noFill();
    if(i < 5){
      stroke(0,0,255);
      ellipse(100,100,x);
    } else {
      stroke(255,0,0);
      ellipse(100,100,x);
    }
  }
}
