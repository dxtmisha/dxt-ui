import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/render - Component Rendering with Keys`}),`
`,(0,c.jsx)(t.h1,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`A wrapper around Vue's `,(0,c.jsx)(t.code,{children:`h`}),` (hyperscript) function that automatically generates component keys from stable identifiers.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | any`}),` — The name or tag of the component to render.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — The properties to pass to the component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — The children or slots of the component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: string`}),` — An optional index or identifier to use for key generation.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`VNode`}),` — The rendered virtual node.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { render } from '@dxtmisha/functional'

// Renders a div with an automatically generated key
const vnode = render('div', { class: 'container' }, 'Hello World')
// key => 'div'

// Renders a component with a specific index for key generation
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => 'my-component.item-1'
`})}),`
`,(0,c.jsx)(t.h3,{id:`key-generation`,children:`Key Generation`}),`
`,(0,c.jsxs)(t.p,{children:[`An explicit `,(0,c.jsx)(t.code,{children:`props.key`}),` is preserved. Otherwise, the key is generated from these identifiers in order; a string component name has no leading dot, and subsequent identifiers are appended with dots:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`name`})}),` — if `,(0,c.jsx)(t.code,{children:`name`}),` is a string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.index`})}),` — from the fourth argument of `,(0,c.jsx)(t.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.props.index`})}),` — if provided as a string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.props.id`})}),` — if an ID is specified in `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`CSS classes do not affect the generated key, so changing them preserves the DOM node and component state. An intentional change to an explicit `,(0,c.jsx)(t.code,{children:`props.key`}),` can still replace the node. Supply unique stable keys or identifiers for sibling list items; the component name alone does not guarantee uniqueness.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};