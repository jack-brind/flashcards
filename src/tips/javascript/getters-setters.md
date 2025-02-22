# Class getters and setters

In classes, getter and setter properties (assessor properties) allow you to control access to object properties in a controlled manner and are defined using the <code>get</code> and <code>set</code> keywords inside classes. Essentially, they are functions that get and set a value, but on the outside, they just look like regular properties.

A getter is used to retrieve a property value whereas a setter is used to set or modify a property value. They hide internal logic of objects, providing encapsulation which makes code safer, cleaner, and more maintainable.

## Getters

Getters allow you to retrieve a property value as if it were a regular variable, without calling a function explicitly. Getters can be used for things like:

- Computing ages, Ids, etc.
- Converting data into readable formats
- Producing a summary of the object based on its properties
- Returning booleans based on properties of an object
- Providing useful defaults

## Setters

Setters allow data inside objects to be validated or transformed to ensure consistency, particularly when giving a user the ability to set a property value through the UI. Some examples of how this can be useful:

- Adding a deposit to a bank account and ensuring that it is a number and it is > 0
- Formatting a telephone number, email address, date, etc.
- Ensuring that a full name has at least a first <i>and</i> last name
- Forcing a value to be not be empty
- Transforming a string to be title case every time (where user input might have been lower case)
- Restricting certain values from being selected

![](/assets/getter-setter.png)

## Underscore convention

If a getter or setter tries to access the same property name that it is defining, it causes an infinite recursion loop. To avoid this, it’s common to use an underscore <code>\_</code> prefix for the <emphasis>internal property</emphasis>, while exposing the external version through a getter and setter.

As a result, that property can no longer be accessed using that property name (as a new property is created). In these cases, you will need to then create a getter to retrieve that property value.

![](/assets/get-set-underscore.png)
