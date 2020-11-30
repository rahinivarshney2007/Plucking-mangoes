class Stone{
    constructor(x,y){
        var options={
            //isStatic:true,
            restitution:0.6,
            friction:1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(this.x,this.y,60,20,options)
        this.image=loadImage("sprites/stone.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
   translate(pos.x,pos.y)
rotate(angle)
image(this.image,0,0,60,20)
pop()
    }
}