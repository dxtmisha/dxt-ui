# @dxt-ui/functional

### [copyObject](src/functions/copyObject.ts)
Creates a copy of a simple object.

### [forEach](src/functions/forEach.ts)
The function performs the specified function once for each element in the object.
And returns an array with the results of executing the function.

### [isDomRuntime](src/functions/isDomRuntime.ts)
Checks if the code is running in a browser where the `window` object is available.
Returns `true` if `window` is defined, indicating the code is running in a browser.

### [isObject](src/functions/isObject.ts)
Checks if a value is an object.

### [replaceRecursive](src/functions/replaceRecursive.ts)
Merge one or more arrays recursively.

### [toArray](src/functions/toArray.ts)
Converts a value to an array. If the value is already an array, it returns it as is.
Otherwise, it wraps the value in an array.

### [toKebabCase](src/functions/toKebabCase.ts)
Converts a string to kebab-case. It converts uppercase letters to lowercase, 
replaces spaces and other characters with dashes.

### [transformation](src/functions/transformation.ts)
Transforms a string into the corresponding data type. Based on the string content, 
it may be transformed into `undefined`, `null`, `true`, `false`, object, 
number, or function.

### [uniqueArray](src/functions/uniqueArray.ts)
Removes duplicate entries in an array.
