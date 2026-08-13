import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/ComponentWikiFile - Wiki File Utility`}),`
`,(0,c.jsx)(t.h1,{id:`componentwikifile-class`,children:`ComponentWikiFile Class`}),`
`,(0,c.jsx)(t.p,{children:`A specialized utility class designed for handling individual files within the wiki generation process. It provides robust methods for reading, writing, and managing metadata like update dates and file versioning.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Metadata Management`}),` — automatically extracts and updates the "`,(0,c.jsx)(t.strong,{children:`Date: ...`}),`" marker within file content.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Writing`}),` — automatically strips markdown code fences when saving and only writes if content has changed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Versioning Support`}),` — optionally preserves the previous version of a file by renaming it with an `,(0,c.jsx)(t.code,{children:`__old.txt`}),` suffix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Abstraction`}),` — integrates with `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` to handle file operations using consistent path segments.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Initialize with the path segments and configuration for date handling and versioning.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paths: string[]`}),` — segments of the file path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDate: boolean = false`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, automatically manages the date marker in the content.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isOld: boolean = true`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, saves the previous version before overwriting.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentWikiFile } from '@dxtmisha/scripts'

const file = new ComponentWikiFile(['docs', 'Guide.mdx'], true, true)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(): string`}),` — Returns the full absolute path to the file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDate(): Datetime`}),` — Extracts and returns the date from the file's content.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(): string`}),` — Reads and returns the entire file content.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`write(content: string): void`}),` — Writes processed content to the file, handling versioning and date updates if configured.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`managing-documentation-updates`,children:`Managing Documentation Updates`}),`
`,(0,c.jsx)(t.p,{children:`Automatically updating documentation while keeping a backup of the previous version.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const docFile = new ComponentWikiFile(['wiki', 'MyComponent.mdx'], true, true)
docFile.write('# New Content')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};