//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighterChars(name, gender, specialMove,) {
    this.name = name;
    this.gender = gender;
    this.specialMove = specialMove;

    this.specialMove = function() {
        console.log(`YOOOOOOOO ${this.specialMove}`);
    }
}