import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Classes/ScrollbarWidth - Độ rộng thanh cuộn"}),`
`,n.jsx(i.h1,{id:"lớp-scrollbarwidth",children:"Lớp ScrollbarWidth"}),`
`,n.jsxs(i.p,{children:["Lớp tĩnh để đo độ rộng thanh cuộn của trình duyệt một cách bất đồng bộ. Kết quả được lưu vào ",n.jsx(i.code,{children:"DataStorage"})," và chỉ tính lại một lần mỗi phiên."]}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bộ nhớ đệm"})," — độ rộng chỉ được đo một lần, sau đó đọc từ bộ nhớ đệm."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đo bất đồng bộ"})," — sử dụng ",n.jsx(i.code,{children:"requestAnimationFrame"})," để có kết quả chính xác sau khi vẽ lại."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Phát hiện thanh cuộn phủ"})," — ",n.jsx(i.code,{children:"is()"}),' kiểm tra xem thanh cuộn có phải "overlay" không (rộng ≤ 8px), điển hình cho macOS và trình duyệt di động.']}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Lớp này là ",n.jsx(i.strong,{children:"tĩnh (static)"}),". Các phương thức có thể được gọi trực tiếp mà không cần tạo instance của đối tượng."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tính năng:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bộ nhớ đệm (Caching)"})," — dữ liệu được lưu trong ",n.jsx(i.code,{children:"DataStorage"})," và không được tính toán lại trong các lần gọi tiếp theo."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tính kiên định (Persistence)"})," — giá trị được bảo toàn qua các lần tải lại trang (session storage)."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Gọi phương thức tĩnh
const width = await ScrollbarWidth.get()
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"get(): Promise<number>"})," — độ rộng thanh cuộn tính bằng pixel. Lần đầu tiên đo qua phần tử DOM tạm thời."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"is(): Promise<boolean>"})," — ",n.jsx(i.code,{children:"true"})," nếu thanh cuộn là overlay (rộng ≤ 8px, macOS / di động)."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — không cần bù đắp độ rộng
}
`})})]})}function g(t={}){const{wrapper:i}={...h(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(c,{...t})}):c(t)}export{g as default};
