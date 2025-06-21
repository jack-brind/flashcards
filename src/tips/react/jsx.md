# JSX

JSX stands for <em>JavaScript XML</em> – a syntax extension for JavaScript that lets you write HTML-like code directly inside your JavaScript files. It is declarative syntax that gives you a way to describe what your UI should look. Its like HTML but with the full power of JavaScript.

## Rules

### Return a single parent

JSX must always return a <strong>single parent</strong> or <i>root element</i>. Essentially, everything must either return one element (like h1, p, span, etc), be wrapped in a div or fragment (<code>&lt;&gt; &lt;/&gt;</code>). React fragments let you group things without leaving any trace in the browser HTML tree.

### Close all tags

All tags must be closed. In HTML elements like <code>&lt;img&gt;</code> or <code>&lt;br&gt;</code> don't need closing, but in JSX this won't work, so everything must be closed – <code>&lt;img /&gt;</code> and <code>&lt;br /&gt;</code>.

### camelCasing

When referencing HTML equivalents in JSX, use camelCase. For example:

- class > className
- onclick > onClick
- for > htmlFor

The only excpetion here is <code>aria-</code> and <code>data-</code> attributes are written as in HTML with dashes.

### JavaScript mode

Any JavaScript expression can be used in and expression slot <code>{}</code> (or JavaScript mode) but not statements like if statements, case statements, or for loops.
JSX treats capitalised tags as React components and lowercase tags as regular HTML elements.

### Comments

To write comments in JSX, use wrap HTML comments inside curly braces.

![](/assets/jsx-comment.png)

### Inline styles

To add inline styles to JSX, you must use the <i>style object</i>. You need to:

- Use double curly braces to add the style oject into the expression slot
- camelCase the properties e.g. <code>background-colour</code> becomes <code>backgroundColor</code>

  ![](/assets/jsx-style.png)
