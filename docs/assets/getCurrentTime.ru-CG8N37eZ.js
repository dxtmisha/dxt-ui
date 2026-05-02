import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getCurrentTime - Получение текущего времени`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrenttime`,children:(0,c.jsx)(n.code,{children:`getCurrentTime`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает текущее время в миллисекундах.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Внимание (SSR):`}),` Использование этой функции для отрисовки в SSR практически наверняка приведет к ошибкам гидратации, так как временная метка (timestamp) сервера будет отличаться от метки на стороне клиента.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Функция является оберткой над `,(0,c.jsx)(n.code,{children:`new Date().getTime()`}),` и позволяет быстро получить временную метку (timestamp).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Текущее время в миллисекундах (number).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getCurrentTime } from '@dxtmisha/functional-basic'

const time = getCurrentTime()
// Результат: 1710498600000 (пример)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};