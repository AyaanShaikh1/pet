var dog,happyDog,dog1;
var database;
var foodS,foodStock;


function preload()
{
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}  

function setup() {
  createCanvas(1200, 1200);
  database = firebase.database();
  dog = createSprite(800,400);
  dog.addImage(dog1);
  dog.scale = 0.2;
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
  background("cyan");
  drawSprites();
  textSize(20);
  fill("white");
  stroke("black");

 
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else{
    x = x - 1;
  }


database.ref('/').update({
Food:x
})

}



