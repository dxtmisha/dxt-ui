import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/getItemByPath - Access deeply nested properties"}),`
`,e.jsx(n.h1,{id:"getitembypath",children:e.jsx(n.code,{children:"getItemByPath"})}),`
`,e.jsxs(n.p,{children:["A utility that safely retrieves a value from a deeply nested object using a path string with dot (",e.jsx(n.code,{children:"."}),") separated keys. If the property or any intermediate segment is not found, the function gracefully returns ",e.jsx(n.code,{children:"undefined"})," (preventing ",e.jsx(n.em,{children:"Cannot read properties of undefined"})," errors)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The function allows specifying a generic return type ",e.jsx(n.code,{children:"R"})," (which defaults to ",e.jsx(n.code,{children:"string"}),"). It supports accessing array items by using a stringified index in the path (e.g., ",e.jsx(n.code,{children:'"list.0.name"'}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: T"})," — The target object or array to inspect."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — The dot-separated property path (e.g., ",e.jsx(n.code,{children:'"user.address.city"'})," or ",e.jsx(n.code,{children:'"list.1.id"'}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"R | undefined"})," — The value of the requested property (of type ",e.jsx(n.code,{children:"R"}),"), or ",e.jsx(n.code,{children:"undefined"})," if any segment in the path is missing."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getItemByPath } from '@dxtmisha/functional-basic'

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
`})})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
