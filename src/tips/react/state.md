# useState()

State is arguably the most important concept of React. Components often need to change what’s on the screen as a result of an interaction so state is a bit like a component's memory – a way of remembering and updating information that can change over time.

The <code>useState()</code> hook returns an array that contains 2 items:

- 0 - Current state
- 1 - Setter function

![](/assets/state-variable.png)

State can be any data type – string, number, boolean, array, object, or even <code>null</code> or <code>undefined</code>. It is important to initialise the current state with the appropriate data type. The naming convention is for both variables to be camelCase with the current state in a normal variable convention and the updated prefixed with 'set'.

![](/assets/state-examples.png)

## Analogy

As a random example, if you have a plot in an allotment that starts as a patch of grass that you want to add vegetables and fruit to, you might expect this to be <code>const [plants, setPlants] = useState([])</code>. Plants is an empty array because the plot has nothing in it yet. But you start adding vegetable and fruit plants to it and over time (using <code>setPlants</code>), this <em>new</em> array is now full of 100 plants. The initial value of <code>[]</code> was made completely redundant after the first plant was added.

## When to use state

State is needed if a component (UI) will change at some point and if it will not, a regular variable can be used instead. Changing state will always trigger a re-render of a component. If you need to store a value that persists across renders but shouldn't trigger a re-render when it changes, use <code>useRef</code> instead.

### Mental model

Does this change and do I care? If it changes AND the user should see the change, use state.

## Where to use state

By default, the starting point of any state should be local state (i.e. inside the component that is using it), however if other parent or sibling components also need to know about that state, you can lift it up to the first common parent component and pass it down to children via props. This is known as <i>lifting up state</i>. In cases where state is needed by all components, you probably want global state at the <code><App /></code> level.

## Reading state after updating

If you log or use a state variable immediately after calling its setter in the same function, you will still get the old value (because the update hasn’t been applied yet). This trips up many beginners. The update takes effect on the next render, so handle any logic that needs the updated value in the next render or in a useEffect that watches the state. Alternatively, use the functional update form to get the latest value within the same event if needed.
