import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/isDifferent - Check for object differences`}),`
`,(0,c.jsx)(n.h1,{id:`isdifferent`,children:(0,c.jsx)(n.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(n.p,{children:`Performs an assessment to determine if two provided objects differ from each other.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function operates by initially comparing the total number of keys (properties) in each object. If those values match, it proceeds to execute a rigid value comparison of those keys through the internal `,(0,c.jsx)(n.code,{children:`forEach`}),` utility loop.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ObjectItem<T>`}),` — The current (new) object or data entity being evaluated.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`old: ObjectItem<T>`}),` — The previous (old) reference object to compare against.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if there are any differences detected between the objects (either by property count mismatch or strict value inequality), or `,(0,c.jsx)(n.code,{children:`false`}),` if they are entirely identical.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Objects differ in the \`active\` property
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Objects are completely identical
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};