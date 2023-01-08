let player;
let enemy = [];

let framesTillCreate = 300;
let frame = 0;
let speed = 2;

let width = 1200;//1366 covers full screen according to my laptop
let height = 600;//635  "

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
  image(bgImg, 0, 0, width*2, height * 2);
  
  frame++;
  player.draw();
  player.update();

  
  for (let i = enemy.length - 1 ; i >= 0; i--) {
    enemy[i].draw();
    enemy[i].update();
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
  
  if (frameCount % 1000 == 0) {
    speed+=0.1;
  }
  
}

function mouseClicked() {
  player.shoot();
}