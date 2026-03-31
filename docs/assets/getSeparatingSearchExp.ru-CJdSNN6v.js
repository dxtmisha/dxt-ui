import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getSeparatingSearchExp - Создание RegExp для поиска по отдельным словам`}),`
`,(0,c.jsx)(n.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, строящая регистронезависимое глобальное регулярное выражение `,(0,c.jsx)(n.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(n.strong,{children:`любое`}),` из слов поисковой строки (разделение пробелом).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Каждое слово разбивается пробелами, экранируется и объединяется символом "или" `,(0,c.jsx)(n.code,{children:`|`}),`. Это полезно, когда нужно найти совпадение хотя бы по одному из введённых слов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Регулярное выражение с флагами `,(0,c.jsx)(n.code,{children:`ig`}),` (глобальный, без учёта регистра).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Специальные символы экранируются автоматически
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};