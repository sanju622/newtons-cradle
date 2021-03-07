
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
  rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*4,0);
  rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*6,0);
  rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*8,0);
  rope5=new rope(bobObject5.body,roofObject.bodt,-bobDiameter*10,0);

  
  drawSprites();
 
}



