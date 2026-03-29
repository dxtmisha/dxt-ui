import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/StylesToAbstract - Base Class for Style Conversion`}),`
`,(0,c.jsx)(n.h1,{id:`stylestoabstract-class`,children:`StylesToAbstract Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`StylesToAbstract`}),` class serves as the foundation for all style conversion mechanisms. It provides a standardized interface and a set of helper methods for translating design properties into CSS-compatible structures.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardized Processing Pipeline`}),` — Ensures all sub-classes follow the same `,(0,c.jsx)(n.code,{children:`make`}),` → `,(0,c.jsx)(n.code,{children:`treatment`}),` → `,(0,c.jsx)(n.code,{children:`addSpace`}),` workflow.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Context Management`}),` — Automatically manages the current design property, indentation levels, and tree position.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Content Delegation`}),` — Supports recursive property processing via callables.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path and Name Resolution`}),` — Built-in helpers to extract and normalize property names and CSS values.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As an abstract class, `,(0,c.jsx)(n.code,{children:`StylesToAbstract`}),` cannot be instantiated directly. It serves as a base for specific style converters.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — the indentation string (e.g., `,(0,c.jsx)(n.code,{children:`"  "`}),` or `,(0,c.jsx)(n.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — a callable function used to process sub-properties (optional).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — indicates if this is the first element in the current list/tree level (optional, default: `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToAbstract } from '@dxtmisha/scripts'

// Example: Creating a concrete implementation
class StylesToCustom extends StylesToAbstract {
  protected treatment(): string[] {
    // Defines the specific conversion logic
    return [
      \`\${this.getName()} {\`,
      \`  content: \${this.getValue()};\`,
      '}'
    ]
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — The main entry point. Orchestrates the transformation and adds the required indentation to each line.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`abstract`,children:`Abstract`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`treatment(): string[]`}),` — Defines the specific conversion logic for translating property data into a style structure. Subclasses must implement this method.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};