class Form {
    constructor(){
        this.input=createInput("UserName");
        this.button=createButton("Play");
        this.button.style('background', 'green');
        this.waiting=createElement("h2");
        this.title=createElement("h1");
        this.reset=createButton("Reset")
        this.reset.style('background', 'red')

    }

    hide(){
        this.waiting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Racing game");
        this.title.position(displayWidth/2 - 50, 0)

        
        this.input.position(500,300)
        this.button.position(500,350)
        this.reset.position(960,20)

        this.button.mousePressed(()=>{
            console.log("pressed")
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.waiting.html("Hello " + player.name + ", waiting for other players to join...")
            this.waiting.position(500, 100);
            
          });

          this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
          });
      
        
    }
};