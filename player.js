import { Carbon, Pollution, cow } from "./enemy.js"

export class Player {
    constructor(game) {
        this.game= game
        this.width= 100
        this.height= 90
        this.image=document.getElementById('Bob')
        this.x= 0
        this.y= this.game.height - this.height - 110
        this.speed= 0
        this.maxspeed= 10
        this.vel= 0
        this.weight= 1
    }

    update(input) {
        this.onCollision ()
      //walk front and back
        this.x += this.speed
        if (input.includes('ArrowRight'))
            this.speed = this.maxspeed
        else if (input.includes('ArrowLeft'))
        this.speed= -this.maxspeed
        else
            this.speed = 0
        if(this.x < 0) this.x = 0
        if(this.x > this.game.width - this.width) this.x= this.game.width - this.width

        // jump up and down
        //this.y += this.speed
        if (input.includes('ArrowUp') && this.onGround())
            this.vel = -30
            this.y += this.vel
        if (!this.onGround()) 
            this.vel += this.weight
        else 
            this.vel = 0
    
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    onGround() {
        return this.y >= this.game.height - this.height - 110
    }

    onCollision() {
        this.game.enemies.forEach(enemy => {
            if (enemy.x < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y) {
                    enemy.markedforDeletion = true
                    if (enemy instanceof cow 
                        ) {
                            this.game.score += 10
                        }

                    else if (enemy instanceof Pollution ||
                        enemy instanceof Carbon) {
                            this.game.score -= 30
                        }
                    
                }
        });
    }
}