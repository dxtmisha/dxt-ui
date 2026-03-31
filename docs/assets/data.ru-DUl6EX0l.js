import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Переменные и Данные`}),`
`,(0,c.jsx)(n.h1,{id:`переменные-и-данные`,children:`Переменные и Данные`}),`
`,(0,c.jsxs)(n.p,{children:[`Набор утилит для надежной проверки типов, безопасного преобразования данных и эффективной манипуляции объектами и массивами. Эти функции помогают избежать ошибок `,(0,c.jsx)(n.code,{children:`undefined`}),` и упрощают обработку сложных структур.`]}),`
`,(0,c.jsx)(n.h2,{id:`проверка-типов-is`,children:`Проверка типов (is...)`}),`
`,(0,c.jsx)(n.p,{children:`Функции для определения типа и содержимого переменных.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { isFilled, isObject, isFunction } from '@dxtmisha/functional-basic'

// 1. Проверка на наличие контента (не пустая строка/массив/объект)
isFilled('hello') // true
isFilled([])      // false

// 2. Проверка на объект (включает массивы, исключает null)
isObject({ a: 1 }) // true
isObject([1, 2])   // true

// 3. Проверка на объект без массивов
isObjectNotArray({ a: 1 }) // true
isObjectNotArray([1, 2])   // false

// 4. Проверка, является ли значение функцией
isFunction(() => {}) // true
`})}),`
`,(0,c.jsx)(n.h2,{id:`преобразование-to`,children:`Преобразование (to...)`}),`
`,(0,c.jsx)(n.p,{children:`Утилиты для приведения данных к нужному типу или формату.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { toNumber, toArray, toCamelCase, transformation } from '@dxtmisha/functional-basic'

// 1. Приведение к числу (с поддержкой очистки строк)
toNumber('100.50 px') // 100.5

// 2. Гарантированный массив
toArray('single') // ['single']
toArray([1, 2])   // [1, 2]

// 3. Автоматическое определение типа из строки
transformation('true')  // true (boolean)
transformation('12.5')  // 12.5 (number)
transformation('{"a":1}') // { a: 1 } (object)

// 4. Форматирование строк
toCamelCase('background-color') // 'backgroundColor'
`})}),`
`,(0,c.jsx)(n.h2,{id:`манипуляция-данными`,children:`Манипуляция данными`}),`
`,(0,c.jsx)(n.p,{children:`Методы для глубокого копирования и безопасного доступа к свойствам.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { copyObject, getItemByPath, getObjectNoUndefined } from '@dxtmisha/functional-basic'

// 1. Глубокое копирование объекта
const clone = copyObject(original)

// 2. Безопасное получение значения по пути
const value = getItemByPath(myData, 'user.profile.name')

// 3. Очистка объекта от пустых значений
const cleaned = getObjectNoUndefined({ a: 1, b: undefined, c: null }, null) 
// { a: 1, b: undefined } (удалит только c: null)
`})}),`
`,(0,c.jsx)(n.h2,{id:`работа-с-массивами`,children:`Работа с массивами`}),`
`,(0,c.jsx)(n.p,{children:`Утилиты для фильтрации и итерации.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { uniqueArray, forEach } from '@dxtmisha/functional-basic'

// 1. Удаление дубликатов
uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]

// 2. Универсальный итератор (для массивов и объектов)
forEach([10, 20], (value, index) => {
  console.log(\`\${index}: \${value}\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};