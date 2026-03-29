import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/colorOpacity - Độ mờ văn bản`}),`
`,(0,c.jsx)(n.h1,{id:`coloropacity`,children:(0,c.jsx)(n.code,{children:`colorOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mixin này thiết lập biến `,(0,c.jsx)(n.code,{children:`--sys-color-opacity`}),`, cho phép kiểm soát tính trong suốt của văn bản một cách độc lập.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number | String`}),` — giá trị trong suốt [0..1] hoặc biến CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, thêm `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: Boolean`}),` [false] — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, sẽ áp dụng ngay thuộc tính `,(0,c.jsx)(n.code,{children:`color`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.text-faded {
  @include styles.colorOpacity(0.5);
}

.text-faded-important {
  @include styles.colorOpacity(var(--my-opacity), true, true);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};