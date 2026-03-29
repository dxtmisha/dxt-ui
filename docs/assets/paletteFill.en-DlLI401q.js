import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/styles/color/paletteFill - Palette SVG fill`}),`
`,(0,c.jsx)(n.h1,{id:`palettefill`,children:(0,c.jsx)(n.code,{children:`paletteFill`})}),`
`,(0,c.jsxs)(n.p,{children:[`The mixin sets the SVG `,(0,c.jsx)(n.code,{children:`fill`}),` color by generating a search chain across the specified palette variables.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List | String`}),` — list of palette variable names to search.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — fallback color if no palette variables are defined.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number | null`}),` [null] — optional opacity level [0..1].`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: Boolean`}),` [false] — if `,(0,c.jsx)(n.code,{children:`true`}),`, adds `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.icon-fill-themed {
  @include styles.paletteFill(('theme-primary', 'sys-primary'), #0000ff);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};