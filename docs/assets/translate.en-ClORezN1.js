import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/4. Translation`}),`
`,(0,c.jsx)(t.h1,{id:`translation`,children:`Translation`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Translate`}),` class is a centralized system for managing multi-language content. It supports automatic fetching of missing keys via an API, caching, variable interpolation, and a multi-level fallback system.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// 1. API Configuration (default is /api/translate)
Translate.setUrl('/api/v1/dictionary')

// 2. Retrieving translation (Async)
// If the key is not in cache, it will be automatically requested from the server
const text = await Translate.get('welcome_message', { name: 'Admin' })

// 3. Synchronous retrieval (from cache)
const label = Translate.getSync('save_button')
`})}),`
`,(0,c.jsx)(t.h2,{id:`interpolation`,children:`Interpolation`}),`
`,(0,c.jsxs)(t.p,{children:[`The class supports a flexible insertion system via the `,(0,c.jsx)(t.code,{children:`applyTemplate`}),` function. You can use named keys, positional markers, or functional wrappers.`]}),`
`,(0,c.jsx)(t.h3,{id:`keys-and-markers`,children:`Keys and Markers`}),`
`,(0,c.jsxs)(t.p,{children:[`Both curly `,(0,c.jsx)(t.code,{children:`{}`}),` and square `,(0,c.jsx)(t.code,{children:`[]`}),` brackets are supported for named keys, along with `,(0,c.jsx)(t.code,{children:`%`}),` markers for sequential arguments.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// 1. Named keys (object)
// Text: "Hello, {name}!"
await Translate.get('hi', { name: 'Alex' }) // Hello, Alex!

// 2. Positional markers (array)
// Text: "File %d of %e"
Translate.getSync('status', false, ['1', '10']) // File 1 of 10
// %d — 1st element, %e — 2nd, %f — 3rd, and so on.
`})}),`
`,(0,c.jsx)(t.h3,{id:`tagging-wrappers`,children:`Tagging (Wrappers)`}),`
`,(0,c.jsxs)(t.p,{children:[`Allows wrapping text in HTML tags or additional components. The text inside the tag is injected into the `,(0,c.jsx)(t.code,{children:`{content}`}),` variable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Text: "{link}Read more{/link} in the source."
const replacement = { 
  link: '<a href="/news">{content}</a>' 
}
Translate.getSync('more', false, replacement)
// <a href="/news">Read more</a> in the source.
`})}),`
`,(0,c.jsx)(t.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(t.p,{children:`You can manually add translations to the registry, which is useful for static constants or initialization from local files.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Adding a list of translations
Translate.addSync({
  'en-button_ok': 'Ok',
  'en-button_cancel': 'Cancel'
})

// Batch pre-loading keys from the server
await Translate.add(['title', 'description', 'footer_text'])
`})}),`
`,(0,c.jsx)(t.h2,{id:`search-hierarchy`,children:`Search Hierarchy`}),`
`,(0,c.jsx)(t.p,{children:`When looking up a translation, the system follows a strict order:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Current locale (e.g., `,(0,c.jsx)(t.code,{children:`en-US-key`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Current language (`,(0,c.jsx)(t.code,{children:`en-key`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Global prefix (`,(0,c.jsx)(t.code,{children:`global-key`}),`)`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};