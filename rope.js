class Block{
    
    constructor(a,b,body2) {

		var options = {
			pointB: {x:0,y:0},
			length: 200,
			stiffness:0.9
		}

		this = Matter.Constraint.create({
			//bodyA: roof,
			options
		})

		this.pointA = {x:a,y:b}
		this.bodyB = body2;

		World.add(world,this);

	}

    show() {
        //var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        line();
        pop();
      }
}
