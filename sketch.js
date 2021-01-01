const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform1, platform2;
var polygon, sling;

var block01, block02, block03, block04, block05, block06, block07;
var block08, block09, block10, block11, block12, block13, block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height, width, 5);
    platform1 = new Ground(335,300,300,10);
    platform2 = new Ground(700,200,300,10);

    polygon = new Shape(100,200,40,40);
    sling = new Sling(polygon.body, {x: 100, y:200});

    //first pyramid

    
    block01 = new Box(215,280,40,40);
    block02 = new Box(255,280,40,40);
    block03 = new Box(295,280,40,40);
    block04 = new Box(335,280,40,40);
    block05 = new Box(375,280,40,40);
    block06 = new Box(415,280,40,40);
    block07 = new Box(455,280,40,40);

    
    block08 = new Box(255,240,40,40);
    block09 = new Box(295,240,40,40);
    block10 = new Box(335,240,40,40);
    block11 = new Box(375,240,40,40);
    block12 = new Box(415,240,40,40);

    //fill("lighYellow");
    block13 = new Box(295,200,40,40);
    block14 = new Box(335,200,40,40);
    block15 = new Box(375,200,40,40);

    //fill("lighGreen");
    block16 = new Box(335,160,40,40);

    //second pyramid

    block = new Box(660,100,40,40);

    block17 = new Box(620,180,40,40);
    //block18 = new Box(660,100,40,40);
    block19 = new Box(700,180,40,40);
    block20 = new Box(740,180,40,40);
    block21 = new Box(780,180,40,40);

    block25 = new Box(660,140,40,40);
    block22 = new Box(700,140,40,40);
    block23 = new Box(740,140,40,40);

    block24 = new Box(700,100,40,40);



}

function draw(){
    background(0);
    Engine.update(engine);

    
    platform1.display();
    platform2.display();
    polygon.display();
    sling.display();

    fill("lightBlue");
    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();

    fill("lightPink");
    block08.display();
    block09.display();
    block10.display();
    block11.display();
    block12.display();
    fill("lightYellow");
    block13.display();
    block14.display();
    block15.display();
    fill("lightGreen");
    block16.display();

    fill("lightPink");
    block17.display();
    //block18.diaplay();
    block19.display();
    block20.display();
    block21.display();
    
    block25.display();
    fill("lightBlue");
    block23.display();
    
    block22.display();

    block.display();

    fill("lightGreen");
    block24.display();
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY});
}

function mouseReleased(){
    
    sling.fly();
}
