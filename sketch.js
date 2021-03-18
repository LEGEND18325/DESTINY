const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render

var ground;
var invisibleground,invisibleground1,invisibleground2,invisibleground3,invisibleground4,invisibleground5,invisibleground6;
var player,playerimg,playerimg2,playerimg3,playerimg4,playerimg5;
var arrowGroup, arrowimg,arrow;
var fireballGroup, fireballimg,fireball;
var rageGroup, rageimg,rage,ragec=0,rageCreatedFrame;
var plantGroup, plantimg,plantCreatedFrame,plant;
var ninjaGroup, ninjaimg,ninja;
var swordimg,swordGroup,sword;
var coinSound,explosionSound,ninjaSound,arrowSound,swordSound,gameSound,loseSound,winSound,plantSound,eatingSound;
var p1;
var gameState=0;
var playerCount=0;
var playerHealth=3000;
var playerScore=0;
var playerRank=0;
var database;
var dragonimg,dragonimg1,dragon,dragonCreatedFrame;
var dracoimg,dracoGroup,draco;
var dragonchng=0;
var dragonh=5000;
var allPlayers=[];
var blockGroup, blockimg,blockCreatedFrame,block;
var   coinGroup, coinimg,coin,coinframecount;
var   breadGroup, breadimg,bread,breadframecount;
var   appleGroup, appleimg,apple,appleeatFrame;
function preload(){
   ground=loadImage("background.jpg");
  // playerimg=loadImage("Charctor.png");
   playerimg2=   loadAnimation("1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG");
   playerimg3=   loadAnimation("9.PNG","10.PNG","11.PNG","12.PNG","13.PNG","14.PNG","15.PNG","16.PNG");
   ninjaimg=   loadAnimation("v1.png","v2.png","v3 .png","v4.png","v5.png","v6.png","v7.png","v8 .png","v9.png","v10.png");
  playerimg=loadImage("8.PNG");
  playerimg4=loadImage("2.PNG");
  playerimg5=loadImage("16.PNG");
  arrowimg=loadImage("arrows.png");
  fireballimg=loadImage("fireballs.png");
  rageimg=loadImage("DRAGON RAGE.png");
  plantimg=loadImage("poison plant.png");
  swordimg=loadImage("sword.png");
  dragonimg=loadImage("DRAGON.png");
  dragonimg1=loadImage("DRAGON 2.png");
  dracoimg=loadImage("draco meteor.png");
  blockimg=loadImage("lucky blocks.jpg");
  coinimg=loadImage("coins.png");
  breadimg=loadImage("bread.png");
  appleimg=loadImage("golden enchanted apple.png");
  coinSound = loadSound("power.mp4");
 explosionSound = loadSound("Explosion.mp3");
 ninjaSound = loadSound("ninja cut.mp3");
 arrowSound = loadSound("arrow swoosh.mp3");
 swordSound = loadSound("sword sound.mp3");
 gameSound = loadSound("game sound.mp3");
 loseSound = loadSound("lose.mp3");
 winSound = loadSound("win.wav");
 plantSound = loadSound("plant.mpeg");
 eatingSound = loadSound("bread.mpeg");

}

