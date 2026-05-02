import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/anyToString - Преобразование значения в строку`}),`
`,(0,l.jsx)(n.h1,{id:`anytostring`,children:(0,l.jsx)(n.code,{children:`anyToString`})}),`
`,(0,l.jsx)(n.p,{children:`Утилита для безопасного приведения любых данных к строковому типу.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: V`}),` — Значение для преобразования.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isArrayString: boolean = true`}),` — Если `,(0,l.jsx)(n.code,{children:`true`}),`, массивы примитивов объединяются через запятую.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`trim: boolean = true`}),` — Если `,(0,l.jsx)(n.code,{children:`true`}),`, обрезает лишние пробелы (только для строк).`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Правила преобразования:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Строки`}),`: Возвращаются как есть (с `,(0,l.jsx)(n.code,{children:`trim`}),`, если включено).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Массивы`}),`: Если `,(0,l.jsx)(n.code,{children:`isArrayString: true`}),` и в массиве нет объектов, элементы объединяются через запятую. В остальных случаях — JSON.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Объекты`}),`: Преобразуются в JSON. При ошибке (например, циклической ссылке) возвращается стандартный `,(0,l.jsx)(n.code,{children:`toString()`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Boolean`}),`: `,(0,l.jsx)(n.code,{children:`true`}),` преобразуется в `,(0,l.jsx)(n.code,{children:`'1'`}),`, `,(0,l.jsx)(n.code,{children:`false`}),` — в `,(0,l.jsx)(n.code,{children:`'0'`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Прочие типы`}),`: `,(0,l.jsx)(n.code,{children:`null`}),` и `,(0,l.jsx)(n.code,{children:`undefined`}),` дают пустую строку. Для остальных вызывается `,(0,l.jsx)(n.code,{children:`toString()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — Строковое представление значения.`]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { anyToString } from '@dxtmisha/functional-basic'

// 1. Строки
anyToString('  Hello  ')               // 'Hello'
anyToString('  Hello  ', true, false)  // '  Hello  '

// 2. Массивы
anyToString([1, 2, 3])                 // '1,2,3'
anyToString([1, 2, 3], false)          // '[1,2,3]'

// 3. Объекты
anyToString({ a: 1 })                  // '{"a":1}'

// 4. Логические значения (преобразование в 1/0)
anyToString(true)                      // '1'
anyToString(false)                     // '0'

// 5. Пустые значения и типы
anyToString(null)                      // ''
anyToString(123)                       // '123'
anyToString(Symbol('test'))            // 'Symbol(test)'
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};