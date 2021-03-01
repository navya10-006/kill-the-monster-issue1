class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.04
        }
        this.fly=Constraint.create(options);
        World.add(world,this.fly);
    }
    display(){
        var pointA=this.fly.bodyA.position;
        var pointB=this.fly.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}