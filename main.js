function Student(name, age) {
  this.name = name;
  this.age = age;
  this.welcome = () => {
    console.log(`Hello ${this.name}`);
  };
}
let student = new Student("Sara", 22);
student.welcome();

let person = {
  name: "Nitin",
  age: 26,
  func: () => {
    console.log(`Welcome to web developement`);
  },
};
person.func();
