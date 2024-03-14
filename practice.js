class Animal {
	constructor(speciesVal){
		this._species = speciesVal;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`The ${this._species} makes a sound`);
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log(`purr`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log(`woof`);
	}
}

// const myDog = new Dog("Golden Retriever");
// myDog.makeSound(); 
// myDog.bark();


// const myCat = new Cat("Siamese"); 
// myCat.makeSound();
// myCat.purr();

class Person {
	constructor(nameVal, ageVal){
		this._name = nameVal;
		this._age = ageVal;
	}
    set age(myAge){
		this.age = myAge;
	}
	get name(){
		return this._name;
	}
	
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// const student1 = new Student("Nitin",26);
// console.log(student1.study());
// console.log(student1.name);
// console.log(student1.age);

class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	 get width() {
    return this._width;
  }
  
  get height() {
    return this._height;
  }
	getArea(){
		return this._height* this._width;
	}
}

class Square extends Rectangle{
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4 * this._width;
	}
}

let rectangle = new Rectangle(4,5);
console.log(rectangle._height);
console.log(rectangle._width);
console.log(rectangle.getArea());

let square = new Square(4);
console.log(square._height);
console.log(square._width);
console.log(square.getArea());