var tower,towerImage,ghoststand,ghost
var door,doorImage,doorGroup
var climber,climberImage,climberGroup
var ivblock,ivblockGroup


function preload(){
  
  towerImage=loadImage("tower.png")
  ghoststand=loadImage("ghost-standing.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  
  
}
  
  function setup(){
    createCanvas(600,600);
    tower=createSprite(300,300);
    tower.addImage(towerImage)
    tower.velocityY=2
    
    ghost=createSprite(150,150)
    ghost.addImage(ghoststand)
    ghost.scale=0.5
    
   doorGroup=new Group()
    climberGroup=new Group()
    ivblockGroup=new Group()
  }



  
  function draw(){
    background ("cyan");
    
    if(tower.y>300){
      tower.y=150
      
      
      
    }
    
    if(keyDown ("right_arrow")){
      ghost.x=ghost.x+3
      
      
    }
     if(keyDown ("left_arrow")){
      ghost.x=ghost.x-3
       }
    spawnDoors()
    
    
    drawSprites() 
  }
function spawnDoors(){
  if(frameCount%120===0){
    door=createSprite(150,150);
    door.addImage(doorImage)
    door.velocityY=3
    door.x=Math.round(random (100,500))
    climber=createSprite(150,210)
    climber.velocityY=3
    climber.addImage(climberImage)
    ivblock=createSprite(150,220,50,2)
    ivblock.velocityY=3
    ivblock.width=climber.width
    
    climber.x=door.x
    ivblock.x=door.x
    
    ghost.depth=door.depth
    ghost.depth+=1
    
    door.lifetime=120
    climber.lifetime=120
    ivblock.lifetime=120
    
    ivblock.debug=true
    
  }
  
  
  
}
