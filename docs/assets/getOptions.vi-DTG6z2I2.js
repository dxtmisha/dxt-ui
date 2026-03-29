import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/getOptions - Lấy tùy chọn yêu cầu`}),`
`,(0,c.jsx)(n.h1,{id:`getoptions`,children:(0,c.jsx)(n.code,{children:`getOptions`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về các tùy chọn yêu cầu. Nếu tùy chọn được cung cấp là một chuỗi, nó trả về một đối tượng với trường `,(0,c.jsx)(n.code,{children:`method`}),` bằng với chuỗi đó. Nếu một đối tượng được truyền vào, nó sẽ trả về chính đối tượng đó. Nếu không có tham số nào được truyền, nó trả về một đối tượng rỗng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Tùy chọn yêu cầu hoặc một chuỗi xác định phương thức.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`RefOrNormal<ApiFetch>`}),` — Tùy chọn cho yêu cầu `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getOptions } from '@dxtmisha/functional'

console.log(getOptions('POST')) // { method: 'POST' }
console.log(getOptions({ method: 'GET', cache: true })) // { method: 'GET', cache: true }
console.log(getOptions()) // {}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};