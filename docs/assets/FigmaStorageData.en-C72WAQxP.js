import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Classes/FigmaStorageData - Storage data container`}),`
`,(0,c.jsxs)(t.h1,{id:`class-figmastoragedata`,children:[`Class `,(0,c.jsx)(t.code,{children:`FigmaStorageData`})]}),`
`,(0,c.jsx)(t.p,{children:`A low-level container for managing individual data entries within Figma's storage systems (Client Storage or Plugin Data). It tracks values along with their update time (age) and handles cache expiration logic.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Tracking`}),` — Automatically determines if data is still valid based on a configurable Time-To-Live (TTL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Update Monitoring`}),` — Stores the timestamp of the last update to facilitate data freshness checks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Serialization Ready`}),` — Provides methods to convert data to and from a standard storage format (`,(0,c.jsx)(t.code,{children:`FigmaStorageDataValue`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Initialize with a key name and an optional cache time in seconds.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaStorageData } from '@dxtmisha/figma-code'

// Cache for 1 hour (3600 seconds)
const dataContainer = new FigmaStorageData<string>('user-name', 3600)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`state-checks`,children:`State Checks`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isNull(): boolean`}),` — Checks if the current value is null or undefined.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCache(): boolean`}),` — Checks if the data is within its allowed cache lifetime.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValue(): boolean`}),` — Returns true if the value is defined and the cache is valid.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`accessors`,children:`Accessors`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): T | undefined`}),` — Returns the current value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAge(): number | undefined`}),` — Returns the timestamp of the last update.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — Returns the unique storage key name (prefixed).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCache(): number | undefined`}),` — Returns the configured cache time.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`modifiers`,children:`Modifiers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(value?: T, age?: number): this`}),` — Manually sets both value and age.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setByObject(value?: FigmaStorageDataValue<T>): this`}),` — Sets data from a storage object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(value?: T): this`}),` — Updates the value and sets the age to the current timestamp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(): this`}),` — Clears the value and age.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`conversion`,children:`Conversion`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toValue(): FigmaStorageDataValue<T>`}),` — Converts the current state to a storage-compatible object.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(t.h4,{id:`figmastoragedatavaluet`,children:(0,c.jsx)(t.code,{children:`FigmaStorageDataValue<T>`})}),`
`,(0,c.jsx)(t.p,{children:`The structure used for persistent storage.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The actual data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`age: number`}),` — The timestamp (ms) of when the data was saved.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};