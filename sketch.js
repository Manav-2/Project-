var dog,sadDog,happyDog;
var button1, button2;
var foodObject;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,500);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock

function feedDog(){
  dog.addImage(happyDog);

  if(foodObject.getFoodStock()<=0){
    foodObject.updateFoodStock(foodObject.getFoodStock()*0);
  }else{
    foodObject.updateFoodStock(foodObject.getFoodStock()-1);
  }
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    food:FoodS
  })
}
