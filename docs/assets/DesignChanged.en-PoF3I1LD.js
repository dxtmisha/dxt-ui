import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignChanged - Change Tracking Utility`}),`
`,(0,c.jsx)(t.h1,{id:`designchanged-class`,children:`DesignChanged Class`}),`
`,(0,c.jsx)(t.p,{children:`A utility class designed to track changes in object properties. It maintains a cache of previous values and provides methods to detect differences between the current state and the last updated state.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Efficient Comparison`}),` — compares current property values against a local cache to identify changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selective Tracking`}),` — supports tracking a specific subset of properties via the `,(0,c.jsx)(t.code,{children:`watch`}),` parameter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Batch Updates`}),` — provides a way to synchronize the entire cache with the current state of properties.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a new `,(0,c.jsx)(t.code,{children:`DesignChanged`}),` instance. The class is designed to track changes in object properties by comparing them with an internal cache (the state at the time of the last update).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: T`}),` — data object whose properties need to be tracked.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`watch: string[] = Object.keys(props)`}),` — an array of property names (keys) to watch. By default, all properties of the `,(0,c.jsx)(t.code,{children:`props`}),` object are tracked.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Tracking all properties by default
const props = { title: 'Hello', count: 1 }
const tracker = new DesignChanged(props)

// 2. Tracking specific properties (subset)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,(0,c.jsx)(t.h2,{id:`change-detection`,children:`Change Detection`}),`
`,(0,c.jsx)(t.h3,{id:`is`,children:(0,c.jsx)(t.code,{children:`is`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if specific properties have been modified since the last update.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | string[]`}),` — a single property name or an array of property names to check.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if any of the specified properties have changed.`]}),`
`,(0,c.jsx)(t.h3,{id:`ischanged`,children:(0,c.jsx)(t.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks if any of the tracked properties (defined in the `,(0,c.jsx)(t.code,{children:`watch`}),` list) have changed.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if at least one tracked property has a different value.`]}),`
`,(0,c.jsx)(t.h2,{id:`data-synchronization`,children:`Data Synchronization`}),`
`,(0,c.jsx)(t.h3,{id:`update`,children:(0,c.jsx)(t.code,{children:`update`})}),`
`,(0,c.jsxs)(t.p,{children:[`Synchronizes the internal cache with the current values of all tracked properties. After calling this, `,(0,c.jsx)(t.code,{children:`isChanged()`}),` will return `,(0,c.jsx)(t.code,{children:`false`}),` until properties are modified again.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};