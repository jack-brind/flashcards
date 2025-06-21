# Components

Components are the foundation and building blocks for the UI in React. React lets you combine your markup, CSS, and JavaScript into custom "components" - reusable blueprint UI elements for your app. They are JavaScript functions that return markup that tells React what to render on the screen. Remember to include the <code>return</code> keyword!

Use Pascal Case for component names e.g. UserList, ProductCard, ActivityFeed, etc. Starting a component with a capital letter lets React know that it is a component.

It is recommended to break components out into separate files which then need to be exported, and imported where they are used. You can use default or named exports – for consistency I will stick to named exports only.
