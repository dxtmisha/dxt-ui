import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma/Functions/fetchFramesSelected - Получение выбранных фреймов`}),`
`,(0,c.jsx)(n.h1,{id:`fetchframesselected`,children:(0,c.jsx)(n.code,{children:`fetchFramesSelected`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита, которая запрашивает текущие выбранные фреймы из плагина Figma. Она поддерживает кэширование и предотвращает дублирование одновременных запросов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (selected: string[]) => void`}),` — Функция, вызываемая после получения идентификаторов выбранных фреймов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { fetchFramesSelected } from '@dxtmisha/figma'

fetchFramesSelected((selected) => {
  console.log('Выбранные фреймы:', selected)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};