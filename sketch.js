var geekyBoy, nerdyGirl;
var actionGirl, blueshirtBoy;
var candyGirl, pinkyGirl;
var redhoodieBoy, thiefBoy;
var danceGirl;
var candy, candyBunch, coin;
var zombie1

function preload(){
  actionGirl = loadAnimation("Characters/Action_Girl/AG1.png","Characters/Action_Girl/AG2.png","Characters/Action_Girl/AG3.png","Characters/Action_Girl/AG4.png","Characters/Action_Girl/AG5.png","Characters/Action_Girl/AG6.png");
  blueshirtBoy = loadAnimation("Characters/Blue_Shirt_Boy/BSB1.png","Characters/Blue_Shirt_Boy/BSB2.png","Characters/Blue_Shirt_Boy/BSB3.png","Characters/Blue_Shirt_Boy/BSB4.png","Characters/Blue_Shirt_Boy/BSB5.png","Characters/Blue_Shirt_Boy/BSB6.png");
  geekyBoy = loadAnimation("Characters/Geeky_Boy/GB1.png","Characters/Geeky_Boy/GB2.png","Characters/Geeky_Boy/GB3.png","Characters/Geeky_Boy/GB4.png","Characters/Geeky_Boy/GB5.png","Characters/Geeky_Boy/GB6.png");
  nerdyGirl = loadAnimation("Characters/Nerdy_Girl/NG1.png","Characters/Nerdy_Girl/NG2.png","Characters/Nerdy_Girl/NG3.png","Characters/Nerdy_Girl/NG4.png","Characters/Nerdy_Girl/NG5.png","Characters/Nerdy_Girl/NG6.png");
  pinkyGirl = loadAnimation("Characters/Pinky_Girl/PG1.png","Characters/Pinky_Girl/PG2.png","Characters/Pinky_Girl/PG3.png","Characters/Pinky_Girl/PG4.png","Characters/Pinky_Girl/PG5.png","Characters/Pinky_Girl/PG6.png");
  redhoodieBoy = loadAnimation("Characters/Red_Hoodie_Boy/RHB1.png","Characters/Red_Hoodie_Boy/RHB2.png","Characters/Red_Hoodie_Boy/RHB3.png","Characters/Red_Hoodie_Boy/RHB4.png","Characters/Red_Hoodie_Boy/RHB5.png","Characters/Red_Hoodie_Boy/RHB6.png");
  thiefBoy = loadAnimation("Characters/Thief_Boy/TB1.png","Characters/Thief_Boy/TB2.png","Characters/Thief_Boy/TB3.png","Characters/Thief_Boy/TB4.png","Characters/Thief_Boy/TB5.png","Characters/Thief_Boy/TB6.png");
  danceGirl = loadAnimation("Characters/Dance_Girl/DG1.png","Characters/Dance_Girl/DG2.png","Characters/Dance_Girl/DG3.png","Characters/Dance_Girl/DG4.png","Characters/Dance_Girl/DG5.png","Characters/Dance_Girl/DG6.png");
  candy = loadImage("Characters/Things/Candy.png");
  candyBunch = loadImage("Characters/Things/CandyBunch.png");
  coin = loadImage("Characters/Things/Coin.png");
  zombie1 = loadAnimation("Characters/Zombie1/Zombie1.png","Characters/Zombie1/Zombie2.png","Characters/Zombie1/Zombie3.png","Characters/Zombie1/Zombie4.png","Characters/Zombie1/Zombie5.png","Characters/Zombie1/Zombie6.png",)
}


function setup() {
  createCanvas(800,400);
 createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}