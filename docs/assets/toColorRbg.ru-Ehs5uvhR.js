import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/| functions/toColorRbg - Извлечь RGB`}),`
`,(0,c.jsx)(n.h1,{id:`tocolorrbg`,children:(0,c.jsx)(n.code,{children:`toColorRbg`})}),`
`,(0,c.jsx)(n.p,{children:`Функция преобразует объект Sass Color в строку, содержащую значения красного (red), зеленого (green) и синего (blue) каналов, разделенные запятыми.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — значение цвета для преобразования.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — каналы "R, G, B" или исходную строку, если это не был цвет.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$channels: styles.toColorRbg(#ff0000); // "255, 0, 0"
$from-var: styles.toColorRbg(var(--my-color)); // "var(--my-color)"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};