
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper,dustbinPart1,dustbinPart2,dustbinPart3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(690,450,70);
	//paper.shapeColor = color("green");
	//dustbinPart1 = new Dustbin(960,550,150,200);
	dustbinPart2 = new Dustbin(1200,555,200,213);
	//dustbinPart2 = loadImage("dustbin.png");
	//dustbinPart3 = new Dustbin(1040,550,150,200);
	ground = new Ground(800,670,1600,20);

	Engine.run(engine);
  
}


function draw() {
  background("grey");
  Engine.update(engine);
  paper.display();
  //dustbinPart1.display();
  dustbinPart2.display();
  //dustbinPart3.display();
  ground.display();

  //keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:170,y:-215});
	}
}



