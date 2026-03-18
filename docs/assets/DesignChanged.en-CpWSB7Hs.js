import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Classes/DesignChanged - Change Tracking Utility"}),`
`,e.jsx(n.h1,{id:"designchanged-class",children:"DesignChanged Class"}),`
`,e.jsx(n.p,{children:"A utility class designed to track changes in object properties. It maintains a cache of previous values and provides methods to detect differences between the current state and the last updated state."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Efficient Comparison"})," — compares current property values against a local cache to identify changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selective Tracking"})," — supports tracking a specific subset of properties via the ",e.jsx(n.code,{children:"watch"})," parameter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Batch Updates"})," — provides a way to synchronize the entire cache with the current state of properties."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Creates a new ",e.jsx(n.code,{children:"DesignChanged"})," instance. The class is designed to track changes in object properties by comparing them with an internal cache (the state at the time of the last update)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: T"})," — data object whose properties need to be tracked."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"watch: string[] = Object.keys(props)"})," — an array of property names (keys) to watch. By default, all properties of the ",e.jsx(n.code,{children:"props"})," object are tracked."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Tracking all properties by default
const props = { title: 'Hello', count: 1 }
const tracker = new DesignChanged(props)

// 2. Tracking specific properties (subset)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,e.jsx(n.h2,{id:"change-detection",children:"Change Detection"}),`
`,e.jsx(n.h3,{id:"is",children:e.jsx(n.code,{children:"is"})}),`
`,e.jsx(n.p,{children:"Checks if specific properties have been modified since the last update."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string | string[]"})," — a single property name or an array of property names to check."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if any of the specified properties have changed."]}),`
`,e.jsx(n.h3,{id:"ischanged",children:e.jsx(n.code,{children:"isChanged"})}),`
`,e.jsxs(n.p,{children:["Checks if any of the tracked properties (defined in the ",e.jsx(n.code,{children:"watch"})," list) have changed."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if at least one tracked property has a different value."]}),`
`,e.jsx(n.h2,{id:"data-synchronization",children:"Data Synchronization"}),`
`,e.jsx(n.h3,{id:"update",children:e.jsx(n.code,{children:"update"})}),`
`,e.jsxs(n.p,{children:["Synchronizes the internal cache with the current values of all tracked properties. After calling this, ",e.jsx(n.code,{children:"isChanged()"})," will return ",e.jsx(n.code,{children:"false"})," until properties are modified again."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
