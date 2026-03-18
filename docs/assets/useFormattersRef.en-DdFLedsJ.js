import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(r){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Composables/useFormattersRef - List Formatting"}),`
`,e.jsx(t.h1,{id:"useformattersref",children:e.jsx(t.code,{children:"useFormattersRef"})}),`
`,e.jsx(t.p,{children:"A composable for reactive formatting of data lists based on specified rules for each property."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"list: RefType<List>"})," — source data list (Ref or ComputedRef)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"options: Options"})," — formatting settings for each property:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"type: FormattersType"})," — formatter type (",e.jsx(t.code,{children:"currency"}),", ",e.jsx(t.code,{children:"date"}),", ",e.jsx(t.code,{children:"name"}),", ",e.jsx(t.code,{children:"number"}),", ",e.jsx(t.code,{children:"plural"}),", ",e.jsx(t.code,{children:"unit"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"options?: object"})," — additional settings for the specific formatter (e.g., currency code, date format)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"transformation?: function"})," — custom function for value transformation."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"listFormat: ComputedRef<FormattersReturn<List, Options>>"})," — formatted data list. For each property specified in ",e.jsx(t.code,{children:"options"}),", a corresponding ",e.jsx(t.code,{children:"{property}Format"})," field is added to the items."]}),`
`]}),`
`,e.jsx(t.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Options extends FormattersOptionsList"})," — type of formatting options for each property."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"List extends FormattersListProp"})," — type of the source list (can be an array or a single item)."]}),`
`]}),`
`,e.jsxs(t.h2,{id:"architecture-lazy-computed-dynamic-getters",children:["Architecture: Lazy ",e.jsx(t.code,{children:"computed"})," (Dynamic Getters)"]}),`
`,e.jsxs(t.p,{children:["This composable returns ",e.jsx(t.code,{children:"listFormat"}),` as a native JavaScript getter.
This design allows calling `,e.jsx(t.code,{children:"useFormattersRef()"})," ",e.jsx(t.strong,{children:"outside of the Vue component lifecycle"}),` (e.g., globally or in stores).
The `,e.jsx(t.code,{children:"ComputedRef"})," object is created and cached by Vue upon the first access to the property during destructuring:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`// ComputedRef is created during destructuring in setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Important"}),": Avoid multiple accesses via dot notation (e.g., ",e.jsx(t.code,{children:"result.listFormat"}),"). Always destructure the result once at the ",e.jsx(t.code,{children:"setup"})," level to ensure only one instance of the ",e.jsx(t.code,{children:"computed"})," property is created."]}),`
`]}),`
`,e.jsx(t.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useFormattersRef } from '@dxtmisha/functional'
import { FormattersType } from '@dxtmisha/functional-basic'

const items = ref([
  { id: 1, price: 100, firstName: 'John', lastName: 'Doe' },
  { id: 2, price: 250, firstName: 'Jane', lastName: 'Smith' }
])

const { listFormat } = useFormattersRef(items, {
  price: { type: FormattersType.currency },
  name: { type: FormattersType.name }
})

// listFormat.value will contain:
// [
//   { ..., priceFormat: '$100.00', nameFormat: 'John Doe' },
//   { ..., priceFormat: '$250.00', nameFormat: 'Jane Smith' }
// ]
`})})]})}function h(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{h as default};
