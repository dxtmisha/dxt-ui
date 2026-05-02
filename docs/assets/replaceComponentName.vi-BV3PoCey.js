import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/replaceComponentName - Thay thế tên thành phần trong văn bản`}),`
`,(0,c.jsx)(n.h1,{id:`replacecomponentname`,children:(0,c.jsx)(n.code,{children:`replaceComponentName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thay thế các thẻ HTML của một thành phần (component) cụ thể trong chuỗi văn bản bằng các thẻ mới. Hàm tìm kiếm các thẻ mở (`,(0,c.jsx)(n.code,{children:`<name`}),`) và thẻ đóng (`,(0,c.jsx)(n.code,{children:`</name`}),`) không phân biệt chữ hoa chữ thường và thay thế chúng bằng `,(0,c.jsx)(n.code,{children:`componentName`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string | undefined`}),` — Văn bản gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên thành phần cần thay thế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`componentName: string`}),` — Tên thành phần mới.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Văn bản đã thay đổi với các thẻ mới hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không có văn bản gốc được cung cấp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Nhấp vào tôi</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Nhấp vào tôi</AppButton>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};