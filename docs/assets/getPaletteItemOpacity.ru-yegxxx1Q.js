import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/| functions/getPaletteItemOpacity - Цепочка прозрачности`}),`
`,(0,c.jsx)(t.h1,{id:`getpaletteitemopacity`,children:(0,c.jsx)(t.code,{children:`getPaletteItemOpacity`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция генерирует вложенную цепочку переменных CSS (используя параметр fallback функции `,(0,c.jsx)(t.code,{children:`var()`}),`) для поиска значения прозрачности в нескольких узлах палитры.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$palette: List | String`}),` — список имен переменных палитры или одно имя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — резервный цвет, если переменные палитры не определены.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — вложенная строка вида `,(0,c.jsx)(t.code,{children:`var(--name1-opacity, var(--name2-opacity, ...))`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$chain: styles.getPaletteItemOpacity(('theme-color', 'sys-color'), #ff0000); 
// var(--theme-color-opacity, var(--sys-color-opacity, 1))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};