import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Validation Utils"}),`
`,n.jsx(e.h1,{id:"утилиты-валидации",children:"Утилиты валидации"}),`
`,n.jsx(e.p,{children:"Набор функций для проверки типов данных и валидации значений."}),`
`,n.jsx(e.h2,{id:"inarray",children:n.jsx(e.code,{children:"inArray"})}),`
`,n.jsx(e.p,{children:"Проверяет, содержится ли значение в массиве."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: T[]"})," — массив для проверки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { inArray } from '@dxtmisha/functional'

inArray([1, 2, 3], 2) // true
inArray(['a', 'b'], 'c') // false
inArray([{id: 1}, {id: 2}], {id: 1}) // false (разные ссылки)
`})}),`
`,n.jsx(e.h2,{id:"intersectkey",children:n.jsx(e.code,{children:"intersectKey"})}),`
`,n.jsx(e.p,{children:"Проверяет пересечение ключей между объектами или массивами."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data1: Record<string, any> | any[]"})," — первый объект или массив"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data2: Record<string, any> | any[]"})," — второй объект или массив"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { intersectKey } from '@dxtmisha/functional'

intersectKey({a: 1, b: 2}, {b: 3, c: 4}) // true (есть общий ключ 'b')
intersectKey([1, 2], [3, 4]) // false
intersectKey({}, {a: 1}) // false
`})}),`
`,n.jsx(e.h2,{id:"isarray",children:n.jsx(e.code,{children:"isArray"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение массивом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isArray } from '@dxtmisha/functional'

isArray([1, 2, 3]) // true
isArray('string') // false
isArray({}) // false
`})}),`
`,n.jsx(e.h2,{id:"isdifferent",children:n.jsx(e.code,{children:"isDifferent"})}),`
`,n.jsx(e.p,{children:"Проверяет, отличаются ли два значения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value1: any"})," — первое значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value2: any"})," — второе значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isDifferent } from '@dxtmisha/functional'

isDifferent(1, 2) // true
isDifferent('hello', 'hello') // false
isDifferent({a: 1}, {a: 1}) // true (разные ссылки)
`})}),`
`,n.jsx(e.h2,{id:"isdomdata",children:n.jsx(e.code,{children:"isDomData"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли текущая среда URL-адресом данных (data URL)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isDomData } from '@dxtmisha/functional'

isDomData() // true если location.href начинается с 'data:', иначе false
// Полезно для определения, работает ли код в iframe с data URL
`})}),`
`,n.jsx(e.h2,{id:"isdomruntime",children:n.jsx(e.code,{children:"isDomRuntime"})}),`
`,n.jsx(e.p,{children:"Проверяет, выполняется ли код в браузерной среде (есть ли DOM)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isDomRuntime } from '@dxtmisha/functional'

isDomRuntime() // true в браузере, false в Node.js
`})}),`
`,n.jsx(e.h2,{id:"isfilled",children:n.jsx(e.code,{children:"isFilled"})}),`
`,n.jsx(e.p,{children:"Проверяет, заполнено ли значение (не пустое и не undefined/null)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isFilled } from '@dxtmisha/functional'

isFilled('hello') // true
isFilled('') // false
isFilled(0) // true
isFilled(null) // false
`})}),`
`,n.jsx(e.h2,{id:"isfloat",children:n.jsx(e.code,{children:"isFloat"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение числом с плавающей точкой."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isFloat } from '@dxtmisha/functional'

isFloat(3.14) // true
isFloat(5) // false
isFloat('3.14') // false
`})}),`
`,n.jsx(e.h2,{id:"isfunction",children:n.jsx(e.code,{children:"isFunction"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение функцией."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isFunction } from '@dxtmisha/functional'

isFunction(() => {}) // true
isFunction(function() {}) // true
isFunction('string') // false
`})}),`
`,n.jsx(e.h2,{id:"isindom",children:n.jsx(e.code,{children:"isInDom"})}),`
`,n.jsx(e.p,{children:"Проверяет, находится ли элемент в DOM дереве."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element: Element"})," — проверяемый элемент"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isInDom } from '@dxtmisha/functional'

const element = document.createElement('div')
isInDom(element) // false (не добавлен в DOM)
document.body.appendChild(element)
isInDom(element) // true
`})}),`
`,n.jsx(e.h2,{id:"isintegerbetween",children:n.jsx(e.code,{children:"isIntegerBetween"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение целым числом в указанном диапазоне."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — минимальное значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — максимальное значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isIntegerBetween } from '@dxtmisha/functional'

isIntegerBetween(5, 1, 10) // true
isIntegerBetween(3.5, 1, 10) // false (не целое)
isIntegerBetween(15, 1, 10) // false (вне диапазона)
`})}),`
`,n.jsx(e.h2,{id:"isnull",children:n.jsx(e.code,{children:"isNull"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение null или undefined."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isNull } from '@dxtmisha/functional'

isNull(null) // true
isNull(undefined) // true
isNull(0) // false
isNull('') // false
`})}),`
`,n.jsx(e.h2,{id:"isnumber",children:n.jsx(e.code,{children:"isNumber"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение числом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isNumber } from '@dxtmisha/functional'

isNumber(42) // true
isNumber(3.14) // true
isNumber('42') // false
isNumber(NaN) // false
`})}),`
`,n.jsx(e.h2,{id:"isobject",children:n.jsx(e.code,{children:"isObject"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение объектом (включая массивы)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isObject } from '@dxtmisha/functional'

isObject({}) // true
isObject([]) // true
isObject(null) // false
isObject('string') // false
`})}),`
`,n.jsx(e.h2,{id:"isobjectnotarray",children:n.jsx(e.code,{children:"isObjectNotArray"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение объектом, но не массивом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isObjectNotArray } from '@dxtmisha/functional'

isObjectNotArray({}) // true
isObjectNotArray([]) // false
isObjectNotArray(null) // false
`})}),`
`,n.jsx(e.h2,{id:"isselected",children:n.jsx(e.code,{children:"isSelected"})}),`
`,n.jsx(e.p,{children:"Проверяет, соответствует ли элемент условиям выбора."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: any"})," — проверяемый элемент"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected: any"})," — условие выбора"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isSelected } from '@dxtmisha/functional'

isSelected('apple', 'apple') // true
isSelected({id: 1}, {id: 1}) // false (разные ссылки)
isSelected('apple', ['apple', 'banana']) // true
`})}),`
`,n.jsx(e.h2,{id:"isselectedbylist",children:n.jsx(e.code,{children:"isSelectedByList"})}),`
`,n.jsx(e.p,{children:"Проверяет, соответствует ли элемент одному из условий в списке."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: any"})," — проверяемый элемент"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected: any[]"})," — список условий выбора"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isSelectedByList } from '@dxtmisha/functional'

isSelectedByList('apple', ['apple', 'banana']) // true
isSelectedByList('grape', ['apple', 'banana']) // false
isSelectedByList(1, [1, 2, 3]) // true
`})}),`
`,n.jsx(e.h2,{id:"isstring",children:n.jsx(e.code,{children:"isString"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение строкой."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isString } from '@dxtmisha/functional'

isString('hello') // true
isString(42) // false
isString('') // true
`})}),`
`,n.jsx(e.h2,{id:"iswindow",children:n.jsx(e.code,{children:"isWindow"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение объектом window."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — проверяемое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { isWindow } from '@dxtmisha/functional'

isWindow(window) // true в браузере
isWindow(document) // false
isWindow({}) // false
`})})]})}function x(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{x as default};
