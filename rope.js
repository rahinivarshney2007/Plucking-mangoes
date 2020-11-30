class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.5
        }
        this.rope=Matter.Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.rope)
    }
display(){
    
if(this.rope.bodyA){
    var a=this.rope.bodyA.position
    var b=this.pointB
line(a.x+30,a.y+10,b.x,b.y)
}
}
fly(){
   this.rope.bodyA=null
}
attach(bodyA){
this.rope.bodyA=bodyA
}
}

