function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 0, 200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1);
  myShape(width/3, height/3, 2);
  myShape(width * 2/3, height * 2/3, 0.5)
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  fill (255, 255, 0)
  ellipse(0, 0, 50, 50); // simple ellipse at the translated origin (0,0)
  fill (255);
  ellipse (-10, -5, 10);
  fill (255);
  ellipse (10, -5, 10);
  fill (0);
  ellipse (-10, -5, 5);
  ellipse (10, -5, 5);
  fill(255, 150, 180);
  ellipse (0, 10, 10, 12);
  pop(); // dispose of the layer
}
