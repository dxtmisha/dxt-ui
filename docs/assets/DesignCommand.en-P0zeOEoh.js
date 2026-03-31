import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignCommand - Base Design Command Class`}),`
`,(0,c.jsx)(n.h1,{id:`designcommand-class`,children:`DesignCommand Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` class is a base abstract class designed to standardize the generation of files and components within the design system. It provides a common framework for reading templates, performing replacements, and writing resulting code to the project structure.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardized Execution`}),` — Provides a consistent `,(0,c.jsx)(n.code,{children:`make()`}),` entry point for all design-related generation tasks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template Management`}),` — Includes built-in methods for reading samples and applying transformations using specialized replace objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Naming Conventions`}),` — Automatically handles various naming formats (CamelCase, kebab-case, etc.) for both components and projects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structural Integrity`}),` — Utilizes `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` to ensure generated files follow the established design system hierarchy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Package Integration`}),` — Provides utilities for updating `,(0,c.jsx)(n.code,{children:`package.json`}),` with new configuration data.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As an abstract class, `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` is not initialized directly but inherited by specific command implementations.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters (for inheritors):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — The identifier for the component or action.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — Additional configuration parameters.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Example of an inheritor's constructor
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Triggers the command execution and main initialization logic.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`protected-api-for-inheritors`,children:`Protected API (for inheritors)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFile(name): boolean`}),` — Checks if a file exists in the target directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(name): string`}),` — Reads the content of a file from the target directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readSample(name): string`}),` — Reads a template file from the samples directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readDefinable(name, callback?): DesignReplace`}),` — Reads a file if it exists, otherwise falls back to its template.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write(name, value): void`}),` — Writes or overwrites a file with the provided content.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updatePackage(path, value): this`}),` — Updates a specific key in the project's `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`command-execution-workflow`,children:`Command Execution Workflow`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`make()`}),` method follows a strict execution pattern:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Validation`}),`: Verifies if a command identifier is provided.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Initialization`}),`: Calls the abstract `,(0,c.jsx)(n.code,{children:`initMain()`}),` method (implemented by children) to perform specific file operations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logging`}),`: Provides console feedback on the start and end of the command.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`name-resolution`,children:`Name Resolution`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignCommand`}),` provides several helpers for consistent naming:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName()`}),`: Returns the command name in CamelCase.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode()`}),`: Returns the command name in kebab-case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFullName()`}),`: Combines the design prefix with the command name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName()`}),`: Returns the standardized project identifier.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};