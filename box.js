class Box{
    constructor(x,y,width,height){

        var options = {
            isStatic:false,
            restitution:0.4,
            density:1,
            friction:0.9
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var boxpos = this.body.position
        var angle = this.body.angle
        push()
        translate(boxpos.x,boxpos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}