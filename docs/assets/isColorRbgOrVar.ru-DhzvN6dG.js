import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/| functions/isColorRbgOrVar - Проверить цвет`}),`
`,(0,c.jsx)(n.h1,{id:`iscolorrbgorvar`,children:(0,c.jsx)(n.code,{children:`isColorRbgOrVar`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет, является ли значение допустимым цветом или специальным ключевым словом CSS (например, `,(0,c.jsx)(n.code,{children:`transparent`}),`, `,(0,c.jsx)(n.code,{children:`initial`}),`, `,(0,c.jsx)(n.code,{children:`inherit`}),` и т. д.).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — значение цвета или ключевое слово CSS для проверки.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если значение является допустимым цветом или ключевым словом.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$is-color: styles.isColorRbgOrVar(#ff0000); // true
$is-keyword: styles.isColorRbgOrVar('transparent'); // true
$is-invalid: styles.isColorRbgOrVar('none'); // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};