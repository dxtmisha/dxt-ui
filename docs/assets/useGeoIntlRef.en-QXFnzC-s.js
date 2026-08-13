import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useGeoIntlRef - Data Formatting`}),`
`,(0,c.jsx)(t.h1,{id:`usegeointlref`,children:(0,c.jsx)(t.code,{children:`useGeoIntlRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A composable that returns an instance of the `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` class for working with internationalization and data formatting (numbers, currencies, dates, etc.) based on the current locale.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Returns (`,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`A `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` class object providing methods for reactive formatting.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`geointlref-methods`,children:[(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` Methods`]}),`
`,(0,c.jsx)(t.p,{children:`The class provides reactive methods for formatting. All available methods of this class can be found in the GeoIntlRef description.`}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Reactive number formatting
const formattedNumber = intl.number(1234.56) // "1,234.56" (for en-US)

// Currency formatting
const price = intl.currency(1000, 'USD') // "$1,000.00"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};