import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useFormattersRef - List Formatting`}),`
`,(0,c.jsx)(n.h1,{id:`useformattersref`,children:(0,c.jsx)(n.code,{children:`useFormattersRef`})}),`
`,(0,c.jsx)(n.p,{children:`A composable for reactive formatting of data lists based on specified rules for each property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefType<List>`}),` — source data list (Ref or ComputedRef).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — formatting settings for each property:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: FormattersType`}),` — formatter type (`,(0,c.jsx)(n.code,{children:`currency`}),`, `,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`name`}),`, `,(0,c.jsx)(n.code,{children:`number`}),`, `,(0,c.jsx)(n.code,{children:`plural`}),`, `,(0,c.jsx)(n.code,{children:`unit`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: object`}),` — additional settings for the specific formatter (e.g., currency code, date format).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: function`}),` — custom function for value transformation.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listFormat: ComputedRef<FormattersReturn<List, Options>>`}),` — formatted data list. For each property specified in `,(0,c.jsx)(n.code,{children:`options`}),`, a corresponding `,(0,c.jsx)(n.code,{children:`{property}Format`}),` field is added to the items.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — type of formatting options for each property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersListProp`}),` — type of the source list (can be an array or a single item).`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`architecture-lazy-computed-dynamic-getters`,children:[`Architecture: Lazy `,(0,c.jsx)(n.code,{children:`computed`}),` (Dynamic Getters)`]}),`
`,(0,c.jsxs)(n.p,{children:[`This composable returns `,(0,c.jsx)(n.code,{children:`listFormat`}),` as a native JavaScript getter.
This design allows calling `,(0,c.jsx)(n.code,{children:`useFormattersRef()`}),` `,(0,c.jsx)(n.strong,{children:`outside of the Vue component lifecycle`}),` (e.g., globally or in stores).
The `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` object is created and cached by Vue upon the first access to the property during destructuring:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// ComputedRef is created during destructuring in setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Important`}),`: Avoid multiple accesses via dot notation (e.g., `,(0,c.jsx)(n.code,{children:`result.listFormat`}),`). Always destructure the result once at the `,(0,c.jsx)(n.code,{children:`setup`}),` level to ensure only one instance of the `,(0,c.jsx)(n.code,{children:`computed`}),` property is created.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};