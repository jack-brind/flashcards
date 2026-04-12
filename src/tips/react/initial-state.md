# Initial state

How to set initial values
Different data types you can use
The relationship between initial state and current state
Your allotment analogy (it's great!)
When and why to use it
Callback vs direct function call
Performance implications
The "stale state" gotcha
Why console.log shows old values
Solutions (useEffect, functional updates)

🚧 Work in progress / notes

In a lot of cases, the initial state value is simple like a number, string, boolean, etc. In these cases, because initial state is only used once on initial render, this is fine.
However, in some cases, the initial state comes from a complex calculation. For these situations, we can pass a function as the initial value which will be invoked only once when the component mounts.

For this, you can use a callback which will only run once. It is important to use a callback as opposed to calling the function directly, because calling it directly will initialise on every render.

I need to find out more about this - https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates

## Initial state

When you create a state variable, you can initialise the variable with any data. For example, if you are maintaining a list of items, you may already have this list of items in an array. But you also might want to start with an empty array. Or it might be that by default, a boolean will start as false, but you can update it to make it true.
When setting the initial state (<code>useState(initialValue)</code>), this is literally copied to the current state to initialise it, and they are now separate. As the state variable is then used and mutated using the set function (second item in the array), the state is being replaced over the lifetime of that state.

The reason we use useState instead of a regular variable is that when state changes, React automatically re-renders the component to show the updated data. It <em>reacts</em> to the data changing.