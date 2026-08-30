import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/position - Position`}),`
`,(0,c.jsx)(t.h1,{id:`element-positioning`,children:`Element Positioning`}),`
`,(0,c.jsx)(t.p,{children:`The library provides mixins for element coordinate positioning, absolute layers, pseudo-elements, and direction-aware layout boundaries.`}),`
`,(0,c.jsx)(t.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsx)(t.h3,{id:`standard-position-coordinates`,children:`Standard Position Coordinates`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`inset($value)`}),` — Sets the `,(0,c.jsx)(t.code,{children:`inset`}),` property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`horizon($value)`}),` — Sets horizontal alignment (sets both `,(0,c.jsx)(t.code,{children:`left`}),` and `,(0,c.jsx)(t.code,{children:`right`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`vertically($value)`}),` — Sets vertical alignment (sets both `,(0,c.jsx)(t.code,{children:`top`}),` and `,(0,c.jsx)(t.code,{children:`bottom`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`top($value)`}),` — Sets `,(0,c.jsx)(t.code,{children:`top`}),` property and includes `,(0,c.jsx)(t.code,{children:`horizon`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`bottom($value)`}),` — Sets `,(0,c.jsx)(t.code,{children:`bottom`}),` property and includes `,(0,c.jsx)(t.code,{children:`horizon`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`direction-aware-positioning`,children:`Direction-Aware Positioning`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`left($value)`}),` — Sets `,(0,c.jsx)(t.code,{children:`inset-inline-start`}),` for LTR and RTL compatible positioning.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`right($value)`}),` — Sets `,(0,c.jsx)(t.code,{children:`inset-inline-end`}),` for LTR and RTL compatible positioning.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`__positionDir()`}),` — Binds physical positions to system direction properties (`,(0,c.jsx)(t.code,{children:`left: var(--d-dir-position-left)`}),` and `,(0,c.jsx)(t.code,{children:`right: var(--d-dir-position-right)`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`absolute-layout-structures`,children:`Absolute Layout Structures`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`absolute($value)`}),` — Sets absolute positioning with inset.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`absoluteTop($value)`}),` — Sets absolute positioning aligned to the top.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`absoluteBottom($value)`}),` — Sets absolute positioning aligned to the bottom.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`absoluteAfter($value)`}),` — Configures parent relative container and absolute position styles on its `,(0,c.jsx)(t.code,{children:`&::after`}),` pseudo-element.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};