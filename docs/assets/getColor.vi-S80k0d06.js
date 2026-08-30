import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/| functions/getColor - Lấy màu`}),`
`,(0,c.jsx)(t.h1,{id:`getcolor`,children:(0,c.jsx)(t.code,{children:`getColor`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm định dạng một giá trị màu sắc với tính trong suốt tùy chọn và trả về nó dưới dạng giá trị RGBA hoặc bọc trong một linear-gradient.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — màu cơ bản để định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$opacity: Number`}),` [1] — mức độ mờ tùy chọn [0..1].`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$gradient: Boolean`}),` [false] — nếu `,(0,c.jsx)(t.code,{children:`true`}),`, trả về giá trị dưới dạng linear-gradient.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String | Color`}),` — giá trị màu đã được định dạng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$solid: styles.getColor(#ff0000, 0.5); 
// rgba(255, 0, 0, 0.5)

$gradient: styles.getColor(#ff0000, 1, true); 
// linear-gradient(0deg, #ff0000, #ff0000)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};