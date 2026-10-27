import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignName`}),`
`,(0,c.jsx)(t.h1,{id:`designname-class`,children:`DesignName Class`}),`
`,(0,c.jsxs)(t.p,{children:[`BEM naming helper for design components. The constructor splits `,(0,c.jsx)(t.code,{children:`design.component`}),` at the first two segments, normalizes each segment, and caches the design and component class names.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cached names`}),` — independent naming state for each instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`BEM helpers`}),` — modifiers use `,(0,c.jsx)(t.code,{children:`--`}),`; elements use `,(0,c.jsx)(t.code,{children:`__`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CSS variables`}),` — system custom properties use the `,(0,c.jsx)(t.code,{children:`-sys-`}),` segment.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(name: string)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Design-prefixed component name, such as d1.button.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Name arguments may include numbers and `,(0,c.jsx)(t.code,{children:`undefined`}),`. They are joined without filtering; `,(0,c.jsx)(t.code,{children:`0`}),` is retained and `,(0,c.jsx)(t.code,{children:`undefined`}),` produces an empty segment. With no segments, the separator suffix remains. Each source segment uses `,(0,c.jsx)(t.code,{children:`toCamelCase`}),`; for example, `,(0,c.jsx)(t.code,{children:`d1.buttonGroup`}),` becomes `,(0,c.jsx)(t.code,{children:`d1-buttonGroup`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignName } from '@dxtmisha/functional'

const naming = /*#__PURE__*/ new DesignName('d1.buttonGroup')
naming.getName() // 'd1-buttonGroup'
naming.getStatusClass('size', 0) // 'd1-buttonGroup--size--0'
naming.getSubClass('label') // 'd1-buttonGroup__label'
naming.getStyle('width') // '--d1-buttonGroup-sys-width'
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`base-names`,children:`Base names`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — Returns the first normalized name segment.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — Returns the normalized component class name.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`bem-and-css-variables`,children:`BEM and CSS variables`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStatusClass(...names: (string | number | undefined)[]): string`}),` — Joins modifier segments using `,(0,c.jsx)(t.code,{children:`--`}),` after the component name.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSubClass(...names: (string | number | undefined)[]): string`}),` — Joins element segments using `,(0,c.jsx)(t.code,{children:`__`}),` after the component name.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStyle(...names: (string | number | undefined)[]): string`}),` — Builds a CSS custom property name with the `,(0,c.jsx)(t.code,{children:`--`}),` prefix and `,(0,c.jsx)(t.code,{children:`-sys-`}),` namespace.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};