function setup(){
    createCanvas(displayWidth*5, 300);
  
    engine = Engine.create();
    world = engine.world;
    player=createSprite(220,240,10,10)
player.addAnimation("stop",playerimg);
player.addAnimation("stop2",playerimg5);
player.addAnimation("jump",playerimg4)
 player.addAnimation("running",playerimg2);
 player.addAnimation("running2",playerimg3);
 //player.scale=0.2;
 player.scale=0.6;
 player.visible=false;



 dragon=createSprite(6260,-100,5,10)  
 dragon.addAnimation("dragon",dragonimg);
 dragon.addAnimation("dragon1",dragonimg1);
 dragon.debug = true;
 dragon.setCollider("rectangle",0,0,200,200);
   dragon.scale=1;
   dragonCreatedFrame=frameCount;






invisibleground=createSprite(displayWidth/3,275,4970,10)
invisibleground.visible=false;
invisibleground1=createSprite(3230,275,320,10)
invisibleground1.visible=false;
 
invisibleground2=createSprite(3970,275,960,10)
invisibleground2.visible=false;

invisibleground3=createSprite(4700,275,320,10)
invisibleground3.visible=false;

invisibleground4=createSprite(5880,275,1900,10)
invisibleground4.visible=false;

invisibleground5=createSprite(6200,275,10,620)
invisibleground5.visible=false;

invisibleground6=createSprite(636,256,10,20)
invisibleground7=createSprite(656,243,33,10)
invisibleground8=createSprite(670,233,10,20)
invisibleground9=createSprite(690,220,33,10)
invisibleground10=createSprite(709,210,10,20)
invisibleground11=createSprite(729,200,33,10)
invisibleground12=createSprite(740,190,10,20)
invisibleground13=createSprite(750,180,33,10)
invisibleground14=createSprite(761,170,10,20)
invisibleground15=createSprite(780,160,33,10)
invisibleground16=createSprite(799,210,10,100)
invisibleground17=createSprite(1470,230,10,90)
invisibleground18=createSprite(1530,230,10,90)
invisibleground19=createSprite(1500,183,70,10)
invisibleground20=createSprite(3905,230,10,90)
invisibleground21=createSprite(3965,230,10,90)
invisibleground22=createSprite(3935,183,70,10)
invisibleground23=createSprite(4035,240,10,70)
invisibleground24=createSprite(4095,240,10,70)
invisibleground25=createSprite(4065,203,70,10)
invisibleground26=createSprite(4162,220,10,110)
invisibleground27=createSprite(4222,220,10,110)
invisibleground28=createSprite(4192,163,70,10)
invisibleground29=createSprite(5632,240,10,70)
invisibleground30=createSprite(5692,240,10,70)
invisibleground31=createSprite(5662,203,70,10)



invisibleground6.visible=false;
invisibleground7.visible=false;
invisibleground8.visible=false;
invisibleground9.visible=false;
invisibleground10.visible=false;
invisibleground11.visible=false;
invisibleground12.visible=false;
invisibleground13.visible=false;
invisibleground14.visible=false;
invisibleground15.visible=false;
invisibleground16.visible=false;
invisibleground17.visible=false;
invisibleground18.visible=false;
invisibleground19.visible=false;
invisibleground20.visible=false;
invisibleground21.visible=false;
invisibleground22.visible=false;
invisibleground23.visible=false;
invisibleground24.visible=false;
invisibleground25.visible=false;
invisibleground26.visible=false;
invisibleground27.visible=false;
invisibleground28.visible=false;
invisibleground29.visible=false;
invisibleground30.visible=false;
invisibleground31.visible=false;

arrowGroup= new Group();
fireballGroup= new Group();
plantGroup= new Group();
ninjaGroup= new Group();
swordGroup= new Group();
dracoGroup= new Group();
blockGroup= new Group();
coinGroup= new Group();
breadGroup= new Group();
appleGroup= new Group();
rageGroup= new Group();

database = firebase.database();


var gameStateref=database.ref('gameState')
gameStateref.on("value",(data)=>{

  gameState=data.val();

})
if(gameState===0){
  form=new Form();
  form.display();
  p1=new Player();
}



    Engine.run(engine);

}

