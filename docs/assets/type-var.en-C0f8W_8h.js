import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/Variables (var)`}),`
`,(0,c.jsx)(n.h1,{id:`variables-var`,children:`Variables (var)`}),`
`,(0,c.jsxs)(n.p,{children:[`The property generation engine provides two distinct methodologies for managing CSS Custom Properties (variables): explicit variable declaration utilizing the structural `,(0,c.jsx)(n.code,{children:`var`}),` type, and combinatorial generation encompassing both properties and variables via the `,(0,c.jsx)(n.code,{children:`_var: true`}),` boolean flag.`]}),`
`,(0,c.jsxs)(n.h2,{id:`declarative-assignment-type-var`,children:[`Declarative Assignment (Type `,(0,c.jsx)(n.code,{children:`var`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Assigning the `,(0,c.jsx)(n.code,{children:`var`}),` type (or utilizing its symbolic alias `,(0,c.jsx)(n.code,{children:`$`}),`) instructs the compiler to bypass standard CSS property generation. The target node is compiled strictly as a native CSS variable injected securely into the local compilation scope of the component.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Type Inheritance:`}),` The `,(0,c.jsx)(n.code,{children:`var`}),` type propagates structurally. If a parent node is declared as `,(0,c.jsx)(n.code,{children:`var`}),` (or prefixed with `,(0,c.jsx)(n.code,{children:`$`}),`), all structurally nested child nodes will inherently adopt the exact same type. There is no need to iteratively declare `,(0,c.jsx)(n.code,{children:`var`}),` on succeeding descendants.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "card": {
    "padding": {
      "_type": "var",
      "value": "16px"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`(Deploying the symbol alias `,(0,c.jsx)(n.code,{children:`$padding: "16px"`}),` yields an identical output structural tree).`]})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  --card-padding: 16px;
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`combinatorial-generation-flag-_var`,children:[`Combinatorial Generation (Flag `,(0,c.jsx)(n.code,{children:`_var`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Component architectures frequently require rendering a conventional physical CSS attribute while abstracting its core value strictly behind a dynamic CSS variable (vital for theming integrations or dynamic Vue runtime bindings).`}),`
`,(0,c.jsxs)(n.p,{children:[`This is achieved securely using the configuration flag `,(0,c.jsx)(n.code,{children:`_var: true`}),`. This modifier retains the target node's designated structure type (inherently `,(0,c.jsx)(n.code,{children:`property`}),` unless overridden), coercing the compiler to execute a dual-stage emission:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Formulating and compiling a robust CSS variable initialized with the active literal value.`}),`
`,(0,c.jsxs)(n.li,{children:[`Formulating the target physical CSS property, structurally pointing its value to the evaluated `,(0,c.jsx)(n.code,{children:`var()`}),` function output.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "background": {
      "_var": true,
      "value": "blue"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  --button-background: blue;
  background: var(--button-background);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Effectively, deploying the `,(0,c.jsx)(n.code,{children:`_var: true`}),` modifier permanently mitigates manual assignment repetition, automating the structural linkage between dynamic CSS variables and literal CSS properties inside configuration trees.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};