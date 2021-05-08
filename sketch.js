const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
var ground
var score=0
var particle
var turn=0
var gameState="start"
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  

  for(var k =0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko (j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,125))
  }
  for (var j=40;j<=width-10;j=j+50){
    plinkos.push(new Plinko (j,175))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,225))
  }

ground=new Ground(500,790,800,20)

  
}
  


function draw() {
  background(0,0,0);
  Engine.update(engine)  

  textSize(20)
  fill("white")
  text("score: "+score,650,50)

  text("500",20,525)
  text("500",100,525)
  text("500",180,525)
  text("500",260,525)
  text("100",340,525)
  text("100",420,525)
  text("100",500,525)
  text("100",580,525)
  text("200",660,525)
  text("200",740,525)

for (var k=0;k<divisions.length;k++){
  divisions[k].display()
}

for(var a=0;a<plinkos.length;a++){
  plinkos[a].display()
}



if (particle!=null){
  particle.display()

  if(particle.body.position.y>760 ){
  if  (particle.body.position.x<300 ){
    score=score+500
    particle=null
    if(turn>=5)gameState="end"
  }
  if  (particle.body.position.x>301 && particle.body.position.x <600 ){
    score=score+100
    particle=null
    if(turn>=5)gameState="end"
  }
  if  (particle.body.position.x>601 && particle.body.position.x<900 ){
    score=score+200
    particle=null
    if(turn>=5)gameState="end"
  }
}
}
if(turn===5){
  gameState="end"
  textSize(40)
  fill("white")
  text("gameOver",250,450)
}



  for (var j = 0; j < particles.length; j++){
  particles[j].display(); 
  }
 
  ground.display()
  drawSprites();

} 

function mousePressed(){
if(gameState!=="end"){
  turn++
  particle=new Particles(mouseX,10,10,10)
}
}
