import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/| functions/getColorValueSys - Màu hệ thống`}),`
`,(0,c.jsx)(n.h1,{id:`getcolorvaluesys`,children:(0,c.jsx)(n.code,{children:`getColorValueSys`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm truy xuất giá trị CSS `,(0,c.jsx)(n.code,{children:`rgba()`}),` được định dạng cụ thể cho các thuộc tính màu sắc, nền, nét vẽ (stroke) hoặc tô màu (fill) hiện tại của hệ thống thiết kế.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$prop: String`}),` — tên thuộc tính hệ thống (ví dụ: 'color', 'background', 'border').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: Color | String`}),` [null] — giá trị màu dự phòng tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — một chuỗi CSS `,(0,c.jsx)(n.code,{children:`rgba()`}),` được định dạng tham chiếu đến `,(0,c.jsx)(n.code,{children:`--sys-[prop]`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValueSys('color'); 
// rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)))

$border: styles.getColorValueSys('border', #cccccc);
// rgba(var(--sys-border, 204, 204, 204), var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};