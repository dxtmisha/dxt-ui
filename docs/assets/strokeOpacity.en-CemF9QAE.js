import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/color/strokeOpacity - Set stroke opacity`}),`
`,(0,c.jsx)(n.h1,{id:`strokeopacity`,children:(0,c.jsx)(n.code,{children:`strokeOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`The mixin sets the `,(0,c.jsx)(n.code,{children:`--sys-stroke-opacity`}),` variable, allowing for independent control of SVG stroke transparency.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number | String`}),` — transparency value [0..1] or CSS variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — if `,(0,c.jsx)(n.code,{children:`true`}),`, adds `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: Boolean`}),` [false] — if `,(0,c.jsx)(n.code,{children:`true`}),`, immediately applies the `,(0,c.jsx)(n.code,{children:`stroke`}),` property.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.icon-outline-faded {
  @include styles.strokeOpacity(0.5);
}

.icon-outline-faded-important {
  @include styles.strokeOpacity(var(--my-opacity), true, true);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};