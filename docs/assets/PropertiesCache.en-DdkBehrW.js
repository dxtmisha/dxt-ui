import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesCache - Persistent Cache Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`propertiescache-class`,children:`PropertiesCache Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` class is a high-performance static utility designed to manage persistent file-based caching for the design system toolchain. It ensures that complex token transformations are only performed when necessary, significantly reducing build times for large-scale projects by tracking file dependencies and maintaining a structured cache hierarchy.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dependency Tracking`}),` — Automatically monitors source file changes and invalidates the cache if any dependency is modified.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hierarchical Storage`}),` — Organizes cached data into a hidden `,(0,c.jsx)(n.code,{children:`.cache`}),` directory with specialized sub-folders for different processing steps.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Incremental Builds`}),` — Enables partial re-computation by storing intermediate transformation results.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`System Integrity`}),` — Maintains a `,(0,c.jsx)(n.code,{children:`system.json`}),` registry to track cache timestamps and file metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Generic Support`}),` — Provides full TypeScript support for type-safe retrieval of cached data structures.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As a static class, `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` does not require instantiation. Its methods are accessed directly.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesCache } from '@dxtmisha/scripts'

// Retrieve data with automatic cache management
const data = PropertiesCache.get(
  ['tokens', 'color'], 
  'palette-cache', 
  () => transformPaletteLogic()
)

// Clear all cached data
PropertiesCache.clear()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`cache-operations`,children:`Cache Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(path, name, callback, extension): T`}),` — Retrieves data from the cache or regenerates it via the callback.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read<R>(path): R | undefined`}),` — Reads a file and registers it as a cache dependency.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write<T>(name, value): void`}),` — Saves intermediate processing results to the temporary cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`clear(): void`}),` — Recursively deletes the entire cache directory.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-cache-synchronization-flow`,children:`The Cache Synchronization Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesCache`}),` operates through a sophisticated internal lifecycle to ensure data consistency:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Request (`,(0,c.jsx)(n.code,{children:`get`}),`)`]}),`: When data is requested, the class first checks for the existence of the physical cache file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`System Validation`}),`: It consults the internal `,(0,c.jsx)(n.code,{children:`system`}),` registry to compare the cache's creation timestamp against the modification times of all registered dependency files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Regeneration`}),`: If the file is missing or outdated:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`It pushes the current cache `,(0,c.jsx)(n.code,{children:`name`}),` onto an internal `,(0,c.jsx)(n.code,{children:`listenerName`}),` stack.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Any subsequent file read via `,(0,c.jsx)(n.code,{children:`PropertiesCache.read()`}),` during the callback execution is automatically logged as a dependency for this specific cache entry.`]}),`
`,(0,c.jsx)(n.li,{children:`The callback result is written to disk.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Finalization`}),`: After the callback completes, it updates the `,(0,c.jsx)(n.code,{children:`system.json`}),` with the new timestamp and dependency list, ensuring the next request remains valid unless a source file changes.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};