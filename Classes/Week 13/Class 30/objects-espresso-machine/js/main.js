//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(color, brand, size, capsule, grind){
        this.color = color;
        this.brand = brand;
        this.size = size;
        this.capsule = capsule;
        this.grind = grind;
    }

    start() {
        console.log('The machine is preparing the coffee');
    }

    finish() {
        console.log('The coffee is ready to drink!');
    }

    grinding (){
        if (this.grind){
            console.log('Grinding coffee beans...');
        } else {
            console.log("This machine can't grind coffee beans");
        }
    }


    
}