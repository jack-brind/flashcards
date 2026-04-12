# State updates

When components re-render, React takes a snapshot of state. Setting new state triggers a re-render, but does not change the state variable – React <i>queues</i> the update so setting state only changes it for the <i>next</i> render.

As an example of this, consider this code:

![](/assets/render-queue.png)

This is because the number state variable only updates when the component re-renders.

When you want to update something multiple times, the suggested way of updating state is using an updater function – <code>setState(currentState => currentState + newValue)</code>. This passes the current state at the scheduled update time to the callback function, making it possible to know the current state before attempting an update.

The Simplest Way to Think About It
If you’re doing math or logic with the old value → functional update
If you’re replacing with a completely new value → direct update
