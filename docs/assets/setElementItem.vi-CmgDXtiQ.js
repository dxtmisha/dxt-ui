import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/setElementItem - Thay đổi giá trị phần tử theo khóa"}),`
`,n.jsx(t.h1,{id:"setelementitem",children:n.jsx(t.code,{children:"setElementItem"})}),`
`,n.jsx(t.p,{children:"Thay đổi giá trị của một thuộc tính hoặc attribute của phần tử DOM được xác định bởi bộ chọn (selector) hoặc được truyền trực tiếp. Nếu thuộc tính là một đối tượng, hàm sẽ thực hiện hợp nhất với dữ liệu mới."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"element: ElementOrString<E>"})," — Phần tử mục tiêu, đối tượng ",n.jsx(t.code,{children:"window"})," hoặc bộ chọn CSS."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"index: K"})," — Khóa thuộc tính hoặc tên attribute."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: V | Record<string, V>"})," — Giá trị mới hoặc một đối tượng để hợp nhất."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"E | undefined"})," — Phần tử đã được sửa đổi, hoặc ",n.jsx(t.code,{children:"undefined"})," nếu không tìm thấy."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Thay đổi nội dung văn bản
setElementItem('#my-div', 'textContent', 'Văn bản mới')

// Hợp nhất các kiểu (styles)
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Thiết lập attribute (nếu thuộc tính không tồn tại trong đối tượng)
setElementItem('input', 'placeholder', 'Nhập dữ liệu...')
`})})]})}function u(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{u as default};
