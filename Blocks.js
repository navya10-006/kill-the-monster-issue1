class Blocks{
    constructor(x,y){
        var options={
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,30,30);
        this.width = 30;
        this.height = 30;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}