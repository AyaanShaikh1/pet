class food {
    constructor(){
        this.FoodStock = 0;
        this.LastFed = null
        this.image = loadImage("images/Milk.png");
    
    }
    
    display(){
     var x=80,y=100;   

     imageMode(CENTER);
     image(this.image,720,220,70,70);

     if(this.FoodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
     }
    }


    getfoodStock(){
        var FoodstockRef = database.ref('Food');
        FoodstockRef.on("value",function(data){
        foodS = data.val(); 
        })

    }

    updatefoodStock(Food){
        database.ref('/').update({
        foodS:Food        
        });
    }

    deductFood(){
        if(this.FoodStock > 0){
            this.FoodStock = this.FoodStock -1; 
        }
    }
}
    

