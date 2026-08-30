import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/9. Search List`}),`
`,(0,c.jsx)(t.h1,{id:`search-list`,children:`Search List`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`SearchList`}),` class is a powerful tool for organizing reactive search and filtering within object arrays. It encapsulates matcher logic, query state management, and result formatting, including match highlighting.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { SearchList } from '@dxtmisha/functional-basic'

const data = [
  { id: 1, name: 'Apple', Category: 'Fruit' },
  { id: 2, name: 'Banana', Category: 'Fruit' }
]

// 1. Initializing search on 'name' and 'Category' fields
const search = new SearchList(data, ['name', 'Category'])

// 2. Setting the search value
search.setValue('app')

// 3. Retrieving the filtered list
const results = search.to()
// [{ item: { id: 1, ... }, selected: true, ... }]
`})}),`
`,(0,c.jsx)(t.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(t.p,{children:`You can dynamically change both the data list and the set of search columns without needing to restart the search logic.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Updating the data list
search.setList(newData)

// Changing target columns
search.setColumns(['Category'])
`})}),`
`,(0,c.jsx)(t.h2,{id:`fine-tuning`,children:`Fine-Tuning`}),`
`,(0,c.jsxs)(t.p,{children:[`Search behavior can be managed via options, such as forcing the system to return all items while marking matches with a `,(0,c.jsx)(t.code,{children:`selected`}),` flag.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const search = new SearchList(data, ['name'], '', {
  returnEverything: true // Return the entire list, not just matches
})

search.setValue('apple')
const list = search.to() 
// list will contain all items, but 'Apple' will have selected: true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};