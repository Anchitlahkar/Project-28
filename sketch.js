const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeImg =loadImage("Plucking mangoes/tree.png");
	boyImg =loadImage("Plucking mangoes/boy.png");
	mangoImg =loadImage("Plucking mangoes/mango.png");
	stoneImg =loadImage("Plucking mangoes/stone.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//creating the tree

	tree = createSprite(width-300,height/2+30,50,80)
	tree.addImage(treeImg)
	tree.scale = 0.5

	//creating boy
	
	boy = createSprite(200,height-70,50,80)
	boy.addImage(boyImg)
	boy.scale = 0.1



	//creating mangoes

	mango1 = createSprite(200,height-70,50,80)
	mango1.addImage(mangoImg)
	mango1.scale = 0.1
	Mango1 = new Mango(1400,150,10,30)

	
	mango2 = createSprite(600,height-70,50,80)
	mango2.addImage(mangoImg)
	mango2.scale = 0.1
	Mango2 = new Mango(1200,200,10,30)

	
	mango3 = createSprite(200,height-70,50,80)
	mango3.addImage(mangoImg)
	mango3.scale = 0.1
	Mango3 = new Mango(1100,300,10,30)	

	
	mango4 = createSprite(200,height-70,50,80)
	mango4.addImage(mangoImg)
	mango4.scale = 0.1
	Mango4 = new Mango(1300,250,10,30)
	
	mango5 = createSprite(200,height-70,50,80)
	mango5.addImage(mangoImg)
	mango5.scale = 0.1
	Mango5 = new Mango(1400,300,10,30)
	

	
	point1 = new Mango(1400,200,10,10)
	point2 = new Mango(1100,350,10,30)
	point3 = new Mango(1300,310,10,30)
	point4 = new Mango(1400,350,10,30)
	

	//creating stone
	
	stone = createSprite(200,height-70,50,80)
	stone.addImage(stoneImg)
	stone.scale = 0.05
	Stone1 = new Stone(142,575,18,18)
	
	//creating the ground

	ground = new Ground(width/2,height -15,width,30);

	slingshot = new SlingShot(Stone1.body,{x:142, y:575});
	// slingshot = new SlingShot(Stone1.body,{x:1300, y:575});

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("skyBlue");

  detecCollision(Stone1,Mango1)
  detecCollision(Stone1,Mango2)
  detecCollision(Stone1,Mango3)
  detecCollision(Stone1,Mango4)
  detecCollision(Stone1,Mango5)


  if(stone.isTouching(mango1)){
	Matter.Body.setStatic(Mango1.body,false)
  }
  
  if(stone.isTouching(mango2)){
	Matter.Body.setStatic(Mango2.body,false)
  }
  
  if(stone.isTouching(mango3)){
	Matter.Body.setStatic(Mango3.body,false)
  }
  
  if(stone.isTouching(mango4)){
	Matter.Body.setStatic(Mango4.body,false)
  }
  
  if(stone.isTouching(mango5)){
	Matter.Body.setStatic(Mango5.body,false)
  }
  

  MangoPosition();

  ground.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Stone1.display();
  slingshot.display();
  point1.display()
  
  drawSprites();
 
}

// setting the position of the objects
function MangoPosition() {
	mango1.x = Mango1.body.position.x
	mango1.y = Mango1.body.position.y
	
	mango2.x = Mango2.body.position.x
	mango2.y = Mango2.body.position.y
	
	mango3.x = Mango3.body.position.x
	mango3.y = Mango3.body.position.y
	
	mango4.x = Mango4.body.position.x
	mango4.y = Mango4.body.position.y
	
	mango5.x = Mango5.body.position.x
	mango5.y = Mango5.body.position.y
	
	stone.x = Stone1.body.position.x
	stone.y = Stone1.body.position.y
}
function mouseDragged(){
    Matter.Body.setPosition(Stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed() {
    if(keyCode === 32){
		slingshot.attach(Stone1.body)
		Matter.body.setPosition(Stone1.body,{x:140,y:575})
    }
    
}
function detecCollision(body1,body2) {
	mangoBodyPosition = body2.body.position
	stoneBodyPosition = body1.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=body2.r+body1.r){
		  Matter.Body.setStatic(body2.body,false)
	  }
}



