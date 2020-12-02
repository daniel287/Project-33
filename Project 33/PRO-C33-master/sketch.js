var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    } 
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  fill("white");
  text("500",  340, 600);
  text("500",  420, 600);
  text("300",  500, 600);
  text("400",  580, 600);
  text("200",  660, 600);
  text("1000", 740, 600);
  text("200", 260, 600);
  text("100", 180, 600);
  text("1000", 100, 600);
  text("1", 20, 600);
  Engine.update(engine);
  ground.display();

   if(gameState === "end"){
     textSize(100);
     text("GameOver", 150, 250);
   }

   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }

   if(particle != null){
     particle.display();
     if(particle.body.position.y > 760){
       if(particle.body.position.x > 0 && particle.body.position.x < 80){
         score = score+1;
         particle = null;
         if ( count>= 5)  gameState ="end";
       }
      else if(particle.body.position.x > 90 && particle.body.position.x < 160){
        score = score+1000;
        particle = null;
        if ( count>= 5)  gameState ="end";
      }
      else if(particle.body.position.x > 170 && particle.body.position.x < 240){
        score = score+100;
        particle = null;
        if ( count>= 5)  gameState ="end";
      }
      else if(particle.body.position.x > 250 && particle.body.position.x < 320){
        score = score+200;
        particle = null;
        if ( count>= 5)  gameState ="end";
      }
      else if(particle.body.position.x > 330 && particle.body.position.x < 400){
        score = score+500;
        particle = null;
        if ( count>= 5)  gameState ="end";
      }
      else if(particle.body.position.x > 410 && particle.body.position.x < 480){
      score = score+500;
      particle = null;
      if ( count>= 5)  gameState ="end";
    }
    else if(particle.body.position.x > 490 && particle.body.position.x < 560){
      score = score+300;
      particle = null;
      if ( count>= 5)  gameState ="end";
    }
    else if(particle.body.position.x > 570 && particle.body.position.x < 640){
      score = score+400;
      particle = null;
      if ( count>= 5)  gameState ="end";
    }
    else if(particle.body.position.x > 650 && particle.body.position.x < 720){
      score = score+200;
      particle = null;
      if ( count>= 5)  gameState ="end";
    }
    else if(particle.body.position.x > 730 && particle.body.position.x < 800){
      score = score+1000;
      particle = null;
      if ( count>= 5)  gameState ="end";
    }
   }
   }
       
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle = new Particle(mouseX, 10, 10, 10); 
  }   
}