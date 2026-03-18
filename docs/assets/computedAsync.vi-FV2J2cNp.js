import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Functions/computedAsync - Thuộc tính computed bất đồng bộ"}),`
`,n.jsx(t.h1,{id:"computedasync",children:n.jsx(t.code,{children:"computedAsync"})}),`
`,n.jsxs(t.p,{children:["Tạo một thuộc tính computed có thể xử lý các getter bất đồng bộ. Khác với ",n.jsx(t.code,{children:"computed"})," thông thường của Vue, ",n.jsx(t.code,{children:"computedAsync"})," cho phép truyền vào hàm bất đồng bộ, hàm đồng bộ, hoặc giá trị trực tiếp — kết quả sẽ tự động được giải quyết và trở thành một computed ref phản ứng. Khởi tạo ở chế độ lazy (lười biếng) và chỉ xảy ra khi truy cập thuộc tính lần đầu tiên."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getter: (() => Promise<R>) | (() => R) | R"})," — Hàm bất đồng bộ, hàm đồng bộ, hoặc giá trị trực tiếp dùng để tính toán kết quả."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"ignore?: R"})," — Giá trị cần bỏ qua (sẽ không được thiết lập vào kết quả)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"debugOptions?: DebuggerOptions"})," — Tùy chọn dùng để gỡ lỗi các phép tính phản ứng, được hỗ trợ bởi Vue.js."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ComputedRef<R | undefined>"})," — Một computed ref phản ứng chứa kết quả đã được giải quyết từ getter."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { computedAsync } from '@dxtmisha/functional'

// Getter bất đồng bộ
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Getter đồng bộ
const label = computedAsync(() => 'Hello, World!')

// Giá trị trực tiếp
const count = computedAsync(42)
`})})]})}function l(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{l as default};
