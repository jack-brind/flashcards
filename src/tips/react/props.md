# Props

Props (short for "properties") are the only argument that React component functions receive. They're the mechanism that allows parent components to pass data down to their children.
Every React component function accepts exactly one parameter: the props object. In turn, each child component only receives one argument – the props object.
Props use a one-way data flow and so they can only be passed from parent to child and not from child to parent. Props can also only be updated by the parent and are, therefore, read-only on the child (immutable). They can also be any data type – string, number, array, function, another component, etc.
Props create a "contract" between components – the parent promises to provide certain data, and the child expects to receive it.

## Destructuring props

Usually, you don't need the entire object, so you can destructure it to extract the individual props that you want. Destructuring is cleaner that writing <code>props.name</code>, for example – instead, you just use <code>{ name }</code>.
You can still set default values for the props when destructuring e.g. <code>{ isAdmin = false }</code> and rename props e.g. <code>{ dateOfBirth: birthDate }</code>

## Spreading props

If you want to pass all the props to the child, you can simply spread the props using <code>&lt;Child {...props} /&gt;</code>. This will take all of the props in the props object and copy them verbatim to the child component. However, if the parent has multiple children, avoid spreading the props because some children may receive props that are not relevant to them.
This is useful when you want to act as a "pass-through" component where you pass props through a component that doesn't use them, like a middleman.
In some cases, you might want to receive some props individually from a parent and spread the rest to another child component. This is known as 'selective spreading', where you extract some props for immediate use in the current component, then spread the remaining props to a child component. This pattern is common when you need to process or transform some data before passing the rest along.

![](/assets/selective-spreading.png)

Spreading props is particularly useful when you're building flexible, reusable components. It automatically adapts when new props are added over time – you don't need to manually update every component in the chain when you add a new prop to the top level.

## Analogy

Props can be thought of in the same way as hierarchy at a company. Using the example of a pricing page, the CEO (parent component – App) holds the pricing strategy (an array of pricing objects), and delagates that (passes it down) to the Head of Pricing (a <code>&lt;PricingSection /&gt;</code> component). The Head of Pricing, then loops through the pricing tiers and delegates them to a number of direct reports (<code>&lt;PricingCard /&gt;</code> components), who then own each tier and renders them accordingly. The Head of Pricing can only <i>read</i> the data from the CEO, not change it. Likewise, the direct reports can only read the data from the Head of Pricing.

![](/assets/props.png)
