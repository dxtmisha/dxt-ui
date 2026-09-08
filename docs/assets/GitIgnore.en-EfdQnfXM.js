import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/GitIgnore - Managing .gitignore`}),`
`,(0,c.jsx)(t.h1,{id:`gitignore-class`,children:`GitIgnore Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A utility class for managing and updating `,(0,c.jsx)(t.code,{children:`.gitignore`}),` entries. It allows flexible configuration of paths and comment headers through method chaining, writing modifications via `,(0,c.jsx)(t.code,{children:`make()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-capabilities`,children:`Key Capabilities`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Normalization`}),` — automatically trims whitespace, filters empty strings, and deduplicates input paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Insertion`}),` — checks existing entries against incoming paths while ignoring slash variations to prevent duplicates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Section Comments`}),` — optionally adds a comment header `,(0,c.jsx)(t.code,{children:`# <comment>`}),` above new entries without duplicating existing comments.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`State Mutation API`}),` — manages paths (`,(0,c.jsx)(t.code,{children:`addPaths`}),`, `,(0,c.jsx)(t.code,{children:`setPaths`}),`), comments (`,(0,c.jsx)(t.code,{children:`setComment`}),`), and target file path (`,(0,c.jsx)(t.code,{children:`setGitignorePath`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`core-methods`,children:`Core Methods`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Processes and writes missing entries to the `,(0,c.jsx)(t.code,{children:`.gitignore`}),` file.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if new entries were written to the file, `,(0,c.jsx)(t.code,{children:`false`}),` otherwise.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitIgnore } from '@dxtmisha/scripts'

new GitIgnore([
  'ai-prompt.md',
  'ai-packages-types'
], 'AI Resources').make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`state-mutation-methods`,children:`State Mutation Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPaths(paths: string | string[]): this`}),` — appends paths to the current path list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setPaths(paths: string | string[]): this`}),` — replaces the current path list with new entries.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPaths(): string[]`}),` — returns the current array of paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setComment(comment?: string): this`}),` — sets the comment header for the added section.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComment(): string | undefined`}),` — returns the current comment header.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setGitignorePath(path: PropertiesFilePath): this`}),` — sets the target `,(0,c.jsx)(t.code,{children:`.gitignore`}),` file path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getGitignorePath(): PropertiesFilePath`}),` — returns the current `,(0,c.jsx)(t.code,{children:`.gitignore`}),` file path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getContent(): string`}),` — reads and caches the content of the `,(0,c.jsx)(t.code,{children:`.gitignore`}),` file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContent(): this`}),` — resets the cached file content.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Method Chaining Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitIgnore } from '@dxtmisha/scripts'

new GitIgnore()
  .addPaths(['dist', 'temp'])
  .addPaths('coverage')
  .setComment('Build Outputs')
  .make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};