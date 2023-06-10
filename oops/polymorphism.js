class Animal {
    makeSound() {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Dog barks");
    }
  }
  
  const animal = new Animal();
  animal.makeSound(); // Output: "Animal makes a sound"
  
  const dog = new Dog();
  dog.makeSound(); // Output: "Dog barks"
  