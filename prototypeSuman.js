// prototype

// Whenever we create any object, js automatically pushes these
// hidden properties into an object and then js engine attaches
// this object to our custom object.

// .__proto__ is a property that is present on custom object that we create
// prototype is a property that is present only on built in function keyword like String, Object, Arrays

// prototype is an objcet from which another object is derived from
// they act as inheritance in js.
// uses:
// 1> to add new methods to object constructors.
// 2> prototypal inheritance.

let arr = ["Nitin", true, 21];
console.log(arr.__proto__); // __proto__
console.log(Array.prototype); // prototype
console.log(arr.__proto__ === Array.prototype); // true
// prototype chaining
console.log(arr.__proto__.__proto__ === Object.prototype);

// constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}

// adding new methods to prototype property
User.prototype.getAge = function () {
  console.log(this.age);
};

let user1 = new User("nitin", 26);
let user2 = new User("amol", 25);
console.log(user1);
console.log(user2);

console.log(user1.name);
console.log(user2.getAge()); // prototypal inheritance

console.log(user1.__proto__);
console.log(User.prototype);

let arr1 = [1, 2, 0, 3, 0, 4];

function moveZeroes(arr) {
  let L = 0;
  let R = 1;
  while (R < arr1.length) {
    if (arr[L] != 0) {
      L++;
      R++;
    } else if (arr[R] == 0) {
      R++;
    } else {
      let temp = arr[L];
      arr[L] = arr[R];
      arr[R] = temp;
    }
  }
  return arr;
}

console.log(moveZeroes(arr1));
