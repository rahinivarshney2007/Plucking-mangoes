
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.\
  tree=new Tree(900,5)
mango1=new Mangoes(1000,120)
  mango2=new Mangoes(1100,130)
  mango3=new Mangoes(950,135)
  mango4=new Mangoes(980,200)
  mango5=new Mangoes(1050,100)
  stone=new Stone(280,450)
  rope1=new Rope(stone.body,{x:330,y:350})

boy1=new Boy(300,270)

var ground_options ={
  isStatic: true
}

ground = Bodies.rectangle(600,500,200,20,ground_options);
World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background("maroon");
  
    rect(ground.position.x,ground.position.y,1400,20);
    tree.display()
  
    mango1.display()
    mango2.display()
    mango3.display()
    mango4.display()
    mango5.display()
  rope1.display()
  stone.display()
  boy1.display()
  detectCollision(stone,mango1)
  drawSprites();
 
}
function detectCollision(stone,mango1){
  mangobodyposition=mango1.body.position
stonebodyposition=stone.body.position
var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
if(distance<=mango1.r+stone.r){
  Matter.body.setStatic(mango1.body,false)
}
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
rope1.fly()
}
