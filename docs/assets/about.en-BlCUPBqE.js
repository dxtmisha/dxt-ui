import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/# UI Figma/! About the library`}),`
`,(0,c.jsx)(t.h1,{id:`ui-figma-ecosystem`,children:`UI Figma Ecosystem`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`UI Figma`}),` system is a comprehensive infrastructure for developing Figma plugins. It is designed to bridge the gap between the "Code Side" (plugin backend) and the "UI Side" (frontend), providing seamless interaction, reactive data management, and full type safety.`]}),`
`,(0,c.jsx)(t.p,{children:`The ecosystem is built on a three-tier architecture, where each layer handles a specific part of the plugin lifecycle.`}),`
`,(0,c.jsx)(t.h2,{id:`three-layers-of-interaction`,children:`Three Layers of Interaction`}),`
`,(0,c.jsx)(t.h3,{id:`1-communication-core-dxtmishafigma`,children:`1. Communication Core (@dxtmisha/figma)`}),`
`,(0,c.jsx)(t.p,{children:`The fundamental package that defines interaction protocols. It contains:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Message type constants.`}),`
`,(0,c.jsx)(t.li,{children:`Shared data types and interfaces.`}),`
`,(0,c.jsx)(t.li,{children:`Abstract messenger classes to standardize data exchange.`}),`
`,(0,c.jsx)(t.li,{children:`Utilities for routing messages between the UI and the Figma sandbox.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-plugin-logic-dxtmishafigma-code`,children:`2. Plugin Logic (@dxtmisha/figma-code)`}),`
`,(0,c.jsx)(t.p,{children:`A package running in the Figma execution environment (Sandbox). This is the "brain" of the plugin, with direct access to the Figma API:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Element Analysis`}),`: `,(0,c.jsx)(t.code,{children:`FigmaItem`}),` and `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` classes for deep document structure exploration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Data Persistence`}),`: `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),` for working with PluginData (storing data directly in the `,(0,c.jsx)(t.code,{children:`.fig`}),` file).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Exporting`}),`: Tools for automated screenshot creation and asset export.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Synchronization`}),`: `,(0,c.jsx)(t.code,{children:`FigmaTopLevelFrames`}),` and `,(0,c.jsx)(t.code,{children:`FigmaFramesSelected`}),` classes for passing the current document state to the UI.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-reactive-interface-dxtmishafigma-ref`,children:`3. Reactive Interface (@dxtmisha/figma-ref)`}),`
`,(0,c.jsx)(t.p,{children:`A package for developing the user interface using Vue 3. It transforms asynchronous plugin responses into convenient reactive references (composables):`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactive Stores`}),`: `,(0,c.jsx)(t.code,{children:`useFigmaStorage`}),` and `,(0,c.jsx)(t.code,{children:`useFigmaClientStorage`}),` for instant data binding between UI and Figma storage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Observers`}),`: `,(0,c.jsx)(t.code,{children:`useFigmaUiFrames`}),` for automatic updates of the available frame list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selection Management`}),`: `,(0,c.jsx)(t.code,{children:`useFigmaUiSelected`}),` for linking UI-selected elements with Figma's active selection.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`system-features`,children:`System Features`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Seamless Interaction`}),`
Developers no longer need to manually manage `,(0,c.jsx)(t.code,{children:`postMessage`}),` calls and event listeners. The system handles routing and type validation automatically.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Out-of-the-box Reactivity`}),`
Using the Vue Composition API allows you to build plugin interfaces as easily as standard web applications, with data automatically persisting in the Figma document.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Type Safety`}),`
All messages and data structures are strictly typed, eliminating errors when passing data between isolated environments (UI and Sandbox).`]}),`
`,(0,c.jsx)(t.h2,{id:`why-use-this-ecosystem`,children:`Why Use This Ecosystem?`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Development Speed`}),`: Ready-made foundation for typical tasks (selection, settings, screenshots).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Clean Architecture`}),`: Clear separation of concerns between business logic and the user interface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scalability`}),`: Easy to add new features thanks to the modular structure and the Messenger pattern.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};