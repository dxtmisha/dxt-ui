import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/setElementItem - Thay đổi giá trị phần tử theo khóa`}),`
`,(0,c.jsx)(t.h1,{id:`setelementitem`,children:(0,c.jsx)(t.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(t.p,{children:`Thay đổi giá trị của một thuộc tính hoặc attribute của phần tử DOM được xác định bởi bộ chọn (selector) hoặc được truyền trực tiếp. Nếu thuộc tính là một đối tượng, hàm sẽ thực hiện hợp nhất với dữ liệu mới.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<E>`}),` — Phần tử mục tiêu, đối tượng `,(0,c.jsx)(t.code,{children:`window`}),` hoặc bộ chọn CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K`}),` — Khóa thuộc tính hoặc tên attribute.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: V | Record<string, V>`}),` — Giá trị mới hoặc một đối tượng để hợp nhất.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Phần tử đã được sửa đổi, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không tìm thấy.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Thay đổi nội dung văn bản
setElementItem('#my-div', 'textContent', 'Văn bản mới')

// Hợp nhất các kiểu (styles)
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Thiết lập attribute (nếu thuộc tính không tồn tại trong đối tượng)
setElementItem('input', 'placeholder', 'Nhập dữ liệu...')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};