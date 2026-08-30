import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/color/| functions/isColorRbgOrVar - Validate color`}),`
`,(0,c.jsx)(t.h1,{id:`iscolorrbgorvar`,children:(0,c.jsx)(t.code,{children:`isColorRbgOrVar`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function checks if a value is a valid color or a special CSS keyword (like `,(0,c.jsx)(t.code,{children:`transparent`}),`, `,(0,c.jsx)(t.code,{children:`initial`}),`, `,(0,c.jsx)(t.code,{children:`inherit`}),`, etc.).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: Color | String`}),` — color value or CSS keyword for checking.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the value is a valid color or keyword.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$is-color: styles.isColorRbgOrVar(#ff0000); // true
$is-keyword: styles.isColorRbgOrVar('transparent'); // true
$is-invalid: styles.isColorRbgOrVar('none'); // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};