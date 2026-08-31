import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getCurrentTime - Получение текущего времени`}),`
`,(0,c.jsx)(t.h1,{id:`getcurrenttime`,children:(0,c.jsx)(t.code,{children:`getCurrentTime`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает текущее время в миллисекундах.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Внимание (SSR):`}),` Использование этой функции для отрисовки в SSR практически наверняка приведет к ошибкам гидратации, так как временная метка (timestamp) сервера будет отличаться от метки на стороне клиента.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция является оберткой над `,(0,c.jsx)(t.code,{children:`new Date().getTime()`}),` и позволяет быстро получить временную метку (timestamp).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Текущее время в миллисекундах (number).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getCurrentTime } from '@dxtmisha/functional-basic'

const time = getCurrentTime()
// Результат: 1710498600000 (пример)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};