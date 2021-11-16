class Rope{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            pointB:body2
        }

        this.body2=body2
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }

    attach(body){
        this.rope.bodyA = body
    }

    fly(){
        this.rope.bodyA = null
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position
            var pointB = this.body2

            push();
            strokeWeight(5);
            stroke("white")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();   
        }
        
    }
}