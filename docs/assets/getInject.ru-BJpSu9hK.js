import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/getInject - Получение внедренного значения`}),`
`,(0,c.jsx)(n.h1,{id:`getinject`,children:(0,c.jsx)(n.code,{children:`getInject`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая безопасно получает внедренное значение по имени из текущего экземпляра Vue-компонента. Если активного экземпляра компонента нет или значение не было предоставлено, функция возвращает `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Имя ключа внедрения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T | undefined`}),` — Внедренное значение, если оно существует, иначе `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { provide } from 'vue'
import { getInject } from '@dxtmisha/nitro-basic'

provide('theme', 'dark')

// Возвращает 'dark'
const theme = getInject<string>('theme')

// Возвращает undefined, если ключ отсутствует
const language = getInject<string>('language')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};