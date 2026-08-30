import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/color/| functions/getColorValue - Formatted color value`}),`
`,(0,c.jsx)(t.h1,{id:`getcolorvalue`,children:(0,c.jsx)(t.code,{children:`getColorValue`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function retrieves a formatted CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),` value based on a given property name, optionally using a default fallback color.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$name: String`}),` — the name of the CSS variable (e.g., `,(0,c.jsx)(t.code,{children:`--sys-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$defaultValue: Color | String`}),` [null] — an optional fallback color value.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — a formatted CSS `,(0,c.jsx)(t.code,{children:`rgba()`}),` string.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$color: styles.getColorValue('--sys-primary'); 
// rgba(var(--sys-primary), var(--sys-primary-opacity, var(--sys-primary-opacity-custom, 1)))

$with-fallback: styles.getColorValue('--non-existent', #ff0000);
// rgba(var(--non-existent, 255, 0, 0), var(--non-existent-opacity, var(--non-existent-opacity-custom, 1)))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};