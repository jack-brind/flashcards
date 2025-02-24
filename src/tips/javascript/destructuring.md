# Destructuring

At its core, destructuring is essential a way to extract / unpack values from a complex data structure and store them inside smaller data structures like variables. It is a more readable and terse way to access data inside these complex structures.

## Arrays

When destructuring arrays, you can destructure based on the order of the elements in the array i.e. <i>I want to get access to the first, second, etc element in the array</i> - in arrays, the order matters. However, you might only want the 3rd element, in which case you can skip elements e.g. <code>const [ , , third] = array;</code>.

## Objects

When destructuring objects, you can access properties based on their name. However, you can also rename properities whilst destructuring using a colon and then providing your preferred property name e.g. <code>const { title: movieTitle } = interstellar;</code>. This is great for when you have a large object from an external source where the property names don't necessarily align with your naming convention.

## Both

- You can provide default values in case an element or properties does not exist in an object or array, e.g.
  <code>const { rating = 8.5 } = interstellar;</code>.
- The <code>...rest</code> operator can be used to optionally collect the rest of the elements into an array or object. This must be put at the end.
- Destructuring can be used in function parameters as well. If you had a function that takes a user object, instead of providing the object, you can provide the destructured values instead <code>function({ name, email }) {}</code>. This is just a better alternative to <code>function(user.name, user.email) {}</code>.

![](/assets/destructuring.png)
