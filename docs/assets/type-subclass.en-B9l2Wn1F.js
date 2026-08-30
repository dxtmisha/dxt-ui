import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/properties/types/Subclass (subclass)`}),`
`,(0,c.jsx)(t.h1,{id:`subclass-subclass`,children:`Subclass (subclass)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`subclass`}),` type is designated for conceptualizing nested structural blocks conforming to the BEM (Block-Element-Modifier) architectural methodology. Assigning this type forces the compiler to generate a deeply nested descendant CSS class firmly rooted to the parent identifier (e.g., `,(0,c.jsx)(t.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`The optimal standard practice for initiating a subclass branch utilizes the `,(0,c.jsx)(t.code,{children:`#`}),` prefix. For rigid and explicit structural assignments, the `,(0,c.jsx)(t.code,{children:`subclass`}),` type may be statically assigned utilizing the internal `,(0,c.jsx)(t.code,{children:`_type`}),` property. Both methodologies emit parallel internal structures.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "card": {
    "padding": "16px",
    
    "#icon": {                   // Utilizing the # alias prefix
      "width": "24px"
    },
    
    "content": {                 // Explicit structural type assignment
      "_type": "subclass",
      "display": "flex"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
  padding: 16px;

  &__icon {
    width: 24px;
  }

  &__content {
    display: flex;
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Utilizing `,(0,c.jsx)(t.code,{children:`subclass`}),` explicitly governs CSS scope isolation, fundamentally averting global namespace collisions and tying dependent components intimately to the primary architectural parent.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};