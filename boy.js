class Boy{
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.2,
            restitution:0,
            density:0.6
        }
        this.body=Bodies.rectangle(x,y,150,300,options)
        this.image=loadImage("sprites/boy.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
  image(this.image,pos.x,pos.y,150,300)
    }
}