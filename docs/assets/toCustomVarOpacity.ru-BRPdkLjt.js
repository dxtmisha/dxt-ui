import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/| functions/toCustomVarOpacity - Формат прозрачности`}),`
`,(0,c.jsx)(n.h1,{id:`tocustomvaropacity`,children:(0,c.jsx)(n.code,{children:`toCustomVarOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция модифицирует строку ссылки на переменную CSS (например, `,(0,c.jsx)(n.code,{children:`var(--name)`}),`) таким образом, чтобы она указывала на соответствующую ей переменную прозрачности (`,(0,c.jsx)(n.code,{children:`var(--name-opacity)`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: String`}),` — строка переменной CSS для модификации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: Number | null`}),` [null] — необязательное резервное значение прозрачности.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — модифицированная строка переменной.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$opacity: styles.toCustomVarOpacity(var(--sys-color)); 
// var(--sys-color-opacity)

$with-fallback: styles.toCustomVarOpacity(var(--sys-color), 0.5); 
// var(--sys-color-opacity, 0.5)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};