var canvas, backgroundImage;
var carsAtEnd;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playerInfoRef;
var form, player, game;

var cars, car1, car2, car3;

function preload(){

  


}

function setup(){
  canvas = createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
