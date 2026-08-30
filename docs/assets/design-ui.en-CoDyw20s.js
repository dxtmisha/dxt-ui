import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-ui - UI Design System Orchestrator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-ui`,children:`dxt-ui`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` command is the central orchestrator for building and initializing the Design System UI component library. It coordinates style generation, documentation building, component structures, package exports, and API typings.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component Scaffolding and Updates`}),`: Initializes new components or batch-updates existing component structures and SCSS assets.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Export Management`}),`: Automatically configures the library's `,(0,c.jsx)(t.code,{children:`package.json`}),` with correct export mappings for SASS styles, plugins, media assets, and TypeScript typings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Building Pipeline`}),`: Triggers styling compilations (`,(0,c.jsx)(t.code,{children:`Styles`}),`), documentation builds (`,(0,c.jsx)(t.code,{children:`DesignWiki`}),`), web type wrappers, and media listing generators in sequence.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Clear Cache`}),`: The script resets the local property build caches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Compile Core SASS & Wiki`}),`: Resolves global SCSS variable mappings and compiles the core Markdown component documentation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Initialize Components`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If a component `,(0,c.jsx)(t.code,{children:`name`}),` is supplied, it scaffolds that specific component structure (HTML, script setups, SCSS stylesheets).`]}),`
`,(0,c.jsx)(t.li,{children:`If no name is provided, it batch-updates all registered components.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Update package.json`}),`: Sets up package exports mapping entries for CSS, SASS, Vue Plugins, and Type files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Compile Library Artifacts`}),`: Spawns tasks to output libraries for assets, plugins, web types, and component listings.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Run the orchestrator via `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-ui
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--name`}),` (`,(0,c.jsx)(t.code,{children:`-n`}),`) (Optional): The name of a specific component to initialize or update. If omitted, all components are updated.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-ui --help`}),` to print the full list of available options.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};