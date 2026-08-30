import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/| functions/toGradient - Chuyển sang gradient`}),`
`,(0,c.jsx)(t.h1,{id:`togradient`,children:(0,c.jsx)(t.code,{children:`toGradient`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm bọc một giá trị màu trong hàm `,(0,c.jsx)(t.code,{children:`linear-gradient`}),` để tương thích với thuộc tính `,(0,c.jsx)(t.code,{children:`background-image`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — giá trị màu cần bọc.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — một chuỗi `,(0,c.jsx)(t.code,{children:`linear-gradient(0deg, #color, #color)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$gradient: styles.toGradient(#ff0000); 
// linear-gradient(0deg, #ff0000, #ff0000)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};