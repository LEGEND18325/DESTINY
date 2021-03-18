class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
     
      this.title=createElement('h1');
    }
    hide(){
      
      this.button.hide();
      this.input.hide();
      this.title.hide();
     
    }
  
    display(){
      
  
      this.input.position(200 , 100);
      this.button.position(400, 100);
     
  this.title.position(displayWidth/2,5);
  this.title.html("DESTINY");
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        p1.name = this.input.value();
        playerCount+=1;
        p1.index = playerCount;
       p1.update();
        p1.updateCount(playerCount);
        
      });
  
    
    }
  }
  




