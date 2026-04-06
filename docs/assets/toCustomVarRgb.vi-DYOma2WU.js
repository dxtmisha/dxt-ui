import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/| functions/toCustomVarRgb - Định dạng RGB`}),`
`,(0,c.jsx)(n.h1,{id:`tocustomvarrgb`,children:(0,c.jsx)(n.code,{children:`toCustomVarRgb`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm chuyển đổi một biến CSS tùy chỉnh (ví dụ: `,(0,c.jsx)(n.code,{children:`var(--my-color)`}),`) thành một lệnh gọi hàm `,(0,c.jsx)(n.code,{children:`rgba()`}),` bao gồm biến độ mờ tương ứng của nó.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: String`}),` — chuỗi biến CSS cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — một lệnh gọi hàm `,(0,c.jsx)(n.code,{children:`rgba(var(--name), var(--name-opacity))`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$rgba: styles.toCustomVarRgb(var(--sys-color)); 
// rgba(var(--sys-color), var(--sys-color-opacity))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};