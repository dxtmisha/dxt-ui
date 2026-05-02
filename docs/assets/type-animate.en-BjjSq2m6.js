import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/Animation (animate)`}),`
`,(0,c.jsx)(n.h1,{id:`animation-animate`,children:`Animation (animate)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`animate`}),` structural type is utilized to generate native CSS `,(0,c.jsx)(n.code,{children:`@keyframes`}),` rules. Each nested object property is interpreted as an individual animation frame (frame), where the keys serve as either percentages (`,(0,c.jsx)(n.code,{children:`0%`}),`, `,(0,c.jsx)(n.code,{children:`50%`}),`, `,(0,c.jsx)(n.code,{children:`100%`}),`) or keywords (`,(0,c.jsx)(n.code,{children:`from`}),`, `,(0,c.jsx)(n.code,{children:`to`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`The animation identifier is generated automatically based on its nesting position (utilizing parent prefixes), ensuring local name uniqueness across the `,(0,c.jsx)(n.code,{children:`dxt-ui`}),` design landscape.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "fade": {
      "_type": "animate",
      "from": { "opacity": "0" },
      "to": { "opacity": "1" }
    },
    
    "~loading": {
      "animation-name": "button-fade",
      "animation-duration": "0.3s"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@keyframes button-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.button {
  &--loading {
    animation-name: button-fade;
    animation-duration: 0.3s;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};