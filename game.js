class Game {
    constructor(){
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      cars = [car1, car2, car3];
    }
  
    play(){

      form.hide();
  
      player.getCarsAtEnd();
  
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 170;
        var y;
  
        for(var plr in allPlayers){
          //background("#c68767")
          //image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;

          //use data form the database to display the cars in y direction
          y = 600 - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            
           
            camera.x = 500;
            camera.y = cars[index-1].y
            
           
  
          }
         
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,100)
        }  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance>3860){
        gameState=2
        player.rank=player.rank+1;
        Player.updateCarsAtEnd(player.rank);
      }
  
      drawSprites();
    }
    end(){
      console.log("end")
      console.log(player.rank)
  
    }
  }
  