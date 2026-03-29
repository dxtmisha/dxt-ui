import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isOnLine - Проверка подключения к сети`}),`
`,(0,c.jsx)(n.h1,{id:`isonline`,children:(0,c.jsx)(n.code,{children:`isOnLine`})}),`
`,(0,c.jsx)(n.p,{children:`Простая утилита для определения текущего статуса подключения устройства к сети.`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет свойство `,(0,c.jsx)(n.code,{children:`navigator.onLine`}),`. Если среда выполнения не является браузером (например, во время серверного рендеринга — SSR), по умолчанию возвращается `,(0,c.jsx)(n.code,{children:`true`}),`, чтобы сетезависимая логика не блокировалась преждевременно.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если устройство в сети или если среда выполнения не браузер. Возвращает `,(0,c.jsx)(n.code,{children:`false`}),`, если устройство явно находится в автономном режиме (offline).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isOnLine } from '@dxtmisha/functional-basic'

if (isOnLine()) {
  console.log('Устройство в сети!')
} else {
  console.log('Устройство не в сети.')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};