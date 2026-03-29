import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/en/Rules`}),`
`,(0,c.jsx)(n.h1,{id:`rules`,children:`Rules`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS functions for working with maps, selectors, and strings with CSS Custom Properties support.`}),`
`,(0,c.jsx)(n.h2,{id:`validation-functions`,children:`Validation Functions`}),`
`,(0,c.jsx)(n.h3,{id:`iscustomvar`,children:(0,c.jsx)(n.code,{children:`isCustomVar`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if a value is a CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — value to check`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Boolean`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@if isCustomVar(var(--color)) { } // true
@if isCustomVar(#ff0000) { } // false
`})}),`
`,(0,c.jsx)(n.h2,{id:`map-functions`,children:`Map Functions`}),`
`,(0,c.jsx)(n.h3,{id:`getmapitem`,children:(0,c.jsx)(n.code,{children:`getMapItem`})}),`
`,(0,c.jsx)(n.p,{children:`Returns value from nested map by key path.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$map`}),` — input map`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$index`}),` — key or list of keys for traversal`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$default: null`}),` — default value if not found`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`*`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getMapItem($map, 'key');
$nested: getMapItem($map, ('level1', 'level2'));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getmapbyindex`,children:(0,c.jsx)(n.code,{children:`getMapByIndex`})}),`
`,(0,c.jsx)(n.p,{children:`Returns value from map by single key.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$map`}),` — input map`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$index`}),` — key`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$default: null`}),` — default value if not found`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`*`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getMapByIndex($map, 'key', 'default');
`})}),`
`,(0,c.jsx)(n.h3,{id:`setmapitem`,children:(0,c.jsx)(n.code,{children:`setMapItem`})}),`
`,(0,c.jsx)(n.p,{children:`Updates value in map by key.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$map`}),` — input map`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$index`}),` — key`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — value to save`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Map`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$updated: setMapItem($map, 'key', 'new-value');
`})}),`
`,(0,c.jsx)(n.h2,{id:`selector-functions`,children:`Selector Functions`}),`
`,(0,c.jsx)(n.h3,{id:`getfirstselector`,children:(0,c.jsx)(n.code,{children:`getFirstSelector`})}),`
`,(0,c.jsx)(n.p,{children:`Returns name of first selector.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$selector: &`}),` — selector (defaults to current selector)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$name: getFirstSelector(); // returns first selector name
`})}),`
`,(0,c.jsx)(n.h2,{id:`string-functions`,children:`String Functions`}),`
`,(0,c.jsx)(n.h3,{id:`strtolist`,children:(0,c.jsx)(n.code,{children:`strToList`})}),`
`,(0,c.jsx)(n.p,{children:`Splits string by separator into list.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — input string`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$separator: '.'`}),` — boundary string`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`List`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$list: strToList('class.name', '.'); // ('class', 'name')
`})}),`
`,(0,c.jsx)(n.h3,{id:`strreplace`,children:(0,c.jsx)(n.code,{children:`strReplace`})}),`
`,(0,c.jsx)(n.p,{children:`Replaces all occurrences of search string with replacement.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — string being searched`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$pattern`}),` — value being searched`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$replacement`}),` — replacement value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$result: strReplace('hello-world', '-', '_'); // 'hello_world'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};