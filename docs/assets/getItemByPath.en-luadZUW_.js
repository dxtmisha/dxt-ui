import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getItemByPath - Access deeply nested properties`}),`
`,(0,c.jsx)(t.h1,{id:`getitembypath`,children:(0,c.jsx)(t.code,{children:`getItemByPath`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that safely retrieves a value from a deeply nested object using a path string with dot (`,(0,c.jsx)(t.code,{children:`.`}),`) separated keys. If the property or any intermediate segment is not found, the function gracefully returns `,(0,c.jsx)(t.code,{children:`undefined`}),` (preventing `,(0,c.jsx)(t.em,{children:`Cannot read properties of undefined`}),` errors).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` The function allows specifying a generic return type `,(0,c.jsx)(t.code,{children:`R`}),` (which defaults to `,(0,c.jsx)(t.code,{children:`string`}),`). It supports accessing array items by using a stringified index in the path (e.g., `,(0,c.jsx)(t.code,{children:`"list.0.name"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: T`}),` — The target object or array to inspect.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — The dot-separated property path (e.g., `,(0,c.jsx)(t.code,{children:`"user.address.city"`}),` or `,(0,c.jsx)(t.code,{children:`"list.1.id"`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`R | undefined`}),` — The value of the requested property (of type `,(0,c.jsx)(t.code,{children:`R`}),`), or `,(0,c.jsx)(t.code,{children:`undefined`}),` if any segment in the path is missing.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getItemByPath } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};