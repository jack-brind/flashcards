# String methods

There are lots of string methods. Here are some useful ones:

## Replacing strings

The <code>.replace()</code> and <code>.replaceAll()</code> methods on strings allows you to search for a value (sub-string or pattern) in a string and replace the first occurrence or all occurrences with something else. Both return a new string and leave the original unchanged.

The arguments for this method are <code>(searchValue, replaceValue)</code> e.g. <code>.replaceAll('ITRIS', 'itris')</code>.

## Trimming strings

The <code>.trim()</code> method can trim excess whitespace on strings. This can be used to ensure that user input is correct, for example, " hello " would be returned as "hello". You can also use <code>.trimStart()</code> or <code>.trimEnd()</code> to remove whitespace from the beginning or end of strings.

This method will not remove excess spacing within a string.

## Padding strings

The <code>.padStart()</code> and <code>.padEnd()</code> methods allow you to bulk out the beginning or end of a string with a character. For example, obfuscating the beginning of a credit card number or adding leading zeroes to a number (such as '42' becoming '00042' using <code>.padStart(5, '0');</code>).

![](/assets/pad-start.png)

The method takes 2 arguments. The first is the target length of the string and the second is the character to pad with.

## Repating strings

The <code>.repeat()</code> method allows you to repeat a string for a specified number of occurrences. The argument it takes is simply the number of times you want it to repeat.

## charAt() method

The <code>.charAt()</code> method is similar to the array index for strings but it is used specifically for strings and it can also convert numbers to strings as well. The only argument it takes is the position of the character i.e. <code>.charAt(4)</code> will return the 4th character in the string.

### at() method

The <code>.at()</code> method is a newer addition with a key improvement over <code>.charAt()</code> in that it can use a negative index. So you can return the characters from the end of a string. So <code>.at(-1)</code> will return the last character of a string.
