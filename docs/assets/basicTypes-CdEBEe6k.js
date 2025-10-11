import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C8vOrmRQ.js";import{M as s}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/en/Types/basicTypes"}),`
`,e.jsx(n.h1,{id:"basic-types-basictypes",children:"Basic Types (basicTypes)"}),`
`,e.jsx(n.p,{children:"A set of fundamental TypeScript utility types for the functional library. Provides basic types for working with data, functions, DOM elements, and events."}),`
`,e.jsx(n.h2,{id:"basic-utility-types",children:"Basic Utility Types"}),`
`,e.jsx(n.h3,{id:"undefined",children:e.jsx(n.code,{children:"Undefined"})}),`
`,e.jsx(n.p,{children:"Union type for undefined and null values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type Undefined = undefined | null

// Usage
function checkValue(value: string | Undefined): boolean {
  return value !== null && value !== undefined
}
`})}),`
`,e.jsx(n.h3,{id:"emptyvalue",children:e.jsx(n.code,{children:"EmptyValue"})}),`
`,e.jsx(n.p,{children:'Union type for all "empty" values including falsy primitives and string representations.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'

// Usage
function isEmpty(value: any): value is EmptyValue {
  return value === null || value === undefined || value === 0 || value === false ||
         value === '' || value === 'undefined' || value === 'null' ||
         value === '0' || value === 'false' || value === '[]'
}
`})}),`
`,e.jsx(n.h3,{id:"numberorstring",children:e.jsx(n.code,{children:"NumberOrString"})}),`
`,e.jsx(n.p,{children:"Union type for numeric and string values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type NumberOrString = number | string

// Usage
function formatValue(value: NumberOrString): string {
  return value.toString()
}
`})}),`
`,e.jsx(n.h3,{id:"numberorstringorboolean",children:e.jsx(n.code,{children:"NumberOrStringOrBoolean"})}),`
`,e.jsx(n.p,{children:"Union type for numeric, string, and boolean values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type NumberOrStringOrBoolean = number | string | boolean

// Usage
function convertToString(value: NumberOrStringOrBoolean): string {
  return String(value)
}
`})}),`
`,e.jsx(n.h3,{id:"numberorstringordate",children:e.jsx(n.code,{children:"NumberOrStringOrDate"})}),`
`,e.jsx(n.p,{children:"Union type for numeric, string, and Date values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type NumberOrStringOrDate = NumberOrString | Date

// Usage
function parseDate(value: NumberOrStringOrDate): Date {
  return new Date(value)
}
`})}),`
`,e.jsx(n.h2,{id:"generic-utility-types",children:"Generic Utility Types"}),`
`,e.jsx(n.h3,{id:"normalorarrayt",children:e.jsx(n.code,{children:"NormalOrArray<T>"})}),`
`,e.jsx(n.p,{children:"Generic type for single value or array of values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type NormalOrArray<T = NumberOrString> = T | T[]

// Usage
function processValues(values: NormalOrArray<string>): string[] {
  return Array.isArray(values) ? values : [values]
}
`})}),`
`,e.jsx(n.h3,{id:"normalorpromiset",children:e.jsx(n.code,{children:"NormalOrPromise<T>"})}),`
`,e.jsx(n.p,{children:"Generic type for direct value or Promise."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type NormalOrPromise<T> = T | Promise<T>

// Usage
async function getValue<T>(value: NormalOrPromise<T>): Promise<T> {
  return await value
}
`})}),`
`,e.jsx(n.h3,{id:"objectitemt",children:e.jsx(n.code,{children:"ObjectItem<T>"})}),`
`,e.jsx(n.p,{children:"Generic record/object type with string keys."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ObjectItem<T = any> = Record<string, T>

// Usage
const config: ObjectItem<string> = {
  apiUrl: 'https://api.example.com',
  version: '1.0.0'
}
`})}),`
`,e.jsx(n.h3,{id:"objectorarrayt",children:e.jsx(n.code,{children:"ObjectOrArray<T>"})}),`
`,e.jsx(n.p,{children:"Generic type for array or object."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ObjectOrArray<T = any> = T[] | ObjectItem<T>

// Usage
function processData<T>(data: ObjectOrArray<T>): T[] {
  return Array.isArray(data) ? data : Object.values(data)
}
`})}),`
`,e.jsx(n.h2,{id:"function-types",children:"Function Types"}),`
`,e.jsx(n.h3,{id:"functionreturnr",children:e.jsx(n.code,{children:"FunctionReturn<R>"})}),`
`,e.jsx(n.p,{children:"Function type that returns a value of type R."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FunctionReturn<R = any> = () => R

// Usage
const getRandomNumber: FunctionReturn<number> = () => Math.random()
const getUserName: FunctionReturn<string> = () => 'John Doe'
`})}),`
`,e.jsx(n.h3,{id:"functionvoid",children:e.jsx(n.code,{children:"FunctionVoid"})}),`
`,e.jsx(n.p,{children:"Function type that returns void."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FunctionVoid = () => void

// Usage
const logMessage: FunctionVoid = () => console.log('Hello')
const cleanup: FunctionVoid = () => { /* cleanup code */ }
`})}),`
`,e.jsx(n.h3,{id:"functionargst-r",children:e.jsx(n.code,{children:"FunctionArgs<T, R>"})}),`
`,e.jsx(n.p,{children:"Function type with variable arguments."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FunctionArgs<T, R> = (...args: T[]) => R

// Usage
const sum: FunctionArgs<number, number> = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0)
}
`})}),`
`,e.jsx(n.h3,{id:"functionanytypet-r",children:e.jsx(n.code,{children:"FunctionAnyType<T, R>"})}),`
`,e.jsx(n.p,{children:"Most generic function type."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type FunctionAnyType<T = any, R = any> = (...args: T[]) => R

// Usage
const genericProcessor: FunctionAnyType = (...args) => {
  return args.map(arg => String(arg)).join(' ')
}
`})}),`
`,e.jsx(n.h2,{id:"data-item-types",children:"Data Item Types"}),`
`,e.jsx(n.h3,{id:"itemlistt",children:e.jsx(n.code,{children:"ItemList<T>"})}),`
`,e.jsx(n.p,{children:"Generic record type for lists with string keys."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ItemList<T = any> = Record<string, T>

// Usage
const userList: ItemList<{ name: string; age: number }> = {
  user1: { name: 'John', age: 30 },
  user2: { name: 'Jane', age: 25 }
}
`})}),`
`,e.jsx(n.h3,{id:"itemv",children:e.jsx(n.code,{children:"Item<V>"})}),`
`,e.jsx(n.p,{children:"Generic item type with index and value properties."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type Item<V> = {
  index: string
  value: V
}

// Usage
const menuItem: Item<string> = {
  index: 'home',
  value: 'Home Page'
}
`})}),`
`,e.jsx(n.h3,{id:"itemvaluev",children:e.jsx(n.code,{children:"ItemValue<V>"})}),`
`,e.jsx(n.p,{children:"Generic item type with label and value properties."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ItemValue<V> = {
  label: string
  value: V
}

// Usage
const selectOption: ItemValue<number> = {
  label: 'Select age',
  value: 25
}

const options: ItemValue<string>[] = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' }
]
`})}),`
`,e.jsx(n.h3,{id:"itemnamev",children:e.jsx(n.code,{children:"ItemName<V>"})}),`
`,e.jsx(n.p,{children:"Generic item type with name and value properties."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ItemName<V> = {
  name: string | number
  value: V
}

// Usage
const configItem: ItemName<boolean> = {
  name: 'debugMode',
  value: true
}
`})}),`
`,e.jsx(n.h2,{id:"dom-and-elements",children:"DOM and Elements"}),`
`,e.jsx(n.h3,{id:"elementorwindow",children:e.jsx(n.code,{children:"ElementOrWindow"})}),`
`,e.jsx(n.p,{children:"Union type for HTML elements and Window object."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ElementOrWindow = HTMLElement | Window

// Usage
function addEventListenerToTarget(target: ElementOrWindow, event: string, handler: Function) {
  target.addEventListener(event, handler as EventListener)
}
`})}),`
`,e.jsx(n.h3,{id:"elementorstringe",children:e.jsx(n.code,{children:"ElementOrString<E>"})}),`
`,e.jsx(n.p,{children:"Generic type for element or string selector."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ElementOrString<E extends ElementOrWindow> = E | string

// Usage
function getElement<T extends HTMLElement>(selector: ElementOrString<T>): T | null {
  if (typeof selector === 'string') {
    return document.querySelector(selector)
  }
  return selector
}
`})}),`
`,e.jsx(n.h2,{id:"event-types",children:"Event Types"}),`
`,e.jsx(n.h3,{id:"eventoptions",children:e.jsx(n.code,{children:"EventOptions"})}),`
`,e.jsx(n.p,{children:"Type for event listener options."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type EventOptions = AddEventListenerOptions | boolean | undefined

// Usage
function setupEventListener(
  element: HTMLElement,
  event: string,
  handler: Function,
  options: EventOptions
) {
  element.addEventListener(event, handler as EventListener, options)
}
`})}),`
`,e.jsx(n.h3,{id:"eventlistenerdetailo-d",children:e.jsx(n.code,{children:"EventListenerDetail<O, D>"})}),`
`,e.jsx(n.p,{children:"Generic event listener function type with additional detail parameter."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type EventListenerDetail<
  O extends Event,
  D extends Record<string, any>
> = (event: O, detail?: D) => void

// Usage
const clickHandler: EventListenerDetail<MouseEvent, { userId: number }> = (event, detail) => {
  console.log('Clicked at:', event.clientX, event.clientY)
  if (detail) {
    console.log('User ID:', detail.userId)
  }
}
`})}),`
`,e.jsx(n.h3,{id:"eventactivityiteme",children:e.jsx(n.code,{children:"EventActivityItem<E>"})}),`
`,e.jsx(n.p,{children:"Type for tracking active event listeners and observers."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type EventActivityItem<E extends ElementOrWindow> = {
  element: E | undefined
  type: string
  listener?: (event: any | Event) => void
  observer?: ResizeObserver
}

// Usage
const activeEvents: EventActivityItem<HTMLElement>[] = [
  {
    element: document.getElementById('button'),
    type: 'click',
    listener: (event) => console.log('Button clicked')
  }
]
`})}),`
`,e.jsx(n.h2,{id:"coordinate-types",children:"Coordinate Types"}),`
`,e.jsx(n.h3,{id:"imagecoordinator",children:e.jsx(n.code,{children:"ImageCoordinator"})}),`
`,e.jsx(n.p,{children:"Type for 2D coordinates."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ImageCoordinator = {
  x: number
  y: number
}

// Usage
function calculateDistance(point1: ImageCoordinator, point2: ImageCoordinator): number {
  const dx = point2.x - point1.x
  const dy = point2.y - point1.y
  return Math.sqrt(dx * dx + dy * dy)
}

const mousePosition: ImageCoordinator = { x: 100, y: 200 }
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"composable-using-basic-types",children:"Composable using basic types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type {
  NumberOrString,
  ItemValue,
  ElementOrString,
  FunctionVoid
} from '@dxtmisha/functional'

export function useFormField<T>(
  selector: ElementOrString<HTMLInputElement>,
  initialValue: NumberOrString,
  onChange?: FunctionVoid
) {
  const element = getElement(selector)
  const value = ref<NumberOrString>(initialValue)

  const options: ItemValue<T>[] = [
    { label: 'Option 1', value: 'opt1' as T },
    { label: 'Option 2', value: 'opt2' as T }
  ]

  return { element, value, options, onChange }
}
`})}),`
`,e.jsx(n.h3,{id:"utility-functions-with-types",children:"Utility functions with types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type {
  NormalOrArray,
  ObjectItem,
  FunctionArgs
} from '@dxtmisha/functional'

// Function for processing values
function processItems<T>(items: NormalOrArray<T>): T[] {
  return Array.isArray(items) ? items : [items]
}

// Function for working with configuration
function mergeConfig(...configs: ObjectItem[]): ObjectItem {
  return Object.assign({}, ...configs)
}

// Aggregator function
const aggregate: FunctionArgs<number, number> = (...values) => {
  return values.reduce((sum, val) => sum + val, 0)
}
`})}),`
`,e.jsx(n.p,{children:"These basic types ensure type safety and consistency throughout the @dxtmisha/functional library."})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
