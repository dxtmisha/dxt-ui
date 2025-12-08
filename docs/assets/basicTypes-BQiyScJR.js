import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/ru/Types/basicTypes"}),`
`,n.jsx(e.h1,{id:"базовые-типы-basictypes",children:"Базовые типы (basicTypes)"}),`
`,n.jsx(e.p,{children:"Набор основных утилитарных типов TypeScript для функциональной библиотеки. Предоставляет базовые типы для работы с данными, функциями, DOM элементами и событиями."}),`
`,n.jsx(e.h2,{id:"основные-утилитарные-типы",children:"Основные утилитарные типы"}),`
`,n.jsx(e.h3,{id:"undefined",children:n.jsx(e.code,{children:"Undefined"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для undefined и null значений."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type Undefined = undefined | null

// Использование
function checkValue(value: string | Undefined): boolean {
  return value !== null && value !== undefined
}
`})}),`
`,n.jsx(e.h3,{id:"emptyvalue",children:n.jsx(e.code,{children:"EmptyValue"})}),`
`,n.jsx(e.p,{children:'Объединенный тип для всех "пустых" значений, включая ложные примитивы и строковые представления.'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'

// Использование
function isEmpty(value: any): value is EmptyValue {
  return value === null || value === undefined || value === 0 || value === false ||
         value === '' || value === 'undefined' || value === 'null' ||
         value === '0' || value === 'false' || value === '[]'
}
`})}),`
`,n.jsx(e.h3,{id:"numberorstring",children:n.jsx(e.code,{children:"NumberOrString"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для числовых и строковых значений."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type NumberOrString = number | string

// Использование
function formatValue(value: NumberOrString): string {
  return value.toString()
}
`})}),`
`,n.jsx(e.h3,{id:"numberorstringorboolean",children:n.jsx(e.code,{children:"NumberOrStringOrBoolean"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для числовых, строковых и булевых значений."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type NumberOrStringOrBoolean = number | string | boolean

// Использование
function convertToString(value: NumberOrStringOrBoolean): string {
  return String(value)
}
`})}),`
`,n.jsx(e.h3,{id:"numberorstringordate",children:n.jsx(e.code,{children:"NumberOrStringOrDate"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для числовых, строковых значений и Date."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type NumberOrStringOrDate = NumberOrString | Date

// Использование
function parseDate(value: NumberOrStringOrDate): Date {
  return new Date(value)
}
`})}),`
`,n.jsx(e.h2,{id:"дженерик-утилитарные-типы",children:"Дженерик утилитарные типы"}),`
`,n.jsx(e.h3,{id:"normalorarrayt",children:n.jsx(e.code,{children:"NormalOrArray<T>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип для одиночного значения или массива значений."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type NormalOrArray<T = NumberOrString> = T | T[]

// Использование
function processValues(values: NormalOrArray<string>): string[] {
  return Array.isArray(values) ? values : [values]
}
`})}),`
`,n.jsx(e.h3,{id:"normalorpromiset",children:n.jsx(e.code,{children:"NormalOrPromise<T>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип для прямого значения или Promise."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type NormalOrPromise<T> = T | Promise<T>

// Использование
async function getValue<T>(value: NormalOrPromise<T>): Promise<T> {
  return await value
}
`})}),`
`,n.jsx(e.h3,{id:"objectitemt",children:n.jsx(e.code,{children:"ObjectItem<T>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип записи/объекта со строковыми ключами."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ObjectItem<T = any> = Record<string, T>

// Использование
const config: ObjectItem<string> = {
  apiUrl: 'https://api.example.com',
  version: '1.0.0'
}
`})}),`
`,n.jsx(e.h3,{id:"objectorarrayt",children:n.jsx(e.code,{children:"ObjectOrArray<T>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип для массива или объекта."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ObjectOrArray<T = any> = T[] | ObjectItem<T>

// Использование
function processData<T>(data: ObjectOrArray<T>): T[] {
  return Array.isArray(data) ? data : Object.values(data)
}
`})}),`
`,n.jsx(e.h2,{id:"функциональные-типы",children:"Функциональные типы"}),`
`,n.jsx(e.h3,{id:"functionreturnr",children:n.jsx(e.code,{children:"FunctionReturn<R>"})}),`
`,n.jsx(e.p,{children:"Тип функции, возвращающей значение типа R."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type FunctionReturn<R = any> = () => R

// Использование
const getRandomNumber: FunctionReturn<number> = () => Math.random()
const getUserName: FunctionReturn<string> = () => 'John Doe'
`})}),`
`,n.jsx(e.h3,{id:"functionvoid",children:n.jsx(e.code,{children:"FunctionVoid"})}),`
`,n.jsx(e.p,{children:"Тип функции, возвращающей void."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type FunctionVoid = () => void

// Использование
const logMessage: FunctionVoid = () => console.log('Hello')
const cleanup: FunctionVoid = () => { /* cleanup code */ }
`})}),`
`,n.jsx(e.h3,{id:"functionargst-r",children:n.jsx(e.code,{children:"FunctionArgs<T, R>"})}),`
`,n.jsx(e.p,{children:"Тип функции с переменными аргументами."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type FunctionArgs<T, R> = (...args: T[]) => R

// Использование
const sum: FunctionArgs<number, number> = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0)
}
`})}),`
`,n.jsx(e.h3,{id:"functionanytypet-r",children:n.jsx(e.code,{children:"FunctionAnyType<T, R>"})}),`
`,n.jsx(e.p,{children:"Наиболее общий тип функции."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type FunctionAnyType<T = any, R = any> = (...args: T[]) => R

// Использование
const genericProcessor: FunctionAnyType = (...args) => {
  return args.map(arg => String(arg)).join(' ')
}
`})}),`
`,n.jsx(e.h2,{id:"типы-элементов-данных",children:"Типы элементов данных"}),`
`,n.jsx(e.h3,{id:"itemlistt",children:n.jsx(e.code,{children:"ItemList<T>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип записи для списков со строковыми ключами."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ItemList<T = any> = Record<string, T>

// Использование
const userList: ItemList<{ name: string; age: number }> = {
  user1: { name: 'John', age: 30 },
  user2: { name: 'Jane', age: 25 }
}
`})}),`
`,n.jsx(e.h3,{id:"itemv",children:n.jsx(e.code,{children:"Item<V>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип элемента со свойствами index и value."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type Item<V> = {
  index: string
  value: V
}

// Использование
const menuItem: Item<string> = {
  index: 'home',
  value: 'Home Page'
}
`})}),`
`,n.jsx(e.h3,{id:"itemvaluev",children:n.jsx(e.code,{children:"ItemValue<V>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип элемента со свойствами label и value."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ItemValue<V> = {
  label: string
  value: V
}

// Использование
const selectOption: ItemValue<number> = {
  label: 'Выберите возраст',
  value: 25
}

const options: ItemValue<string>[] = [
  { label: 'Красный', value: 'red' },
  { label: 'Синий', value: 'blue' }
]
`})}),`
`,n.jsx(e.h3,{id:"itemnamev",children:n.jsx(e.code,{children:"ItemName<V>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип элемента со свойствами name и value."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ItemName<V> = {
  name: string | number
  value: V
}

// Использование
const configItem: ItemName<boolean> = {
  name: 'debugMode',
  value: true
}
`})}),`
`,n.jsx(e.h2,{id:"dom-и-элементы",children:"DOM и элементы"}),`
`,n.jsx(e.h3,{id:"elementorwindow",children:n.jsx(e.code,{children:"ElementOrWindow"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для HTML элементов и объекта Window."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ElementOrWindow = HTMLElement | Window

// Использование
function addEventListenerToTarget(target: ElementOrWindow, event: string, handler: Function) {
  target.addEventListener(event, handler as EventListener)
}
`})}),`
`,n.jsx(e.h3,{id:"elementorstringe",children:n.jsx(e.code,{children:"ElementOrString<E>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип для элемента или строкового селектора."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ElementOrString<E extends ElementOrWindow> = E | string

// Использование
function getElement<T extends HTMLElement>(selector: ElementOrString<T>): T | null {
  if (typeof selector === 'string') {
    return document.querySelector(selector)
  }
  return selector
}
`})}),`
`,n.jsx(e.h2,{id:"типы-событий",children:"Типы событий"}),`
`,n.jsx(e.h3,{id:"eventoptions",children:n.jsx(e.code,{children:"EventOptions"})}),`
`,n.jsx(e.p,{children:"Тип для опций обработчика событий."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type EventOptions = AddEventListenerOptions | boolean | undefined

// Использование
function setupEventListener(
  element: HTMLElement,
  event: string,
  handler: Function,
  options: EventOptions
) {
  element.addEventListener(event, handler as EventListener, options)
}
`})}),`
`,n.jsx(e.h3,{id:"eventlistenerdetailo-d",children:n.jsx(e.code,{children:"EventListenerDetail<O, D>"})}),`
`,n.jsx(e.p,{children:"Дженерик тип функции обработчика событий с дополнительным параметром detail."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type EventListenerDetail<
  O extends Event,
  D extends Record<string, any>
> = (event: O, detail?: D) => void

// Использование
const clickHandler: EventListenerDetail<MouseEvent, { userId: number }> = (event, detail) => {
  console.log('Clicked at:', event.clientX, event.clientY)
  if (detail) {
    console.log('User ID:', detail.userId)
  }
}
`})}),`
`,n.jsx(e.h3,{id:"eventactivityiteme",children:n.jsx(e.code,{children:"EventActivityItem<E>"})}),`
`,n.jsx(e.p,{children:"Тип для отслеживания активных обработчиков событий и наблюдателей."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type EventActivityItem<E extends ElementOrWindow> = {
  element: E | undefined
  type: string
  listener?: (event: any | Event) => void
  observer?: ResizeObserver
}

// Использование
const activeEvents: EventActivityItem<HTMLElement>[] = [
  {
    element: document.getElementById('button'),
    type: 'click',
    listener: (event) => console.log('Button clicked')
  }
]
`})}),`
`,n.jsx(e.h2,{id:"типы-координат",children:"Типы координат"}),`
`,n.jsx(e.h3,{id:"imagecoordinator",children:n.jsx(e.code,{children:"ImageCoordinator"})}),`
`,n.jsx(e.p,{children:"Тип для 2D координат."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ImageCoordinator = {
  x: number
  y: number
}

// Использование
function calculateDistance(point1: ImageCoordinator, point2: ImageCoordinator): number {
  const dx = point2.x - point1.x
  const dy = point2.y - point1.y
  return Math.sqrt(dx * dx + dy * dy)
}

const mousePosition: ImageCoordinator = { x: 100, y: 200 }
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"composable-с-использованием-базовых-типов",children:"Composable с использованием базовых типов"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type {
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
`,n.jsx(e.h3,{id:"утилитарные-функции-с-типами",children:"Утилитарные функции с типами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type {
  NormalOrArray,
  ObjectItem,
  FunctionArgs
} from '@dxtmisha/functional'

// Функция для обработки значений
function processItems<T>(items: NormalOrArray<T>): T[] {
  return Array.isArray(items) ? items : [items]
}

// Функция для работы с конфигурацией
function mergeConfig(...configs: ObjectItem[]): ObjectItem {
  return Object.assign({}, ...configs)
}

// Функция-агрегатор
const aggregate: FunctionArgs<number, number> = (...values) => {
  return values.reduce((sum, val) => sum + val, 0)
}
`})}),`
`,n.jsx(e.p,{children:"Эти базовые типы обеспечивают типобезопасность и консистентность во всей функциональной библиотеке @dxtmisha/functional."})]})}function m(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{m as default};
