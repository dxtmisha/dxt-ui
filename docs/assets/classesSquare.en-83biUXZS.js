import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`custom-spacer-classes-classessquare`,children:`Custom Spacer Classes (classesSquare)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`classesSquare`}),` property allows you to specify custom CSS classes to be applied directly to the placeholder spacer element (square) when it is rendered:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Spacer Styling`}),` - customize borders, background colors, or shadow effects for the active insertion gap`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Responsive Layout`}),` - supply grid or spacing classes to perfectly align the spacer size with adjacent items`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Array/String Support`}),` - accepts either a single string of space-separated class names or an array of strings`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`By default, the placeholder element copies the base classes of the element currently hovered. Classes provided via `,(0,c.jsx)(t.code,{children:`classesSquare`}),` are appended to extend the class list.`]}),`
`,(0,c.jsx)(i,{code:`
<DraggableWrapper classesSquare="custom-spacer border-dashed" />
<DraggableWrapper :classesSquare="['custom-spacer', 'bg-light']" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};