import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isDifferent - Check for object differences`}),`
`,(0,c.jsx)(t.h1,{id:`isdifferent`,children:(0,c.jsx)(t.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(t.p,{children:`Performs an assessment to determine if two provided objects differ from each other.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function operates by initially comparing the total number of keys (properties) in each object. If those values match, it proceeds to execute a rigid value comparison of those keys through the internal `,(0,c.jsx)(t.code,{children:`forEach`}),` utility loop.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectItem<T>`}),` — The current (new) object or data entity being evaluated.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`old: ObjectItem<T>`}),` — The previous (old) reference object to compare against.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if there are any differences detected between the objects (either by property count mismatch or strict value inequality), or `,(0,c.jsx)(t.code,{children:`false`}),` if they are entirely identical.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Objects differ in the \`active\` property
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Objects are completely identical
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};