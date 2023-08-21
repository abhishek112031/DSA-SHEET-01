// Polymorphism is a key concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. In JavaScript, polymorphism can be achieved through inheritance and method overriding. Let's illustrate polymorphism in JavaScript using an example:


class Shape {
  constructor() {
    this.shapeType = 'Shape';
  }

  draw() {
    return `${this.shapeType} is drawn.`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.shapeType = 'Circle';
    this.radius = radius;
  }

  draw() {
    return `${this.shapeType} with radius ${this.radius} is drawn.`;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.shapeType = 'Square';
    this.sideLength = sideLength;
  }

  draw() {
    return `${this.shapeType} with side length ${this.sideLength} is drawn.`;
  }
}

// Polymorphic behavior
function drawShape(shape) {
  console.log(shape.draw());
}

const circle = new Circle(5);
const square = new Square(7);

drawShape(circle); // Output: Circle with radius 5 is drawn.
drawShape(square); // Output: Square with side length 7 is drawn.


//In this example, we have an abstract `Shape` class with a `draw` method. The `Circle` and `Square` classes extend the `Shape` class and override the `draw` method with their specific implementations. This is an example of method overriding, which is essential for achieving polymorphism.

//The `drawShape` function is designed to accept any object that is an instance of the `Shape` class (or its subclasses). It doesn't know which specific subclass of `Shape` it receives but can treat them all as `Shape` objects due to polymorphism.

//When we pass instances of `Circle` and `Square` to the `drawShape` function, it can call the appropriate `draw` method based on the actual object type passed to it. This is polymorphism in action, where objects of different classes are treated uniformly through a common interface (`Shape` class in this case) and the appropriate method is invoked based on the actual object type at runtime.`
  