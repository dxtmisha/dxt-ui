import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/constructor/properties/types/Variables (var)`}),`
`,(0,c.jsx)(t.h1,{id:`variables-var`,children:`Variables (var)`}),`
`,(0,c.jsxs)(t.p,{children:[`The property generation engine provides two distinct methodologies for managing CSS Custom Properties (variables): explicit variable declaration utilizing the structural `,(0,c.jsx)(t.code,{children:`var`}),` type, and combinatorial generation encompassing both properties and variables via the `,(0,c.jsx)(t.code,{children:`_var: true`}),` boolean flag.`]}),`
`,(0,c.jsxs)(t.h2,{id:`declarative-assignment-type-var`,children:[`Declarative Assignment (Type `,(0,c.jsx)(t.code,{children:`var`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Assigning the `,(0,c.jsx)(t.code,{children:`var`}),` type (or utilizing its symbolic alias `,(0,c.jsx)(t.code,{children:`$`}),`) instructs the compiler to bypass standard CSS property generation. The target node is compiled strictly as a native CSS variable injected securely into the local compilation scope of the component.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Type Inheritance:`}),` The `,(0,c.jsx)(t.code,{children:`var`}),` type propagates structurally. If a parent node is declared as `,(0,c.jsx)(t.code,{children:`var`}),` (or prefixed with `,(0,c.jsx)(t.code,{children:`$`}),`), all structurally nested child nodes will inherently adopt the exact same type. There is no need to iteratively declare `,(0,c.jsx)(t.code,{children:`var`}),` on succeeding descendants.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "card": {
    "padding": {
      "_type": "var",
      "value": "16px"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`(Deploying the symbol alias `,(0,c.jsx)(t.code,{children:`$padding: "16px"`}),` yields an identical output structural tree).`]})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
  --card-padding: 16px;
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`combinatorial-generation-flag-_var`,children:[`Combinatorial Generation (Flag `,(0,c.jsx)(t.code,{children:`_var`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Component architectures frequently require rendering a conventional physical CSS attribute while abstracting its core value strictly behind a dynamic CSS variable (vital for theming integrations or dynamic Vue runtime bindings).`}),`
`,(0,c.jsxs)(t.p,{children:[`This is achieved securely using the configuration flag `,(0,c.jsx)(t.code,{children:`_var: true`}),`. This modifier retains the target node's designated structure type (inherently `,(0,c.jsx)(t.code,{children:`property`}),` unless overridden), coercing the compiler to execute a dual-stage emission:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Formulating and compiling a robust CSS variable initialized with the active literal value.`}),`
`,(0,c.jsxs)(t.li,{children:[`Formulating the target physical CSS property, structurally pointing its value to the evaluated `,(0,c.jsx)(t.code,{children:`var()`}),` function output.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "background": {
      "_var": true,
      "value": "blue"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  --button-background: blue;
  background: var(--button-background);
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Effectively, deploying the `,(0,c.jsx)(t.code,{children:`_var: true`}),` modifier permanently mitigates manual assignment repetition, automating the structural linkage between dynamic CSS variables and literal CSS properties inside configuration trees.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};