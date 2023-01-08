class Enemy {
  
  constructor(speed) {
    this.pos = createVector(600, 300);
    this.speed = speed;
    this.bullets = [];
    this.angle = 0;
  }
  
  
  draw() {
    angleMode(degrees);
    rectMode(CENTER);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = atan2(player.pos.y - this.pos.y, player.pos.x - this.pos.x);
    rotate(this.angle);


    image(enemyImg, -15, 0, 32, 32);
    
    pop();

//bullet for enemy 
   for (let bullet of this.bullets) {
      bullet.draw();
      bullet.update();
    }
    
    if (this.bullets.length > 0) {
      this.bullets.splice(0, 1);
    }
  }
    
  update() {
    // he moves towards us
    let difference = p5.Vector.sub(player.pos, this.pos);
    difference.limit(this.speed);
    this.pos.add(difference);
  }
  
  shot(player) {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      if (dist(this.bullets[i].x, this.bullets[i].y, player.pos.x, player.pos.y) < 20) {
        this.bullets.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  
  shoot() {
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
  }


  


  /* this is for enemy bullet
  
  bullet(destinationX, destinationY, enemySprite) {

    this.id = 'bullet';
    this.x = enemySprite.getX()+(enemySprite.getWidth()/2);
    this.y = enemySprite.getY()+(enemySprite.getHeight()/2);

    var targetX = destinationX - this.x,
        targetY = destinationY - this.y,
        distance = Math.sqrt(targetX * targetX + targetY * targetY);

    this.velX = (targetX / distance) * 5;
    this.velY = (targetY / distance) * 5;

    this.finished = false;

    this.sprite = new Kinetic.Circle({
        x: this.x,
        y: this.y, 
        radius: 3,
        fill: 'black',
        name: 'enemyProjectile'
    })
  

    this.draw = function(index) {

        var mayDelete = false;

        this.x += this.velX;
        this.y += this.velY;

        this.sprite.setAbsolutePosition(this.x, this.y);
        //console.log(this.sprite.getX());


        if(enemyCollision(this) == true) {
            mayDelete = true;
        }

        if (bulletLeftField(this.sprite) == true) {
            mayDelete = true;
        }

        if (mayDelete == true) {
            this.sprite.remove();
            enemies[index].bullets.splice(0, 1);
            createEnemyBullet(enemies[index]);
        }



        ammoLayer.draw();
    }
  }*/
}
