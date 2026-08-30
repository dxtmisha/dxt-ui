import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/toNumber - Преобразование значения в число`}),`
`,(0,l.jsx)(t.h1,{id:`tonumber`,children:(0,l.jsx)(t.code,{children:`toNumber`})}),`
`,(0,l.jsx)(t.p,{children:`Преобразует строку или число в конечное число с плавающей точкой. Функция разработана для обработки различных стилей форматирования, включая разделители тысяч и различные десятичные маркеры.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value?: NumberOrString`}),` — Входное значение для преобразования.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`number`}),` — Распарсенное число float или `,(0,l.jsx)(t.code,{children:`0`}),`, если преобразование не удалось или значение не является конечным числом.`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};