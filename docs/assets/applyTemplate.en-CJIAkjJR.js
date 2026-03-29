import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/applyTemplate - Applying a template to text`}),`
`,(0,c.jsx)(n.h1,{id:`applytemplate`,children:(0,c.jsx)(n.code,{children:`applyTemplate`})}),`
`,(0,c.jsx)(n.p,{children:`A utility for dynamic text generation based on templates. This is useful for localization (i18n) tasks, generating system messages, or inserting user data into string constants.`}),`
`,(0,c.jsx)(n.p,{children:`It supports:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Positional markers (`,(0,c.jsx)(n.code,{children:`%d`}),`, `,(0,c.jsx)(n.code,{children:`%e`}),`, etc.) to substitute values from an array in order.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Named markers (`,(0,c.jsx)(n.code,{children:`[key]`}),`, `,(0,c.jsx)(n.code,{children:`{key}`}),`) to substitute values from an object by keys.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Paired tags (`,(0,c.jsx)(n.code,{children:`[key]content[/key]`}),`, `,(0,c.jsx)(n.code,{children:`{key}content{/key}`}),`) to wrap content in HTML tags or other constructs (the word `,(0,c.jsx)(n.code,{children:`[content]`}),` inside the passed value is replaced by the tag's generic content).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — The original text containing template markers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement: Record<string, string | number> | string[]`}),` — An object or array containing values for substitution. Defaults to `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — The text with substituted values.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { applyTemplate } from '@dxtmisha/functional-basic'

// Positional markers
console.log(applyTemplate('Hello, %d %e!', ['John', 'Doe'])) // 'Hello, John Doe!'

// Named markers
console.log(applyTemplate('Hello, [name]!', { name: 'John' })) // 'Hello, John!'
console.log(applyTemplate('Hello, {name}!', { name: 'John' })) // 'Hello, John!'

// Wrapped tags with content substitution
console.log(applyTemplate('Click [link]here[/link]', { link: '<a href="#">[content]</a>' }))
console.log(applyTemplate('Click {link}here{/link}', { link: '<a href="#">{content}</a>' }))
// 'Click <a href="#">here</a>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};