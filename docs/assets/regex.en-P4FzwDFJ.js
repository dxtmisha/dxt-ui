import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# Regular Expressions`}),`
`,(0,c.jsx)(n.h1,{id:`regular-expressions`,children:`Regular Expressions`}),`
`,(0,c.jsx)(n.p,{children:`A set of utilities for simplifying work with regular expressions. Includes methods for safely escaping user input and generating complex patterns for "contains all words" or "contains any word" searches.`}),`
`,(0,c.jsx)(n.h2,{id:`escaping-and-creation`,children:`Escaping and Creation`}),`
`,(0,c.jsx)(n.p,{children:`Safely use strings inside regular expressions without the risk of syntax errors.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { escapeExp, getExp } from '@dxtmisha/functional-basic'

// 1. Escaping special characters (.*+?^\${}()|[\\]\\)
const safeText = escapeExp('price block ($)') // 'price block \\(\\$\\)'

// 2. Quick RegExp object creation with flags
const regex = getExp('search-term', 'ig') 
`})}),`
`,(0,c.jsx)(n.h2,{id:`search-patterns`,children:`Search Patterns`}),`
`,(0,c.jsx)(n.p,{children:`Specialized generators for implementing search and filtering functionality.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { 
  getSearchExp, 
  getSeparatingSearchExp, 
  getExactSearchExp 
} from '@dxtmisha/functional-basic'

// 1. "Contains all words" search (any order)
// Good for: "red car buy" -> matches "buy red car"
const searchAll = getSearchExp('red car')

// 2. "Contains any word" search (OR-based)
const searchAny = getSeparatingSearchExp('apple orange') // (apple|orange)

// 3. Exact word match
const exact = getExactSearchExp('React') // Matches 'React', but not 'Reactions'
`})}),`
`,(0,c.jsx)(n.h2,{id:`practical-example`,children:`Practical Example`}),`
`,(0,c.jsx)(n.p,{children:`Usage in data array filtering:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const search = 'John Developer'
const regex = getSearchExp(search)

const users = [
  { name: 'John Doe', job: 'Senior Developer' },
  { name: 'Peter Johnson', job: 'Designer' }
]

// Will find the first user, as their data contains both words
const filtered = users.filter(u => \`\${u.name} \${u.job}\`.match(regex))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};