import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getRandomText - Generate random text`}),`
`,(0,c.jsx)(t.h1,{id:`getrandomtext`,children:(0,c.jsx)(t.code,{children:`getRandomText`})}),`
`,(0,c.jsx)(t.p,{children:`Generates a string consisting of a random number of "words". A word is defined as a sequence of identical symbols of a specific length. This function is useful for populating UI layouts with placeholder text that mimics the structure of real text without carrying any meaning or language constraints.`}),`
`,(0,c.jsxs)(t.p,{children:[`It relies on the `,(0,c.jsx)(t.code,{children:`random`}),` (for choosing random numbers) and `,(0,c.jsx)(t.code,{children:`strFill`}),` (for repeating the symbol) utility functions.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number`}),` — Minimum number of words in the resulting string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Maximum number of words in the resulting string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`symbol: string`}),` — (Optional) The character used to construct the generated words. Defaults to `,(0,c.jsx)(t.code,{children:`#`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthMin: number`}),` — (Optional) Minimum length of a single word. Defaults to `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthMax: number`}),` — (Optional) Maximum length of a single word. Defaults to `,(0,c.jsx)(t.code,{children:`12`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A string of space-separated generated words.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Generate between 2 and 5 words made of '#' symbols
// Length of each word ranges from 2 to 12 chars
console.log(getRandomText(2, 5)) // '#### ## #######'

// Exact number of words (3) with a specific symbol ('*')
// Word lengths are strictly 5 chars
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};