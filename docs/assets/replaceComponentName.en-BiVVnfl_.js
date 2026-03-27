import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/replaceComponentName - Replace component name in text`}),`
`,(0,c.jsx)(n.h1,{id:`replacecomponentname`,children:(0,c.jsx)(n.code,{children:`replaceComponentName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Replaces HTML tags of a specific component within a text string with new ones. It searches for opening (`,(0,c.jsx)(n.code,{children:`<name`}),`) and closing (`,(0,c.jsx)(n.code,{children:`</name`}),`) tags case-insensitively and replaces them with `,(0,c.jsx)(n.code,{children:`componentName`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string | undefined`}),` — The original text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The component name to replace.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`componentName: string`}),` — The new component name.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — The modified text with new tags, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the original text was not provided.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Click me</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Click me</AppButton>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};