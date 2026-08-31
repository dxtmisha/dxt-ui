import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/outlineOpacity - Độ mờ đường viền`}),`
`,(0,c.jsx)(t.h1,{id:`outlineopacity`,children:(0,c.jsx)(t.code,{children:`outlineOpacity`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mixin này thiết lập biến `,(0,c.jsx)(t.code,{children:`--sys-outline-opacity`}),`, cho phép kiểm soát tính trong suốt của đường viền ngoài (outline) một cách độc lập.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$opacity: Number | String`}),` — giá trị trong suốt [0..1] hoặc biến CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$important: Boolean`}),` [false] — nếu `,(0,c.jsx)(t.code,{children:`true`}),`, thêm `,(0,c.jsx)(t.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$init: Boolean`}),` [false] — nếu `,(0,c.jsx)(t.code,{children:`true`}),`, sẽ áp dụng ngay thuộc tính `,(0,c.jsx)(t.code,{children:`outline-color`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.outline-faded {
  @include styles.outlineOpacity(0.5);
}

.outline-faded-important {
  @include styles.outlineOpacity(var(--my-opacity), true, true);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};