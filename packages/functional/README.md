# @dxt-ui/functional

## Classes

### [Api](src/classes/Api.ts)
Class for working with requests.

### [Cache](src/classes/Cache.ts)
Simple class for caching.

### [CacheItem](src/classes/CacheItem.ts)
Class for managing a single caching value.

### [CacheStatic](src/classes/CacheStatic.ts)
Class for working with fast cache during code execution.

### [Cookie](src/classes/Cookie.ts)
Class for working with cookies.

### [CookieBlock](src/classes/CookieBlock.ts)
Class for changing cookie access status.

### [DataStorage](src/classes/DataStorage.ts)
Class for working with localStorage.

### [Datetime](src/classes/Datetime.ts)
A class for working with dates.

### [EventItem](src/classes/EventItem.ts)
Class for working with events.

### [Geo](src/classes/Geo.ts)
Base class for working with geographic data.

### [GeoFlag](src/classes/GeoFlag.ts)
Class for working with Flags.

### [GeoIntl](src/classes/GeoIntl.ts)
The Intl namespace object contains several constructors as well as functionality common
to the internationalization constructors and other language sensitive functions. Collectively,
they comprise the ECMAScript Internationalization API, which provides language sensitive
string comparison, number formatting, date and time formatting, and more.

### [GeoPhone](src/classes/GeoPhone.ts)
A class for storing and processing phone number masks.

### [Global](src/classes/Global.ts)
Class for obtaining global data.

### [Hash](src/classes/Hash.ts)
Working with data stored in hash.

### [Icons](src/classes/Icons.ts)
Class for managing icons.

### [Loading](src/classes/Loading.ts)
Class for working with global loading.

### [RouterItem](src/classes/RouterItem.ts)
Router management class.

### [ScrollbarWidth](src/classes/ScrollbarWidth.ts)
Class for getting the scroll width.

### [Translate](src/classes/Translate.ts)
Class for getting the translated text.

## Classes/ Design

### [DesignAbstract](src/classes/design/DesignAbstract.ts)
Base class for working with the constructor.

### [DesignAsyncAbstract](src/classes/design/DesignAsyncAbstract.ts)
Base class for working with the constructor (Async).

### [DesignChanged](src/classes/design/DesignChanged.ts)
The class checks the values that have been edited.

### [DesignComponents](src/classes/design/DesignComponents.ts)
Class for working with connected components.

### [DesignConstructorAbstract](src/classes/design/DesignConstructorAbstract.ts)
Class for collecting all functional components.

## Classes/ Ref

### [DatetimeRef](src/classes/ref/DatetimeRef.ts)
A class for working with dates.

### [EventRef](src/classes/ref/EventRef.ts)
Class for working with events.

### [GeoFlagRef](src/classes/ref/GeoFlagRef.ts)
Class for working with Flags.

### [GeoIntlRef](src/classes/ref/GeoIntlRef.ts)
Reactive class for managing the formatting of numbers and dates.

### [GeoRef](src/classes/ref/GeoRef.ts)
Reactive class for working with geographic data.

## Functions

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

### [getElementOrWindow](src/functions/getElementOrWindow.ts)
Returns window or element.

### [getExp](src/functions/getExp.ts)
The object is used for matching text with a pattern.
Returns window or element.

### [getItemByPath](src/functions/getItemByPath.ts)
Returns data by their path.

### [getKey](src/functions/getKey.ts)
Returns the pressed key.

### [getLengthOfAllArray](src/functions/getLengthOfAllArray.ts)
Returns the length of all elements in an array.

### [getMaxLengthAllArray](src/functions/getMaxLengthAllArray.ts)
Searches for the longest string in the array and returns its length.

### [getMinLengthAllArray](src/functions/getMinLengthAllArray.ts)
Searches for the shortest string in the array and returns its length.

### [getMouseClient](src/functions/getMouseClient.ts)
Returns the position of the mouse cursor or the location of the click.

### [getMouseClientX](src/functions/getMouseClientX.ts)
Returns the position of the mouse cursor or the location of the click (X).

### [getMouseClientY](src/functions/getMouseClientY.ts)
Returns the position of the mouse cursor or the location of the click (Y).

### [getObjectByKeys](src/functions/getObjectByKeys.ts)
Returns a new object with keys from the keys list.

### [getObjectNoUndefined](src/functions/getObjectNoUndefined.ts)
Removes from the object all properties belonging to the exception type.

### [getObjectOrNone](src/functions/getObjectOrNone.ts)
Returns the object if the object’s values are set.

### [getRandomText](src/functions/getRandomText.ts)
Generates text.

### [getRequestString](src/functions/getRequestString.ts)
Returns a string in the form of key-value.

### [goScroll](src/functions/goScroll.ts)
Returns a string in the form of key-value.

### [inArray](src/functions/inArray.ts)
Checks if the value is in the current array.

