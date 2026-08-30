import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getElementItem - Lấy giá trị thuộc tính phần tử`}),`
`,(0,c.jsx)(t.h1,{id:`getelementitem`,children:(0,c.jsx)(t.code,{children:`getElementItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về giá trị của một thuộc tính cụ thể từ một phần tử HTML (ví dụ: `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`className`}),`, hoặc bất kỳ thuộc tính tùy chỉnh nào nếu nó được khai báo là khóa của kiểu phần tử đó). Tiện ích sử dụng `,(0,c.jsx)(t.code,{children:`getElement`}),` để tìm nút, và nếu không tìm thấy phần tử hoặc phân tử không có thuộc tính được chỉ định, tiện ích sẽ trả về `,(0,c.jsx)(t.code,{children:`defaultValue`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<T>`}),` — Một chuỗi bộ chọn CSS hoặc một phần tử DOM có sẵn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K | string`}),` — Tên thuộc tính (khóa) của phần tử có giá trị đang được yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: D`}),` — Giá trị dự phòng sẽ được trả về nếu không tìm thấy thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T[K] | D | undefined`}),` — Giá trị của thuộc tính được yêu cầu hoặc `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Lấy ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// Nếu thiếu thuộc tính và chúng ta cung cấp một fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};