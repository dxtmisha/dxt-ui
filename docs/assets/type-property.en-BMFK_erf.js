import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/Properties (property)`}),`
`,(0,c.jsx)(n.h1,{id:`property-property`,children:`Property (property)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`property`}),` structural type serves as the foundational base for the generator. It instructs the compiler to assemble the target node into a standard native CSS property with its corresponding literal value.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Implicit Auto-detection:`}),` If no explicit `,(0,c.jsx)(n.code,{children:`_type`}),` is declared and the parser matching engine detects no symbolic aliases in the node key, the system `,(0,c.jsx)(n.strong,{children:`automatically and natively defaults`}),` to the `,(0,c.jsx)(n.code,{children:`property`}),` type.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`standard-assignment-implicit`,children:`Standard Assignment (Implicit)`}),`
`,(0,c.jsxs)(n.p,{children:[`In the vast majority of configurations, explicitly declaring the `,(0,c.jsx)(n.code,{children:`property`}),` type is redundant. Passing a primitive key-value pair (string or number) inherently forces the engine to compile a standard CSS property.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px 16px",
    "border-radius": "8px"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px 16px;
  border-radius: 8px;
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`expanded-assignment-explicit-property-type`,children:[`Expanded Assignment (Explicit `,(0,c.jsx)(n.code,{children:`property`}),` type)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Declaring the type explicitly becomes mandatory when the value demands a complex object architecture utilizing compiler configuration logic (such as passing the `,(0,c.jsx)(n.code,{children:`_var: true`}),` modifier to initialize a variable alongside it, or utilizing internal `,(0,c.jsx)(n.code,{children:`_rename`}),` logic), all while maintaining the core structural behavior of a native CSS property.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "custom-offset": {
      "_type": "property",
      "value": "24px",
      "_rename": "margin-bottom"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  margin-bottom: 24px;
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`property`}),` type fundamentally drives all localized stylesheet generations inside `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`, laying the pure CSS architectural groundwork preceding any BEM logic, media query compilation, or dynamic variable evaluations.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};