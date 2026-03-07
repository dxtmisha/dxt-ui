import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getRandomText - Generate random text"}),`
`,e.jsx(n.h1,{id:"getrandomtext",children:e.jsx(n.code,{children:"getRandomText"})}),`
`,e.jsx(n.p,{children:'Generates a string consisting of a random number of "words". A word is defined as a sequence of identical symbols of a specific length. This function is useful for populating UI layouts with placeholder text that mimics the structure of real text without carrying any meaning or language constraints.'}),`
`,e.jsxs(n.p,{children:["It relies on the ",e.jsx(n.code,{children:"random"})," (for choosing random numbers) and ",e.jsx(n.code,{children:"strFill"})," (for repeating the symbol) utility functions."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number"})," — Minimum number of words in the resulting string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — Maximum number of words in the resulting string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"symbol: string"})," — (Optional) The character used to construct the generated words. Defaults to ",e.jsx(n.code,{children:"#"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lengthMin: number"})," — (Optional) Minimum length of a single word. Defaults to ",e.jsx(n.code,{children:"2"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lengthMax: number"})," — (Optional) Maximum length of a single word. Defaults to ",e.jsx(n.code,{children:"12"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — A string of space-separated generated words."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Generate between 2 and 5 words made of '#' symbols
// Length of each word ranges from 2 to 12 chars
console.log(getRandomText(2, 5)) // '#### ## #######'

// Exact number of words (3) with a specific symbol ('*')
// Word lengths are strictly 5 chars
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
