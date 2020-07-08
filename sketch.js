
function setup() {
 
  createCanvas(1200,600 );
  background(0);
  noStroke();

  
  fill(204);
  triangle(400, 260, 720, 260,560, 100);
  rect(400, 280, 320, 300)

  
  rect(300, 150, 70, 430)
  arc(780, 140, 100, 130, 180, PI + QUARTER_PI);

  
  rect(750, 150, 70, 430)
  arc(920, 100, 150, 180, 180, PI + QUARTER_PI);

  
  rect(150, 110, 100, 470)
  arc(330, 140, 100, 130, 180, PI + QUARTER_PI);

  
  rect(870, 110, 100, 470)
  arc(200, 100, 150, 180, 180, PI + QUARTER_PI);

 
  fill("red")
  rect(490, 300, 5, 100)
  rect(490, 300, 100, 5)
  rect(590, 300, 5, 100)
  rect(490, 400, 105, 5)

  rect(540, 300, 5, 100)
  rect(490, 350, 105, 5)

  
  rect(490, 440, 5, 140)
  rect(490, 440, 100, 5)
  rect(590, 440, 5, 140)
 

}


function draw(){
drawSprites();
 
  
}
