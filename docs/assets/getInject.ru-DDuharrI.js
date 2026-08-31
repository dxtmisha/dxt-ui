import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/getInject - Получение внедренного значения`}),`
`,(0,c.jsx)(t.h1,{id:`getinject`,children:(0,c.jsx)(t.code,{children:`getInject`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, которая безопасно получает внедренное значение по имени из текущего экземпляра Vue-компонента. Если активного экземпляра компонента нет или значение не было предоставлено, функция возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Имя ключа внедрения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Внедренное значение, если оно существует, иначе `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { provide } from 'vue'
import { getInject } from '@dxtmisha/nitro-basic'

provide('theme', 'dark')

// Возвращает 'dark'
const theme = getInject<string>('theme')

// Возвращает undefined, если ключ отсутствует
const language = getInject<string>('language')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};