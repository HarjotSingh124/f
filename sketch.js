
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	frame1= new frame(200,200,200,200);
    Frame= new F(300,200,200,200);
slingshot1=new slingshot(frame1.body,{x:130,y:200})
slingshot2=new slingshot(Frame.body,{x:430,y:200})
f=new s(400,200,200,200);
slingshot3=new slingshot(f.body,{x:730,y:200})
	Engine.run(engine);
  p1= new p(300,200,200,200);
  slingshot4=new slingshot(p1.body,{x:1030,y:200})
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

slingshot1.display();
frame1.display();

slingshot2.display();
Frame.display();
slingshot3.display();
f.display();
slingshot4.display();
p1.display();
}



