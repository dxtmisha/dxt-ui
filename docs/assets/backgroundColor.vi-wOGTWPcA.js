import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/backgroundColor - Màu nền`}),`
`,(0,c.jsx)(n.h1,{id:`backgroundcolor`,children:(0,c.jsx)(n.code,{children:`backgroundColor`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mixin thiết lập thuộc tính `,(0,c.jsx)(n.code,{children:`background-color`}),` bằng cách sử dụng các biến của hệ thống thiết kế, cho phép cập nhật động và kiểm soát độ mờ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — giá trị màu, `,(0,c.jsx)(n.code,{children:`'as-color'`}),`, hoặc `,(0,c.jsx)(n.code,{children:`'init'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number | null`}),` [null] — mức độ mờ tùy chọn [0..1].`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, thêm `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.bg-primary {
  @include styles.backgroundColor(styles.getColor('primary'), 0.5);
}

.bg-reset {
  @include styles.backgroundColor('init');
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};