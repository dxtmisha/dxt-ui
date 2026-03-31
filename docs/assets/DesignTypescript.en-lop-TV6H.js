import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignTypescript - Type Metadata Analyzer`}),`
`,(0,c.jsx)(n.h1,{id:`designtypescript-class`,children:`DesignTypescript Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignTypescript`}),` class provides a high-level wrapper around the TypeScript Compiler API, allowing programmatic analysis of source code metadata. It specializes in extracting structured information from interfaces and type aliases, making it an essential tool for generating documentation, validation schemas, or optimized type definitions for AI assistants.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Compiler API Integration`}),` — Seamlessly interacts with TypeScript's internal program and type checker.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Deep Type Extraction`}),` — Resolves complex property types, literal unions, and optionality.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Documentation Retrieval`}),` — Automatically extracts JSDoc comments to preserve developer-written context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AST-Aware Parsing`}),` — Navigates the Abstract Syntax Tree (AST) to reliably identify interfaces and type declarations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Literal Value Discovery`}),` — Intelligently broadens literal unions into usable string/number options.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Initialize the analyzer by providing the path to a TypeScript source file. You can also specify custom compiler options to match your project's environment.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The absolute or relative path to the `,(0,c.jsx)(n.code,{children:`.ts`}),` file (default is `,(0,c.jsx)(n.code,{children:`''`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ts.CompilerOptions`}),` — Optional TypeScript compiler configuration (default is `,(0,c.jsx)(n.code,{children:`{}`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignTypescript } from '@dxtmisha/scripts'

const analyzer = new DesignTypescript('src/types/component.ts')
const types = analyzer.getTypes()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-acquisition`,children:`Data Acquisition`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypes(): DesignTypescriptList`}),` — Scans the source file and returns an array of all detected type and interface metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(name: string): DesignTypescriptItem | undefined`}),` — Retrieves metadata for a specific type or interface by its name.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-metadata-analysis-workflow`,children:`The Metadata Analysis Workflow`}),`
`,(0,c.jsxs)(n.p,{children:[`When analyzing a file, `,(0,c.jsx)(n.code,{children:`DesignTypescript`}),` performs the following steps:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Program Creation`}),`: It initializes a TypeScript Program and Type Checker for the specified file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Node Traversal`}),`: It visits every node in the AST, specifically seeking `,(0,c.jsx)(n.code,{children:`TypeAliasDeclaration`}),` and `,(0,c.jsx)(n.code,{children:`InterfaceDeclaration`}),` nodes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Resolution`}),`: For each identified type, it queries the Type Checker to retrieve its properties (even those inherited).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Information Synthesis`}),`: For every property, it builds a metadata object containing:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Name`}),`: The property identifier.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type`}),`: A clean string representation of the type (e.g., `,(0,c.jsx)(n.code,{children:`'string | number'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Options`}),`: If the property is a literal union, it extracts the actual values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Description`}),`: The associated JSDoc comment.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`role-in-the-toolchain`,children:`Role in the Toolchain`}),`
`,(0,c.jsxs)(n.p,{children:[`This class is frequently used by other generators (like `,(0,c.jsx)(n.code,{children:`DesignTypes`}),` or `,(0,c.jsx)(n.code,{children:`DesignCommand`}),`) to bridge the gap between static code and dynamic logic. By providing a clean API to the complex TypeScript Compiler, it allows the design system to remain "type-aware" across all its automated processes.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};