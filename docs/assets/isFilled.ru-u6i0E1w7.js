import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isFilled - Проверка заполненности`}),`
`,(0,c.jsx)(t.h1,{id:`isfilled`,children:(0,c.jsx)(t.code,{children:`isFilled`})}),`
`,(0,c.jsx)(t.p,{children:`Универсальная утилита для проверки того, «заполнено» ли переданное значение. Функция умеет корректно обрабатывать различные типы данных: числа, строки, булевы значения, массивы и объекты.`}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от стандартной проверки на truthy/falsy значения (`,(0,c.jsx)(t.code,{children:`if (value)`}),`), функция дополнительно:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Считает массивы пустыми (`,(0,c.jsx)(t.code,{children:`false`}),`), если их длина равна 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Считает объекты пустыми (`,(0,c.jsx)(t.code,{children:`false`}),`), если все их значения равны `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Распознает специальные строковые паттерны, такие как `,(0,c.jsx)(t.code,{children:`'undefined'`}),`, `,(0,c.jsx)(t.code,{children:`'null'`}),`, `,(0,c.jsx)(t.code,{children:`'false'`}),`, `,(0,c.jsx)(t.code,{children:`'[]'`}),` и по умолчанию считает их пустыми (`,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Позволяет настроить поведение для строкового значения `,(0,c.jsx)(t.code,{children:`'0'`}),` через аргумент `,(0,c.jsx)(t.code,{children:`zeroTrue`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Входное значение любого типа для проверки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zeroTrue: boolean`}),` — (Необязательно) Если передано `,(0,c.jsx)(t.code,{children:`true`}),`, строковое значение `,(0,c.jsx)(t.code,{children:`'0'`}),` будет считаться заполненным (вернет `,(0,c.jsx)(t.code,{children:`true`}),`), а не пустым.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` (`,(0,c.jsx)(t.code,{children:`value is Exclude<T, EmptyValue>`}),`) — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если поле имеет значимое заполнение, и `,(0,c.jsx)(t.code,{children:`false`}),`, если данных нет. Успешная проверка сужает (type guard) тип значения, исключая пустые типы (EmptyValue).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isFilled } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};