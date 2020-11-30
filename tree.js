class Tree{
constructor(x,y){
var options={
isStatic:true,
restitution:0.4,
friction:0.8
}

this.body=Bodies.rectangle(x,y,300,500,options)
this.image=loadImage("sprites/tree.png")
World.add(world,this.body)
}
display(){
    var pos=this.body.position
    image(this.image,pos.x,pos.y,300,500)
}
    
}