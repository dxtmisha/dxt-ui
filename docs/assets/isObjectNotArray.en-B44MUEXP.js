import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/isObjectNotArray - Strict object verification"}),`
`,e.jsx(t.h1,{id:"isobjectnotarray",children:e.jsx(t.code,{children:"isObjectNotArray"})}),`
`,e.jsxs(t.p,{children:["Executes an advanced screening operation directly ensuring the tested item constitutes a textbook plain object structure ",e.jsx(t.code,{children:"{}"})," (Record) while being ",e.jsx(t.strong,{children:"assuredly devoid of any array traits"}),"."]}),`
`,e.jsxs(t.p,{children:["Following the intrinsic principle that the elementary ",e.jsx(t.code,{children:"isObject"})," utility registers ",e.jsx(t.code,{children:"true"})," inherently when probing arrays (due to JavaScript's rudimentary heritage), this precise function rectifies that quirk. By fusing foundational ",e.jsx(t.code,{children:"isObject(value)"})," authentication mechanics with a robust ",e.jsx(t.code,{children:"!Array.isArray(value)"})," safeguard mechanism, arrays are systematically disqualified."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value: T"})," — Any element waiting for inspection."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"boolean"})," — Generates ",e.jsx(t.code,{children:"true"})," solely corresponding to authentic objects structured as ",e.jsx(t.code,{children:"{ key: 'value' }"}),". Yields ",e.jsx(t.code,{children:"false"})," automatically when combating arrays ",e.jsx(t.code,{children:"[]"}),", elusive nulls, functional instances, or standard primitive values. Employs reliable type guarding capabilities that carefully extract the pure Object Record architecture while discarding intersecting null, undefined or array overlaps."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Successful validation boundaries
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Scenarios safely bypassed without tripping false positives
console.log(isObjectNotArray([1, 2, 3])) // false (Array defense shield actively rejects arrays!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function h(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
