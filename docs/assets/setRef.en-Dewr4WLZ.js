import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/setRef - Value Update`}),`
`,(0,c.jsx)(t.h1,{id:`setref`,children:(0,c.jsx)(t.code,{children:`setRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility function that updates the value of a reactive `,(0,c.jsx)(t.code,{children:`Ref`}),`. It includes a built-in check to ensure that the update only occurs if the new value is different from the current one, preventing unnecessary reactivity triggers.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<T>`}),` — The reactive `,(0,c.jsx)(t.code,{children:`Ref`}),` element to be updated.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The new value to assign to the `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Updates the value to 'loading'
setRef(status, 'loading')

// This call will be ignored because the value is already 'loading'
setRef(status, 'loading')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};