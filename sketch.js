const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bgL
var monster1L,monster2L,hero1L,hero2L
var ground1,hero,fly,block
function preload() {
  bgL=loadImage("images/GamingBackground.png");
  monster1L=loadImage("images/Monster-01.png");
  monster2L=loadImage("images/Monster-02.png");
  hero1L=loadImage("images/Superhero-01.png");
  hero2L=loadImage("images/Superhero-02.png");
}

function setup() {
  var canvas=createCanvas(3000, 800);
  engine = Engine.create();
  world=engine.world;

  ground1 = new Ground(100,100,10,10);
  hero = new Hero(1000,200);
  fly = new Fly(hero.body,{x:500,y:100});
  block = new Blocks(200,300);
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); 
  Render.run(render);
}

function draw() {
  background(bgL);
  Engine.update(engine);
  //console.log(ground1.body.position.x)
  ground1.display();
  hero.display();
  fly.display();
  block.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
