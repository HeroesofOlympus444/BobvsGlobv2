class baseenemy {
    constructor() {
        this.width=60
        this.height=60
        this.fps=20
        this.frameTimer=0
        this.frameInterval=1000/this.fps
        this.markedforDeletion = false
    }

    update(deltaTime) {
        this.x -= Math.random() * this.speedX
        this.y += this.speedY
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0
        }
        else
            this.frameTimer += deltaTime
        if (this.x + this.width < 0) {
            this.markedforDeletion = true
        }
            
    }

    draw(context) {
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}


export class cow extends baseenemy {
    constructor(game) {
        super()
        this.game=game
        this.x=this.game.width - 60
        this.y=Math.random() * this.game.height * 0.5
        this.image=document.getElementById('enemy1')
        this.speedX=5
        this.speedY=0
    }

    update(deltaTime) {
        super.update(deltaTime)
    }

    draw(context) {
        super.draw(context)
    }
}

export class Pollution extends baseenemy {
    constructor(game) {
        super()
        this.game=game
        this.x= Math.random() *this.game.width
        this.y= this.game.height - 60 - 110
        this.image=document.getElementById('enemy2')
        this.speedX=4
        this.speedY=0
    }

    update(deltaTime) {
        super.update(deltaTime)
    }

    draw(context) {
        super.draw(context)
    }
}

export class Carbon extends baseenemy {
    constructor(game) {
        super()
        this.game=game
        this.x= Math.random () * this.game.width
        this.y= 50
        this.image= document.getElementById('enemy3')
        this.speedX= 6
        this.speedY= 6
    }

    update(deltaTime) { 
        super.update(deltaTime)
    }

    draw(context) {
        super.draw(context)
    }
}
