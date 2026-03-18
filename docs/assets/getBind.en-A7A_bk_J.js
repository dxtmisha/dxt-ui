import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Functions/getBind - Binding Generation"}),`
`,e.jsx(n.h1,{id:"getbind",children:e.jsx(n.code,{children:"getBind"})}),`
`,e.jsx(n.p,{children:"Base utility function for generating a properties object for a subcomponent based on normal (non-reactive) values. It handles various input types and ensures a consistent structure for property binding."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T | R | undefined | null"})," — The input value to be bound. Can be a primitive or an object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nameExtra: ItemList | string = {}"})," — Additional properties to merge or the name of the property to use if ",e.jsx(n.code,{children:"value"})," is not an object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string = 'value'"})," — The default property name (defaults to ",e.jsx(n.code,{children:"'value'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"except: boolean = false"})," — If true, skips the check requiring a primary key in the ",e.jsx(n.code,{children:"value"})," object."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ConstrBind<R>"})," — An object containing the properties ready for binding."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getBind } from '@dxtmisha/functional'

// Case 1: Simple value
const bind1 = getBind('Hello', {}, 'label') 
// Result: { label: 'Hello' }

// Case 2: Object with extra properties
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Result: { id: 1, class: 'active' }
`})})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
