import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/getDirname - Получение имени текущей директории`}),`
`,(0,c.jsx)(t.h1,{id:`getdirname`,children:(0,c.jsx)(t.code,{children:`getDirname`})}),`
`,(0,c.jsx)(t.p,{children:`Функция возвращает имя текущей директории, обрабатывая как среды CommonJS, так и ESM.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — имя текущей директории.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет, имеет ли среда встроенную поддержку `,(0,c.jsx)(t.code,{children:`__dirname`}),` (используя `,(0,c.jsx)(t.code,{children:`hasNativeDirname`}),`). Если да, возвращается `,(0,c.jsx)(t.code,{children:`__dirname`}),`. В противном случае имя директории вычисляется на основе `,(0,c.jsx)(t.code,{children:`import.meta.url`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};