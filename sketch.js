var jay=0
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(183,217,160); //an RGB color for the canvas' background
  //circle
  stroke(20,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(200,300,155,70); // center of canvas, 20px dia
  rect(250,100,jay,jay)
  textFont('impact');
  textSize(30)
  text("let's party",100,200)

}
  function mousePressed(){
  if (jay>=255) {
    jay=0
  } else {
    jay=jay+5;
  }

}
