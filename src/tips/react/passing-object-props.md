# Passing objects as props

When passing data from a parent to child component, especially when working with arrays of objects, it's best to pass the entire object rather than its individual properties as separate props.

In the first example below, you need to define each prop in the parent and then pass each one down individually. When you need all (or most) properties from an object, this becomes verbose and repetitive.

![](/assets/individual-props.png)

A better way is to pass the object down as an entire object prop and then access the properties you need on the child.
In the below example, for each object in basketData array, the <code>map()</code>:

- Takes the current object from the basketData array
- Creates a <code>&lt;BasketItem /&gt;</code> component
- Passes it the current object as the <code>item</code> prop
- Add it to the list of components to render

The result is an array of components, each with one object from the basketData (current state) array.

![](/assets/prop-object.png)

## Benefits

- Cleaner Parent Component – The parent doesn't need to know or list every property the child needs and less repetitive code when mapping over arrays of objects
- Future-Proof & Dynamic – If your object gains new properties, they will be available
- Easier Refactoring – If you need to refactor, fewer places need to be updated
- Better Performance – React can optimise re-renders better when fewer props are passed, and there's less prop drilling through multiple component layers

## When NOT to pass entire objects

In some cases, it is better to be more intentional about the data you pass down to the child. For example:

- When the child component only needs 1-2 simple values
- When you want to keep components more independent/reusable
- When the object contains sensitive data the child shouldn't access
