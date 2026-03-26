import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Functions/getConstructorProperties - Get constructor properties`}),`
`,(0,c.jsx)(n.h1,{id:`getconstructorproperties`,children:(0,c.jsx)(n.code,{children:`getConstructorProperties`})}),`
`,(0,c.jsxs)(n.p,{children:[`The function returns the properties of the specified constructors by reading their `,(0,c.jsx)(n.code,{children:`properties.json`}),` files.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`names: string[]`}),` — list of constructor names.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`PropertyList`}),` — an object where keys are constructor names and values are their properties.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function iterates through the provided names and constructs the path to the `,(0,c.jsx)(n.code,{children:`properties.json`}),` file for each constructor. It uses the `,(0,c.jsx)(n.code,{children:`PropertiesFile.readFile`}),` method to load the data.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};