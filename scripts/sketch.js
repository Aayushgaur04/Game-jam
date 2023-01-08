let player;
let enemy = [];

let framesTillCreate = 300;
let frame = 0;
let speed = 2;

let width = 1200;//1366 covers full screen according to my laptop
let height = 600;//635  "

var health = 50;
var maxHealth = 100;

function setup() {
  createCanvas(width, height);
  
  imageMode(CENTER);
  player = new Player();

  enemyImg = loadImage('assets/enemy.png');
  enmey2Img = loadImage('assets/enemy 1.png');
  
  
  playerImg = loadImage('assets/player.png');
  bgImg = loadImage('assets/bg.jpg');
  enemy.push(new Enemy((speed)));
}

function draw() {

  //HP BAR
  background(100);

  health = min(maxHealth, ++health);
  image(bgImg, 0, 0, width*2 , height * 2);
  
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(10, 20, map(health, 0, maxHealth, 0, 200), 20);
  
  noStroke();
  fill(255, 0, 0);
  rect(10, 20, map(health, 0, maxHealth, 0, 200), 20);

  frame++;
  
  player.draw();
  player.update();

  
  for (let i = enemy.length - 1 ; i >= 0; i--) {
    enemy[i].draw();
    enemy[i].update();
    enemy[i].shoot();
    if (player.shot(enemy[i])) {
      enemy.splice(i, 1);
    }
    
  }
  
    

  if (frame > framesTillCreate && enemy.length < 300) {
    enemy.push(new Enemy(random(speed)));
    frame = 0;
    if (framesTillCreate > 20) {
      framesTillCreate *= 0.95;
    }
  }
}


function mouseClicked() {
  player.shoot();
}
