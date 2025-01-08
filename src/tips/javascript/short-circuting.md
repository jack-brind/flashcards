# Short-circuiting

Short-circuiting is the behaviour of logical operators where evaluation stops as soon as the result is determined.

- <code>&&</code> - evaluation stops when a falsy value is encountered
- <code>||</code> - evaluation stops when a truthy value is encountered

This behaviour is built into JavaScript’s logical operators, so you don’t need to do anything special to <i>use</i> short-circuiting. However, understanding how it works allows you to write more efficient code by placing the operand most likely to short-circuit first.
