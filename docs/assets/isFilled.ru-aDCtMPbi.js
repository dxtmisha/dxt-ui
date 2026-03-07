import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(n){const l={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/isFilled - Проверка заполненности"}),`
`,e.jsx(l.h1,{id:"isfilled",children:e.jsx(l.code,{children:"isFilled"})}),`
`,e.jsx(l.p,{children:"Универсальная утилита для проверки того, «заполнено» ли переданное значение. Функция умеет корректно обрабатывать различные типы данных: числа, строки, булевы значения, массивы и объекты."}),`
`,e.jsxs(l.p,{children:["В отличие от стандартной проверки на truthy/falsy значения (",e.jsx(l.code,{children:"if (value)"}),"), функция дополнительно:"]}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:["Считает массивы пустыми (",e.jsx(l.code,{children:"false"}),"), если их длина равна 0."]}),`
`,e.jsxs(l.li,{children:["Считает объекты пустыми (",e.jsx(l.code,{children:"false"}),"), если все их значения равны ",e.jsx(l.code,{children:"null"}),"."]}),`
`,e.jsxs(l.li,{children:["Распознает специальные строковые паттерны, такие как ",e.jsx(l.code,{children:"'undefined'"}),", ",e.jsx(l.code,{children:"'null'"}),", ",e.jsx(l.code,{children:"'false'"}),", ",e.jsx(l.code,{children:"'[]'"})," и по умолчанию считает их пустыми (",e.jsx(l.code,{children:"false"}),")."]}),`
`,e.jsxs(l.li,{children:["Позволяет настроить поведение для строкового значения ",e.jsx(l.code,{children:"'0'"})," через аргумент ",e.jsx(l.code,{children:"zeroTrue"}),"."]}),`
`]}),`
`,e.jsx(l.p,{children:e.jsx(l.strong,{children:"Параметры:"})}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"value: T"})," — Входное значение любого типа для проверки."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"zeroTrue: boolean"})," — (Необязательно) Если передано ",e.jsx(l.code,{children:"true"}),", строковое значение ",e.jsx(l.code,{children:"'0'"})," будет считаться заполненным (вернет ",e.jsx(l.code,{children:"true"}),"), а не пустым."]}),`
`]}),`
`,e.jsxs(l.p,{children:[e.jsx(l.strong,{children:"Возвращает:"}),`
`,e.jsx(l.code,{children:"boolean"})," (",e.jsx(l.code,{children:"value is Exclude<T, EmptyValue>"}),") — Возвращает ",e.jsx(l.code,{children:"true"}),", если поле имеет значимое заполнение, и ",e.jsx(l.code,{children:"false"}),", если данных нет. Успешная проверка сужает (type guard) тип значения, исключая пустые типы (EmptyValue)."]}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-typescript",children:`import { isFilled } from '@dxtmisha/functional-basic'

console.log(isFilled('Текст')) // true
console.log(isFilled(100)) // true
console.log(isFilled([1, 2, 3])) // true
console.log(isFilled({ data: 'ok' })) // true

// Примеры пустых значений
console.log(isFilled('')) // false
console.log(isFilled([])) // false
console.log(isFilled({ a: null })) // false
console.log(isFilled('null')) // false
console.log(isFilled('0')) // false

// Использование zeroTrue
console.log(isFilled('0', true)) // true
`})})]})}function j(n={}){const{wrapper:l}={...i(),...n.components};return l?e.jsx(l,{...n,children:e.jsx(s,{...n})}):s(n)}export{j as default};
