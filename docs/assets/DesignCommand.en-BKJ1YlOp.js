import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignCommand - Base Design Command Class"}),`
`,e.jsx(n.h1,{id:"designcommand-class",children:"DesignCommand Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignCommand"})," class is a base abstract class designed to standardize the generation of files and components within the design system. It provides a common framework for reading templates, performing replacements, and writing resulting code to the project structure."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standardized Execution"})," — Provides a consistent ",e.jsx(n.code,{children:"make()"})," entry point for all design-related generation tasks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template Management"})," — Includes built-in methods for reading samples and applying transformations using specialized replace objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming Conventions"})," — Automatically handles various naming formats (CamelCase, kebab-case, etc.) for both components and projects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Structural Integrity"})," — Utilizes ",e.jsx(n.code,{children:"DesignStructure"})," to ensure generated files follow the established design system hierarchy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Package Integration"})," — Provides utilities for updating ",e.jsx(n.code,{children:"package.json"})," with new configuration data."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["As an abstract class, ",e.jsx(n.code,{children:"DesignCommand"})," is not initialized directly but inherited by specific command implementations."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters (for inheritors):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"command: string"})," — The identifier for the component or action."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: Record<string, string>"})," — Additional configuration parameters."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Example of an inheritor's constructor
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Triggers the command execution and main initialization logic."]}),`
`]}),`
`,e.jsx(n.h3,{id:"protected-api-for-inheritors",children:"Protected API (for inheritors)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isFile(name): boolean"})," — Checks if a file exists in the target directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"read(name): string"})," — Reads the content of a file from the target directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"readSample(name): string"})," — Reads a template file from the samples directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"readDefinable(name, callback?): DesignReplace"})," — Reads a file if it exists, otherwise falls back to its template."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"write(name, value): void"})," — Writes or overwrites a file with the provided content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"updatePackage(path, value): this"})," — Updates a specific key in the project's ",e.jsx(n.code,{children:"package.json"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"command-execution-workflow",children:"Command Execution Workflow"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"make()"})," method follows a strict execution pattern:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"}),": Verifies if a command identifier is provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initialization"}),": Calls the abstract ",e.jsx(n.code,{children:"initMain()"})," method (implemented by children) to perform specific file operations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logging"}),": Provides console feedback on the start and end of the command."]}),`
`]}),`
`,e.jsx(n.h3,{id:"name-resolution",children:"Name Resolution"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DesignCommand"})," provides several helpers for consistent naming:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getName()"}),": Returns the command name in CamelCase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCode()"}),": Returns the command name in kebab-case."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFullName()"}),": Combines the design prefix with the command name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getProjectName()"}),": Returns the standardized project identifier."]}),`
`]})]})}function m(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