function draw(){
 background("cyan");
  Engine.update(engine);
  var playerCountref=database.ref('playerCount')
playerCountref.on("value",(data)=>{

  playerCount=data.val();
})



Player.getPlayerInfo();



if(playerCount===2){
  gameState=1;
  database.ref('/').update({

    gameState:1
  })

}


if(gameState===1){
  //gameSound.loop();
  form.hide();
 //console.log("y podition : "+player.y)
 /*camera.position.x = player.x;
 camera.position.y = 150;*/
console.log("x podition : "+player.x)
p1.getplayersatend();
  image(ground,0,0,displayWidth*5,300);
  player.visible=true;
textSize(20)
  fill("green")
  for(plr in allPlayers){
    
    if(allPlayers[plr].name===p1.name){
      text(p1.name+" 's Health : "+allPlayers[plr].health,player.x,80)
    }
   
  }
    fill("yellow")
  for(plr in allPlayers){
    if(allPlayers[plr].name===p1.name){
      text(p1.name+" 's Score : "+allPlayers[plr].points,player.x,50)
    }
   
  }

 
  
  
  if(keyWentDown(RIGHT_ARROW)){

   player.x=player.x+5;
    p1.distance=p1.distance+20;
    player.velocityX=10;
    player.changeAnimation("running",playerimg2);
    p1.update();
}


if(keyWentUp(RIGHT_ARROW)){

     //player.x=player.x+20;
     player.velocityX=0;
    player.changeAnimation("stop",playerimg);
}

if(keyWentDown(LEFT_ARROW)){

  player.x=player.x-5;
  p1.distance=p1.distance-20;
     player.velocityX=-10;
     player.changeAnimation("running2",playerimg3);
     p1.update();
}



if(keyWentUp(LEFT_ARROW)){

     
     player.velocityX=0;
     player.changeAnimation("stop2",playerimg5);
}


if(keyDown(UP_ARROW)&& player.y >= 159){

   
     player.velocityY=-12;
     player.changeAnimation("jump",playerimg4);
}

if(keyWentUp(UP_ARROW)){

    player.changeAnimation("stop",playerimg);
    
}


if(plantCreatedFrame+40===frameCount){
    plantGroup.destroyEach();
}


if(blockCreatedFrame+800===frameCount){
  blockGroup.destroyEach();
}





if(dragonh<=2500){
  dragon.changeAnimation("dragon1",dragonimg1);
  dragon.scale=1.5;
  dragonchng=1;
  
}
if(dragonchng===1){

  spawndraco();
  
}
if(dragonCreatedFrame+2500===frameCount){
  dragonchng=0;
}


player.velocityY = player.velocityY + 0.8;  

 
player.collide(invisibleground);
player.collide(invisibleground1);
player.collide(invisibleground2);
player.collide(invisibleground3);
player.collide(invisibleground4);
player.collide(invisibleground5);
player.collide(invisibleground6);
player.collide(invisibleground7);
player.collide(invisibleground8);
player.collide(invisibleground9);
player.collide(invisibleground10);
player.collide(invisibleground11);
player.collide(invisibleground12);
player.collide(invisibleground13);
player.collide(invisibleground14);
player.collide(invisibleground15);
player.collide(invisibleground16);
player.collide(invisibleground17);
player.collide(invisibleground18);
player.collide(invisibleground19);
player.collide(invisibleground20);
player.collide(invisibleground21);
player.collide(invisibleground22);
player.collide(invisibleground23);
player.collide(invisibleground24);
player.collide(invisibleground25);
player.collide(invisibleground26);
player.collide(invisibleground27);
player.collide(invisibleground28);
dragon.collide(invisibleground4);


if(player.x>=5650){
  
  dragon.velocityY=10;
 textSize(30)
  fill("red")
  text("dragon health : "+dragonh,5800,50)
}

if(swordGroup.isTouching(dragon)){
  dragonh=dragonh-10
  swordGroup.destroyEach();
  }



if(keyDown("space"))
    {
      swordSound.play();
      var  sword=spawnsword();
    }

    if(player.x>=1555){
      spawnarrows();
      spawnfireballs();
     spawnluckies();
   
        }


    if(player.x>=4055){
      spawnpoisons();
 spawnninjas();
    }


    player.bounceOff(invisibleground5);

if(player.isTouching(dragon)){
  

 
 ragec=1;

}else{

  ragec=0;
}

if(ragec===1){
  spawnrage();
}





if(p1.health<=0 || player.y>=300){
  loseSound.play();
  gameState=2;
  database.ref('/').set({

    gameState:2
  })
  p1.rank=0;
  Player.updateplayersatend(p1.rank);
  
  
}



if(dragonh<=0){
 dragonchng=0;
 
 dragon.destroy();
 invisibleground5.destroy();
 
}

if( player.x>=6420){
  gameState=3;
  winSound.play();
  database.ref('/').set({

    gameState:3
  })
  p1.rank=p1.rank+1;
  Player.updateplayersatend(p1.rank);
}






if(arrowGroup.isTouching(swordGroup)){
  arrowGroup.destroyEach();
  swordGroup.destroyEach();
  swordSound.play();
  spawncoin();
  if(coinGroup.isTouching(player)){
 
   coinSound.play(); 
    p1.points=p1.points+10
    p1.update();

 
    }

}

if(keyDown("Enter"))
    {
      player.x=6420;
    }



if(ninjaGroup.isTouching(swordGroup)){
  ninjaGroup.destroyEach();
  swordGroup.destroyEach();
  swordSound.play();
  spawncoin();
  if(coinGroup.isTouching(player)){
 
   coinSound.play(); 
    p1.points=p1.points+60
    
    p1.update();

 
    }

}


if(fireballGroup.isTouching(swordGroup)){
  explosionSound.play();
  fireballGroup.destroyEach();
  swordGroup.destroyEach();
  spawncoin();
  if(coinGroup.isTouching(player)){
    
    coinSound.play(); 
    p1.points=p1.points+150
    
    p1.update();

 
    }

}


if(plantGroup.isTouching(swordGroup)){
  fireballGroup.destroyEach();
  swordGroup.destroyEach();
  swordSound.play();
  spawncoin();
  if(coinGroup.isTouching(player)){
    
    coinSound.play(); 
    p1.points=p1.points+50
    
    p1.update();

 
    }

}



if(dracoGroup.isTouching(swordGroup)){
  explosionSound.play();
  fireballGroup.destroyEach();
  swordGroup.destroyEach();
  spawncoin();
  if(coinGroup.isTouching(player)){
   
    coinSound.play(); 
    p1.points=p1.points+200
    
    p1.update();

 
    }

}


if(rageGroup.isTouching(swordGroup)){
  explosionSound.play();
  
  swordGroup.destroyEach();
 }






 



    
    
     
     

    if(arrowGroup.isTouching(player)){
     
      if(mortality===false){
        p1.health=p1.health-10}
        arrowSound.play();
      arrowGroup.destroyEach();
      p1.update();

      
      }


      if(fireballGroup.isTouching(player)){
       
       if(mortality===false){
        p1.health=p1.health-30}
        
        fireballGroup.destroyEach();
        explosionSound.play();
        p1.update();
      
        }


        if(rageGroup.isTouching(player)){
         
          if(mortality===false){
           p1.health=p1.health-300}
          
           rageGroup.destroyEach();
           explosionSound.play();
           p1.update();
         
           }



        if(ninjaGroup.isTouching(player)){
        
         if(mortality===false){
          p1.health=p1.health-50}
          ninjaSound.play();
          ninjaGroup.destroyEach();
          p1.update();
         
          }



          if(plantGroup.isTouching(player)){
          
           if(mortality===false){
            p1.health=p1.health-20}
            plantSound.play();
            plantGroup.destroyEach();
            p1.update();
           
            }



            if(dracoGroup.isTouching(player)){
             
              if(mortality===false){
                 p1.health=p1.health-100}
            
              dracoGroup.destroyEach();
              explosionSound.play();
              p1.update();
           
              }

 
            }

  
  


  if(blockGroup.isTouching(player)) {
    blockGroup.destroyEach();
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: spawncoin();
      
              break;
      case 2: spawnbread();
    
              break;
      case 3: spawnapple();
            
              break;
    }
     }

     if(coinGroup.isTouching(player)){
       coinframecount=frameCount;
       coinSound.play(); 
p1.points=p1.points+100
    
p1.update();

     }
