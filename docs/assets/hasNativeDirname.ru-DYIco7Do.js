import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Functions/hasNativeDirname - Проверка доступности __dirname`}),`
`,(0,c.jsx)(n.h1,{id:`hasnativedirname`,children:(0,c.jsx)(n.code,{children:`hasNativeDirname`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет, доступна ли глобальная переменная `,(0,c.jsx)(n.code,{children:`__dirname`}),` в текущей среде.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если `,(0,c.jsx)(n.code,{children:`__dirname`}),` определена, в противном случае `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция использует `,(0,c.jsx)(n.code,{children:`typeof __dirname !== 'undefined'`}),` для определения того, поддерживает ли среда встроенное разрешение имен директорий (обычно в средах CommonJS).`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Среда поддерживает встроенный __dirname')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};