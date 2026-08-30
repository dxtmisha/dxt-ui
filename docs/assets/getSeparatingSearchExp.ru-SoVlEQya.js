import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getSeparatingSearchExp - Создание RegExp для поиска по отдельным словам`}),`
`,(0,c.jsx)(t.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(t.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, строящая регистронезависимое глобальное регулярное выражение `,(0,c.jsx)(t.code,{children:`RegExp`}),` для поиска строк, содержащих `,(0,c.jsx)(t.strong,{children:`любое`}),` из слов поисковой строки (разделение пробелом).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Каждое слово разбивается пробелами, экранируется и объединяется символом "или" `,(0,c.jsx)(t.code,{children:`|`}),`. Это полезно, когда нужно найти совпадение хотя бы по одному из введённых слов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string | RegExp`}),` — Строка поиска, состоящая из одного или нескольких слов, разделённых пробелами, или объект `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number = 128`}),` — Максимальная длина строки поиска (игнорируется, если передан `,(0,c.jsx)(t.code,{children:`RegExp`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Регулярное выражение с флагами `,(0,c.jsx)(t.code,{children:`ig`}),` (глобальный, без учёта регистра). Если строка поиска пуста или превышает лимит, возвращается регулярное выражение, которое ничего не находит.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Специальные символы экранируются автоматически
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};