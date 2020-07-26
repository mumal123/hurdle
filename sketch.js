var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var mans, man1, man2, man3, man4;

var track, man1_img, man2_img, man3_img, man4_img;

function preload(){
  track = loadImage("images/track.jpg");
  man1_img = loadImage("images/1.jpg");
  man2_img = loadImage("images/2.jpg");
  man3_img = loadImage("images/3.jpg");
  man4_img = loadImage("images/4.jpg");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
  if(gameState === 2){
    game.end();
  }
}
