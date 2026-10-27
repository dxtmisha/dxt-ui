import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-DoUQMcLv.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/toString - Преобразование значения в строку`}),`
`,(0,l.jsx)(t.h1,{id:`tostring`,children:(0,l.jsx)(t.code,{children:`toString`})}),`
`,(0,l.jsxs)(t.p,{children:[`Утилита для безопасного преобразования любого значения в строку. Возвращает пустую строку `,(0,l.jsx)(t.code,{children:`''`}),`, если переданное значение равно `,(0,l.jsx)(t.code,{children:`null`}),` или `,(0,l.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,l.jsxs)(t.p,{children:[`В отличие от наивных подходов (например, `,(0,l.jsx)(t.code,{children:`value || ''`}),` или шаблонных строк `,(0,l.jsx)(t.code,{children:"${value}"}),`):`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`Falsy-значения (`,(0,l.jsx)(t.code,{children:`0`}),`, `,(0,l.jsx)(t.code,{children:`-0`}),`, `,(0,l.jsx)(t.code,{children:`false`}),`, `,(0,l.jsx)(t.code,{children:`0n`}),`) корректно сохраняются и превращаются в `,(0,l.jsx)(t.code,{children:`'0'`}),`, `,(0,l.jsx)(t.code,{children:`'false'`}),`, а не заменяются на пустую строку.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Символы (`,(0,l.jsx)(t.code,{children:`Symbol(...)`}),`) безопасно преобразуются в `,(0,l.jsx)(t.code,{children:`'Symbol(...)'`}),` без выбрасывания исключения `,(0,l.jsx)(t.code,{children:`TypeError`}),` (в отличие от конкатенации `,(0,l.jsx)(t.code,{children:`value + ''`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`null`}),` и `,(0,l.jsx)(t.code,{children:`undefined`}),` безопасно превращаются в `,(0,l.jsx)(t.code,{children:`''`}),` без ошибок.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Поддерживает пользовательские методы `,(0,l.jsx)(t.code,{children:`toString()`}),` и `,(0,l.jsx)(t.code,{children:`Symbol.toPrimitive`}),` у объектов.`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — Значение для преобразования.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Строковое представление значения либо пустая строка для `,(0,l.jsx)(t.code,{children:`null`}),` / `,(0,l.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { toString } from '@dxtmisha/functional-basic'

// Базовые строки и примитивы
toString('Привет')             // 'Привет'
toString(123)                  // '123'
toString(true)                 // 'true'

// Корректная обработка falsy-значений (не заменяются на пустую строку)
toString(0)                    // '0'
toString(-0)                   // '0'
toString(false)                // 'false'
toString(0n)                   // '0'

// Nullish-значения
toString(null)                 // ''
toString(undefined)            // ''

// Символы (не вызывают TypeError)
toString(Symbol('id'))         // 'Symbol(id)'

// Массивы и объекты
toString([1, 2, 3])            // '1,2,3'
toString([])                   // ''
toString({ a: 1 })             // '[object Object]'
toString({ toString: () => 'custom' }) // 'custom'
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};