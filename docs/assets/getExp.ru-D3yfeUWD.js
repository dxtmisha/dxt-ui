import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getExp - Создание регулярного выражения из строки с экранированием`}),`
`,(0,c.jsx)(t.h1,{id:`getexp`,children:(0,c.jsx)(t.code,{children:`getExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, создающая объект регулярного выражения `,(0,c.jsx)(t.code,{children:`RegExp`}),` из строки-шаблона, предварительно экранируя в ней все специальные символы регулярных выражений (такие как `,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Это необходимо, если искомая строка поступает от пользователя или содержит символы, которые могли бы сломать регулярное выражение. В функции также можно задать флаги регулярного выражения и шаблон, в который будет подставлена экранированная строка вместо метки `,(0,c.jsx)(t.code,{children:`:value`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — Искомая строка, которую нужно экранировать.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`flags?: string`}),` — (опционально) Флаги регулярного выражения (например, `,(0,c.jsx)(t.code,{children:`'ig'`}),`). По умолчанию `,(0,c.jsx)(t.code,{children:`'ig'`}),` (игнорирование регистра и глобальный поиск).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern?: string`}),` — (опционально) Строка-шаблон регулярного выражения. По умолчанию просто `,(0,c.jsx)(t.code,{children:`':value'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Объект регулярного выражения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getExp } from '@dxtmisha/functional-basic'

// Обычный поиск
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (точка экранирована)

// Поиск с пользовательским флагом и шаблоном (например, "начинается с")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};