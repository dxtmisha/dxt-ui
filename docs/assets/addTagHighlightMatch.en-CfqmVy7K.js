import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"@dxtmisha/en/functional-basic/Functions/addTagHighlightMatch - Highlight matches in a string"}),`
`,s.jsx(n.h1,{id:"addtaghighlightmatch",children:s.jsx(n.code,{children:"addTagHighlightMatch"})}),`
`,s.jsxs(n.p,{children:["A utility for highlighting matches in a string by wrapping them in a ",s.jsx(n.code,{children:"<span>"})," HTML tag with a specified class. It uses ",s.jsx(n.code,{children:"getSeparatingSearchExp"})," to support multi-word search (space-separated)."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Parameters:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"value: string"})," — The initial string to process."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"search?: string"})," — The search string (one or more words separated by spaces)."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"className: string = 'sys-highlight-match'"})," — The CSS class to be added to the ",s.jsx(n.code,{children:"<span>"})," tag."]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Returns:"}),`
`,s.jsx(n.code,{children:"string"})," — The string with HTML tags added for highlighting."]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Highlight a single word
addTagHighlightMatch('Hello world', 'hello') 
// '<span class="sys-highlight-match">Hello</span> world'

// Highlight multiple words (OR logic)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Custom class
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'
`})})]})}function o(t={}){const{wrapper:n}={...e(),...t.components};return n?s.jsx(n,{...t,children:s.jsx(i,{...t})}):i(t)}export{o as default};
