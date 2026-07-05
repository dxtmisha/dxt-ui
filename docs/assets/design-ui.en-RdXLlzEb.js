import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-ui - UI Design System Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-ui`,children:`dxt-ui`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-ui`}),` command is the central orchestrator for building and initializing the Design System UI component library. It coordinates style generation, documentation building, component structures, package exports, and API typings.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Component Scaffolding and Updates`}),`: Initializes new components or batch-updates existing component structures and SCSS assets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Package Export Management`}),`: Automatically configures the library's `,(0,c.jsx)(n.code,{children:`package.json`}),` with correct export mappings for SASS styles, plugins, media assets, and TypeScript typings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Building Pipeline`}),`: Triggers styling compilations (`,(0,c.jsx)(n.code,{children:`Styles`}),`), documentation builds (`,(0,c.jsx)(n.code,{children:`DesignWiki`}),`), web type wrappers, and media listing generators in sequence.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clear Cache`}),`: The script resets the local property build caches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Compile Core SASS & Wiki`}),`: Resolves global SCSS variable mappings and compiles the core Markdown component documentation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Initialize Components`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`If a component `,(0,c.jsx)(n.code,{children:`name`}),` is supplied, it scaffolds that specific component structure (HTML, script setups, SCSS stylesheets).`]}),`
`,(0,c.jsx)(n.li,{children:`If no name is provided, it batch-updates all registered components.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Update package.json`}),`: Sets up package exports mapping entries for CSS, SASS, Vue Plugins, and Type files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Compile Library Artifacts`}),`: Spawns tasks to output libraries for assets, plugins, web types, and component listings.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Run the orchestrator via `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-ui [component-name]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component-name`}),` (Optional): The name of a specific component to initialize or update. If omitted, all components are updated.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};