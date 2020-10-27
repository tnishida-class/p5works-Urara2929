// 小手調べ
function setup(){
  createCanvas(200,200);
}

function draw() {
  for(let i = 0; i < 10; i++){
    let x = (i + 1)*10;
    if(i < 5){
      noFill();
      stroke(0,0,255);
      ellipse(100,100,x);
    } else {
      noFill();
      stroke(255,0,0);
      ellipse(100,100,x);
    }
  }
}
