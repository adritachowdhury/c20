var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 200, 60, 40);
   movingRect.debug=true;
   movingRect.shapeColor="green"; 
   fixedRect = createSprite(300, 200, 40, 80); 
   fixedRect.debug=true;
    fixedRect.shapeColor="green"
}

function draw() {
  background(0);
  movingRect.x= mouseX;
   movingRect.y=mouseY;
   console.log(movingRect.x-fixedRect.x); 
   if((movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)&&
    (fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)&&
    (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)&&
    (fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2))
    {
     movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow"; 
  }
  else
   { movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
   }  
  drawSprites();
}