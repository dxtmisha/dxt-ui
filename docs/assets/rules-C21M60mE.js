import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Dqnce8mp.js";import{M as i}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/styles/en/Rules"}),`
`,e.jsx(n.h1,{id:"rules",children:"Rules"}),`
`,e.jsx(n.p,{children:"A set of SCSS functions for working with maps, selectors, and strings with CSS Custom Properties support."}),`
`,e.jsx(n.h2,{id:"validation-functions",children:"Validation Functions"}),`
`,e.jsx(n.h3,{id:"iscustomvar",children:e.jsx(n.code,{children:"isCustomVar"})}),`
`,e.jsx(n.p,{children:"Checks if a value is a CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — value to check"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@if isCustomVar(var(--color)) { } // true
@if isCustomVar(#ff0000) { } // false
`})}),`
`,e.jsx(n.h2,{id:"map-functions",children:"Map Functions"}),`
`,e.jsx(n.h3,{id:"getmapitem",children:e.jsx(n.code,{children:"getMapItem"})}),`
`,e.jsx(n.p,{children:"Returns value from nested map by key path."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$map"})," — input map"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$index"})," — key or list of keys for traversal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$default: null"})," — default value if not found"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"*"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$value: getMapItem($map, 'key');
$nested: getMapItem($map, ('level1', 'level2'));
`})}),`
`,e.jsx(n.h3,{id:"getmapbyindex",children:e.jsx(n.code,{children:"getMapByIndex"})}),`
`,e.jsx(n.p,{children:"Returns value from map by single key."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$map"})," — input map"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$index"})," — key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$default: null"})," — default value if not found"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"*"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$value: getMapByIndex($map, 'key', 'default');
`})}),`
`,e.jsx(n.h3,{id:"setmapitem",children:e.jsx(n.code,{children:"setMapItem"})}),`
`,e.jsx(n.p,{children:"Updates value in map by key."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$map"})," — input map"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$index"})," — key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — value to save"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Map"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$updated: setMapItem($map, 'key', 'new-value');
`})}),`
`,e.jsx(n.h2,{id:"selector-functions",children:"Selector Functions"}),`
`,e.jsx(n.h3,{id:"getfirstselector",children:e.jsx(n.code,{children:"getFirstSelector"})}),`
`,e.jsx(n.p,{children:"Returns name of first selector."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$selector: &"})," — selector (defaults to current selector)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$name: getFirstSelector(); // returns first selector name
`})}),`
`,e.jsx(n.h2,{id:"string-functions",children:"String Functions"}),`
`,e.jsx(n.h3,{id:"strtolist",children:e.jsx(n.code,{children:"strToList"})}),`
`,e.jsx(n.p,{children:"Splits string by separator into list."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — input string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$separator: '.'"})," — boundary string"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"List"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$list: strToList('class.name', '.'); // ('class', 'name')
`})}),`
`,e.jsx(n.h3,{id:"strreplace",children:e.jsx(n.code,{children:"strReplace"})}),`
`,e.jsx(n.p,{children:"Replaces all occurrences of search string with replacement."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — string being searched"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$pattern"})," — value being searched"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$replacement"})," — replacement value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$result: strReplace('hello-world', '-', '_'); // 'hello_world'
`})})]})}function x(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
