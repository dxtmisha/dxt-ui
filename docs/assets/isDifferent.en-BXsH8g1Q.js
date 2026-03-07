import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/isDifferent - Check for object differences"}),`
`,e.jsx(t.h1,{id:"isdifferent",children:e.jsx(t.code,{children:"isDifferent"})}),`
`,e.jsx(t.p,{children:"Performs an assessment to determine if two provided objects differ from each other."}),`
`,e.jsxs(t.p,{children:["The function operates by initially comparing the total number of keys (properties) in each object. If those values match, it proceeds to execute a rigid value comparison of those keys through the internal ",e.jsx(t.code,{children:"forEach"})," utility loop."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value: ObjectItem<T>"})," — The current (new) object or data entity being evaluated."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"old: ObjectItem<T>"})," — The previous (old) reference object to compare against."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"boolean"})," — Returns ",e.jsx(t.code,{children:"true"})," if there are any differences detected between the objects (either by property count mismatch or strict value inequality), or ",e.jsx(t.code,{children:"false"})," if they are entirely identical."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Objects differ in the \`active\` property
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Objects are completely identical
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function f(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
