var garden,gardenImg;
var cat,catImage1,catImage3,catRunning;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
    gardenImg =  loadAnimation("images/garden.png");

    catImage1 =  loadAnimation("images/cat1.png");
    catR = loadAnimation("images/cat2.png,cat4.png");
    catImage3 =  loadAnimation("images/cat3.png");
    

    mouseImg1 =  loadAnimation("images/mouse1.png");
    mouseT = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=  loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(1000,800);

    cat = createSprite(900,600);
    cat.addImage("catSleeping",catImage1);
    cat.scale = 0.25;

    mouse = createSprite(280,600);
    mouse.addImage("mouseStanding",mouseImg1);
    mouse.scale = 0.15;

    makeCatWalk();
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2)
    {
        cat.velocityX = 0 ;
        cat.addAnimation("catLastImage", catImage3);
         cat.x =300; 
         cat.scale=0.2;
          cat.changeAnimation("catLastImage"); 
          mouse.addAnimation("mouseLastImage", mouseImg3);
           mouse.scale=0.15;
         mouse.changeAnimation("mouseLastImage");

    }

    
      
    drawSprites();
}


function makeCatWalk(){ 
    mouse.addAnimation("mouseTeasing", mouseT);
     mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
       cat.velocityX = -5;
        cat.addAnimation("catRunning", catR);
         cat.changeAnimation("catRunning");
         }