import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const h={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Classes/ScrollbarWidth - Độ rộng thanh cuộn"}),`
`,n.jsx(h.h1,{id:"lớp-scrollbarwidth",children:"Lớp ScrollbarWidth"}),`
`,n.jsxs(h.p,{children:["Lớp tĩnh để đo độ rộng thanh cuộn của trình duyệt một cách bất đồng bộ. Kết quả được lưu vào ",n.jsx(h.code,{children:"DataStorage"})," và chỉ tính lại một lần mỗi phiên."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bộ nhớ đệm"})," — độ rộng chỉ được đo một lần, sau đó đọc từ bộ nhớ đệm."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Đo bất đồng bộ"})," — sử dụng ",n.jsx(h.code,{children:"requestAnimationFrame"})," để có kết quả chính xác sau khi vẽ lại."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phát hiện thanh cuộn phủ"})," — ",n.jsx(h.code,{children:"is()"}),' kiểm tra xem thanh cuộn có phải "overlay" không (rộng ≤ 8px), điển hình cho macOS và trình duyệt di động.']}),`
`]}),`
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"get(): Promise<number>"})," — độ rộng thanh cuộn tính bằng pixel. Lần đầu tiên đo qua phần tử DOM tạm thời."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"is(): Promise<boolean>"})," — ",n.jsx(h.code,{children:"true"})," nếu thanh cuộn là overlay (rộng ≤ 8px, macOS / di động)."]}),`
`]}),`
`,n.jsx(h.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — không cần bù đắp độ rộng
}
`})})]})}function x(t={}){const{wrapper:h}={...c(),...t.components};return h?n.jsx(h,{...t,children:n.jsx(i,{...t})}):i(t)}export{x as default};
