import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useFormattersRef - List Formatting`}),`
`,(0,c.jsx)(t.h1,{id:`useformattersref`,children:(0,c.jsx)(t.code,{children:`useFormattersRef`})}),`
`,(0,c.jsx)(t.p,{children:`A composable for reactive formatting of data lists based on specified rules for each property.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefType<List>`}),` — source data list (Ref or ComputedRef).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: Options`}),` — formatting settings for each property:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: FormattersType`}),` — formatter type (`,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`name`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`plural`}),`, `,(0,c.jsx)(t.code,{children:`unit`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: object`}),` — additional settings for the specific formatter (e.g., currency code, date format).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: function`}),` — custom function for value transformation.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listFormat: ComputedRef<FormattersReturn<List, Options>>`}),` — formatted data list. For each property specified in `,(0,c.jsx)(t.code,{children:`options`}),`, a corresponding `,(0,c.jsx)(t.code,{children:`{property}Format`}),` field is added to the items.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Options extends FormattersOptionsList`}),` — type of formatting options for each property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`List extends FormattersListProp`}),` — type of the source list (can be an array or a single item).`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`architecture-lazy-computed-dynamic-getters`,children:[`Architecture: Lazy `,(0,c.jsx)(t.code,{children:`computed`}),` (Dynamic Getters)`]}),`
`,(0,c.jsxs)(t.p,{children:[`This composable returns `,(0,c.jsx)(t.code,{children:`listFormat`}),` as a native JavaScript getter.
This design allows calling `,(0,c.jsx)(t.code,{children:`useFormattersRef()`}),` `,(0,c.jsx)(t.strong,{children:`outside of the Vue component lifecycle`}),` (e.g., globally or in stores).
The `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` object is created and cached by Vue upon the first access to the property during destructuring:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// ComputedRef is created during destructuring in setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Important`}),`: Avoid multiple accesses via dot notation (e.g., `,(0,c.jsx)(t.code,{children:`result.listFormat`}),`). Always destructure the result once at the `,(0,c.jsx)(t.code,{children:`setup`}),` level to ensure only one instance of the `,(0,c.jsx)(t.code,{children:`computed`}),` property is created.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};