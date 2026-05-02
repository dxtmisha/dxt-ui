import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/toNumber - Преобразование значения в число`}),`
`,(0,l.jsx)(n.h1,{id:`tonumber`,children:(0,l.jsx)(n.code,{children:`toNumber`})}),`
`,(0,l.jsx)(n.p,{children:`Преобразует строку или число в конечное число с плавающей точкой. Функция разработана для обработки различных стилей форматирования, включая разделители тысяч и различные десятичные маркеры.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value?: NumberOrString`}),` — Входное значение для преобразования.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`number`}),` — Распарсенное число float или `,(0,l.jsx)(n.code,{children:`0`}),`, если преобразование не удалось или значение не является конечным числом.`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { toNumber } from '@dxtmisha/functional-basic'

// 1. Обработка различных разделителей
toNumber('1 250,50')       // 1250.5
toNumber('1,000,000.99')   // 1000000.99
toNumber('1.250,50')       // 1250.5

// 2. Очистка от нечисловых символов
toNumber('abc-12.5')       // -12.5
toNumber('$1,234.56')      // 1234.56

// 3. Числа и специальные значения
toNumber(123.45)           // 123.45
toNumber(-0)               // 0 (нормализовано)
toNumber(Infinity)         // 0
toNumber(undefined)        // 0
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};