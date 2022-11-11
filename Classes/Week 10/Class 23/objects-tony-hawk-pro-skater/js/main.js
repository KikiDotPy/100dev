//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater(name,specialMove,jump,fightStyle) {
    this.name = name
    this.specialMove = specialMove
    this.jump = jump
    this.fightStyle = fightStyle

    this.final = function(){
        console.log(`Take this ${this.specialMove}!!!`)
    }
    this.win = function(){
        console.log("I WON")
    }
    this.lose = function() {
        console.log("...")
    }

}
