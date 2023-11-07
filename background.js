

export class layers {
    constructor (game,image,speedModifier) {
       this.game = game
       this.layerImage = image
       this.speedModifier = speedModifier
       this.width = this.game.width
       this.height = this.game.height
       this.x = 0
       this.y = 0
       this.gameSpeed = this.game.gameSpeed
       this.speed = this.gameSpeed * this.speedModifier
       this.x2 = this.width
    }

    update (input) {
        if (input.includes('ArrowRight') ||
            input.includes('ArrowLeft') ||
            input.includes('ArrowUp') ||
            input.includes('ArrowDown')) {
                this.gameSpeed = 10
                this.speed = this.gameSpeed * this.speedModifier
        }
        else {
            this.speed = this.gameSpeed = 0
            
        }

        if (this.x <= -this.width) {
            this.x= this.width + this.x2 - this.speed
        }

        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed
        }

        this.x = Math.floor (this.x - this.speed)
        this.x2 = Math.floor (this.x2 - this.speed)
    }

    draw (context) {
        context.drawImage(this.layerImage, this.x, this.y, this.width, this.height)
        context.drawImage (this.layerImage, this.x2, this.y, this.width, this.height)
    }
}


export class background {
    constructor (game) {
        this.game = game
        this.width = this.game.width
        this.height = this.game.height
        //create background array
        this.layer1image=document.getElementById('layer-1')
        this.layer1 = new layers(game,this.layer1image,0.2)
        this.layer2image=document.getElementById('layer-2')
        this.layer2=new layers(game,this.layer2image,0.4)
        this.layer3image=document.getElementById('layer-3')
        this.layer3= new layers(game,this.layer3image,0.6)
        this.layer4image=document.getElementById('layer-4')
        this.layer4= new layers(game,this.layer4image,0.8)
        this.layer5image=document.getElementById('layer-5')
        this.layer5= new layers(game,this.layer5image,1.0)
        this.backgrounds = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5]
    }

    update (input) {
        
        this.backgrounds.forEach(wallpaper => {
            wallpaper.update(input)
        })
    }

    draw (context) {
        this.backgrounds.forEach(layer => {
            layer.draw(context)
        })
    }
}