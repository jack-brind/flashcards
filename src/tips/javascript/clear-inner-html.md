# Clearing InnerHTML

<code>element.innerHTML = '';</code> is used to clear out any existing HTML container.

It is common defensive programming practice that clears any placeholder data or empty states when there is no data. Because content might change based on user actions (such as filtering or searching), you need to clear the old data before showing the new filtered items. Without clearing first, the new items would just be added after the existing ones.

![](/assets/inner-html.png)
