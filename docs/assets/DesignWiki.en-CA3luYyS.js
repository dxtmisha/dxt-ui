import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignWiki - Wiki Registry Generator`}),`
`,(0,c.jsx)(t.h1,{id:`designwiki-class`,children:`DesignWiki Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignWiki`}),` class provides essential infrastructure for the project's documentation system. It automates the creation and initialization of the central wiki configuration file, ensuring that the documentation engine (Storybook) has a stable and typed registry to store component arguments and metadata.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Initialization`}),` — Detects missing wiki configuration files and creates them with a standard structure.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Typed Registry`}),` — Generates configurations using the `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),` type to ensure full integration with the documentation framework.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Project-Specific Aliasing`}),` — Uses the design system's name (from `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),`) to create unique, project-aware registry variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Execution`}),` — Implements existence checks before writing, preventing accidental overwriting of existing documentation configurations.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`The class does not require any parameters for initialization. It uses global configurations from the environment.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Triggers the wiki initialization process.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-wiki-initialization-flow`,children:`The Wiki Initialization Flow`}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`make()`}),` is executed, the class follows this internal logic:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Resolution`}),`: It uses preconfigured directory paths (`,(0,c.jsx)(t.code,{children:`UI_DIRS_WIKI`}),`) and file names (`,(0,c.jsx)(t.code,{children:`UI_FILE_NAME_WIKI`}),`) to locate the target configuration file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Existence Check`}),`: It queries the file system via `,(0,c.jsx)(t.code,{children:`PropertiesFile.is()`}),` to determine if the `,(0,c.jsx)(t.code,{children:`.ts`}),` configuration file already exists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Registry Generation`}),`: If missing, it fetches the current design system name and constructs a TypeScript template:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`It imports the necessary `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),` type.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It exports a constant named `,(0,c.jsx)(t.code,{children:`wiki[DesignName]`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persistence`}),`: Writes the generated template to the file system, ensuring the documentation engine can immediately begin importing it.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`integration-with-storybook`,children:`Integration with Storybook`}),`
`,(0,c.jsxs)(t.p,{children:[`By centralizing the creation of this registry, `,(0,c.jsx)(t.code,{children:`DesignWiki`}),` ensures that all developers working on components have a consistent place to document props and states. This registry acts as the "source of truth" for the interactive documentation, allowing Storybook to dynamically render component controls based on the metadata stored here.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};