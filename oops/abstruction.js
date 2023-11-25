// Abstraction is a fundamental concept in programming that allows you to hide complex implementation details and provide a simplified interface for working with a particular functionality or set of data.


// Abstraction using a class

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    // Abstracting the sound behavior
    console.log(`${this.name} says ${this.sound}.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'Woof');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'Meow');
  }
}

// Usage of the abstraction
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.makeSound(); // Output: Buddy says Woof.
cat.makeSound(); // Output: Whiskers says Meow.

//explain:
// `In this example, we've defined an abstract Animal class that has a makeSound method. The makeSound method doesn't have a concrete implementation in the Animal class, which makes it abstract. The Dog and Cat classes extend the Animal class and provide their specific sound implementations.

// Now, when we create instances of Dog and Cat and call the makeSound method, we get the appropriate sound output for each animal. The makeSound method is an abstraction because we don't have to worry about how the sound is produced; we only care about calling the method and getting the expected result. The details of the sound production are abstracted away from us.`  