if(coinframecount+5===frameCount){
  coinGroup.destroyEach();
}

     if(breadGroup.isTouching(player)){
      breadframecount=frameCount;
      eatingSound.play();
      breadGroup.destroyEach();
      p1.health=p1.health+100
      
      p1.update();
      
           }
           if(breadframecount+5===frameCount){
            breadGroup.destroyEach();
          }

           if(appleGroup.isTouching(player)){
           
             appleeatFrame=frameCount;
             eatingSound.play();
            p1.health=p1.health+100
            
            p1.update();
            
                 }
     
if(appleeatFrame+2000>frameCount ){
 mortality=true

}else{
  mortality=false
}
 
 
if(appleeatFrame+5===frameCount){
  appleGroup.destroyEach();
}






           
drawSprites();
if(gameState===2){
 
 textSize(50)
  fill(252,243,143)
 text("GAME OVER",displayWidth/2,40);
  text("YOU LOSE "+p1.name,displayWidth/2,90);
 /* if(p1.rank===0){
    
  text("GAME OVER",displayWidth/2,40);
  text("YOU LOSE "+p1.name,displayWidth/2,90);

   
 
}else{
  winSound.play();
  text("CONGRATS",displayWidth/2,40);
  text(" YOU FREED THE WORLD "+p1.name,displayWidth/2,90);
  text(p1.name+"' rank : "+p1.rank,displayWidth/2,140);
}*/

  arrowGroup.setVelocityXEach(0);
  arrowGroup.destroyEach();
  plantGroup.setVelocityXEach(0);
  plantGroup.destroyEach();
  fireballGroup.setVelocityXEach(0);
  fireballGroup.destroyEach();
  fireballGroup.setVelocityYEach(0);
   ninjaGroup.setVelocityXEach(0);
   ninjaGroup.destroyEach() ;  
   swordGroup.setVelocityXEach(0); 
   swordGroup.destroyEach(); 
   player.velocityX=0;
   player.velocityY=0;
   player.destroy();  
   rageGroup.setVelocityXEach(0);
   rageGroup.destroyEach() ;  
   blockGroup.setVelocityXEach(0);
   blockGroup.destroyEach();
   blockGroup.setVelocityYEach(0);
}


