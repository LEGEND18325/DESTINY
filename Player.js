class Player{

constructor(){

this.name=null;

this.distance=0;
this.points=0;
this.index=null;
this.health=3000;
this.rank=0;


 

}
updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }


  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      points:this.points,
      health:this.health,
    
    });
  }



  static updateplayersatend(rank){
    database.ref('/').update({
      playersatend:rank
    });
     }
   
     getplayersatend(){
       database.ref('playersatend').on("value",(data)=>{
       this.rank=data.val();
   
   
       })
       
       
     }

}