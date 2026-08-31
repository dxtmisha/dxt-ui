import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/functional-basic/Functions/anyToString - Преобразование значения в строку`}),`
`,(0,l.jsx)(t.h1,{id:`anytostring`,children:(0,l.jsx)(t.code,{children:`anyToString`})}),`
`,(0,l.jsx)(t.p,{children:`Утилита для безопасного приведения любых данных к строковому типу.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: V`}),` — Значение для преобразования.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isArrayString: boolean = true`}),` — Если `,(0,l.jsx)(t.code,{children:`true`}),`, массивы примитивов объединяются через запятую.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`trim: boolean = true`}),` — Если `,(0,l.jsx)(t.code,{children:`true`}),`, обрезает лишние пробелы (только для строк).`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Правила преобразования:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Строки`}),`: Возвращаются как есть (с `,(0,l.jsx)(t.code,{children:`trim`}),`, если включено).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Массивы`}),`: Если `,(0,l.jsx)(t.code,{children:`isArrayString: true`}),` и в массиве нет объектов, элементы объединяются через запятую. В остальных случаях — JSON.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Объекты`}),`: Преобразуются в JSON. При ошибке (например, циклической ссылке) возвращается стандартный `,(0,l.jsx)(t.code,{children:`toString()`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Boolean`}),`: `,(0,l.jsx)(t.code,{children:`true`}),` преобразуется в `,(0,l.jsx)(t.code,{children:`'1'`}),`, `,(0,l.jsx)(t.code,{children:`false`}),` — в `,(0,l.jsx)(t.code,{children:`'0'`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Прочие типы`}),`: `,(0,l.jsx)(t.code,{children:`null`}),` и `,(0,l.jsx)(t.code,{children:`undefined`}),` дают пустую строку. Для остальных вызывается `,(0,l.jsx)(t.code,{children:`toString()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Строковое представление значения.`]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};