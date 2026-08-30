import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/| functions/toCustomVarOpacity - Định dạng độ mờ`}),`
`,(0,c.jsx)(t.h1,{id:`tocustomvaropacity`,children:(0,c.jsx)(t.code,{children:`toCustomVarOpacity`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm sửa đổi một chuỗi tham chiếu biến CSS (ví dụ: `,(0,c.jsx)(t.code,{children:`var(--name)`}),`) để trỏ đến biến độ mờ tương ứng của nó (`,(0,c.jsx)(t.code,{children:`var(--name-opacity)`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: String`}),` — chuỗi biến CSS cần sửa đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$defaultValue: Number | null`}),` [null] — giá trị độ mờ fallback tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — chuỗi biến đã được sửa đổi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$opacity: styles.toCustomVarOpacity(var(--sys-color)); 
// var(--sys-color-opacity)

$with-fallback: styles.toCustomVarOpacity(var(--sys-color), 0.5); 
// var(--sys-color-opacity, 0.5)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};