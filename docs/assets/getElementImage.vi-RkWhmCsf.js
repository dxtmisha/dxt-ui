import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/getElementImage - Lấy phần tử hình ảnh"}),`
`,n.jsx(e.h1,{id:"getelementimage",children:n.jsx(e.code,{children:"getElementImage"})}),`
`,n.jsxs(e.p,{children:["Dùng để lấy nút ",n.jsx(e.code,{children:"HTMLImageElement"})," một cách an toàn. Nếu truyền vào một chuỗi (đường dẫn URL), hàm sẽ tự động tạo thẻ ",n.jsx(e.code,{children:"<img>"})," và gán chuỗi đó cho thuộc tính ",n.jsx(e.code,{children:"src"}),". Nếu giá trị truyền vào đã là một đối tượng ",n.jsx(e.code,{children:"HTMLImageElement"}),", hàm chỉ cần trả về đối tượng đó giữ nguyên."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"image: HTMLImageElement | string"})," — Phần tử hình ảnh hoặc một nguồn chuỗi (URL)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"HTMLImageElement | undefined"})," — Một thẻ ",n.jsx(e.code,{children:"<img>"})," đã sẵn sàng để sử dụng, hoặc ",n.jsx(e.code,{children:"undefined"})," nếu môi trường không cho phép tạo (ví dụ: không có DOM)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Truyền vào đường dẫn chuỗi (URL)
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Truyền vào thẻ img có sẵn
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function d(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{d as default};
