class Snake{
    constructor(){
        this.body=[];
        this.body[0]=createVector(0,0);
        this.xdir=0;
        this.ydir=0;
        
    }
    update(){
        this.body[0].x+=this.xdir
        this.body[0].y+=this.ydir
    }
    show(){
        rect(this.body[0].x,this.body[0].y,10,10)

    }
    setDir(x,y){
        this.xdir=x;
        this.ydir=y;

    }

    eat(pos){
        var x=this.body[0].x;
        var y=this.body[0].y;
        console.log(x+" "+pos.x)
        if(x===pos.x && y===pos.y){
            console.log("eatingFood");
            return true;
        }

        return false;
    }

}





