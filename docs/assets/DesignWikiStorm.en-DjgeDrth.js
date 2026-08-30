import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignWikiStorm - IDE Metadata Generator`}),`
`,(0,c.jsx)(t.h1,{id:`designwikistorm-class`,children:`DesignWikiStorm Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignWikiStorm`}),` class is a specialized utility designed to bridge the gap between the design system's code and developer productivity tools. It automates the generation of `,(0,c.jsx)(t.code,{children:`web-types.json`}),`, a standardized metadata format used by JetBrains IDEs (WebStorm, IntelliJ IDEA) to provide advanced IntelliSense, auto-completion, and documentation tooltips for Vue components.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Web-Types Standard Compliance`}),` — Generates metadata strictly adhering to the official Web-Types JSON schema.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`IntelliSense Optimization`}),` — Transforms component properties, events, and slots into IDE-friendly definitions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Directory Discovery`}),` — Recursively scans the library to identify all components and their respective metadata.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Versioning`}),` — Automatically synchronizes the generated metadata version with the current `,(0,c.jsx)(t.code,{children:`package.json`}),` version.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Framework Integration`}),` — Specifically configured for Vue.js, ensuring that component tags and attributes are correctly recognized in `,(0,c.jsx)(t.code,{children:`.vue`}),` files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize the generator by specifying the target directory where the `,(0,c.jsx)(t.code,{children:`web-types.json`}),` file should be stored.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — The path to the output directory (default is `,(0,c.jsx)(t.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignWikiStorm } from '@dxtmisha/scripts'

const generator = new DesignWikiStorm('dist')
await generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Triggers the main generation process.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-web-types-generation-workflow`,children:`The Web-Types Generation Workflow`}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`make()`}),` is called, the class coordinates a multi-stage data synthesis:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Context Acquisition`}),`: It loads the `,(0,c.jsx)(t.code,{children:`package.json`}),` to retrieve the library name and current version.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Schema Bootstrapping`}),`: It initializes an object based on the Web-Types schema, setting the framework to Vue and defining the documentation markup as Markdown.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component Iteration`}),`: It iterates through every component registered in `,(0,c.jsx)(t.code,{children:`LibraryItems`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Member Analysis`}),`: For each component, it instantiates `,(0,c.jsx)(t.code,{children:`DesignWikiStormItem`}),`, which performs deep analysis of the component's source files to extract:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tags`}),`: Component names (e.g., `,(0,c.jsx)(t.code,{children:`d1-button`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Attributes`}),`: Property names, types, and default values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Events`}),`: Emitted event names and their payloads.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Slots`}),`: Available customization points and their scoped variables.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persistence`}),`: The final consolidated metadata object is written to `,(0,c.jsx)(t.code,{children:`web-types.json`}),` in the specified directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`impact-on-developer-experience`,children:`Impact on Developer Experience`}),`
`,(0,c.jsxs)(t.p,{children:[`By generating `,(0,c.jsx)(t.code,{children:`web-types.json`}),`, the design system ensures that developers using JetBrains tools receive the same level of support as they would with native HTML elements. Property types are validated in real-time within the IDE, and documentation comments are displayed directly in the code editor, significantly reducing the need to consult external wiki pages.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};