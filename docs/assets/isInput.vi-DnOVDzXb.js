import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isInput - Kiểm tra phần tử đầu vào`}),`
`,(0,c.jsx)(n.h1,{id:`isinput`,children:(0,c.jsx)(n.code,{children:`isInput`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểm tra xem phần tử có phải là trường nhập liệu (`,(0,c.jsx)(n.code,{children:`input`}),`, `,(0,c.jsx)(n.code,{children:`textarea`}),`, `,(0,c.jsx)(n.code,{children:`select`}),`) hoặc phần tử có thuộc tính `,(0,c.jsx)(n.code,{children:`contenteditable`}),` hay không.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: HTMLElement | EventTarget | null`}),` — phần tử cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu phần tử là trường nhập liệu hoặc có thể chỉnh sửa, ngược lại là `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isInput } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
isInput(input) // true

const div = document.createElement('div')
isInput(div) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};