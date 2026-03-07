import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(h){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/resizeImageByMax - Thay đổi kích thước hình ảnh theo cạnh tối đa"}),`
`,n.jsx(e.h1,{id:"resizeimagebymax",children:n.jsx(e.code,{children:"resizeImageByMax"})}),`
`,n.jsx(e.p,{children:"Thay đổi kích thước hình ảnh theo tỷ lệ để vừa với giới hạn kích thước tối đa được chỉ định (theo chiều rộng, chiều cao hoặc tự động theo cạnh lớn nhất). Trả về Chuỗi Data URL được mã hóa Base64 của hình ảnh đã thu nhỏ."}),`
`,n.jsx(e.p,{children:"Hàm này hữu ích để nén hình ảnh trực tiếp (on the fly) trước khi tải lên máy chủ."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"image: HTMLImageElement | string"})," — Phần tử hình ảnh hoặc đường dẫn URL."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"maxSize: number"})," — Kích thước pixel tối đa cho phép (đối với chiều rộng hoặc chiều cao)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: ResizeImageByMaxType"})," — Chiến lược mở rộng/thu nhỏ: ",n.jsx(e.code,{children:"'auto'"}),", ",n.jsx(e.code,{children:"'width'"}),", hoặc ",n.jsx(e.code,{children:"'height'"}),". Mặc định là ",n.jsx(e.code,{children:"'auto'"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeData?: string"})," — Loại MIME tùy chọn cho chuỗi Data URL trả về (ví dụ, ",n.jsx(e.code,{children:"'image/jpeg'"}),"). Mặc định là ",n.jsx(e.code,{children:"'image/png'"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string | undefined"})," — Một chuỗi Data URL chứa hình ảnh đã thay đổi kích thước hoặc ",n.jsx(e.code,{children:"undefined"})," nếu hình ảnh không thể được xử lý hoặc kích thước của nó đã nhỏ hơn/bằng ",n.jsx(e.code,{children:"maxSize"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function x(h={}){const{wrapper:e}={...i(),...h.components};return e?n.jsx(e,{...h,children:n.jsx(c,{...h})}):c(h)}export{x as default};
