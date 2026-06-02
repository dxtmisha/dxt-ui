import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaStorageData - Storage data container`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmastoragedata`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaStorageData`})]}),`
`,(0,c.jsx)(n.p,{children:`A low-level container for managing individual data entries within Figma's storage systems (Client Storage or Plugin Data). It tracks values along with their update time (age) and handles cache expiration logic.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Tracking`}),` — Automatically determines if data is still valid based on a configurable Time-To-Live (TTL).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Update Monitoring`}),` — Stores the timestamp of the last update to facilitate data freshness checks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Serialization Ready`}),` — Provides methods to convert data to and from a standard storage format (`,(0,c.jsx)(n.code,{children:`FigmaStorageDataValue`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Initialize with a key name and an optional cache time in seconds.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorageData } from '@dxtmisha/figma-code'

// Cache for 1 hour (3600 seconds)
const dataContainer = new FigmaStorageData<string>('user-name', 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`state-checks`,children:`State Checks`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNull(): boolean`}),` — Checks if the current value is null or undefined.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isCache(): boolean`}),` — Checks if the data is within its allowed cache lifetime.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValue(): boolean`}),` — Returns true if the value is defined and the cache is valid.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`accessors`,children:`Accessors`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T | undefined`}),` — Returns the current value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAge(): number | undefined`}),` — Returns the timestamp of the last update.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Returns the unique storage key name (prefixed).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCache(): number | undefined`}),` — Returns the configured cache time.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`modifiers`,children:`Modifiers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T, age?: number): this`}),` — Manually sets both value and age.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByObject(value?: FigmaStorageDataValue<T>): this`}),` — Sets data from a storage object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(value?: T): this`}),` — Updates the value and sets the age to the current timestamp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Clears the value and age.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`conversion`,children:`Conversion`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValue(): FigmaStorageDataValue<T>`}),` — Converts the current state to a storage-compatible object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(n.h4,{id:`figmastoragedatavaluet`,children:(0,c.jsx)(n.code,{children:`FigmaStorageDataValue<T>`})}),`
`,(0,c.jsx)(n.p,{children:`The structure used for persistent storage.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — The actual data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age: number`}),` — The timestamp (ms) of when the data was saved.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};