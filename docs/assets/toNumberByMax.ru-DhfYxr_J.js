import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/toNumberByMax - Преобразование в число с ограничением максимума`}),`
`,(0,c.jsx)(t.h1,{id:`tonumberbymax`,children:(0,c.jsx)(t.code,{children:`toNumberByMax`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует входное значение в число и, если оно превышает указанный максимум, возвращает строку с символом `,(0,c.jsx)(t.code,{children:`+`}),` в конце. Опционально выполняет локализованное форматирование результата.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string | number`}),` — Входное значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max?: string | number`}),` — Максимально допустимое значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formatting?: boolean`}),` — Флаг включения форматирования через `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language?: string`}),` — Код языка для форматирования (например, `,(0,c.jsx)(t.code,{children:`'ru-RU'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string | number`}),` — Отформатированная строка (например, `,(0,c.jsx)(t.code,{children:`'99+'`}),`) или число.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'ru-RU')) // '500+'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};