import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getRandomText - Generate random text`}),`
`,(0,c.jsx)(n.h1,{id:`getrandomtext`,children:(0,c.jsx)(n.code,{children:`getRandomText`})}),`
`,(0,c.jsx)(n.p,{children:`Generates a string consisting of a random number of "words". A word is defined as a sequence of identical symbols of a specific length. This function is useful for populating UI layouts with placeholder text that mimics the structure of real text without carrying any meaning or language constraints.`}),`
`,(0,c.jsxs)(n.p,{children:[`It relies on the `,(0,c.jsx)(n.code,{children:`random`}),` (for choosing random numbers) and `,(0,c.jsx)(n.code,{children:`strFill`}),` (for repeating the symbol) utility functions.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number`}),` — Minimum number of words in the resulting string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Maximum number of words in the resulting string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`symbol: string`}),` — (Optional) The character used to construct the generated words. Defaults to `,(0,c.jsx)(n.code,{children:`#`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthMin: number`}),` — (Optional) Minimum length of a single word. Defaults to `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthMax: number`}),` — (Optional) Maximum length of a single word. Defaults to `,(0,c.jsx)(n.code,{children:`12`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A string of space-separated generated words.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Generate between 2 and 5 words made of '#' symbols
// Length of each word ranges from 2 to 12 chars
console.log(getRandomText(2, 5)) // '#### ## #######'

// Exact number of words (3) with a specific symbol ('*')
// Word lengths are strictly 5 chars
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};