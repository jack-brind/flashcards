# Class inheritance

Classes are syntactic sugar over constructor functions and prototypes. They are the modern way of doing OOP in JavaScript and they make inheritance easier too. Inheritance is a core building block of OOP and allows for reusability of code (keeping it DRY) and good hierarchy. It is really useful when When you have shared behavior between different types of objects, or when you want to create specialised versions of a more general class.

In classes, inheritance is achieved using the <code>extends</code> keyword on a sub-class, establishing the relationship between the parent and child class. From there you also need to call the constructor of the parent class using the <code>super()</code> keyword to ensure that the parent's properties are set correctly before the child class adds its own properties. Without calling <code>super()</code>, <code>this</code> won’t be defined inside the child class.

![](/assets/class-extends.png)
