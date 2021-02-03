//namespace or giving a nick name
//Rhys Fernandes can be namespaced as Raja
//const Raza = "Rhys Fernandes"
//Mazin Marzouk can be namespaced as Razi
//const Razi = "Mazin Marzouk"

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    createCanvas(400,400);

    //create an engine
    engine = Engine.create();

    //creating your own world
    world = engine.world;

    //create a box
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    //create a ground body = rectangle
   ground = new Ground (200,380,400,20)


    //create a ball = circle
    /*var ball_options = {
        restitution: 1.0
    }
    ball = Bodies.circle(100,200,20,ball_options)
    World.add(world,ball)*/


    //Engine.run(myEngine);
    
}

function draw(){
    background(0);

    //to keep updating the engine
    Engine.update(engine);

    //to display your bodies, display it in function draw
    box1.display();
    box2.display();
    
    ground.display();
  
    /*ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)*/


}
