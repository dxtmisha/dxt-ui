# @dxt-ui/functional

### [isDomRuntime.ts](src/functions/isDomRuntime.ts)
Checks if the code is running in a browser where the `window` object is available.
Returns `true` if `window` is defined, indicating the code is running in a browser.

### [toArray](src/functions/toArray.ts)
Converts a value to an array. If the value is already an array, it returns it as is.
Otherwise, it wraps the value in an array.

### [toKebabCase](src/functions/toKebabCase.ts)
Converts a string to kebab-case. It converts uppercase letters to lowercase, 
replaces spaces and other characters with dashes.

### [transformation.ts](src/functions/transformation.ts)
Transforms a string into the corresponding data type. Based on the string content, 
it may be transformed into `undefined`, `null`, `true`, `false`, object, 
number, or function.
