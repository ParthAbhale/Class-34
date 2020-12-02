const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var ball,slingshot,ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;



function setup(){
    createCanvas(1000,800)
    engine = Engine.create();
    world = engine.world

    ground = new Ground(500,780,width,20)
    ball = new Ball(200,400,60)
    slingshot = new Sling(ball.body,{x:300,y:200})
    box1 = new Box(500,750,100,100)
    box2 = new Box(600,750,100,100)
    box3 = new Box(700,750,100,100)
    box4 = new Box(500,650,100,100)
    box5 = new Box(600,650,100,100)
    box6 = new Box(700,650,100,100)
    box7 = new Box(500,550,100,100)
    box8 = new Box(600,550,100,100)
    box9 = new Box(700,550,100,100)
    box10 = new Box(500,450,100,100)
    box11 = new Box(600,450,100,100)
    box12 = new Box(700,450,100,100)
    box13 = new Box(500,350,100,100)
    box14 = new Box(600,350,100,100)
    box15 = new Box(700,350,100,100)
    
}


function draw(){

    background("black")
    Engine.update(engine)

    ground.display();
    ball.display();
    slingshot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

}
function mouseDragged(){
     Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
