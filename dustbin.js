class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("dustbingreen.png");
    }
    display(){
        var dustbinpos = this.body.position;
        var dustbinangle = this.body.angle;

        push();
        translate(dustbinpos.x,dustbinpos.y);
        //rotate(dustbinangle);
        //imageMode(CENTER);
        strokeWeight(3);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}