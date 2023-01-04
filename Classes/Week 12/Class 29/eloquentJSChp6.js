class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(vec){
        return new Vec(
            this.x += vec.x,
            this.y += vec.y
        )

    }
    minus(vec){
        return new Vec(
            this.x -= vec.x,
            thix.y -= vec.y
        )

    }
    get lenght(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));

    }

}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5




class Group {
    constructor(){
        this.group = [];
    }
    add(element){
        if (!this.has(element)) {
            this.group.push(element)
        }
    }
    delete(element){
        if (this.has(element)) {
            const removeItem = this.group.indexOf(element);
            delete this.group[removeItem];
        }

    }
    has(){

    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false