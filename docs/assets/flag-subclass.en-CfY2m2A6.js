import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/flags/Subclass (subclass)`}),`
`,(0,c.jsx)(n.h1,{id:`subclass-subclass`,children:`Subclass (subclass)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`_subclass: true`}),` flag allows for explicit tagging of a node as a subclass (BEM-element). This is necessary if the node name is not automatically recognized by the parser. Properties will be automatically wrapped in a subclass selector (`,(0,c.jsx)(n.code,{children:`&__name { ... }`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "my-custom-element": {
      "_subclass": true,
      "display": "block"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Output Result (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  &__my-custom-element {
    display: block;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};