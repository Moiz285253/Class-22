const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,h;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var options = {
		density:0.002
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(310,200,15,options);
    World.add(world,bob1);

	bob2 = Bodies.circle(340,200,15,options);
    World.add(world,bob2);

	bob3 = Bodies.circle(370,200,15,options);
    World.add(world,bob3);

	bob4 = Bodies.circle(400,200,15,options);
    World.add(world,bob4);

	bob5 = Bodies.circle(430,200,15,options);
    World.add(world,bob5);

	h1 = Matter.Constraint.create({
		pointA:{x:310,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200
	})
	World.add(world,h1)

	h2 = Matter.Constraint.create({
		pointA:{x:340,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200
	})
	World.add(world,h2)

	h3 = Matter.Constraint.create({
		pointA:{x:370,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200
	})
	World.add(world,h3)

	h4 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200
	})
	World.add(world,h4)

	h5 = Matter.Constraint.create({
		pointA:{x:430,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200
	})
	World.add(world,h5)


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);



  //call display() to show ropes here
  line(h1.pointA.x,h1.pointA.y,bob1.position.x,bob1.position.y)
  line(h2.pointA.x,h2.pointA.y,bob2.position.x,bob2.position.y)
  line(h3.pointA.x,h3.pointA.y,bob3.position.x,bob3.position.y)
  line(h4.pointA.x,h4.pointA.y,bob4.position.x,bob4.position.y)
  line(h5.pointA.x,h5.pointA.y,bob5.position.x,bob5.position.y)
  

  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,28)
  ellipse(bob2.position.x,bob2.position.y,28)
  ellipse(bob3.position.x,bob3.position.y,28)
  ellipse(bob4.position.x,bob4.position.y,28)
  ellipse(bob5.position.x,bob5.position.y,28)
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if(keyCode==RIGHT_ARROW) {
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
	}
}