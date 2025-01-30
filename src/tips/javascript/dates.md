# Working with dates

This tip lists the most useful functions from the <code>date-fns</code> library.

## Format & Display

- <code>format()</code> - Format into a readable string (e.g. 'Wednesday 21 April 2021 06:49')
- <code>formatDistanceToNow()</code> - Returns how far a date is from now (e.g. '3 days ago')
- <code>formatDistance()</code> - Returns a user friendly difference (e.g. '6 days')
- <code>formatRelative()</code> - Formats dates relative to today (e.g. 'Next Sunday')

## Calculations

- <code>addDays()</code> - Returns a date with x days added
- <code>addMonths()</code> - Returns a date with x months added
- <code>addYears()</code> - Returns a date with x years added
- <code>subDays()</code> - Returns a date with x days subtracted
- <code>startOfDay()</code> - Gets midnight of a given date

## Comparisons

- <code>isBefore()</code> - Check if a date is before another
- <code>isAfter()</code> - Check if a date is after another
- <code>isToday()</code> - Check if a date is today
- <code>isPast()</code> - Check if a date is in the past
- <code>isFuture()</code> - Check if a date is in the future
- <code>isSameDay()</code> - Check if 2 dates are the same day
- <code>differenceInDays()</code> - Get the number of days between 2 dates

## Periods

- <code>startOfWeek()</code> - Get the start of the current week
- <code>endOfWeek()</code> - Get the end of the current week
- <code>startOfMonth()</code> - Get the start of the current month
- <code>endOfMonth()</code> - Get the end of the current month
- <code>startOfYear()</code> - Get the start of the current year
- <code>endOfYear()</code> - Get the end of the current year
