const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var ball;
var dustbinobject;
var ground_;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinobject = new dustbin(1200, 650);
	
	ball = new paper(200, 450, 40);

	ground_ = new ground(width/2, 670, width, 20);
	var render = Render.create({
		element:document.body, 
		Engine:engine, 
		options:{ 
			width:1200,
			height:700,
			wireframes:400
		}
	})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinobject.display();
  ground_.display();
  ball.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position, {x:85, y:-85});
	}
}