if(gameState===3){

  textSize(50)
  fill("yellow")
  if(p1.rank===1){
    
    text("CONGRATS",displayWidth/2,40);
  text(" YOU FREED THE WORLD "+p1.name,displayWidth/2,90);
  text(p1.name+"' rank : "+p1.rank,displayWidth/2,140);
 
}else{
  loseSound.play();
  text("GAME OVER",displayWidth/2,40);
  text("YOU LOSE "+p1.name,displayWidth/2,90);
}




  arrowGroup.setVelocityXEach(0);
  arrowGroup.destroyEach();
  plantGroup.setVelocityXEach(0);
  plantGroup.destroyEach();
  fireballGroup.setVelocityXEach(0);
  fireballGroup.destroyEach();
  fireballGroup.setVelocityYEach(0);
   ninjaGroup.setVelocityXEach(0);
   ninjaGroup.destroyEach() ;  
   swordGroup.setVelocityXEach(0); 
   swordGroup.destroyEach(); 
   player.velocityX=0;
   player.velocityY=0;
   player.destroy();
   dragon.destroy();
   rageGroup.setVelocityXEach(0);
   rageGroup.destroyEach() ;  
   blockGroup.setVelocityXEach(0);
   blockGroup.destroyEach();
   blockGroup.setVelocityYEach(0);
}



} 




