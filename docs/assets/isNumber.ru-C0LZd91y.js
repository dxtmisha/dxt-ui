import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/isNumber - Проверка на число"}),`
`,e.jsx(n.h1,{id:"isnumber",children:e.jsx(n.code,{children:"isNumber"})}),`
`,e.jsx(n.p,{children:"Универсальная утилита для проверки, может ли переданное значение квалифицироваться как число."}),`
`,e.jsxs(n.p,{children:["Она корректно распознает как классический тип числа ",e.jsx(n.code,{children:"typeof value === 'number'"})," (включая особые случаи, такие как ",e.jsx(n.code,{children:"NaN"})," или отрицательные значения), так и строковые представления чисел, убедившись с помощью регулярного выражения ",e.jsx(n.code,{children:"regex"}),", что переданная строка содержит корректный числовой формат (включая целые, отрицательные и дробные числа)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — Любое тестируемое значение."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Вернет ",e.jsx(n.code,{children:"true"}),", если объект данных относится к математическим числам либо если строка состоит только из цифр. В противном случае вернет ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Строка, содержащая только цифры)

console.log(isNumber('-50')) // true (Отрицательные числа поддерживаются)
console.log(isNumber('3.14')) // true (Дробные числа тоже)
console.log(isNumber('15a')) // false (Содержит букву)
console.log(isNumber(null)) // false
`})})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{x as default};
