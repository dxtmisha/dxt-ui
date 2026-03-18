import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PropertiesCache - Persistent Cache Orchestrator"}),`
`,e.jsx(s.h1,{id:"propertiescache-class",children:"PropertiesCache Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"PropertiesCache"})," class is a high-performance static utility designed to manage persistent file-based caching for the design system toolchain. It ensures that complex token transformations are only performed when necessary, significantly reducing build times for large-scale projects by tracking file dependencies and maintaining a structured cache hierarchy."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dependency Tracking"})," — Automatically monitors source file changes and invalidates the cache if any dependency is modified."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Hierarchical Storage"})," — Organizes cached data into a hidden ",e.jsx(s.code,{children:".cache"})," directory with specialized sub-folders for different processing steps."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Incremental Builds"})," — Enables partial re-computation by storing intermediate transformation results."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"System Integrity"})," — Maintains a ",e.jsx(s.code,{children:"system.json"})," registry to track cache timestamps and file metadata."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Generic Support"})," — Provides full TypeScript support for type-safe retrieval of cached data structures."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["As a static class, ",e.jsx(s.code,{children:"PropertiesCache"})," does not require instantiation. Its methods are accessed directly."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesCache } from '@dxtmisha/scripts'

// Retrieve data with automatic cache management
const data = PropertiesCache.get(
  ['tokens', 'color'], 
  'palette-cache', 
  () => transformPaletteLogic()
)

// Clear all cached data
PropertiesCache.clear()
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"cache-operations",children:"Cache Operations"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get<T>(path, name, callback, extension): T"})," — Retrieves data from the cache or regenerates it via the callback."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"read<R>(path): R | undefined"})," — Reads a file and registers it as a cache dependency."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"write<T>(name, value): void"})," — Saves intermediate processing results to the temporary cache."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"clear(): void"})," — Recursively deletes the entire cache directory."]}),`
`]}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-cache-synchronization-flow",children:"The Cache Synchronization Flow"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"PropertiesCache"})," operates through a sophisticated internal lifecycle to ensure data consistency:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Request (",e.jsx(s.code,{children:"get"}),")"]}),": When data is requested, the class first checks for the existence of the physical cache file."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"System Validation"}),": It consults the internal ",e.jsx(s.code,{children:"system"})," registry to compare the cache's creation timestamp against the modification times of all registered dependency files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Regeneration"}),": If the file is missing or outdated:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["It pushes the current cache ",e.jsx(s.code,{children:"name"})," onto an internal ",e.jsx(s.code,{children:"listenerName"})," stack."]}),`
`,e.jsxs(s.li,{children:["Any subsequent file read via ",e.jsx(s.code,{children:"PropertiesCache.read()"})," during the callback execution is automatically logged as a dependency for this specific cache entry."]}),`
`,e.jsx(s.li,{children:"The callback result is written to disk."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Finalization"}),": After the callback completes, it updates the ",e.jsx(s.code,{children:"system.json"})," with the new timestamp and dependency list, ensuring the next request remains valid unless a source file changes."]}),`
`]})]})}function p(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default};
