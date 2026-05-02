import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/Pseudo-classes and pseudo-elements (selector, virtual)`}),`
`,(0,c.jsx)(n.h1,{id:`pseudo-classes-and-pseudo-elements-selector-virtual`,children:`Pseudo-classes and pseudo-elements (selector, virtual)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`selector`}),` and `,(0,c.jsx)(n.code,{children:`virtual`}),` structural types are designed to style native browser interaction states and generated elements (specifically, pseudo-classes like `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:focus`}),` and pseudo-elements like `,(0,c.jsx)(n.code,{children:`::before`}),`, `,(0,c.jsx)(n.code,{children:`::after`}),`). The compiler inherently binds these structures to the parent block utilizing fundamental SCSS conventions (`,(0,c.jsx)(n.code,{children:`&:`}),` and `,(0,c.jsx)(n.code,{children:`&::`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`These types can be initialized using the explicit shortcuts `,(0,c.jsx)(n.code,{children:`:`}),` (for selectors) and `,(0,c.jsx)(n.code,{children:`::`}),` (for virtual elements). Furthermore, the majority of standard browser keys (such as `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`active`}),`, `,(0,c.jsx)(n.code,{children:`before`}),`) are natively recognized and automatically parsed by the compiler without requiring strict prefixes.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`For pseudo-elements (`,(0,c.jsx)(n.code,{children:`virtual`}),`), the compiler automatically injects the foundational `,(0,c.jsx)(n.code,{children:`content: ""`}),` property into the output, making manual declaration entirely redundant.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px",
    
    ":hover": {                  // Explicit pseudo-class (selector, : prefix)
      "opacity": "0.8"
    },
    
    "::after": {                 // Explicit pseudo-element (virtual, :: prefix)
      "position": "absolute",
      "inset": "0"
    },
    
    "active": {                  // Implicit declaration (auto-detected)
      "transform": "scale(0.95)"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &:hover { opacity: 0.8; }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  
  &:active { transform: scale(0.95); }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};