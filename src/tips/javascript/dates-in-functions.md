# Dates in functions

When working with dates inside a function, it is likely that you will need to create a new date object <i>inside</i> the function's scope to ensure that the current date/time is used so that the exact date/time is used when calling the function. If this is declared globally, it is frozen in time when the program runs and is never updated.

![](/assets/date-in-function.png)
