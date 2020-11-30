class Mangoes{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.4,
            friction:1

        }
       
        
        this.body=Bodies.rectangle(x,y,50,60,options)
        this.image=loadImage("sprites/mango.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
  image(this.image,pos.x,pos.y,50,60)
    }
    }
   