import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useGeoIntlRef - Data Formatting`}),`
`,(0,c.jsx)(n.h1,{id:`usegeointlref`,children:(0,c.jsx)(n.code,{children:`useGeoIntlRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A composable that returns an instance of the `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` class for working with internationalization and data formatting (numbers, currencies, dates, etc.) based on the current locale.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Returns (`,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`A `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` class object providing methods for reactive formatting.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`geointlref-methods`,children:[(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` Methods`]}),`
`,(0,c.jsx)(n.p,{children:`The class provides reactive methods for formatting. All available methods of this class can be found in the GeoIntlRef description.`}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Reactive number formatting
const formattedNumber = intl.number(1234.56) // "1,234.56" (for en-US)

// Currency formatting
const price = intl.currency(1000, 'USD') // "$1,000.00"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};