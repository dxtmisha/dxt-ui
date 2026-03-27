import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Functions/getDirname - Получение имени текущей директории`}),`
`,(0,c.jsx)(n.h1,{id:`getdirname`,children:(0,c.jsx)(n.code,{children:`getDirname`})}),`
`,(0,c.jsx)(n.p,{children:`Функция возвращает имя текущей директории, обрабатывая как среды CommonJS, так и ESM.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — имя текущей директории.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет, имеет ли среда встроенную поддержку `,(0,c.jsx)(n.code,{children:`__dirname`}),` (используя `,(0,c.jsx)(n.code,{children:`hasNativeDirname`}),`). Если да, возвращается `,(0,c.jsx)(n.code,{children:`__dirname`}),`. В противном случае имя директории вычисляется на основе `,(0,c.jsx)(n.code,{children:`import.meta.url`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};