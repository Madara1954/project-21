
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var wall1,wall2,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restition:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(25,25,25,ball_options);
	World.add(world,ball);
	ground= new Ground(400,690,800,25);
	wall1 = new Ground(600,630,20,120); 
	wall2 = new Ground(700,630,20,120);
	Engine.run(engine);
  

}

function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	 } 
	}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(ball.position.x,ball.position.y,25,25);
 
  ground.display();
  wall1.display();
  wall2.display();
}



