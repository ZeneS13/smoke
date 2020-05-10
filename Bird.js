class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img=loadImage("sprites/smoke.png");
    this.traject=[];
  }

  display() {
    super.display();
   if(this.body.position.x>220 && this.body.velocity.x>10){
    var position=[this.body.position.x,this.body.position.y];
    this.traject.push(position);}
    for(var i=0;i<this.traject.length;i=i+1){
      image(this.img,this.traject[i][0],this.traject[i][1])
    }
   
  }
}
