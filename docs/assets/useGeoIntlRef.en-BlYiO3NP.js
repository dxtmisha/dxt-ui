import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Composables/useGeoIntlRef - Data Formatting"}),`
`,e.jsx(n.h1,{id:"usegeointlref",children:e.jsx(n.code,{children:"useGeoIntlRef"})}),`
`,e.jsxs(n.p,{children:["A composable that returns an instance of the ",e.jsx(n.code,{children:"GeoIntlRef"})," class for working with internationalization and data formatting (numbers, currencies, dates, etc.) based on the current locale."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Returns (",e.jsx(n.code,{children:"GeoIntlRef"}),"):"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"GeoIntlRef"})," class object providing methods for reactive formatting."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"geointlref-methods",children:[e.jsx(n.code,{children:"GeoIntlRef"})," Methods"]}),`
`,e.jsx(n.p,{children:"The class provides reactive methods for formatting. All available methods of this class can be found in the GeoIntlRef description."}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Reactive number formatting
const formattedNumber = intl.number(1234.56) // "1,234.56" (for en-US)

// Currency formatting
const price = intl.currency(1000, 'USD') // "$1,000.00"
`})})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{m as default};
