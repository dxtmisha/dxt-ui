import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/| functions/getPaletteItemOpacity - Цепочка прозрачности`}),`
`,(0,c.jsx)(n.h1,{id:`getpaletteitemopacity`,children:(0,c.jsx)(n.code,{children:`getPaletteItemOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция генерирует вложенную цепочку переменных CSS (используя параметр fallback функции `,(0,c.jsx)(n.code,{children:`var()`}),`) для поиска значения прозрачности в нескольких узлах палитры.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List | String`}),` — список имен переменных палитры или одно имя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — резервный цвет, если переменные палитры не определены.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — вложенная строка вида `,(0,c.jsx)(n.code,{children:`var(--name1-opacity, var(--name2-opacity, ...))`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$chain: styles.getPaletteItemOpacity(('theme-color', 'sys-color'), #ff0000); 
// var(--theme-color-opacity, var(--sys-color-opacity, 1))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};