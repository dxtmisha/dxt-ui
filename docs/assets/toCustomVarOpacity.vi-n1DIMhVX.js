import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/| functions/toCustomVarOpacity - Định dạng độ mờ`}),`
`,(0,c.jsx)(n.h1,{id:`tocustomvaropacity`,children:(0,c.jsx)(n.code,{children:`toCustomVarOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm sửa đổi một chuỗi tham chiếu biến CSS (ví dụ: `,(0,c.jsx)(n.code,{children:`var(--name)`}),`) để trỏ đến biến độ mờ tương ứng của nó (`,(0,c.jsx)(n.code,{children:`var(--name-opacity)`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: String`}),` — chuỗi biến CSS cần sửa đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: Number | null`}),` [null] — giá trị độ mờ fallback tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — chuỗi biến đã được sửa đổi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$opacity: styles.toCustomVarOpacity(var(--sys-color)); 
// var(--sys-color-opacity)

$with-fallback: styles.toCustomVarOpacity(var(--sys-color), 0.5); 
// var(--sys-color-opacity, 0.5)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};