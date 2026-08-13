import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/getClassName - Get Class Name from Props`}),`
`,(0,c.jsx)(t.h1,{id:`getclassname`,children:(0,c.jsx)(t.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility function that extracts the `,(0,c.jsx)(t.code,{children:`class`}),` property from a given properties object. It ensures that the returned value is a string, which is useful for consistently obtaining class names when rendering components or elements.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — The properties object of the component, which may contain a `,(0,c.jsx)(t.code,{children:`class`}),` property.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — The class name as a string if it exists and is a string, otherwise `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getClassName } from '@dxtmisha/functional'

// Returns 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Returns undefined as 'class' is missing
const className2 = getClassName({ otherProp: 1 })

// Returns undefined as 'class' is not a string
const className3 = getClassName({ class: 123 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};