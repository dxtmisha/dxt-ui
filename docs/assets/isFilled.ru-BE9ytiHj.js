import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isFilled - Проверка заполненности`}),`
`,(0,c.jsx)(n.h1,{id:`isfilled`,children:(0,c.jsx)(n.code,{children:`isFilled`})}),`
`,(0,c.jsx)(n.p,{children:`Универсальная утилита для проверки того, «заполнено» ли переданное значение. Функция умеет корректно обрабатывать различные типы данных: числа, строки, булевы значения, массивы и объекты.`}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от стандартной проверки на truthy/falsy значения (`,(0,c.jsx)(n.code,{children:`if (value)`}),`), функция дополнительно:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Считает массивы пустыми (`,(0,c.jsx)(n.code,{children:`false`}),`), если их длина равна 0.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Считает объекты пустыми (`,(0,c.jsx)(n.code,{children:`false`}),`), если все их значения равны `,(0,c.jsx)(n.code,{children:`null`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Распознает специальные строковые паттерны, такие как `,(0,c.jsx)(n.code,{children:`'undefined'`}),`, `,(0,c.jsx)(n.code,{children:`'null'`}),`, `,(0,c.jsx)(n.code,{children:`'false'`}),`, `,(0,c.jsx)(n.code,{children:`'[]'`}),` и по умолчанию считает их пустыми (`,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Позволяет настроить поведение для строкового значения `,(0,c.jsx)(n.code,{children:`'0'`}),` через аргумент `,(0,c.jsx)(n.code,{children:`zeroTrue`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Входное значение любого типа для проверки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`zeroTrue: boolean`}),` — (Необязательно) Если передано `,(0,c.jsx)(n.code,{children:`true`}),`, строковое значение `,(0,c.jsx)(n.code,{children:`'0'`}),` будет считаться заполненным (вернет `,(0,c.jsx)(n.code,{children:`true`}),`), а не пустым.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` (`,(0,c.jsx)(n.code,{children:`value is Exclude<T, EmptyValue>`}),`) — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если поле имеет значимое заполнение, и `,(0,c.jsx)(n.code,{children:`false`}),`, если данных нет. Успешная проверка сужает (type guard) тип значения, исключая пустые типы (EmptyValue).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isFilled } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};