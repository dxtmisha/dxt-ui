import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/en/functional-basic/Functions/applyTemplate - Applying a template to text"}),`
`,e.jsx(n.h1,{id:"applytemplate",children:e.jsx(n.code,{children:"applyTemplate"})}),`
`,e.jsx(n.p,{children:"A utility for dynamic text generation based on templates. This is useful for localization (i18n) tasks, generating system messages, or inserting user data into string constants."}),`
`,e.jsx(n.p,{children:"It supports:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Positional markers (",e.jsx(n.code,{children:"%d"}),", ",e.jsx(n.code,{children:"%e"}),", etc.) to substitute values from an array in order."]}),`
`,e.jsxs(n.li,{children:["Named markers (",e.jsx(n.code,{children:"[key]"}),", ",e.jsx(n.code,{children:"{key}"}),") to substitute values from an object by keys."]}),`
`,e.jsxs(n.li,{children:["Paired tags (",e.jsx(n.code,{children:"[key]content[/key]"}),", ",e.jsx(n.code,{children:"{key}content{/key}"}),") to wrap content in HTML tags or other constructs (the word ",e.jsx(n.code,{children:"[content]"})," inside the passed value is replaced by the tag's generic content)."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text: string"})," — The original text containing template markers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacement: Record<string, string | number> | string[]"})," — An object or array containing values for substitution. Defaults to ",e.jsx(n.code,{children:"{}"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — The text with substituted values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { applyTemplate } from '@dxtmisha/functional-basic'

// Positional markers
console.log(applyTemplate('Hello, %d %e!', ['John', 'Doe'])) // 'Hello, John Doe!'

// Named markers
console.log(applyTemplate('Hello, [name]!', { name: 'John' })) // 'Hello, John!'
console.log(applyTemplate('Hello, {name}!', { name: 'John' })) // 'Hello, John!'

// Wrapped tags with content substitution
console.log(applyTemplate('Click [link]here[/link]', { link: '<a href="#">[content]</a>' }))
console.log(applyTemplate('Click {link}here{/link}', { link: '<a href="#">{content}</a>' }))
// 'Click <a href="#">here</a>'
`})})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
