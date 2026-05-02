import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getSeparatingSearchExp - Создание RegExp для поиска по отдельным словам`}),`
`,(0,c.jsx)(n.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, строящая регистронезависимое глобальное регулярное выражение `,(0,c.jsx)(n.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(n.strong,{children:`любое`}),` из слов поисковой строки (разделение пробелом).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Каждое слово разбивается пробелами, экранируется и объединяется символом "или" `,(0,c.jsx)(n.code,{children:`|`}),`. Это полезно, когда нужно найти совпадение хотя бы по одному из введённых слов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string | RegExp`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами, или объект `,(0,c.jsx)(n.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number = 128`}),` — Максимальная длина строки поиска (игнорируется, если передан `,(0,c.jsx)(n.code,{children:`RegExp`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Регулярное выражение с флагами `,(0,c.jsx)(n.code,{children:`ig`}),` (глобальный, без учёта регистра). Если строка поиска пуста или превышает лимит, возвращается регулярное выражение, которое ничего не находит.`]}),`
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};