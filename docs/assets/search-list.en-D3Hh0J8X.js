import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# Search List`}),`
`,(0,c.jsx)(n.h1,{id:`search-list`,children:`Search List`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`SearchList`}),` class is a powerful tool for organizing reactive search and filtering within object arrays. It encapsulates matcher logic, query state management, and result formatting, including match highlighting.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { SearchList } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(n.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(n.p,{children:`You can dynamically change both the data list and the set of search columns without needing to restart the search logic.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Updating the data list
search.setList(newData)

// Changing target columns
search.setColumns(['Category'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`fine-tuning`,children:`Fine-Tuning`}),`
`,(0,c.jsxs)(n.p,{children:[`Search behavior can be managed via options, such as forcing the system to return all items while marking matches with a `,(0,c.jsx)(n.code,{children:`selected`}),` flag.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const search = new SearchList(data, ['name'], '', {
  returnEverything: true // Return the entire list, not just matches
})

search.setValue('apple')
const list = search.to() 
// list will contain all items, but 'Apple' will have selected: true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};