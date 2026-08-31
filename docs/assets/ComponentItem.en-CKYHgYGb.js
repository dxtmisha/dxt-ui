import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/ComponentItem - Component File Generator`}),`
`,(0,c.jsx)(t.h1,{id:`componentitem-class`,children:`ComponentItem Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` class is responsible for generating and writing a complete set of boilerplate files for a specific component. It loads built-in templates (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`), performs contextual placeholder replacements, and saves files with proper system permissions.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Generates 8 template files`}),`: Creates Vue 3 SFC (`,(0,c.jsx)(t.code,{children:`.vue`}),`), entry point `,(0,c.jsx)(t.code,{children:`index.ts`}),`, types `,(0,c.jsx)(t.code,{children:`types.ts`}),`, materials prompt (`,(0,c.jsx)(t.code,{children:`materials/prompt.md`}),`), subcomponents (`,(0,c.jsx)(t.code,{children:`subcomponents/.gitignore`}),`), and Storybook documentation (`,(0,c.jsx)(t.code,{children:`wiki/ComponentDoc.mdx`}),`, `,(0,c.jsx)(t.code,{children:`wiki/ComponentDoc.stories.ts`}),`, `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Placeholder Replacements`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ComponentDoc`}),` -> PascalCase component name (`,(0,c.jsx)(t.code,{children:`this.getName()`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-doc`}),` -> kebab-case component name (`,(0,c.jsx)(t.code,{children:`toKebabCase(this.getName())`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[project]`}),` -> package name from `,(0,c.jsx)(t.code,{children:`package.json`}),` (`,(0,c.jsx)(t.code,{children:`this.getProjectName()`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[path]`}),` -> relative component directory path (`,(0,c.jsx)(t.code,{children:`src/components/ComponentName`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_.gitignore.txt`}),` -> `,(0,c.jsx)(t.code,{children:`.gitignore`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Permission Management`}),`: Automatically invokes `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),` for all written files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsx)(t.p,{children:`Accepts the target component directory path:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('Button')
component.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`class-properties`,children:`Class Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — Relative component directory path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected sample: Record<string, string>`}),` — Map of template file paths and raw contents (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Primary generation method:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Logs component name and path (`,(0,c.jsx)(t.code,{children:`Component create: <Name>`}),`, `,(0,c.jsx)(t.code,{children:`path: <path>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Iterates over all template keys from `,(0,c.jsx)(t.code,{children:`getFilesSample()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Reads raw template content (`,(0,c.jsx)(t.code,{children:`readSample`}),`), executes data replacement (`,(0,c.jsx)(t.code,{children:`replacement`}),`), and writes output file (`,(0,c.jsx)(t.code,{children:`writeFile`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Logs `,(0,c.jsx)(t.code,{children:`end`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getFilePath(path: string): string[]`}),` — Builds destination file path segments using `,(0,c.jsx)(t.code,{children:`getComponentPaths(this.path)`}),` with filename replacement.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getFilesSample(): string[]`}),` — Returns the list of all template file keys (`,(0,c.jsx)(t.code,{children:`Object.keys(this.sample)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getName(): string`}),` — Extracts the component name from the last segment of `,(0,c.jsx)(t.code,{children:`this.path`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getProjectName(): string`}),` — Retrieves the project package name from `,(0,c.jsx)(t.code,{children:`package.json`}),` or defaults to `,(0,c.jsx)(t.code,{children:`'Project'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readPackage(): Record<string, any>`}),` — Reads `,(0,c.jsx)(t.code,{children:`package.json`}),` from the current workspace.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readSample(path: string): string`}),` — Reads template file content from the in-memory sample cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected replacement(contentOrPath: string): string`}),` — Performs string substitutions across file paths and template contents.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected writeFile(path: string, content: string): void`}),` — Writes generated file to disk via `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),` and applies `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};