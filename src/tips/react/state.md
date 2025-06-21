# useState()

ℹ️ State always needs to be imported from react using <code>import { useState } from "react";</code>

State is an important core concept of React. It is a bit like a component's memory – a way of remembering and updating information that can change over time.

The <code>useState()</code> hook (function) returns an array that is used to create state variables. It contains 2 items:

- 0 - Current state
- 1 - Setter function

It used both of these to show and change the state whenever it is needed. Creating the state variable is done via destructuring like this:

![](/assets/state-variable.png)

State can be any data type – string, number, boolean, array, object, or even <code>null</code> or <code>undefined</code>.

![](/assets/state-examples.png)

## Initial state

When you create a state variable, you can initialise the variable with any data. For example, if you are maintaining a list of items, you may already have this list of items in an array. But you also might want to start with an empty array. Or it might be that by default, a boolean will start as false, but you can update it to make it true.
When setting the initial state (<code>useState(initialValue)</code>), this is literally copied to the current state (first item in the <code>useState</code> array) to initialise it, and they are now separate. As the state variable is then used and mutated using the set function (second item in the array), the state is being replaced over the lifetime of that state.

The reason we use useState instead of a regular variable is that when state changes, React automatically re-renders the component to show the updated data. It <em>reacts</em> to the data changing.

### Analogy

As a random example, if you have a plot in an allotment that starts as a patch of grass that you want to add vegatables and fruit to, you might expect this to be <code>const [plants, setPlants] = useState([])</code>. Plants is an empty array because the plot has nothing in it yet. Over time, you add vegetables and fruit to it and over time (using <code>setPlants</code>), this <em>new</em> array is now full of 100 plants. The initial value of <code>[]</code> was made completely redundant after the first plant was added.

## When to use state

When you need to store data...

- Will it change at some point? If no, use regular variable; if yes...
- Can it be computed from existing state/<code>props</code>? If yes, derive state; if no...
- Should it re-render the component? If no, <code>useRef</code>; if yes...
- Place a new piece of state in a component (Always start with local state!)

## Where to use state

- Is the state only used by the current component? If yes, leave it in the component; if no...
- Is the state also used by the child component? If yes, pass it to the child via <code>props</code>; if no...
- Is it used by one or a few sibling or parent components? If yes, lift the state up to the first common parent component; if no...
- You probably want <i>global state</i>.
