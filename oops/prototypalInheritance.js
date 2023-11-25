// Define a constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Add a method to the constructor's prototype
  Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  
  // Create instances using the constructor
  var person1 = new Person('John', 'Doe');
  var person2 = new Person('Jane', 'Smith');
  
  // Access properties and methods
  console.log(person1.fullName()); // Output: "John Doe"
  console.log(person2.fullName()); // Output: "Jane Smith"
  
  // Check inheritance
  console.log(person1.hasOwnProperty('fullName')); // Output: false (inherited)
  console.log(Object.getPrototypeOf(person1) === Person.prototype); // Output: true
  
//In this example, person1 and person2 are instances of the Person constructor. They inherit the fullName method from the Person.prototype object. The Object.getPrototypeOf() method is used to check if an object's prototype is the same as the constructor's prototype.