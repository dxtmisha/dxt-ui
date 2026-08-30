import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/constructor/properties/# About properties.json`}),`
`,(0,c.jsx)(t.h1,{id:`configuration-propertiesjson`,children:`Configuration (properties.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`properties.json`}),` file is a declarative manifest of your component. In it, you describe the structure, styles, states, and parameters, which are then automatically transformed into production-ready SCSS code and typed TypeScript interfaces (`,(0,c.jsx)(t.code,{children:`props.ts`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-work-with-this-file`,children:`How to work with this file?`}),`
`,(0,c.jsxs)(t.p,{children:[`Instead of manually writing hundreds of lines of CSS for every pseudo-class or media query, you populate a `,(0,c.jsx)(t.strong,{children:`property tree`}),`. The system analyzes this file and performs all the routine work for you:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Style Generation (SCSS)`}),`: Creates BEM-style classes, variables, and themes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Interface Generation (Props)`}),`: Forms public component properties for Vue/React.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Synchronization`}),`: Ensures that styles and the programmatic interface always correspond to each other.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`core-concept`,children:`Core Concept`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tokens`}),`: JSON tree nodes representing specific CSS properties or nested objects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Types & Flags (_type, _var...)`}),`: Service parameters defining the node processing logic (generating variables, states, or exporting to Props).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Links`}),`: The `,(0,c.jsx)(t.code,{children:`{...}`}),` system for inheriting values from other tokens or global design variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Markers & Shortcuts`}),`: Special prefixes (`,(0,c.jsx)(t.code,{children:`~`}),`, `,(0,c.jsx)(t.code,{children:`group|`}),`) and link placeholders (`,(0,c.jsx)(t.code,{children:`?`}),`, `,(0,c.jsx)(t.code,{children:`??`}),`) that accelerate the creation of complex configurations.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};