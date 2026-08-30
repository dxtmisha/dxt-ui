import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/colorInit - Áp dụng màu`}),`
`,(0,c.jsx)(t.h1,{id:`colorinit`,children:(0,c.jsx)(t.code,{children:`colorInit`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mixin áp dụng màu hệ thống hiện tại đã được tính toán cho thuộc tính `,(0,c.jsx)(t.code,{children:`color`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(t.code,{children:`true`}),`, thêm `,(0,c.jsx)(t.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.text-update {
  @include styles.colorInit;
}

.text-force {
  @include styles.colorInit(true);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};