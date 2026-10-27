import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isDifferent - Check for object differences`}),`
`,(0,c.jsx)(t.h1,{id:`isdifferent`,children:(0,c.jsx)(t.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(t.p,{children:`Performs a shallow comparison to determine if two provided objects differ from each other.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function first executes a fast referential equality check $O(1)$. If the references differ, it compares the number of own keys in both objects. If the key counts match, it verifies key ownership in the comparison object and checks property equality using `,(0,c.jsx)(t.code,{children:`Object.is`}),` semantics (handling `,(0,c.jsx)(t.code,{children:`NaN`}),` correctly and distinguishing missing keys from `,(0,c.jsx)(t.code,{children:`undefined`}),` values).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectItem<T>`}),` — The current (new) object or data entity being evaluated.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`old: ObjectItem<T>`}),` — The previous (old) reference object to compare against.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if differences are detected between the objects (by property count, key presence, or value inequality), or `,(0,c.jsx)(t.code,{children:`false`}),` if they are identical.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Objects differ in the \`active\` property
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Objects are completely identical
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};