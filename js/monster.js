class monster{
    constructor(x, y) {
        var options = {
            'isStatic': false
            }
        this.body = Bodies.circle(x, y,100, options);
        this.image = loadImage("images/Monster-01.png");
        this.vis = 255;
        World.add(world, this.body);
      }

      display(){
        if(this.vis)
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        
        pop();
      }
}