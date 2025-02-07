# @dxt-ui/functional

### [anyToString](src/functions/anyToString.ts)
Conversion of a value to a string.

### [arrFill](src/functions/arrFill.ts)
The method creates an array of "count" elements with values equal to `value`.

### [copyObject](src/functions/copyObject.ts)
Creates a copy of a simple object.

### [createElement](src/functions/createElement.ts)
In HTML documents, creates an element with the tag that is specified in the argument.

### [eventStopPropagation](src/functions/eventStopPropagation.ts)
Stop listening to events in depth.

### [executeFunction](src/functions/executeFunction.ts)
The function is executed and returns its result. 
Or returns the input data, if it is not a function.

### [executePromise](src/functions/executePromise.ts)
Returns the execution result of an asynchronous function.

### [executeUse](src/functions/executeUse.ts)
Returns a function for use during the initialization of control methods.

### [forEach](src/functions/forEach.ts)
The function performs the specified function once for each element in the object.
And returns an array with the results of executing the function.

### [frame](src/functions/frame.ts)
Cyclically calls requestAnimationFrame until next returns true
The window.requestAnimationFrame() method tells the browser that you wish to perform
an animation and requests that the browser calls a specified function to update an
animation right before the next repaint.

### [getAttributes](src/functions/getAttributes.ts)
Gets a list of attributes of an element.

### [getClipboardData](src/functions/getClipboardData.ts)
The method retrieves drag data (as a string) for the specified type.
If the drag operation does not include data, this method returns an empty string.

### [getColumn](src/functions/getColumn.ts)
Returns an array of values for a specific column in the input array.

### [getElement](src/functions/getElement.ts)
Returns the first Element in the document that matches the specified selector or the element.

### [getElementId](src/functions/getElementId.ts)
Returns the identifier (ID) of the element or creates it if the element has no ID.

### [getElementItem](src/functions/getElementItem.ts)
Returns the value of an element by its key.

### [inArray](src/functions/inArray.ts)
Checks if the value is in the current array.

### [isArray](src/functions/isArray.ts)
Checks if the values are arrays.

### [isDomRuntime](src/functions/isDomRuntime.ts)
Checks if the code is running in a browser where the `window` object is available.
Returns `true` if `window` is defined, indicating the code is running in a browser.

### [isFilled](src/functions/isFilled.ts)
Checks if the field is filled.

### [isFunction](src/functions/isFunction.ts)
Checks if the function is a callback function.

### [isNull](src/functions/isNull.ts)
Is the variable equal to null or undefined.

### [isObject](src/functions/isObject.ts)
Checks if a value is an object.

### [isObjectNotArray](src/functions/isObjectNotArray.ts)
Checks if the value is an object or not an array.

### [isString](src/functions/isString.ts)
Checks if the value is of type string.

### [isWindow](src/functions/isWindow.ts)
Checks if object is Window.

### [random](src/functions/random.ts)
Generate a random integer.

### [replaceRecursive](src/functions/replaceRecursive.ts)
Merge one or more arrays recursively.

### [setElementItem](src/functions/setElementItem.ts)
Modifies the value of an element identified by its key.

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