### [initScrollbarOffset](src/functions/initScrollbarOffset.ts)
Initialization of data for scroll control.

### [intersectKey](src/functions/intersectKey.ts)
Computes the intersection of arrays using keys for comparison.

### [isArray](src/functions/isArray.ts)
Checks if the values are arrays.

### [isDifferent](src/functions/isDifferent.ts)
Checks if the values of two objects are different.

### [isDomRuntime](src/functions/isDomRuntime.ts)
Checks if the code is running in a browser where the `window` object is available.
Returns `true` if `window` is defined, indicating the code is running in a browser.

### [isFilled](src/functions/isFilled.ts)
Checks if the field is filled.

### [isFloat](src/functions/isFloat.ts)
Checks if the value is an integer or a floating-point number.

### [isFunction](src/functions/isFunction.ts)
Checks if the function is a callback function.

### [isInDom](src/functions/isInDom.ts)
Checks if an element is still in the DOM tree.

### [isIntegerBetween](src/functions/isIntegerBetween.ts)
Checks if the value is between integers.

### [isNull](src/functions/isNull.ts)
Is the variable equal to null or undefined.

### [isNumber](src/functions/isNumber.ts)
Checks if the value is a number.

### [isObject](src/functions/isObject.ts)
Checks if a value is an object.

### [isObjectNotArray](src/functions/isObjectNotArray.ts)
Checks if the value is an object or not an array.

### [isSelected](src/functions/isSelected.ts)
Checks if value is in the array selected or if value equals selected,
if selected is a string.

### [isSelectedByList](src/functions/isSelectedByList.ts)
Testing isSelected property for the entire list of values.

### [isString](src/functions/isString.ts)
Checks if the value is of type string.

### [isWindow](src/functions/isWindow.ts)
Checks if object is Window.

### [random](src/functions/random.ts)
Generate a random integer.

### [replaceRecursive](src/functions/replaceRecursive.ts)
Merge one or more arrays recursively.

### [replaceTemplate](src/functions/replaceTemplate.ts)
Replacing the value from replaces in value.

### [secondToTime](src/functions/secondToTime.ts)
Converts seconds into a time string.

### [setElementItem](src/functions/setElementItem.ts)
Modifies the value of an element identified by its key.

### [setValues](src/functions/setValues.ts)
Modifies data according to its type and settings.

### [splice](src/functions/splice.ts)
This method is used to copy the values of all enumerable own properties 
from one source object to a target object.
In priority according to the processing list.

### [strFill](src/functions/strFill.ts)
The method creates a string of length count, consisting of the characters value.

### [toArray](src/functions/toArray.ts)
Converts a value to an array. If the value is already an array, it returns it as is.
Otherwise, it wraps the value in an array.

### [toCamelCase](src/functions/toCamelCase.ts)
Convert a String to Camel Case (upper).

### [toCamelCaseFirst](src/functions/toCamelCaseFirst.ts)
Convert a String to Camel Case (+ first letter).

### [toDate](src/functions/toDate.ts)
Conversion to Date object.

### [toKebabCase](src/functions/toKebabCase.ts)
Converts a string to kebab-case. It converts uppercase letters to lowercase, 
replaces spaces and other characters with dashes.

### [toNumber](src/functions/toNumber.ts)
The method parses a string argument and returns a floating point number.

### [toNumberByMax](src/functions/toNumberByMax.ts)
Converts the data into a number, taking into account the maximum permissible value.

### [transformation](src/functions/transformation.ts)
Transforms a string into the corresponding data type. Based on the string content, 
it may be transformed into `undefined`, `null`, `true`, `false`, object, 
number, or function.

### [uniqueArray](src/functions/uniqueArray.ts)
Removes duplicate entries in an array.

### [writeClipboardData](src/functions/writeClipboardData.ts)
Writes data to the buffer.

## Functions/ Render

### [getBind](src/functions/render/getBind.ts)
A method for generating properties for a subcomponent.

### [getClassName](src/functions/render/getClassName.ts)
Returns the name of the class from the property.

### [getIndexForRender](src/functions/render/getIndexForRender.ts)
Returns or generates a new element.

## Functions/ Ref

### [getBindRef](src/functions/ref/getBindRef.ts)
A method for generating properties for a subcomponent.

### [getComputedAsync](src/functions/ref/getComputedAsync.ts)
Processes an asynchronous method for wrapping in computed.

### [getRef](src/functions/ref/getRef.ts)
You return the values of the ref variable or the variable itself if it is not reactive.

### [render](src/functions/ref/render.ts)
Getting cached, immutable data.

### [setRef](src/functions/ref/setRef.ts)
Changing the value for the reactive method.

### [toComputed](src/functions/ref/toComputed.ts)
Packs reactive values into computed to prohibit editing.

### [toRefItem](src/functions/ref/toRefItem.ts)
Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.
