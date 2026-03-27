import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getExp - Создание регулярного выражения из строки с экранированием`}),`
`,(0,c.jsx)(n.h1,{id:`getexp`,children:(0,c.jsx)(n.code,{children:`getExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, создающая объект регулярного выражения `,(0,c.jsx)(n.code,{children:`RegExp`}),` из строки-шаблона, предварительно экранируя в ней все специальные символы регулярных выражений (такие как `,(0,c.jsx)(n.code,{children:`.`}),` `,(0,c.jsx)(n.code,{children:`*`}),` `,(0,c.jsx)(n.code,{children:`+`}),` `,(0,c.jsx)(n.code,{children:`?`}),` `,(0,c.jsx)(n.code,{children:`^`}),` `,(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsx)(n.code,{children:`{`}),` `,(0,c.jsx)(n.code,{children:`}`}),` `,(0,c.jsx)(n.code,{children:`(`}),` `,(0,c.jsx)(n.code,{children:`)`}),` `,(0,c.jsx)(n.code,{children:`|`}),` `,(0,c.jsx)(n.code,{children:`[`}),` `,(0,c.jsx)(n.code,{children:`]`}),` `,(0,c.jsx)(n.code,{children:`\\`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Это необходимо, если искомая строка поступает от пользователя или содержит символы, которые могли бы сломать регулярное выражение. В функции также можно задать флаги регулярного выражения и шаблон, в который будет подставлена экранированная строка вместо метки `,(0,c.jsx)(n.code,{children:`:value`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Искомая строка, которую нужно экранировать.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`flags?: string`}),` — (опционально) Флаги регулярного выражения (например, `,(0,c.jsx)(n.code,{children:`'ig'`}),`). По умолчанию `,(0,c.jsx)(n.code,{children:`'ig'`}),` (игнорирование регистра и глобальный поиск).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pattern?: string`}),` — (опционально) Строка-шаблон регулярного выражения. По умолчанию просто `,(0,c.jsx)(n.code,{children:`':value'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Объект регулярного выражения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getExp } from '@dxtmisha/functional-basic'

// Обычный поиск
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (точка экранирована)

// Поиск с пользовательским флагом и шаблоном (например, "начинается с")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};