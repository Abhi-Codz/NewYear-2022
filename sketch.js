//Naming variables
var soundFire;
let doc, docAnimation;
let bgsmh;

function preload()
{
    //Loading animations
    docAnimation = loadAnimation("a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png", "a8.png", "a9.png", "a10.png", "a11.png", "a12.png", "a13.png", "a14.png", "a15.png", "a16.png", "a17.png", "a18.png", "a18.png", "a19.png", "a19.png", "a20.png", "a20.png", "a21.png", "a21.png");
    soundFire = loadSound('y2mate.com - FIREWORKS GREEN SCREEN AND SOUND EFFECTS.mp3')
}

function setup()
{
    createCanvas(560, 600);

    soundFire.loop();

    bgsmh = createSprite(265, 250, 450, 400);
    bgsmh.shapeColor = 'skyblue';

    
    doc = createSprite(250, 250);
    doc.addAnimation("maybe", docAnimation);
    doc.scale = 0.4;    
}


function draw()
{
    background("#0B0017");
  
    drawSprites();

    //Adding text for hD
    stroke("lime");
    textSize(25);
    fill("lime");
    text("HAPPY NEW YEAR!!", 140, 490);

    //Adding text for AM
    stroke("black");
    textSize(15);
    fill("white");
    text("FROM-ABHINAV MISHRA", 320, 35);
}
