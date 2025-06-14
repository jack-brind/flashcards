# JSX

JSX stands for <em>JavaScript XML</em> – a syntax extension for JavaScript that lets you write HTML-like code directly inside your JavaScript files. It is a way to describe what your UI should look like using a familiar HTML-like syntax, but with the full power of JavaScript.

It makes code more readable when rendering UI, for example <code>const header = <h1>Welcome!</h1>;</code>.

## Rules

- JSX must always return a <strong>single parent</strong>. Essentially, everything must either return one element (like h1, p, span, etc), be wrapped in a div or use a React Fragment (<code><> </></code>).
- All tags must be closed. In HTML elements like <code><img></code> or <code><br></code> don't need closing, but in JSX this won't work, so everything must be closed.
- Use <code>className</code> instead of <code>class</code> to define the classes.
- Use camelCase for multi-word attributes: HTML <code>onclick</code> is <code>onClick</code> in JSX.
- Any JavaScript expression can be used in <code>{}</code> (JavaScript mode) but not statements like <code>if</code> or <code>for</code> loops.
- JSX treats capitalised tags as React components and lowercase tags as regular HTML elements.
