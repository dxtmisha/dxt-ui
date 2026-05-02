import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/gradient - Dải màu nền`}),`
`,(0,c.jsx)(n.h1,{id:`gradient`,children:(0,c.jsx)(n.code,{children:`gradient`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mixin thiết lập thuộc tính `,(0,c.jsx)(n.code,{children:`background-image`}),` bằng cách sử dụng các biến của hệ thống thiết kế được định dạng dưới dạng một dải màu tuyến tính (linear gradient) rắn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — giá trị màu, `,(0,c.jsx)(n.code,{children:`'as-color'`}),`, hoặc `,(0,c.jsx)(n.code,{children:`'init'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number | null`}),` [null] — mức độ mờ tùy chọn [0..1].`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, thêm `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.bg-gradient-primary {
  @include styles.gradient(styles.getColor('primary'), 0.9);
}

.bg-gradient-reset {
  @include styles.gradient('init');
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};