function spawnarrows() {
       
       if (frameCount % 30 === 0) {
         var arrow = createSprite(600,120,40,10);
         arrow.y = Math.round(random(0,255));
         arrow.x = Math.round(random(50,5000));
         arrow.addImage(arrowimg);
         arrow.scale = 0.2;
         arrow.velocityX = -15;
         
         
         arrow.lifetime = 200;
         
         
         
         
       
         arrowGroup.add(arrow);
       }
       
     }



     function spawnfireballs() {
       
       if (frameCount % 20 === 0) {
         var fireball = createSprite(600,10,40,10);
         
         fireball.x = Math.round(random(50,5000));
         fireball.addImage(fireballimg);
         fireball.scale = 0.2;
         fireball.velocityX = -10;
         fireball.velocityY = 15;
         
         fireball.lifetime = 100;
         
         
         
         
       
         fireballGroup.add(fireball);
       }
       
     }


     function spawnpoisons() {
       
       if(frameCount % 40===0) {
            var   plant = createSprite(600,255,40,10);
              plantCreatedFrame=frameCount;
              plant.x = Math.round(random(4055,5000));
         plant.addImage(plantimg);
         plant.scale = 0.2;

         plantGroup.add(plant);
               }
          
        
         
         
         
         
      
        
        
       
     }



     function spawnninjas() {
       
       if (frameCount % 50 === 0) {
         var ninja= createSprite(600,250,40,10);
         
         ninja.x = Math.round(random(4055,6000));
         ninja.addAnimation("running3",ninjaimg);
         ninja.scale = 0.4;
         ninja.velocityX = -15;
        
         
         ninja.lifetime = 200;
         
         
         
         
       
        ninjaGroup.add(ninja);
       }
       
     }


     function spawnsword()
{
    
    sword=createSprite(500,150,5,10)  
    sword.addImage(swordimg);
    sword.velocityX=10;
  
    sword.scale=0.3;
    sword.x=player.x;
    sword.y=player.y;
    sword.lifetime=130;
    swordGroup.add(sword);
}




function spawndraco() {
       
  if (frameCount % 10 === 0) {
    var draco = createSprite(600,-50,40,10);
    draco.x = Math.round(random(5650,6200));
    
    draco.addImage(dracoimg);
    draco.scale = 0.3;
    draco.velocityY = 20;
    
    
    draco.lifetime = 100;
    
    
    
    
  
    dracoGroup.add(draco);
  }
  
}



function spawnluckies() {
       
  if(frameCount % 100===0) {
         block = createSprite(600,255,40,10);
         blockCreatedFrame=frameCount;
         block.x = Math.round(random(50,5000));
         block.y = Math.round(random(100,255));
    block.addImage(blockimg);
    block.scale = 0.2;

    blockGroup.add(block);
          }
 }


 


 
 function spawncoin()
 {
  
     coin=createSprite(500,150,5,10)  
     coin.addImage(coinimg);
     
   
     coin.scale=0.1;
    coin.x=player.x+50;
     coin.y=player.y-20;
    
     coin.lifetime=130;
     coinGroup.add(coin);
   
 }




 function spawnbread(x,y)
 {
 
     bread=createSprite(500,150,10,10)  
     bread.addImage(breadimg);
     
   
  
     bread.x=player.x+50;
     bread.y=player.y-20;
   
     breadGroup.add(bread);

 }


 function spawnapple(x,y)
 {
 
     apple=createSprite(500,150,5,10)  
     apple.addImage(appleimg);
     
   
     apple.scale=0.1;
     apple.x=player.x+10;
     apple.y=player.y-20;
     apple.lifetime=130;
     appleGroup.add(apple);

}




function spawnrage() {
       
  if (frameCount % 20 === 0) {
    var rage = createSprite(600,10,40,10);
    rageCreatedFrame=frameCount;
    rage.x = dragon.x;
   
    rage.y = Math.round(random(100,255));
    rage.addImage(rageimg);
    rage.scale = 0.2;
    rage.velocityX = -10;
   
    
    rage.lifetime = 100;
    
    
    
    
  
    rageGroup.add(rage);
  }
  
}

