import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignConstructors - Design Constructors Manager`}),`
`,(0,c.jsx)(n.h1,{id:`designconstructors-class`,children:`DesignConstructors Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignConstructors`}),` class serves as a high-level orchestrator for managing all component constructors within the design system. It handles bulk operations, such as updating all existing constructors at once, and manages the consolidation of component styles into the global library exports.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bulk Lifecycle Management`}),` — Can trigger updates for all components in the `,(0,c.jsx)(n.code,{children:`constructors`}),` directory or target a specific one.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Management`}),` — Automatically clears property caches before starting the generation process to ensure data freshity.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Style Consolidation`}),` — Scans all components and generates a centralized SCSS entry point for the global library.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Directory Discovery`}),` — Automatically identifies all component constructors located in the system's source path.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`To initialize the manager, use the constructor. If a name is provided, operations will be restricted to that specific component.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name?: string`}),` — Optional unique identifier of a component to process.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Manager for all constructors
const manager = new DesignConstructors()
manager.make()

// Manager for a specific component
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Starts the generation or update process for one or all identified constructors and refreshes global styles.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponents(): string[]`}),` — Returns a list of all component identifiers found in the constructors directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentsStyle(): string[]`}),` — Returns an array of SCSS `,(0,c.jsx)(n.code,{children:`@forward`}),` statements for all registered components.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`global-style-generation`,children:`Global Style Generation`}),`
`,(0,c.jsxs)(n.p,{children:[`One of the primary responsibilities of this class is maintaining the `,(0,c.jsx)(n.code,{children:`style.scss`}),` file in the library root. The `,(0,c.jsx)(n.code,{children:`makeStyle()`}),` method performs the following:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scanning`}),`: It retrieves a list of all components via `,(0,c.jsx)(n.code,{children:`getComponents()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Mapping`}),`: It constructs `,(0,c.jsx)(n.code,{children:`@forward`}),` rules pointing to each component's individual style file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Writing`}),`: It writes these rules into the centralized `,(0,c.jsx)(n.code,{children:`packages/library/style.scss`}),` file, ensuring that the entire design system's styles are accessible through a single import.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`execution-workflow`,children:`Execution Workflow`}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`make()`}),` is called, the class follows this sequence:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cleanup`}),`: It clears the `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` to prevent stale data from affecting the output.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Delegation`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`If a `,(0,c.jsx)(n.code,{children:`name`}),` was provided during initialization, it creates a new `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` for that component and calls its `,(0,c.jsx)(n.code,{children:`make()`}),` method.`]}),`
`,(0,c.jsxs)(n.li,{children:[`If no `,(0,c.jsx)(n.code,{children:`name`}),` was provided, it iterates through all discovered components, creating a `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` for each and triggering their updates.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Consolidation`}),`: Finally, it calls `,(0,c.jsx)(n.code,{children:`makeStyle()`}),` to synchronize the global style exports with the current component list.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};