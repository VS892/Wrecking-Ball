var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Constraint = Matter.Constraint
 
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,775,width,50);
  roof = new Ground(400,25,width,50);

  box1 = new Box(400,725,50,50);
  box2 = new Box(400,675,50,50);
  box3 = new Box(400,625,50,50);
  box4 = new Box(400,575,50,50);
  box5 = new Box(400,525,50,50);
  box6 = new Box(400,475,50,50);
  box7 = new Box(400,425,50,50);

  ball = new Ball(200,400,50,50);

  rope = new Rope(ball.body,{x:200,y:50});

  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  push();
  fill("green")
  ground.display();
  pop();

  roof.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  ball.display();
  rope.display();


}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:3})
  }
}