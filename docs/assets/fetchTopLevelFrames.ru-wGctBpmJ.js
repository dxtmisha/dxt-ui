import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma/Functions/fetchTopLevelFrames - Получение фреймов верхнего уровня`}),`
`,(0,c.jsx)(n.h1,{id:`fetchtoplevelframes`,children:(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита, которая запрашивает фреймы верхнего уровня из плагина Figma. Она поддерживает кэширование и предотвращает дублирование одновременных запросов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — Функция, вызываемая после получения фреймов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { fetchTopLevelFrames } from '@dxtmisha/figma'

fetchTopLevelFrames((frames) => {
  console.log('Фреймы верхнего уровня:', frames)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};