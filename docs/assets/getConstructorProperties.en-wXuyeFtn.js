import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/getConstructorProperties - Get constructor properties`}),`
`,(0,c.jsx)(t.h1,{id:`getconstructorproperties`,children:(0,c.jsx)(t.code,{children:`getConstructorProperties`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function returns the properties of the specified constructors by reading their `,(0,c.jsx)(t.code,{children:`properties.json`}),` files.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`names: string[]`}),` — list of constructor names.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`PropertyList`}),` — an object where keys are constructor names and values are their properties.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function iterates through the provided names and constructs the path to the `,(0,c.jsx)(t.code,{children:`properties.json`}),` file for each constructor. It uses the `,(0,c.jsx)(t.code,{children:`PropertiesFile.readFile`}),` method to load the data.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};