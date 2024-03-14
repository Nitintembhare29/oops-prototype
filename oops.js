// class => a class is a blue-print from which we can create individual object.
// object => an object is the instance of class. (instance = a part)
// there are three ways of creating object
// 1. using normal object
var user1 = {
  name: "Nitin",
  email: "nitin123@gmail.com",
  age: 26,
  gender: "male",
};
console.log("user1=>", user1);

// 2. using Factory function
function createUser(nameVal, emailVal, ageVal, genderVal) {
  return {
    name: nameVal,
    email: emailVal,
    age: ageVal,
    gender: genderVal,
  };
}
let user2 = createUser("amol", "amol145@gamil.com", 26, "male");
console.log("user2=>", user2);

// 3. using constructor function
function User(nameVal, emailVal, ageVal, genderVal) {
  this.name = nameVal;
  this.email = emailVal;
  this.age = ageVal;
  this.gender = genderVal;
  this.getUserName = () => {
    return "The User's Name is " + this.name;
  };
}

// instead of saying key,value pair -> I will call name,email,phoone,etc. as properties of class

const user3 = new User("harshal", "harhsal123@gmail.com", 26, "male"); // creates new user3 from user class
console.log("user3=>", user3);
console.log(user3.getUserName()); // calling getUserName function
// console.log(user3.getUserName)   getUserName is reference

const s = "123456781244";
console.log(s.slice(-5));

// class BankAccount {
//   #accountNumber;
//   constructor(name, phone, aadhaar, accountNumber) {
//     this.name = name;
//     this.phone = phone;
//     this.aadhaar = aadhaar;
//     this.#accountNumber = accountNumber; //make this private?
//   }

//   getMaskedAccountNumber() {
//     return (
//       "XXXX" +
//       this.#accountNumber.slice(4, 8) +
//       "XXXX" +
//       this.#accountNumber.slice(-4)
//     );
//   }

//   #getAccountNumber() {
//     return this.#accountNumber;
//   }
// }

// var aviAccount = new BankAccount(
//   "Avi Vashishta",
//   "9299192192",
//   "1234 5678 1234",
//   "1234567890123"
// );

// console.log("My Account>>>> ", aviAccount);

// function sendSMS() {
//   console.log(
//     `From Your Account - ${aviAccount.getMaskedAccountNumber()} 10/- has been debitted`
//   );
// }
// sendSMS();

// console.log(aviAccount.#accountNumber);
// console.log(aviAccount.#getAccountNumber());

// removal of PII
// PII = Personally Identifiable Information
// Aadhar, phone number, accountNumber , fullName, pan
// age, state, degree , job , interests

// class Animal {
//   speak() {
//     return "Animal speaks";
//   }
//   eats() {
//     return "Animal Eats";
//   }
// }

// Extends is the keyword that we use, so that the child class can access the properties of the parent class.
// The child extends the parent.
// class Dog extends Animal {
//   constructor(color, breed) {
//     super();
//     this.color = color;
//     this.breed = breed;
//     this.age = 4;
//   }
//   speak() {
//     return "Dog barks! ";
//   }
// }

// var tommy = new Dog("Brown", "German Shehpard");
// var myAnimal = new Animal();
// console.log(myAnimal.breed);
// console.log(tommy.speak());

class Person {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.mammal = true;
  }

  speak() {
    return "Person speaks native language";
  }
}

class Student extends Person {
  constructor(nameVal, species, id) {
    // super keyword for calling the above - constructor of the parent
    // class constructor
    super(nameVal, species); // we can access properties by calling constructor of parent with super keyword
    this.id = id;
  }
}

var student1 = new Student("Sahil", "Human", "1");

class Instructor extends Person {
  constructor(name, species, classes) {
    // super keyword for calling the above
    // class constructor
    super(name, species);
    this.classes = classes;
  }

  speak() {
    return "Instructor can only speak english";
  }

  speakAtHome() {
    return super.speak();
  }
}

var instructor1 = new Instructor("Avi", "Human", "F3");
console.log(student1.speak());
console.log(instructor1.speak());
console.log(instructor1.speakAtHome());
