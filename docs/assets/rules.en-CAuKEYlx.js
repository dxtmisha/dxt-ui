import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/rules - System Rules and Helper Functions`}),`
`,(0,c.jsx)(n.h1,{id:`system-rules`,children:`System Rules`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library provides low-level helper functions for type checking, nested map tree traversal, string manipulation, and selector extraction.`]}),`
`,(0,c.jsx)(n.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsx)(n.h3,{id:`css-property--selector-helpers`,children:`CSS Property & Selector Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isCustomVar($value): Boolean`}),` — Checks if a value is formatted as a CSS Custom Property (e.g., starts with `,(0,c.jsx)(n.code,{children:`var(`}),` and ends with `,(0,c.jsx)(n.code,{children:`)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstSelector($selector: &): String`}),` — Extracts the name of the first simple selector from the current nesting context.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`map--data-helpers`,children:`Map & Data Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMapItem($map, $index, $default: null): Any`}),` — Recursively traverses a nested map using a list of keys, or retrieves a value by a single key. Returns `,(0,c.jsx)(n.code,{children:`$default`}),` if not found.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMapByIndex($map, $index, $default: null): Any`}),` — Directly retrieves a value from a map by its key, returning `,(0,c.jsx)(n.code,{children:`$default`}),` if the key does not exist.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setMapItem($map, $index, $value): Map`}),` — Merges or sets a key-value pair in a map and returns the updated map.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`string-manipulation`,children:`String Manipulation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`strToList($value, $separator: '.'): List`}),` — Splits a string into a list of substrings using the specified separator.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`strReplace($value, $pattern, $replacement): String`}),` — Replaces all occurrences of a search substring within a target string recursively.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};