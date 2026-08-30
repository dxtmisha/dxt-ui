import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/12. Regular Expressions`}),`
`,(0,c.jsx)(t.h1,{id:`regular-expressions`,children:`Regular Expressions`}),`
`,(0,c.jsx)(t.p,{children:`A set of utilities for simplifying work with regular expressions. Includes methods for safely escaping user input and generating complex patterns for "contains all words" or "contains any word" searches.`}),`
`,(0,c.jsx)(t.h2,{id:`escaping-and-creation`,children:`Escaping and Creation`}),`
`,(0,c.jsx)(t.p,{children:`Safely use strings inside regular expressions without the risk of syntax errors.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { escapeExp, getExp } from '@dxtmisha/functional-basic'

// 1. Escaping special characters (.*+?^\${}()|[\\]\\)
const safeText = escapeExp('price block ($)') // 'price block \\(\\$\\)'

// 2. Quick RegExp object creation with flags
const regex = getExp('search-term', 'ig') 
`})}),`
`,(0,c.jsx)(t.h2,{id:`search-patterns`,children:`Search Patterns`}),`
`,(0,c.jsx)(t.p,{children:`Specialized generators for implementing search and filtering functionality.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { 
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
`,(0,c.jsx)(t.h2,{id:`practical-example`,children:`Practical Example`}),`
`,(0,c.jsx)(t.p,{children:`Usage in data array filtering:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const search = 'John Developer'
const regex = getSearchExp(search)

const users = [
  { name: 'John Doe', job: 'Senior Developer' },
  { name: 'Peter Johnson', job: 'Designer' }
]

// Will find the first user, as their data contains both words
const filtered = users.filter(u => \`\${u.name} \${u.job}\`.match(regex))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};