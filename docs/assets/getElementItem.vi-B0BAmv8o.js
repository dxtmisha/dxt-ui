import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/getElementItem - Lấy giá trị thuộc tính phần tử"}),`
`,n.jsx(t.h1,{id:"getelementitem",children:n.jsx(t.code,{children:"getElementItem"})}),`
`,n.jsxs(t.p,{children:["Trả về giá trị của một thuộc tính cụ thể từ một phần tử HTML (ví dụ: ",n.jsx(t.code,{children:"id"}),", ",n.jsx(t.code,{children:"className"}),", hoặc bất kỳ thuộc tính tùy chỉnh nào nếu nó được khai báo là khóa của kiểu phần tử đó). Tiện ích sử dụng ",n.jsx(t.code,{children:"getElement"})," để tìm nút, và nếu không tìm thấy phần tử hoặc phân tử không có thuộc tính được chỉ định, tiện ích sẽ trả về ",n.jsx(t.code,{children:"defaultValue"})," (mặc định là ",n.jsx(t.code,{children:"undefined"}),")."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"element: ElementOrString<T>"})," — Một chuỗi bộ chọn CSS hoặc một phần tử DOM có sẵn."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"index: K | string"})," — Tên thuộc tính (khóa) của phần tử có giá trị đang được yêu cầu."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"defaultValue?: D"})," — Giá trị dự phòng sẽ được trả về nếu không tìm thấy thuộc tính."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"T[K] | D | undefined"})," — Giá trị của thuộc tính được yêu cầu hoặc ",n.jsx(t.code,{children:"defaultValue"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Lấy ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// Nếu thiếu thuộc tính và chúng ta cung cấp một fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function m(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{m as default};
