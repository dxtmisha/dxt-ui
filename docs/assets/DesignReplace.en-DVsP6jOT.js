import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignReplace - Template Transformation Engine`}),`
`,(0,c.jsx)(n.h1,{id:`designreplace-class`,children:`DesignReplace Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignReplace`}),` class is the core engine for transforming raw file templates into project-ready source code. It uses a specialized marking system to identify sections of text that should be dynamically replaced with component names, property definitions, types, or styling logic derived from the component's `,(0,c.jsx)(n.code,{children:`DesignStructure`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Label Resolution`}),` — Identifies and replaces text blocks bounded by specific comments (e.g., `,(0,c.jsx)(n.code,{children:`// :type`}),` or `,(0,c.jsx)(n.code,{children:`<!-- :props -->`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Context-Aware Naming`}),` — Automatically transforms generic placeholders like `,(0,c.jsx)(n.code,{children:`[project]`}),`, `,(0,c.jsx)(n.code,{children:`[design]`}),`, and `,(0,c.jsx)(n.code,{children:`[component]`}),` based on configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Injection`}),` — Generates complex TypeScript type unions and interfaces directly from property metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default Value Mapping`}),` — Resolves and injects default values for properties into object literals or constructor arguments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Conditional Class Generation`}),` — Produces optimized Vue/TS class binding objects and CSS selector mappings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Normalization`}),` — Automatically resolves relative import paths based on the target file's location in the project tree.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`To initialize a replacement engine, pass the component's data structure, the target mark identifier, and the template string.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`structure: DesignStructure`}),` — The source of truth for component metadata and structural rules.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mark: string`}),` — The primary label used in templates to identify components (e.g., `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sample: string`}),` — The text content of the template to be modified.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignReplace } from '@dxtmisha/scripts'

const engine = new DesignReplace(structure, 'button', templateContent)
engine.replaceName().replaceType()
const output = engine.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — Returns the final version of the template after all transformations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNameFile(name: string): string`}),` — Processes a filename or string to replace project-level placeholders.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceName(): this`}),` — Replaces the primary component name marks throughout the template.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacePath(): this`}),` — Fixes relative paths (`,(0,c.jsx)(n.code,{children:`../../../`}),`) to point to the correct project root location.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceMark(name: string, data: string[], end = ''): this`}),` — Performs block replacement for a specific label by injecting an array of strings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceOnce(name?: string, removeReplacement?: boolean | Function): this`}),` — Handles single-use replacement markers (`,(0,c.jsx)(n.code,{children:`.once`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`property--type-automation`,children:`Property & Type Automation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceType(constructor?: string): this`}),` — Generates and injects TypeScript types for all component properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceDefault(): this`}),` — Injects default values for properties into the template.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceProps(): this`}),` — Generates Vue-style property definition objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacePropsValues(): this`}),` — Creates arrays of allowed values for properties (enums/unions).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`styling--classes`,children:`Styling & Classes`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceClasses(template?: Function, end = ''): this`}),` — Generates a list of available CSS classes based on the structure.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceClassesValues(): this`}),` — Produces dynamic class binding logic for logic implementation files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceStylesValues(): this`}),` — Maps component properties to CSS custom variables (CSS Variables).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceConstructorClasses(): this`}),` — Specialized class generator for component constructors.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-marking-system`,children:`The Marking System`}),`
`,(0,c.jsx)(n.p,{children:`The engine scans for specific comment patterns to identify where to inject code. It supports multiple comment styles:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Inline Logic`}),`: `,(0,c.jsx)(n.code,{children:`// :label data`}),` or `,(0,c.jsx)(n.code,{children:`/* :label */ content /* :label.end */`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template Comments`}),`: `,(0,c.jsx)(n.code,{children:`<!-- :label --> content <!-- :label.end -->`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Specificity`}),`: `,(0,c.jsx)(n.code,{children:`:label.propertyName.none`}),` (used to exclude specific properties from a block).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`transformation-flow`,children:`Transformation Flow`}),`
`,(0,c.jsxs)(n.p,{children:[`When a replacement method like `,(0,c.jsx)(n.code,{children:`replaceType()`}),` is called, the class:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scans`}),`: Locates the start and end markers for the `,(0,c.jsx)(n.code,{children:`type`}),` label.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Consults Structure`}),`: Iterates over the properties in the provided `,(0,c.jsx)(n.code,{children:`DesignStructure`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Resolves Logic`}),`: Determines the correct TypeScript syntax for each property based on its value type (boolean, string, or union).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Injects`}),`: Replaces the content between the markers with the new generated code, maintaining original indentation.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};