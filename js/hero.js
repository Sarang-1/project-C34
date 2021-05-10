class hero{
    constructor(x, y,w,h) {
        var options = {
            'isStatic': false  
            }

        this.body = Bodies.rectangle(x, y,w,h, options);
        
        this.image = loadImage("images/Superhero-01.png");
        this.w = w;
        this.h = h;
        World.add(world, this.body);
      }

      display(){
        
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);

        pop();
      }
}