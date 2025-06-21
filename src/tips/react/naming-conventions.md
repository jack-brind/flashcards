# Common React conventions

- <code>handle</code> prefix for event handlers
  <code>function handleClick() {}</code>
- <code>on</code> prefix for props that receive event handler functions
  <code>&lt;LoginForm onLogin={handleUserLogin} /&gt;</code>
- <code>is/has/should</code> for booleans with state
  <code>[shouldShowModal, setShouldShowModal]</code>
- <code>use</code> prefix for custom hooks
