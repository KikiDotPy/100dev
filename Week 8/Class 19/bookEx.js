// Improve char Obj /w exp prop

/* const Aurora = {
    name = "Aurora",
    health = 150,
    strenght = 25,
    exp = 0;
}

// Aurora is harmed by an arrow
Aurora.health -= 20;

// Aurora equip strengh accessory
Aurora.strenght += 10;

// Aurora kills a monster

Aurora.exp += 100; */

const Alex = {
    name : "Alex",
    balance : 0,
    
    credit(n) {
        balance += n;
    },

    describe() {
        return `owner: ${this.name}, balance ${this.balance}`;
    }
};

Alex.credit(250);
console.log(Alex.describe());