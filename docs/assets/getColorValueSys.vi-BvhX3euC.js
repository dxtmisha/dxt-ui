import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/| functions/getColorValueSys - Màu hệ thống`}),`
`,(0,c.jsx)(t.h1,{id:`getcolorvaluesys`,children:(0,c.jsx)(t.code,{children:`getColorValueSys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm truy xuất giá trị CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),` được định dạng cụ thể cho các thuộc tính màu sắc, nền, nét vẽ (stroke) hoặc tô màu (fill) hiện tại của hệ thống thiết kế.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$prop: String`}),` — tên thuộc tính hệ thống (ví dụ: 'color', 'background', 'border').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$defaultValue: Color | String`}),` [null] — giá trị màu dự phòng tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — một chuỗi CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),` được định dạng tham chiếu đến `,(0,c.jsx)(t.code,{children:`--sys-[prop]`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValueSys('color'); 
// rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)))

$border: styles.getColorValueSys('border', #cccccc);
// rgba(var(--sys-border, 204, 204, 204), var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};