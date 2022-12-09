class Dog {
    constructor(name, spec, cm) {
        this.name = name
        this.size = cm
        this.species = spec
    }

    bark(){
        if (this.size > 60) {
            return "Grrr! Grrr!"
        } else {
            return "Woof! Woof!"
        }
    }

}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);