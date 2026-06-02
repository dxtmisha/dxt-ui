import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI Figma/! About the library`}),`
`,(0,c.jsx)(n.h1,{id:`ui-figma-ecosystem`,children:`UI Figma Ecosystem`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`UI Figma`}),` system is a comprehensive infrastructure for developing Figma plugins. It is designed to bridge the gap between the "Code Side" (plugin backend) and the "UI Side" (frontend), providing seamless interaction, reactive data management, and full type safety.`]}),`
`,(0,c.jsx)(n.p,{children:`The ecosystem is built on a three-tier architecture, where each layer handles a specific part of the plugin lifecycle.`}),`
`,(0,c.jsx)(n.h2,{id:`three-layers-of-interaction`,children:`Three Layers of Interaction`}),`
`,(0,c.jsx)(n.h3,{id:`1-communication-core-dxtmishafigma`,children:`1. Communication Core (@dxtmisha/figma)`}),`
`,(0,c.jsx)(n.p,{children:`The fundamental package that defines interaction protocols. It contains:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Message type constants.`}),`
`,(0,c.jsx)(n.li,{children:`Shared data types and interfaces.`}),`
`,(0,c.jsx)(n.li,{children:`Abstract messenger classes to standardize data exchange.`}),`
`,(0,c.jsx)(n.li,{children:`Utilities for routing messages between the UI and the Figma sandbox.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-plugin-logic-dxtmishafigma-code`,children:`2. Plugin Logic (@dxtmisha/figma-code)`}),`
`,(0,c.jsx)(n.p,{children:`A package running in the Figma execution environment (Sandbox). This is the "brain" of the plugin, with direct access to the Figma API:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Element Analysis`}),`: `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` and `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` classes for deep document structure exploration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Persistence`}),`: `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` for working with PluginData (storing data directly in the `,(0,c.jsx)(n.code,{children:`.fig`}),` file).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Exporting`}),`: Tools for automated screenshot creation and asset export.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Synchronization`}),`: `,(0,c.jsx)(n.code,{children:`FigmaTopLevelFrames`}),` and `,(0,c.jsx)(n.code,{children:`FigmaFramesSelected`}),` classes for passing the current document state to the UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`3-reactive-interface-dxtmishafigma-ref`,children:`3. Reactive Interface (@dxtmisha/figma-ref)`}),`
`,(0,c.jsx)(n.p,{children:`A package for developing the user interface using Vue 3. It transforms asynchronous plugin responses into convenient reactive references (composables):`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactive Stores`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaStorage`}),` and `,(0,c.jsx)(n.code,{children:`useFigmaClientStorage`}),` for instant data binding between UI and Figma storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Observers`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` for automatic updates of the available frame list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Selection Management`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaUiSelected`}),` for linking UI-selected elements with Figma's active selection.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`system-features`,children:`System Features`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Seamless Interaction`}),`
Developers no longer need to manually manage `,(0,c.jsx)(n.code,{children:`postMessage`}),` calls and event listeners. The system handles routing and type validation automatically.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Out-of-the-box Reactivity`}),`
Using the Vue Composition API allows you to build plugin interfaces as easily as standard web applications, with data automatically persisting in the Figma document.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Type Safety`}),`
All messages and data structures are strictly typed, eliminating errors when passing data between isolated environments (UI and Sandbox).`]}),`
`,(0,c.jsx)(n.h2,{id:`why-use-this-ecosystem`,children:`Why Use This Ecosystem?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Development Speed`}),`: Ready-made foundation for typical tasks (selection, settings, screenshots).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clean Architecture`}),`: Clear separation of concerns between business logic and the user interface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scalability`}),`: Easy to add new features thanks to the modular structure and the Messenger pattern.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};