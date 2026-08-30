import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/replaceComponentName - Thay thế tên thành phần trong văn bản`}),`
`,(0,c.jsx)(t.h1,{id:`replacecomponentname`,children:(0,c.jsx)(t.code,{children:`replaceComponentName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thay thế các thẻ HTML của một thành phần (component) cụ thể trong chuỗi văn bản bằng các thẻ mới. Hàm tìm kiếm các thẻ mở (`,(0,c.jsx)(t.code,{children:`<name`}),`) và thẻ đóng (`,(0,c.jsx)(t.code,{children:`</name`}),`) không phân biệt chữ hoa chữ thường và thay thế chúng bằng `,(0,c.jsx)(t.code,{children:`componentName`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string | undefined`}),` — Văn bản gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên thành phần cần thay thế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentName: string`}),` — Tên thành phần mới.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Văn bản đã thay đổi với các thẻ mới hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không có văn bản gốc được cung cấp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Nhấp vào tôi</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Nhấp vào tôi</AppButton>'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};