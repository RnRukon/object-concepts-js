const bottle = { color: 'yellow', hold: 'water', price: 50, isCleansed: 'true' };

//01.
const keys = Object.keys(bottle);//object এর keys/ properties গুলো পেতে হলে Object.keys() ,method us করতে হয়;
// console.log(keys);


const value = Object.values(bottle);//object এর value/value গুলো পেতে হলে Object.values() ,method us করতে হয়;
// console.log(value);



const pairs = Object.entries(bottle);
console.log(pairs);//object এর value এবং properties জোরাই জোরাই দেখার জন্য Object.entries() ,method us করতে হয়;


Object.freeze(bottle);//এটা use করলে কোনো properties যোগ করতে দেবে না আবার properties value change ও করা যাবে না,




Object.seal(bottle);//এটা use করলে object এ কোনো properties যোগ করতে দেবে না কিন্তু properties value chang করতে দিবে;
bottle.price = 500;

delete bottle.isCleansed;//delete ঠেকাতে object.seal() method us করতে হয়;



console.log(bottle)//object এর value delete করতে delete object name.properties us  করতে হয়;

