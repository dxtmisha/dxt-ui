import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/getOptions - Lấy tùy chọn yêu cầu`}),`
`,(0,c.jsx)(t.h1,{id:`getoptions`,children:(0,c.jsx)(t.code,{children:`getOptions`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về các tùy chọn yêu cầu. Nếu tùy chọn được cung cấp là một chuỗi, nó trả về một đối tượng với trường `,(0,c.jsx)(t.code,{children:`method`}),` bằng với chuỗi đó. Nếu một đối tượng được truyền vào, nó sẽ trả về chính đối tượng đó. Nếu không có tham số nào được truyền, nó trả về một đối tượng rỗng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — Tùy chọn yêu cầu hoặc một chuỗi xác định phương thức.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`RefOrNormal<ApiFetch>`}),` — Tùy chọn cho yêu cầu `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getOptions } from '@dxtmisha/functional'

console.log(getOptions('POST')) // { method: 'POST' }
console.log(getOptions({ method: 'GET', cache: true })) // { method: 'GET', cache: true }
console.log(getOptions()) // {}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};