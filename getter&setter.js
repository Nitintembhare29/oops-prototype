class User {
  constructor(myEmail, myPhone, myUsername, myPassword) {
    this._email = myEmail;
    this._phone = myPhone;
    this._username = myUsername;
    this._password = myPassword;
  }
  set setName(myName) {
    this._name = myName[0].toUpperCase() + myName.slice(1);
  }
  get getName() {
    return "Mr " + this._name;
  }
}

const user1 = new User("nitin122@gmail.com", "1131525687", "nitin12", "456465");
console.log(user1);
user1.setName = "nitin";
console.log(user1.getName);

// getter and setter function are used to set and retrive the private variables of object
// respectively.
