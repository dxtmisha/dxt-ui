import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/colorSys - Màu hệ thống`}),`
`,(0,c.jsx)(t.h1,{id:`colorsys`,children:(0,c.jsx)(t.code,{children:`colorSys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mixin thiết lập một biến màu hệ thống (ví dụ: `,(0,c.jsx)(t.code,{children:`--sys-color`}),`, `,(0,c.jsx)(t.code,{children:`--sys-background`}),`) bằng cách chuyển đổi giá trị bằng `,(0,c.jsx)(t.code,{children:`toCustomVarRgb`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$prop: String`}),` — tên thuộc tính (ví dụ: 'color', 'background').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — giá trị màu cần thiết lập.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(t.code,{children:`true`}),`, thêm `,(0,c.jsx)(t.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.sys-update {
  @include styles.colorSys('color', #ff0000);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};