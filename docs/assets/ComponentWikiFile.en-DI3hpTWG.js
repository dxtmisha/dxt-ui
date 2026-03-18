import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/ComponentWikiFile - Wiki File Utility"}),`
`,e.jsx(n.h1,{id:"componentwikifile-class",children:"ComponentWikiFile Class"}),`
`,e.jsx(n.p,{children:"A specialized utility class designed for handling individual files within the wiki generation process. It provides robust methods for reading, writing, and managing metadata like update dates and file versioning."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Metadata Management"}),' — automatically extracts and updates the "',e.jsx(n.strong,{children:"Date: ..."}),'" marker within file content.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Writing"})," — automatically strips markdown code fences when saving and only writes if content has changed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Versioning Support"})," — optionally preserves the previous version of a file by renaming it with an ",e.jsx(n.code,{children:"__old.txt"})," suffix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Abstraction"})," — integrates with ",e.jsx(n.code,{children:"PropertiesFile"})," to handle file operations using consistent path segments."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"Initialize with the path segments and configuration for date handling and versioning."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paths: string[]"})," — segments of the file path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isDate: boolean = false"})," — if ",e.jsx(n.code,{children:"true"}),", automatically manages the date marker in the content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isOld: boolean = true"})," — if ",e.jsx(n.code,{children:"true"}),", saves the previous version before overwriting."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ComponentWikiFile } from '@dxtmisha/scripts'

const file = new ComponentWikiFile(['docs', 'Guide.mdx'], true, true)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getPath(): string"})," — Returns the full absolute path to the file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDate(): Datetime"})," — Extracts and returns the date from the file's content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"read(): string"})," — Reads and returns the entire file content."]}),`
`]}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"write(content: string): void"})," — Writes processed content to the file, handling versioning and date updates if configured."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"managing-documentation-updates",children:"Managing Documentation Updates"}),`
`,e.jsx(n.p,{children:"Automatically updating documentation while keeping a backup of the previous version."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const docFile = new ComponentWikiFile(['wiki', 'MyComponent.mdx'], true, true)
docFile.write('# New Content')
`})})]})}function x(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{x as default};
