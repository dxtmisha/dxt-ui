import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-constructor - Component Constructor Scaffolding`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-constructor`,children:`dxt-constructor`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-constructor`}),` command provides automated generation of core constructor files, types, properties configurations, and library entry points for components in the design system. It uses `,(0,c.jsx)(t.code,{children:`DesignConstructors`}),` and `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` underneath to orchestrate bulk or targeted component initialization.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Targeted or Bulk Generation`}),`: Detects empty structural folders or accepts a specific component name to scaffold constructor assets.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Style Consolidation`}),`: Automatically generates and aggregates component SCSS exports in `,(0,c.jsx)(t.code,{children:`packages/library/style.scss`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Complete Code & Types Scaffolding`}),`: Automatically creates properties configurations (`,(0,c.jsx)(t.code,{children:`properties.json`}),`), types (`,(0,c.jsx)(t.code,{children:`types.ts`}),`, `,(0,c.jsx)(t.code,{children:`basicTypes.ts`}),`), component styling files (`,(0,c.jsx)(t.code,{children:`style.scss`}),`), code files (`,(0,c.jsx)(t.code,{children:`Constructors.ts`}),`, `,(0,c.jsx)(t.code,{children:`ConstructorsDesign.tsx`}),`), and exports structure (`,(0,c.jsx)(t.code,{children:`index.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The constructor scaffolding workflow automates component integration:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The script identifies the targeted component name passed via the `,(0,c.jsx)(t.code,{children:`--name`}),` option, or automatically scans the configured system directory for all component names.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It clears the shared `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` to ensure the generation uses completely up-to-date configuration states.`]}),`
`,(0,c.jsxs)(t.li,{children:[`For each component, it invokes the `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` generator to construct properties JSON, properties TypeScript types, basic types, styles, code files, and entry index structures.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It loops through all component directories to collect their individual styles and compiles them into a centralized `,(0,c.jsx)(t.code,{children:`@forward`}),` rule set.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It updates `,(0,c.jsx)(t.code,{children:`package.json`}),` exports to expose the component's entry points and writes the library mapping files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsx)(t.p,{children:`No complex configurations are necessary to run the constructor builder. The tool is designed to scan the constructors directories and integrate them seamlessly.`}),`
`,(0,c.jsx)(t.p,{children:`To scaffold all component constructors in the workspace, run:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-constructor
`})}),`
`,(0,c.jsxs)(t.p,{children:[`To target a specific component (e.g. `,(0,c.jsx)(t.code,{children:`Button`}),`), specify its name via the `,(0,c.jsx)(t.code,{children:`--name`}),` (`,(0,c.jsx)(t.code,{children:`-n`}),`) option:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-constructor --name Button
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-constructor --help`}),` to print the full list of available options.`]}),`
`,(0,c.jsx)(t.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsx)(t.p,{children:`When a component constructor is initialized or updated, the tool scaffolds the following files inside its directory:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties.json`}),`: Keeps the raw component properties configuration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props.ts`}),`: Defines React/Vue prop structures based on configurations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),` & `,(0,c.jsx)(t.code,{children:`basicTypes.ts`}),`: Contains standard TypeScript types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style.scss`}),`: Manages component baseline SCSS styles.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Constructors.ts`}),` & `,(0,c.jsx)(t.code,{children:`ConstructorsDesign.tsx`}),`: Holds the constructor's core behavior code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),`: Exposes public interfaces and exports.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};