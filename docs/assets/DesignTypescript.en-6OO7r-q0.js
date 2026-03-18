import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignTypescript - Type Metadata Analyzer"}),`
`,e.jsx(i.h1,{id:"designtypescript-class",children:"DesignTypescript Class"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"DesignTypescript"})," class provides a high-level wrapper around the TypeScript Compiler API, allowing programmatic analysis of source code metadata. It specializes in extracting structured information from interfaces and type aliases, making it an essential tool for generating documentation, validation schemas, or optimized type definitions for AI assistants."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Compiler API Integration"})," — Seamlessly interacts with TypeScript's internal program and type checker."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Deep Type Extraction"})," — Resolves complex property types, literal unions, and optionality."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Documentation Retrieval"})," — Automatically extracts JSDoc comments to preserve developer-written context."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"AST-Aware Parsing"})," — Navigates the Abstract Syntax Tree (AST) to reliably identify interfaces and type declarations."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Literal Value Discovery"})," — Intelligently broadens literal unions into usable string/number options."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(i.p,{children:"Initialize the analyzer by providing the path to a TypeScript source file. You can also specify custom compiler options to match your project's environment."}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"path: string"})," — The absolute or relative path to the ",e.jsx(i.code,{children:".ts"})," file (default is ",e.jsx(i.code,{children:"''"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"options: ts.CompilerOptions"})," — Optional TypeScript compiler configuration (default is ",e.jsx(i.code,{children:"{}"}),")."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { DesignTypescript } from '@dxtmisha/scripts'

const analyzer = new DesignTypescript('src/types/component.ts')
const types = analyzer.getTypes()
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"data-acquisition",children:"Data Acquisition"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getTypes(): DesignTypescriptList"})," — Scans the source file and returns an array of all detected type and interface metadata."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getType(name: string): DesignTypescriptItem | undefined"})," — Retrieves metadata for a specific type or interface by its name."]}),`
`]}),`
`,e.jsx(i.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(i.h3,{id:"the-metadata-analysis-workflow",children:"The Metadata Analysis Workflow"}),`
`,e.jsxs(i.p,{children:["When analyzing a file, ",e.jsx(i.code,{children:"DesignTypescript"})," performs the following steps:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Program Creation"}),": It initializes a TypeScript Program and Type Checker for the specified file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Node Traversal"}),": It visits every node in the AST, specifically seeking ",e.jsx(i.code,{children:"TypeAliasDeclaration"})," and ",e.jsx(i.code,{children:"InterfaceDeclaration"})," nodes."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Property Resolution"}),": For each identified type, it queries the Type Checker to retrieve its properties (even those inherited)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Information Synthesis"}),": For every property, it builds a metadata object containing:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Name"}),": The property identifier."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type"}),": A clean string representation of the type (e.g., ",e.jsx(i.code,{children:"'string | number'"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Options"}),": If the property is a literal union, it extracts the actual values."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Description"}),": The associated JSDoc comment."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h3,{id:"role-in-the-toolchain",children:"Role in the Toolchain"}),`
`,e.jsxs(i.p,{children:["This class is frequently used by other generators (like ",e.jsx(i.code,{children:"DesignTypes"})," or ",e.jsx(i.code,{children:"DesignCommand"}),') to bridge the gap between static code and dynamic logic. By providing a clean API to the complex TypeScript Compiler, it allows the design system to remain "type-aware" across all its automated processes.']})]})}function h(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
