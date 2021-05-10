const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero1,monster1,rope,ground;
var state = 0;
var backgroundIMG,canvas,g;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27;

function preload() {
//preload the images here
backgroundIMG = loadImage("images/GamingBackground.png");

}

function setup() {
  canvas = createCanvas(1400,660);
  // create sprites here

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,550,1000,20);
    hero1 = new hero(290,200,300,150);
    rope = new Rope(hero1.body,{x: 300, y: 150});

    box1 = new box(600,500);
    box2 = new box(600,100);
    box3 = new box(600,450);
    box4 = new box(600,400);
    box5 = new box(600,350);
    box6 = new box(600,300);
    box7 = new box(600,250);
    box8 = new box(600,200);
    box9 = new box(600,150);
    box10 = new box(600,50);
    box11 = new box(660,450);
    box12 = new box(660,400);
    box13 = new box(660,350);
    box14 = new box(660,300);
    box15 = new box(660,250);
    box16 = new box(660,200);
    box17 = new box(660,150);
    box18 = new box(660,100);
    box19 = new box(720,250);
    box20 = new box(720,300);
    box21 = new box(720,350);
    box22 = new box(720,400);
    box23 = new box(720,450);
    box24 = new box(720,500);
    box25 = new box(720,200);
    box26 = new box(720,100);
    box27 = new box(720,150);

    monster1 = new monster(900,400);

}

function draw() {
  Engine.update(engine);
  if(state === 0){
  background(backgroundIMG);
  

  hero1.display();
  ground.display();

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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  
    monster1.display();

    textSize(30);
    strokeWeight(1);
    stroke(0,255,0);
    fill("red");
    text("TIP: DRAG the MOUSE to move the HERO  'N  try to DROP the MONSTER.",50,40);
  
    if(monster1.body.position.y > 600){
    state=1;
    
  }
  }
  if(state === 1){
    textSize(100);
    strokeWeight(2);
    stroke(0,255,0);
    fill(random(0,255), random(0,255), random(0,255));
    text("BOOYAH!!!",400,200);
  }

  

}


function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x: mouseX, y: mouseY});
}
