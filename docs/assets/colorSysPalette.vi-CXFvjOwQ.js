import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/colorSysPalette - Hệ thống bảng màu`}),`
`,(0,c.jsx)(n.h1,{id:`colorsyspalette`,children:(0,c.jsx)(n.code,{children:`colorSysPalette`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mixin thiết lập một biến màu hệ thống (ví dụ: `,(0,c.jsx)(n.code,{children:`--sys-color`}),`) bằng cách tạo chuỗi tìm kiếm qua các biến bảng màu đã chỉ định.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$prop: String`}),` — tên thuộc tính (ví dụ: 'color', 'background').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List | String`}),` — danh sách tên biến bảng màu để tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — màu dự phòng nếu không có biến bảng màu nào được xác định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, thêm `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.sys-themed {
  @include styles.colorSysPalette('color', ('theme-primary', 'sys-primary'), #0000ff);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};