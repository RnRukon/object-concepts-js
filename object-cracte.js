//1.using object literal
const student = { name: 'Rukon', job: 'web developer' };


//2.constructor
const person = new Object();
// console.log(person);

//3
const human = Object.create(null);
// console.log(human);

//4 class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('manus', 12);
// console.log(peop);

//5 function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);