import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getSeparatingSearchExp - Build a RegExp for space-separated word search`}),`
`,(0,c.jsx)(t.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(t.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that builds a case-insensitive global `,(0,c.jsx)(t.code,{children:`RegExp`}),` for searching strings containing `,(0,c.jsx)(t.strong,{children:`any`}),` of the words from the search query (separated by whitespace), or clones a provided `,(0,c.jsx)(t.code,{children:`RegExp`}),` preserving its pattern and flags.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Unique words are split by whitespace, sorted by length in descending order, escaped against regex metacharacters, and joined with the alternation operator `,(0,c.jsx)(t.code,{children:`|`}),` inside a capturing group `,(0,c.jsx)(t.code,{children:`(...)`}),`. This is essential for search filtering, tokenization, and highlight matching.`]}),`
`,(0,c.jsx)(t.h3,{id:`key-features`,children:`Key Features:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multi-Word Disjunction Search (OR Logic)`}),`: Splits queries by any whitespace characters (`,(0,c.jsx)(t.code,{children:`/\\s+/`}),`) and joins words with `,(0,c.jsx)(t.code,{children:`|`}),` inside a capturing group `,(0,c.jsx)(t.code,{children:`(word1|word2)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Prefix Shadowing Protection`}),`: Automatically sorts words by length descending so longer compound words take precedence over prefixes in the regular expression (`,(0,c.jsx)(t.code,{children:`caterpillar`}),` matches completely rather than being truncated to `,(0,c.jsx)(t.code,{children:`cat`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Case-Insensitive Deduplication`}),`: Removes duplicate words case-insensitively before generating alternation branches, keeping the regex compact (e.g., `,(0,c.jsx)(t.code,{children:`apple Apple APPLE`}),` becomes a single `,(0,c.jsx)(t.code,{children:`(apple)`}),` token with the `,(0,c.jsx)(t.code,{children:`ig`}),` flags).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Comprehensive Metacharacter Escaping`}),`: Automatically escapes all regex metacharacters via `,(0,c.jsx)(t.code,{children:`escapeExp`}),` (`,(0,c.jsx)(t.code,{children:`.`}),`, `,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`+`}),`, `,(0,c.jsx)(t.code,{children:`?`}),`, `,(0,c.jsx)(t.code,{children:`$`}),`, `,(0,c.jsx)(t.code,{children:`[`}),`, `,(0,c.jsx)(t.code,{children:`]`}),`, `,(0,c.jsx)(t.code,{children:`(`}),`, `,(0,c.jsx)(t.code,{children:`)`}),`, `,(0,c.jsx)(t.code,{children:`|`}),`, etc.), preventing syntax errors and ReDoS vulnerabilities from untrusted user input.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe RegExp Cloning`}),`: When an existing `,(0,c.jsx)(t.code,{children:`RegExp`}),` instance is passed, it creates a fresh clone with `,(0,c.jsx)(t.code,{children:`lastIndex = 0`}),`, eliminating cross-call state contamination and race conditions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Deterministic Safe Fallback `,(0,c.jsx)(t.code,{children:`/(?!)/`})]}),`: For empty queries, whitespace-only strings, exceeded length limits, or empty regular expressions (`,(0,c.jsx)(t.code,{children:`/(?:)/`}),` or `,(0,c.jsx)(t.code,{children:`new RegExp('')`}),`), it returns the negative lookahead pattern `,(0,c.jsx)(t.code,{children:`/(?!)/`}),`, which is guaranteed never to match anything and prevents infinite loops.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Isomorphic & SSR Safe`}),`: Pure function with zero dependencies on browser globals (`,(0,c.jsx)(t.code,{children:`window`}),` or `,(0,c.jsx)(t.code,{children:`document`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string | RegExp`}),` — A search string consisting of one or more space-separated words, or a `,(0,c.jsx)(t.code,{children:`RegExp`}),` object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — (Optional) The maximum allowed length of the search string (ignored if a `,(0,c.jsx)(t.code,{children:`RegExp`}),` is passed). Defaults to `,(0,c.jsx)(t.code,{children:`128`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — A regular expression with flags `,(0,c.jsx)(t.code,{children:`ig`}),` (case-insensitive, global) for string queries, or a cloned `,(0,c.jsx)(t.code,{children:`RegExp`}),` if a `,(0,c.jsx)(t.code,{children:`RegExp`}),` was passed. If the search string is empty, `,(0,c.jsx)(t.code,{children:`limit <= 0`}),`, exceeds `,(0,c.jsx)(t.code,{children:`limit`}),`, or an empty `,(0,c.jsx)(t.code,{children:`RegExp`}),` (`,(0,c.jsx)(t.code,{children:`/(?:)/`}),` or `,(0,c.jsx)(t.code,{children:`new RegExp('')`}),`) is passed, it returns `,(0,c.jsx)(t.code,{children:`/(?!)/`}),` (a regex that never matches anything).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

// 1. Standard multi-word search (OR logic)
const searchExpression = getSeparatingSearchExp('apple banana')

console.log('an apple and banana'.match(searchExpression)) 
// ['apple', 'banana']

// 2. Prefix shadowing prevention (sorted by descending length)
// 'caterpillar' is evaluated before 'cat'
const prefixExpression = getSeparatingSearchExp('cat caterpillar')
const matchedWord = 'caterpillar'.match(prefixExpression)?.[0]
console.log(matchedWord) // 'caterpillar'

// 3. Automatic metacharacter escaping
const symbolsExpression = getSeparatingSearchExp('C++ $10 .')
console.log(symbolsExpression.test('Code in C++')) // true
console.log(symbolsExpression.test('Total: $10'))  // true

// 4. Cloning existing RegExp with lastIndex isolation
const originalRegExp = /match/g
originalRegExp.lastIndex = 3

const clonedExpression = getSeparatingSearchExp(originalRegExp)
console.log(clonedExpression.lastIndex) // 0
console.log(originalRegExp.lastIndex)   // 3 (original remains unchanged)

// 5. Safe handling of empty strings and limits
getSeparatingSearchExp('').toString()      // '/(?!)/' (never matches)
getSeparatingSearchExp('   ').toString()   // '/(?!)/'
getSeparatingSearchExp('text', 0)          // '/(?!)/'

// 6. Text highlighting and tokenization
const highlightExpression = getSeparatingSearchExp('vue vite')
const sourceText = 'Awesome vue and vite setup'

const highlightedHtml = sourceText.replace(
  highlightExpression,
  matchedText => \`<mark>\${matchedText}</mark>\`
)
// 'Awesome <mark>vue</mark> and <mark>vite</mark> setup'

const tokens = sourceText.split(highlightExpression)
// ['Awesome ', 'vue', ' and ', 'vite', ' setup']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};