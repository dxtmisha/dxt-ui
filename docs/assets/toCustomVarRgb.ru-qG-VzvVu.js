import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/color/| functions/toCustomVarRgb - Формат RGB переменной`}),`
`,(0,c.jsx)(n.h1,{id:`tocustomvarrgb`,children:(0,c.jsx)(n.code,{children:`toCustomVarRgb`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция преобразует пользовательскую переменную CSS (например, `,(0,c.jsx)(n.code,{children:`var(--my-color)`}),`) в вызов функции `,(0,c.jsx)(n.code,{children:`rgba()`}),`, который включает соответствующую ей переменную прозрачности.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: String`}),` — строка переменной CSS для преобразования.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — вызов функции `,(0,c.jsx)(n.code,{children:`rgba(var(--name), var(--name-opacity))`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$rgba: styles.toCustomVarRgb(var(--sys-color)); 
// rgba(var(--sys-color), var(--sys-color-opacity))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};