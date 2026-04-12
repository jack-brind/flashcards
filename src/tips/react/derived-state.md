# Derived state

What it is and why to avoid unnecessary state
Computing from existing state/props
useMemo for expensive calculations

🚧 Work in progress / notes

Using state that can be derived: A general React principle is to avoid storing something in state if you can compute it from props or other state. For example, don’t duplicate props in state, and don’t keep separate state values that are always derivable from each other. This is often called derived state, and it can lead to bugs if the two sources get out of sync. The official advice: If a piece of data can be calculated from either props or other state, you should not put it in its own state. Instead, calculate it on the fly or use memoization (useMemo) if needed for performance. Keeping state minimal and necessary will make your components simpler and less error-prone.

Computed from another existing piece of state. Without this, you would need to keep state manually in sync, and each state change also causes a re-render, which is unnecessary.
With derived state, you can derive the values from the current state that already exists because it contains all the data you need for the calculation. 
When deriving state, the state that is derived from is the source of truth for the current state.

There is no use in having a state variable for something that can be calculated or derived from another piece of state. So, for example, imagine you have a shopping basket with 5 items inside and you want to calculate the total price. Instead of creating a piece of state for the price, you can just derive it from the <code>shoppingCart</code> state using <code>reduce()</code>