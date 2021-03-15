var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var boxBottom, boxLeftEdge, boxRightEdge;
var boxBottomSprite, boxLeftEdgeSprite, boxRightEdgeSprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxBottomSprite = createSprite(width/2, height-50,200,20);
	boxBottomSprite.shapeColor = "red";

	boxLeftEdgeSprite = createSprite(width/2 - 100, height - 90, 20,100);
	boxLeftEdgeSprite.shapeColor = "red";

	boxRightEdgeSprite = createSprite(width/2 + 100, height - 90, 20,100);
	boxRightEdgeSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	var box_option = {
		'isStatic' : true
	}

	boxBottom = Bodies.rectangle(width/2, height-70,200,20,box_option);
	World.add(world, boxBottom);
 
	boxLeftEdge = Bodies.rectangle(width/2 - 80, height - 90, 20,100,box_option);
	World.add(world, boxLeftEdge);
 
	boxRightEdge = Bodies.rectangle(width/2 + 80, height - 90, 20,100,box_option);
	World.add(world, boxRightEdge);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
	
	
	  } else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
	  }
	  else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	  }
}



