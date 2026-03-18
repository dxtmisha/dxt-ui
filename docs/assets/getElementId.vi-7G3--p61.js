import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/getElementId - Lấy hoặc gán ID phần tử"}),`
`,n.jsx(t.h1,{id:"getelementid",children:n.jsx(t.code,{children:"getElementId"})}),`
`,n.jsxs(t.p,{children:["Trả về ",n.jsx(t.code,{children:"id"})," của một phần tử DOM được chỉ định. Nếu phần tử tồn tại nhưng không có thuộc tính ",n.jsx(t.code,{children:"id"}),", hàm sẽ tự động tạo một mã định danh duy nhất, gán nó cho phần tử và trả về mã đó."]}),`
`,n.jsxs(t.p,{children:["Ngoài ra, hàm cho phép đính kèm một bộ chọn CSS vào chuỗi trả về, để bạn có thể sử dụng ngay kết quả dưới dạng một bộ chọn kết hợp (ví dụ: ",n.jsx(t.code,{children:'"#id-123456 .child-class"'}),")."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"element?: ElementOrString<E>"})," — Phần tử DOM hoặc chuỗi chọn để lấy ID."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"selector?: string"})," — Chuỗi tùy chọn sẽ được gắn vào giá trị ID trả về (chẳng hạn như các lớp giả hoặc bộ chọn phần tử con)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — Chuỗi ID của phần tử, hoặc một chuỗi ID mới được tạo ra nếu không tìm thấy phần tử."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getElementId } from '@dxtmisha/functional-basic'

// Phần tử ban đầu không có ID
const div = document.createElement('div')
console.log(div.id) // ''

const id = getElementId(div)
console.log(id) // Ví dụ: 'id-123456'
console.log(div.id) // 'id-123456' (tự động được gán)

// Sử dụng bộ chọn bổ sung
const selector = getElementId(div, ' > span.active')
console.log(selector) // '#id-123456 > span.active'
`})})]})}function g(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{g as default};
