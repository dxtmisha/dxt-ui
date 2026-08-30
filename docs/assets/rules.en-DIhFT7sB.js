import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/rules - System Rules and Helper Functions`}),`
`,(0,c.jsx)(t.h1,{id:`system-rules`,children:`System Rules`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` library provides low-level helper functions for type checking, nested map tree traversal, string manipulation, and selector extraction.`]}),`
`,(0,c.jsx)(t.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsx)(t.h3,{id:`css-property--selector-helpers`,children:`CSS Property & Selector Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCustomVar($value): Boolean`}),` — Checks if a value is formatted as a CSS Custom Property (e.g., starts with `,(0,c.jsx)(t.code,{children:`var(`}),` and ends with `,(0,c.jsx)(t.code,{children:`)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstSelector($selector: &): String`}),` — Extracts the name of the first simple selector from the current nesting context.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`map--data-helpers`,children:`Map & Data Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMapItem($map, $index, $default: null): Any`}),` — Recursively traverses a nested map using a list of keys, or retrieves a value by a single key. Returns `,(0,c.jsx)(t.code,{children:`$default`}),` if not found.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMapByIndex($map, $index, $default: null): Any`}),` — Directly retrieves a value from a map by its key, returning `,(0,c.jsx)(t.code,{children:`$default`}),` if the key does not exist.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMapItem($map, $index, $value): Map`}),` — Merges or sets a key-value pair in a map and returns the updated map.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`string-manipulation`,children:`String Manipulation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strToList($value, $separator: '.'): List`}),` — Splits a string into a list of substrings using the specified separator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strReplace($value, $pattern, $replacement): String`}),` — Replaces all occurrences of a search substring within a target string recursively.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};