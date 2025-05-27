# Props

- Relationship = parent can pass child props but not the other way around
- props need to be passed as a parameter in the parent function and best practice is to destructure props in the parameters (<code>function User ({ name, age, jobTitle }) {}</code>)
- We use props to pass data from parent components to child components (down the component tree; used to communicate between parent and child)
- React uses a one-way data flow so props can't be passed from child up to parent
- Props can be any type of value, even other components
- Props can only be updated by the parent component
- Props are <strong>read only</strong> (immutable)
- Props are essential just an object that you describe when using it
- The parent describes what the child is and what properties it should have, and this cascades down.

Analogy:
Think of props like an org chart. The CEO (parent component) hands down instructions to their direct reports (child components), who render themselves based on those instructions — and may also pass instructions further down the hierarchy.
In the case of pricing cards, the CEO (App) holds the pricing strategy (an array of pricing objects), and delegates that to the Head of Pricing (a PricingSection component). The Head of Pricing loops through each pricing tier and delegates responsibility to a direct report (a PricingCard component), who owns their specific tier and renders it accordingly.
The Head of Pricing can only see the data from the CEO, not change it.

![](/assets/props.png)
