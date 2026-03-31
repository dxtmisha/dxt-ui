import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/getClassName - Get Class Name from Props`}),`
`,(0,c.jsx)(n.h1,{id:`getclassname`,children:(0,c.jsx)(n.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility function that extracts the `,(0,c.jsx)(n.code,{children:`class`}),` property from a given properties object. It ensures that the returned value is a string, which is useful for consistently obtaining class names when rendering components or elements.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props?: T`}),` — The properties object of the component, which may contain a `,(0,c.jsx)(n.code,{children:`class`}),` property.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — The class name as a string if it exists and is a string, otherwise `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getClassName } from '@dxtmisha/functional'

// Returns 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Returns undefined as 'class' is missing
const className2 = getClassName({ otherProp: 1 })

// Returns undefined as 'class' is not a string
const className3 = getClassName({ class: 123 })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};