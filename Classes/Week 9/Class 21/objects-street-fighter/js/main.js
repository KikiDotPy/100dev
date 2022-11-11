//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class Character {
    constructor(name, gender, sMove, bool) {
        const name = name;
        const gender = gender;
        const specialMove = sMove;
        const evil = bool;
    }

    specialMove(){
        console.log(this.specialMove);
    }

    hello(){
        console.log(`Hi there! I am ${this.name}`);
    }

    win(){
        console.log("I win!");
    }
}
