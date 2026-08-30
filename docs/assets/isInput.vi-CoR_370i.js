import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isInput - Kiểm tra phần tử đầu vào`}),`
`,(0,c.jsx)(t.h1,{id:`isinput`,children:(0,c.jsx)(t.code,{children:`isInput`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem phần tử có phải là trường nhập liệu (`,(0,c.jsx)(t.code,{children:`input`}),`, `,(0,c.jsx)(t.code,{children:`textarea`}),`, `,(0,c.jsx)(t.code,{children:`select`}),`) hoặc phần tử có thuộc tính `,(0,c.jsx)(t.code,{children:`contenteditable`}),` hay không.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: HTMLElement | EventTarget | null`}),` — phần tử cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu phần tử là trường nhập liệu hoặc có thể chỉnh sửa, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isInput } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
isInput(input) // true

const div = document.createElement('div')
isInput(div) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};