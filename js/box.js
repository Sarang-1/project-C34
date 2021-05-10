class box{
    constructor(x,y){
        var options = {
            isStatic: false,
            friction: 0.5,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.image = loadImage("images/box.png");
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}