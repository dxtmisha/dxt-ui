import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/render - Component Rendering with Keys`}),`
`,(0,c.jsx)(t.h1,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`A wrapper around Vue's `,(0,c.jsx)(t.code,{children:`h`}),` (hyperscript) function that provides automatic key generation for components. It ensures that components have unique keys for efficient rendering and transition handling, especially when dealing with lists or dynamic elements.`]}),`
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
// key => '.div.container'

// Renders a component with a specific index for key generation
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,(0,c.jsx)(t.h3,{id:`key-generation`,children:`Key Generation`}),`
`,(0,c.jsxs)(t.p,{children:[`The key (`,(0,c.jsx)(t.code,{children:`key`}),`) for the Vue component is formed `,(0,c.jsx)(t.strong,{children:`additively`}),` (by sequential appending). It always starts with a dot followed by the component name (`,(0,c.jsx)(t.code,{children:`.name`}),`), and other values are appended with dots (if they exist):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.name`})}),` — if `,(0,c.jsx)(t.code,{children:`name`}),` is a string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.index`}),` — from the third argument of the `,(0,c.jsx)(t.code,{children:`render`}),` function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.props.index`}),` — if provided in the properties object and is a string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.className`}),` — if a class is specified in `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.props.id`}),` — if an ID is specified in `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`This ensures key uniqueness even when component names are identical.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};