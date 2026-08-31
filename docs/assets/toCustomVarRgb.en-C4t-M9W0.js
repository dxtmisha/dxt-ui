import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/color/| functions/toCustomVarRgb - Format variable RGB`}),`
`,(0,c.jsx)(t.h1,{id:`tocustomvarrgb`,children:(0,c.jsx)(t.code,{children:`toCustomVarRgb`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function converts a custom CSS variable (e.g., `,(0,c.jsx)(t.code,{children:`var(--my-color)`}),`) into an `,(0,c.jsx)(t.code,{children:`rgba()`}),` function call that includes its corresponding opacity variable.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: String`}),` — the CSS variable string to convert.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String`}),` — an `,(0,c.jsx)(t.code,{children:`rgba(var(--name), var(--name-opacity))`}),` function call.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$rgba: styles.toCustomVarRgb(var(--sys-color)); 
// rgba(var(--sys-color), var(--sys-color-opacity))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};