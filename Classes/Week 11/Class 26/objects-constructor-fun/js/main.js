//Create a constructor with 4 properties and 3 methods
function Pizza(sauce, toppings, cheese, size){
    this.sauce = sauce;
    this.toppings = toppings
    this.chees = cheese
    this.size = size

    this.cooked = function(){
        console.log("Pizza is ready!")
    }

    this.time = function(){
        console.log("Pizza need to cook 5 mins")
    }

    this.burnMouth = function(){
        console.log("sjdnsjfblk..")
    }
}

let margherita = new Pizza(true, ["cheese", "basil"], "mozzarella", 'large');
