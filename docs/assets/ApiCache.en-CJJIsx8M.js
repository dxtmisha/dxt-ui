import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiCache - API Response Caching`}),`
`,(0,c.jsx)(n.h1,{id:`apicache-class`,children:`ApiCache Class`}),`
`,(0,c.jsx)(n.p,{children:`A class for caching API responses. It allows storing query results in memory or an external storage, preventing redundant network calls within a specified period. In the current implementation, caching is active by default only on the server side (SSR) to speed up rendering and reduce API load during concurrent requests.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiCache`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for low-level cache management. In most cases, it is recommended to interact with caching through the `,(0,c.jsx)(n.code,{children:`cache`}),` parameter in `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` or the global `,(0,c.jsx)(n.code,{children:`Api`}),` object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Key Management`}),` — generates unique cache keys based on request parameters (path, method, body, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible TTL (Time To Live)`}),` — allows setting the storage duration for each request individually or using a default (24 hours).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Optimization`}),` — prevents unnecessary API calls in the Node.js environment. Disabled by default in the browser (only works if explicitly enabled through configuration parameters).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Listener Support`}),` — ability to connect external storage (e.g., Redis, Nitro Storage) via callback functions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Background Cleanup`}),` — automatically removes expired entries when accessing the cache.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(n.p,{children:`Methods for managing cache entries.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(key: string): Promise<T | undefined>`}),` — Retrieves a value from the cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>`}),` — Retrieves a value using request options as the key source.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(key: string, value: T, age?: number): Promise<void>`}),` — Stores a value in the cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>`}),` — Stores a value using request options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(key: string): Promise<void>`}),` — Manually removes an entry.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(getListener, setListener, removeListener, cacheStepAgeClearOld?): void`}),` — Configures the cache with storage listeners.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): void`}),` — Clears in-memory items and detaches listeners.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h4,{id:`apicacheitemt`,children:(0,c.jsx)(n.code,{children:`ApiCacheItem<T>`})}),`
`,(0,c.jsx)(n.p,{children:`The structure of a cached record.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — The cached data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age: number`}),` — TTL in seconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheAge: number`}),` — Creation timestamp (ms).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`apicachelist`,children:(0,c.jsx)(n.code,{children:`ApiCacheList`})}),`
`,(0,c.jsx)(n.p,{children:`An internal dictionary for in-memory storage fallback.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: ApiCacheItem`}),` — Key-value pairs of cached items.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization-and-external-storage`,children:`Initialization and External Storage`}),`
`,(0,c.jsxs)(n.p,{children:[`By default, `,(0,c.jsx)(n.code,{children:`ApiCache`}),` stores records in the process RAM and works only on the server side. While this is fast, it has limitations in production environments:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cluster Synchronization`}),`: In a multi-instance setup, caches are not shared between processes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Process Restarts`}),`: Memory is cleared whenever the server restarts or a serverless function "cold starts".`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Memory Limits`}),`: Storing large amounts of data in RAM can lead to increased memory consumption.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`To solve these issues, you must initialize `,(0,c.jsx)(n.code,{children:`ApiCache`}),` with the `,(0,c.jsx)(n.code,{children:`init`}),` method, providing listeners that bridge it to an external storage mechanism.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Important: You must call `,(0,c.jsx)(n.code,{children:`ApiCache.init()`}),` during your application's bootstrap phase (before the first API request) to ensure the cache is correctly configured.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nodejs-custom-storage`,children:`Node.js (Custom Storage)`}),`
`,(0,c.jsx)(n.p,{children:`In a standard Node.js environment, you can use listeners to interact with a centralized database or a persistent cache like Redis.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiCache } from '@dxtmisha/functional-basic'

// Configuration with storage listeners
ApiCache.init(
  // 1. Get data from external storage
  async (key) => await myExternalStorage.get(key),
  
  // 2. Save data to external storage
  async (key, value) => {
    await myExternalStorage.put(key, value)
    return true // Return true to indicate successful external storage
  },
  
  // 3. Remove data from external storage
  async (key) => {
    await myExternalStorage.delete(key)
    return true
  },
  
  // 4. Optional: threshold for background cleanup trigger
  16384
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(n.p,{children:[`In Nuxt/Nitro, the recommended approach is to use the built-in `,(0,c.jsx)(n.code,{children:`useStorage`}),` helper within a server plugin. This allows you to leverage Redis, FS, or other Nitro-supported storage drivers.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// server/plugins/api-cache.ts
import { ApiCache } from '@dxtmisha/functional-basic'

export default defineNitroPlugin(() => {
  const storage = useStorage('cache') // Nitro Cache region

  ApiCache.init(
    async (key) => await storage.getItem(key),
    async (key, value) => {
      await storage.setItem(key, value)
      return true
    },
    async (key) => {
      await storage.removeItem(key)
      return true
    }
  )
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};