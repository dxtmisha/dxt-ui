import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/properties/flags/Variable (var)`}),`
`,(0,c.jsx)(t.h1,{id:`variable-var`,children:`Variable (var)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`_var: true`}),` flag forces the compiler to generate a separate CSS variable for the node, even if it is already a standard property. This is useful for dynamic overrides via JS or facilitating inheritance.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": {
      "value": "16px",
      "_var": true
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Output Result (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  --button-padding: 16px;
  padding: var(--button-padding);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};