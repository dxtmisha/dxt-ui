import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/Subclass (subclass)`}),`
`,(0,c.jsx)(n.h1,{id:`subclass-subclass`,children:`Subclass (subclass)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`subclass`}),` type is designated for conceptualizing nested structural blocks conforming to the BEM (Block-Element-Modifier) architectural methodology. Assigning this type forces the compiler to generate a deeply nested descendant CSS class firmly rooted to the parent identifier (e.g., `,(0,c.jsx)(n.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`The optimal standard practice for initiating a subclass branch utilizes the `,(0,c.jsx)(n.code,{children:`#`}),` prefix. For rigid and explicit structural assignments, the `,(0,c.jsx)(n.code,{children:`subclass`}),` type may be statically assigned utilizing the internal `,(0,c.jsx)(n.code,{children:`_type`}),` property. Both methodologies emit parallel internal structures.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  padding: 16px;

  &__icon {
    width: 24px;
  }

  &__content {
    display: flex;
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Utilizing `,(0,c.jsx)(n.code,{children:`subclass`}),` explicitly governs CSS scope isolation, fundamentally averting global namespace collisions and tying dependent components intimately to the primary architectural parent.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};