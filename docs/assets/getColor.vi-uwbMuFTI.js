import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/| functions/getColor - Lấy màu`}),`
`,(0,c.jsx)(n.h1,{id:`getcolor`,children:(0,c.jsx)(n.code,{children:`getColor`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm định dạng một giá trị màu sắc với tính trong suốt tùy chọn và trả về nó dưới dạng giá trị RGBA hoặc bọc trong một linear-gradient.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — màu cơ bản để định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` [1] — mức độ mờ tùy chọn [0..1].`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$gradient: Boolean`}),` [false] — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, trả về giá trị dưới dạng linear-gradient.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String | Color`}),` — giá trị màu đã được định dạng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$solid: styles.getColor(#ff0000, 0.5); 
// rgba(255, 0, 0, 0.5)

$gradient: styles.getColor(#ff0000, 1, true); 
// linear-gradient(0deg, #ff0000, #ff0000)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};