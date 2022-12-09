//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class Pokemon {
    constructor(name, hp, sp, type, ab, sex, weak, str){
        this.name = name
        this.type = type
        this.health = hp
        this.skillPoint = sp
        this.strength = str
        this.ability = ab
        this.sex = sex
        this.weakness = weak
    }

    attack(target){
        if (this.health > 0) {
            target.health -= this.strength
        } else {
            console.log(`${this.name} can't attack, it's too tired`)
        }
    }

    summon(){
        console.log(`${this.name} entra in campo con ${this.health}`)
    }

    specialAbility(target){
        console.log(`${this.name} uses ${this.ability} on ${target}`)
    }

}