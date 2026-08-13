import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/removeCommonPrefix - Удаление общего префикса`}),`
`,(0,c.jsx)(t.h1,{id:`removecommonprefix`,children:(0,c.jsx)(t.code,{children:`removeCommonPrefix`})}),`
`,(0,c.jsx)(t.p,{children:`Удаляет общий префикс из начала основной строки. Если основная строка начинается с указанного префикса, функция обрезает его и возвращает строку без пробелов по краям.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mainStr: string`}),` — Основная строка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix: string`}),` — Строка префикса для удаления.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Новая строка без префикса и лишних пробелов по краям.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Привет, мир!', 'Привет, ')) // 'мир!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};