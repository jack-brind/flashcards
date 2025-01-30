# Unix dates

The Unix timestamp (Unix date) is the current time in seconds or milliseconds since January 1, 1970 (UTC) and they are written in the ISO 8601 format (<code>2021-04-21T06:49:00Z</code>).

- The date component is represented in the YYYY-MM-DD format
- Time separator (T) - separates the date from the time
- The time component is represented in 24 hour format and include seconds (HH:MM:SS)
- Z (Zulu time) which is a standard military reference to UTC

The time is optional and will default to 00:00:00 (midnight) if not supplied and if you don't include the timezone, it takes the local timezone of the system that your code is running on. You cannot have a timezone if there is no time included.
