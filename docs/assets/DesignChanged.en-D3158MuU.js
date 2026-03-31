import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/DesignChanged - Change Tracking Utility`}),`
`,(0,c.jsx)(n.h1,{id:`designchanged-class`,children:`DesignChanged Class`}),`
`,(0,c.jsx)(n.p,{children:`A utility class designed to track changes in object properties. It maintains a cache of previous values and provides methods to detect differences between the current state and the last updated state.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Efficient Comparison`}),` — compares current property values against a local cache to identify changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Selective Tracking`}),` — supports tracking a specific subset of properties via the `,(0,c.jsx)(n.code,{children:`watch`}),` parameter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Batch Updates`}),` — provides a way to synchronize the entire cache with the current state of properties.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`DesignChanged`}),` instance. The class is designed to track changes in object properties by comparing them with an internal cache (the state at the time of the last update).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: T`}),` — data object whose properties need to be tracked.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`watch: string[] = Object.keys(props)`}),` — an array of property names (keys) to watch. By default, all properties of the `,(0,c.jsx)(n.code,{children:`props`}),` object are tracked.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Tracking all properties by default
const props = { title: 'Hello', count: 1 }
const tracker = new DesignChanged(props)

// 2. Tracking specific properties (subset)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,(0,c.jsx)(n.h2,{id:`change-detection`,children:`Change Detection`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if specific properties have been modified since the last update.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string | string[]`}),` — a single property name or an array of property names to check.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if any of the specified properties have changed.`]}),`
`,(0,c.jsx)(n.h3,{id:`ischanged`,children:(0,c.jsx)(n.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks if any of the tracked properties (defined in the `,(0,c.jsx)(n.code,{children:`watch`}),` list) have changed.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if at least one tracked property has a different value.`]}),`
`,(0,c.jsx)(n.h2,{id:`data-synchronization`,children:`Data Synchronization`}),`
`,(0,c.jsx)(n.h3,{id:`update`,children:(0,c.jsx)(n.code,{children:`update`})}),`
`,(0,c.jsxs)(n.p,{children:[`Synchronizes the internal cache with the current values of all tracked properties. After calling this, `,(0,c.jsx)(n.code,{children:`isChanged()`}),` will return `,(0,c.jsx)(n.code,{children:`false`}),` until properties are modified again.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};