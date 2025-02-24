# setTimeout()

This <code>setTimeout()</code> function schedules an aysnchronous function (or code snippet) to execute after a specified delay. The delay is measured in milliseconds (ms). It does not block execution - the callback function will be registered and then the current execution will continue.

<code>clearTimeout()</code> will, unsurprisingly, clear the timeout. This will cancel a timeout before it executes.

setTimeout() does not guarantee exact timing. The actual execution depends on the event loop and if the main thread is busy, the timeout execution is delayed.

Because we are not calling the <code>setTimeout()</code> function ourselves, we can't pass arguments into the function. However, the syntax allows us to provide as many arguments as we like <i>after</i> the delay.

![](/assets/set-timeout.png)
