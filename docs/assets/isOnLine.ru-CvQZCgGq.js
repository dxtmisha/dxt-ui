import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isOnLine - Проверка подключения к сети`}),`
`,(0,c.jsx)(t.h1,{id:`isonline`,children:(0,c.jsx)(t.code,{children:`isOnLine`})}),`
`,(0,c.jsx)(t.p,{children:`Простая утилита для определения текущего статуса подключения устройства к сети.`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет свойство `,(0,c.jsx)(t.code,{children:`navigator.onLine`}),`. Если среда выполнения не является браузером (например, во время серверного рендеринга — SSR), по умолчанию возвращается `,(0,c.jsx)(t.code,{children:`true`}),`, чтобы сетезависимая логика не блокировалась преждевременно.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если устройство в сети или если среда выполнения не браузер. Возвращает `,(0,c.jsx)(t.code,{children:`false`}),`, если устройство явно находится в автономном режиме (offline).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isOnLine } from '@dxtmisha/functional-basic'

if (isOnLine()) {
  console.log('Устройство в сети!')
} else {
  console.log('Устройство не в сети.')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};