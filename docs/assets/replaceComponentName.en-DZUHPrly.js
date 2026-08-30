import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/replaceComponentName - Replace component name in text`}),`
`,(0,c.jsx)(t.h1,{id:`replacecomponentname`,children:(0,c.jsx)(t.code,{children:`replaceComponentName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Replaces HTML tags of a specific component within a text string with new ones. It searches for opening (`,(0,c.jsx)(t.code,{children:`<name`}),`) and closing (`,(0,c.jsx)(t.code,{children:`</name`}),`) tags case-insensitively and replaces them with `,(0,c.jsx)(t.code,{children:`componentName`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string | undefined`}),` — The original text.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — The component name to replace.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentName: string`}),` — The new component name.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — The modified text with new tags, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the original text was not provided.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Click me</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Click me</AppButton>'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};