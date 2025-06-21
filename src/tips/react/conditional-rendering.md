# Conditional rendering

Conditional rendering lets you show or hide parts of your UI based on different conditions. For example, like whether a user is logged in, if data is loading, what type of subscription someone has, etc. There are a few different ways to conditionally render UI in React.

## Logical AND operator (<code>&&</code>)

<code>&&</code> is preferred when you want to render <i>something</i> or <i>nothing</i>. A JavaScript <code>&&</code> expression returns the value of its right side if the left side is true. But if the condition is false, the whole expression becomes false. React considers false as a “hole” in the JSX tree, just like <code>null</code> or <code>undefined</code>, and doesn’t render anything in its place.

‼️ Make sure to not put numbers on the left side of the operator. The <code>&&</code> operator doesn't actually return true or false – it returns the actual value of whichever side it evaluates to. The below code seems fine if the message count is at least 1, but if the message count is 0, it will return "You have 0 messages", which is most likely not what you want.

![](/assets/AND-gotcha.png)

This is because React will render almost anything you give it. To get around this, convert it to a boolean:

![](/assets/AND-gotcha-fixed.png)

Alternatively, you could just use a ternary and return null in the else branch.

## Ternaries

Ternaries are useful when you want to conditionally render one thing, or another thing (or possible more things). They're like simple if statements inside JSX. These are useful for rendering things like text, classes, components, etc., depending on a certain condition.

![](/assets/conditional-ternary.png)

### Nested ternaries

You can use nested ternaries which is a bit like a more comprehensive mini if/else statement inside JSX. However, this quickly becomes hard to read so anything more than 2-3 levels deep should be moved into an if/else statement. Avoid ternary hell.

![](/assets/nested-ternary.png)

## If / case statements

If statements can't be used inside JSX i.e. you can't use these inside expression slots (<code>{}</code>) because they don't return a value. But you can use them outside of JSX <i>before</i> returns, in event handler logic, helper functions, etc. They are also useful for guard clauses / early returns as well.

![](/assets/react-if-statement.png)
