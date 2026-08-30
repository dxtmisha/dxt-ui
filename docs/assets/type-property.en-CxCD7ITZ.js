import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/constructor/properties/types/Properties (property)`}),`
`,(0,c.jsx)(t.h1,{id:`property-property`,children:`Property (property)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`property`}),` structural type serves as the foundational base for the generator. It instructs the compiler to assemble the target node into a standard native CSS property with its corresponding literal value.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Implicit Auto-detection:`}),` If no explicit `,(0,c.jsx)(t.code,{children:`_type`}),` is declared and the parser matching engine detects no symbolic aliases in the node key, the system `,(0,c.jsx)(t.strong,{children:`automatically and natively defaults`}),` to the `,(0,c.jsx)(t.code,{children:`property`}),` type.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`standard-assignment-implicit`,children:`Standard Assignment (Implicit)`}),`
`,(0,c.jsxs)(t.p,{children:[`In the vast majority of configurations, explicitly declaring the `,(0,c.jsx)(t.code,{children:`property`}),` type is redundant. Passing a primitive key-value pair (string or number) inherently forces the engine to compile a standard CSS property.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px 16px",
    "border-radius": "8px"
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px 16px;
  border-radius: 8px;
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`expanded-assignment-explicit-property-type`,children:[`Expanded Assignment (Explicit `,(0,c.jsx)(t.code,{children:`property`}),` type)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Declaring the type explicitly becomes mandatory when the value demands a complex object architecture utilizing compiler configuration logic (such as passing the `,(0,c.jsx)(t.code,{children:`_var: true`}),` modifier to initialize a variable alongside it, or utilizing internal `,(0,c.jsx)(t.code,{children:`_rename`}),` logic), all while maintaining the core structural behavior of a native CSS property.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "custom-offset": {
      "_type": "property",
      "value": "24px",
      "_rename": "margin-bottom"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  margin-bottom: 24px;
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`property`}),` type fundamentally drives all localized stylesheet generations inside `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, laying the pure CSS architectural groundwork preceding any BEM logic, media query compilation, or dynamic variable evaluations.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};