class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            
            length: 200
        }
        this.pointB = pointB
        this.Rope= Constraint.create(options);
        World.add(world, this.Rope);
    }
display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;
        push();

        strokeWeight(4);
        stroke("green");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
}
}