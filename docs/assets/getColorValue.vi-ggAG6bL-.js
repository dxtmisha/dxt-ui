import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/| functions/getColorValue - Giá trị màu`}),`
`,(0,c.jsx)(n.h1,{id:`getcolorvalue`,children:(0,c.jsx)(n.code,{children:`getColorValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm truy xuất giá trị CSS `,(0,c.jsx)(n.code,{children:`rgba()`}),` được định dạng dựa trên một tên thuộc tính nhất định, tùy chọn sử dụng màu dự phòng mặc định.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — tên biến CSS (ví dụ: `,(0,c.jsx)(n.code,{children:`--sys-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: Color | String`}),` [null] — giá trị màu dự phòng tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — một chuỗi CSS `,(0,c.jsx)(n.code,{children:`rgba()`}),` được định dạng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValue('--sys-primary'); 
// rgba(var(--sys-primary), var(--sys-primary-opacity, var(--sys-primary-opacity-custom, 1)))

$with-fallback: styles.getColorValue('--non-existent', #ff0000);
// rgba(var(--non-existent, 255, 0, 0), var(--non-existent-opacity, var(--non-existent-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};