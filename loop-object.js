const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleansed: 'true'
};

/*

01.for(let i=0;i<10;i++){} 
   for(const number of numbers){}
02.for(const number of numbers){} array এর জন্য use করতে হয়;

03. for(const prop in student){} object জন্য use করতে হয়
*/


for (const prop in bottle) {//object এর জন্য for in loop  use করতে হয়;
    // console.log(prop); //properties এর নাম পাওয়ার জন্য ;
    // console.log(bottle[prop]);//properties এর value পাওয়ার জন্য;


}

const keys = Object.keys(bottle);//একটি array retune করে;
// console.log(keys); 

for (const prop of keys) {//এটা থেকে আবার loop use করে ভালো গুলো পাওয়ার জন্য;
    // console.log(prop);
}

/////***Advanced ***/////

const entries = Object.entries(bottle);
console.log(entries); //array এর ভিতরে array আকারে retune করে;

// const [key,value]=['color','yellow'] // destructuring===

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}