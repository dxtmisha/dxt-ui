import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/hasNativeDirname - Проверка доступности __dirname`}),`
`,(0,c.jsx)(t.h1,{id:`hasnativedirname`,children:(0,c.jsx)(t.code,{children:`hasNativeDirname`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет, доступна ли глобальная переменная `,(0,c.jsx)(t.code,{children:`__dirname`}),` в текущей среде.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если `,(0,c.jsx)(t.code,{children:`__dirname`}),` определена, в противном случае `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция использует `,(0,c.jsx)(t.code,{children:`typeof __dirname !== 'undefined'`}),` для определения того, поддерживает ли среда встроенное разрешение имен директорий (обычно в средах CommonJS).`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Среда поддерживает встроенный __dirname')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};