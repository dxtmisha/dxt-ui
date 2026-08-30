import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/constructor/properties/types/Pseudo-classes and pseudo-elements (selector, virtual)`}),`
`,(0,c.jsx)(t.h1,{id:`pseudo-classes-and-pseudo-elements-selector-virtual`,children:`Pseudo-classes and pseudo-elements (selector, virtual)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`selector`}),` and `,(0,c.jsx)(t.code,{children:`virtual`}),` structural types are designed to style native browser interaction states and generated elements (specifically, pseudo-classes like `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`:focus`}),` and pseudo-elements like `,(0,c.jsx)(t.code,{children:`::before`}),`, `,(0,c.jsx)(t.code,{children:`::after`}),`). The compiler inherently binds these structures to the parent block utilizing fundamental SCSS conventions (`,(0,c.jsx)(t.code,{children:`&:`}),` and `,(0,c.jsx)(t.code,{children:`&::`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`These types can be initialized using the explicit shortcuts `,(0,c.jsx)(t.code,{children:`:`}),` (for selectors) and `,(0,c.jsx)(t.code,{children:`::`}),` (for virtual elements). Furthermore, the majority of standard browser keys (such as `,(0,c.jsx)(t.code,{children:`hover`}),`, `,(0,c.jsx)(t.code,{children:`active`}),`, `,(0,c.jsx)(t.code,{children:`before`}),`) are natively recognized and automatically parsed by the compiler without requiring strict prefixes.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`For pseudo-elements (`,(0,c.jsx)(t.code,{children:`virtual`}),`), the compiler automatically injects the foundational `,(0,c.jsx)(t.code,{children:`content: ""`}),` property into the output, making manual declaration entirely redundant.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &:hover { opacity: 0.8; }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  
  &:active { transform: scale(0.95); }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};