import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/color/outlineOpacity - Set outline opacity`}),`
`,(0,c.jsx)(t.h1,{id:`outlineopacity`,children:(0,c.jsx)(t.code,{children:`outlineOpacity`})}),`
`,(0,c.jsxs)(t.p,{children:[`The mixin sets the `,(0,c.jsx)(t.code,{children:`--sys-outline-opacity`}),` variable, allowing for independent control of outline transparency.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$opacity: Number | String`}),` — transparency value [0..1] or CSS variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$important: Boolean`}),` [false] — if `,(0,c.jsx)(t.code,{children:`true`}),`, adds `,(0,c.jsx)(t.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$init: Boolean`}),` [false] — if `,(0,c.jsx)(t.code,{children:`true`}),`, immediately applies the `,(0,c.jsx)(t.code,{children:`outline-color`}),` property.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.outline-faded {
  @include styles.outlineOpacity(0.5);
}

.outline-faded-important {
  @include styles.outlineOpacity(var(--my-opacity), true, true);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};