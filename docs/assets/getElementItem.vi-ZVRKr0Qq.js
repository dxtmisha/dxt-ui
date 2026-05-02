import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getElementItem - Lấy giá trị thuộc tính phần tử`}),`
`,(0,c.jsx)(n.h1,{id:`getelementitem`,children:(0,c.jsx)(n.code,{children:`getElementItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về giá trị của một thuộc tính cụ thể từ một phần tử HTML (ví dụ: `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`className`}),`, hoặc bất kỳ thuộc tính tùy chỉnh nào nếu nó được khai báo là khóa của kiểu phần tử đó). Tiện ích sử dụng `,(0,c.jsx)(n.code,{children:`getElement`}),` để tìm nút, và nếu không tìm thấy phần tử hoặc phân tử không có thuộc tính được chỉ định, tiện ích sẽ trả về `,(0,c.jsx)(n.code,{children:`defaultValue`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: ElementOrString<T>`}),` — Một chuỗi bộ chọn CSS hoặc một phần tử DOM có sẵn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: K | string`}),` — Tên thuộc tính (khóa) của phần tử có giá trị đang được yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: D`}),` — Giá trị dự phòng sẽ được trả về nếu không tìm thấy thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T[K] | D | undefined`}),` — Giá trị của thuộc tính được yêu cầu hoặc `,(0,c.jsx)(n.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Lấy ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// Nếu thiếu thuộc tính và chúng ta cung cấp một fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};