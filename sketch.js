var bgImg;
var cat;

function preload() {
    //load the images here
bgImg  = loadImage (" garden.png");
catImg1  = loadImage ("cat1.png ");
mouseImg1  =  loadImage ("mouse1.png");
catImg2 = loadImage ("cat2.png && cat3.png");
mouseImg2 = loadImage ("mouse2.png && mouse3.png ");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x <(cat.width -  mouse.width)/2 ){

    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if (keycode === LEFT_ARROW){

   mouse.addAnimation("mouse teasing ",mouseImg2 );
   mouse.changeAnimation("mouse teasing ");
mouse.frameDelay =  25;
   }
   if (keycode === RIGHT_ARROW){

    mouse.addAnimation("mouse teasing ",mouseImg2 );
    mouse.changeAnimation("mouse teasing ");
 mouse.frameDelay =  25;
    }



}
