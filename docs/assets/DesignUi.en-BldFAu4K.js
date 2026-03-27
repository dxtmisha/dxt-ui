import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignUi - UI Infrastructure Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`designui-class`,children:`DesignUi Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignUi`}),` class is the central orchestrator responsible for initializing and synchronizing the entire infrastructure of the UI library. It coordinates high-level tasks such as rebuilding styles, generating documentation, updating component architectures, and configuring package distribution metadata.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Orchestration`}),` — Manages the execution flow of multiple specialized generators (Styles, Wiki, Components).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Incremental Initialization`}),` — Supports initializing either a single specific component or the entire library suite.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Management`}),` — Automatically purges property caches to ensure all generated assets use the latest design system tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Package Auto-Configuration`}),` — Dynamically updates `,(0,c.jsx)(n.code,{children:`package.json`}),` export maps to reflect the current build state.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Library-Level Synthesis`}),` — Triggers global updates for plugins, media assets, and type definitions across the entire workspace.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Initialize the orchestrator by optionally providing a component name. If no name is provided, the class operates on all components found in the library.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The identifier of a specific component to process (optional, default is `,(0,c.jsx)(n.code,{children:`''`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignUi } from '@dxtmisha/scripts'

// To update everything:
const ui = new DesignUi()
ui.make()

// To update a specific component:
const buttonUi = new DesignUi('button')
buttonUi.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Executes the full initialization pipeline, sequentially triggering all infrastructure updates.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-ui-initialization-pipeline`,children:`The UI Initialization Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`make()`}),` is called, `,(0,c.jsx)(n.code,{children:`DesignUi`}),` coordinates a comprehensive multi-stage update:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Environment Reset`}),`: Clears the `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` to prevent stale tokens from affecting the new build.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Infrastructure Generation`}),`: Triggers global `,(0,c.jsx)(n.code,{children:`Styles`}),` and `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` generation to prepare the visual and documentation foundations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Component Syncing`}),`: Executes `,(0,c.jsx)(n.code,{children:`DesignComponent`}),` for the target component(s), resolving their structural metadata and generating source files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Distribution Preparation`}),`: Updates `,(0,c.jsx)(n.code,{children:`package.json`}),` with the latest export mappings for CSS, SCSS, and script modules.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Library Synthesis`}),`: Sequentially triggers dedicated library-level generators:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryMedia`}),`: Synchronizes icon and flag assets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryList`}),`: Compiles the component registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryPlugin`}),`: Rebuilds the Vue/framework integration plugins.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryAiWiki`}),`: Generates AI-optimized documentation artifacts.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryTypes`}),`: Compiles global type definitions.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`role-in-the-ecosystem`,children:`Role in the Ecosystem`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignUi`}),` acts as the primary entry point for developers and automated build tools. By abstracting the complexity of dozen of specialized classes, it provides a stable "one-click" interface for keeping the UI library synchronized with the design system's evolving specifications.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};