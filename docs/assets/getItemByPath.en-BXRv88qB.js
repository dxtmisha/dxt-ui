import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getItemByPath - Access deeply nested properties`}),`
`,(0,c.jsx)(n.h1,{id:`getitembypath`,children:(0,c.jsx)(n.code,{children:`getItemByPath`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that safely retrieves a value from a deeply nested object using a path string with dot (`,(0,c.jsx)(n.code,{children:`.`}),`) separated keys. If the property or any intermediate segment is not found, the function gracefully returns `,(0,c.jsx)(n.code,{children:`undefined`}),` (preventing `,(0,c.jsx)(n.em,{children:`Cannot read properties of undefined`}),` errors).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Note:`}),` The function allows specifying a generic return type `,(0,c.jsx)(n.code,{children:`R`}),` (which defaults to `,(0,c.jsx)(n.code,{children:`string`}),`). It supports accessing array items by using a stringified index in the path (e.g., `,(0,c.jsx)(n.code,{children:`"list.0.name"`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — The target object or array to inspect.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The dot-separated property path (e.g., `,(0,c.jsx)(n.code,{children:`"user.address.city"`}),` or `,(0,c.jsx)(n.code,{children:`"list.1.id"`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`R | undefined`}),` — The value of the requested property (of type `,(0,c.jsx)(n.code,{children:`R`}),`), or `,(0,c.jsx)(n.code,{children:`undefined`}),` if any segment in the path is missing.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getItemByPath } from '@dxtmisha/functional-basic'

const data = {
  profile: {
    details: {
      bio: 'UI Developer'
    }
  },
  roles: ['admin', 'manager']
}

// Successful retrieval
console.log(getItemByPath(data, 'profile.details.bio')) // 'UI Developer'

// Accessing an array via a string index
console.log(getItemByPath(data, 'roles.0')) // 'admin'

// Safely failing on nonexistent paths
console.log(getItemByPath(data, 'profile.missing.key')) // undefined
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};