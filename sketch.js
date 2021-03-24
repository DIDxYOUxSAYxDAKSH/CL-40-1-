var canvas, backgroundImage;

var cars,car1,car2,car3,car4;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
function preload(){

  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png"); 
  
  track = loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
