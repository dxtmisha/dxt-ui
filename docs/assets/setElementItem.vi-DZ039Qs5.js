import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/setElementItem - Thay đổi giá trị phần tử theo khóa`}),`
`,(0,c.jsx)(n.h1,{id:`setelementitem`,children:(0,c.jsx)(n.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(n.p,{children:`Thay đổi giá trị của một thuộc tính hoặc attribute của phần tử DOM được xác định bởi bộ chọn (selector) hoặc được truyền trực tiếp. Nếu thuộc tính là một đối tượng, hàm sẽ thực hiện hợp nhất với dữ liệu mới.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: ElementOrString<E>`}),` — Phần tử mục tiêu, đối tượng `,(0,c.jsx)(n.code,{children:`window`}),` hoặc bộ chọn CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: K`}),` — Khóa thuộc tính hoặc tên attribute.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: V | Record<string, V>`}),` — Giá trị mới hoặc một đối tượng để hợp nhất.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — Phần tử đã được sửa đổi, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Thay đổi nội dung văn bản
setElementItem('#my-div', 'textContent', 'Văn bản mới')

// Hợp nhất các kiểu (styles)
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Thiết lập attribute (nếu thuộc tính không tồn tại trong đối tượng)
setElementItem('input', 'placeholder', 'Nhập dữ liệu...')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};