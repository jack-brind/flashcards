# Formatting numbers

Formatting numbers comes built in to JavaScript courtesy of the global <i>Intl</i> object for internationalisation. Within this object is a <code>NumberFormat</code> constructor function that formats numbers according to the user's locale. This can be used for straight forward numbers, monetary values and percentages and also comes with loads of different styling options.

Example use cases:

- Number format such as including commas per thousand
- Currency format including currency symbol, display formats and decimal places
- Percentage format that converts decimals to integers with the % symbol
- Short notations like K, M, BN
- Units for miles per hour, kg, ml

You can't pass the number to be formatted directly into the constructor function. Instead it needs to be passed in the <code>format()</code> method on the constructor.
If you don't pass any arguments to the NumberFormat, by default it takes the machine locale <code>new Intl.NumberFormat().format(464995);</code> = 464,995.
When formatting currencies, you must explicity provide the locale code (eg 'en-GB') as an argument in the NumberFormat function otherwise it can't format it. At a minimum you then need to pass the options of <code>style: 'currency', currency: 'GBP',</code> as the second argument to get formatting.

![](/assets/num-format.png)
