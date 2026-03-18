import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/Global - Dữ liệu Toàn cục"}),`
`,n.jsx(t.h1,{id:"lớp-global",children:"Lớp Global"}),`
`,n.jsxs(t.p,{children:["Một lớp tiện ích tĩnh để lưu trữ và truy xuất dữ liệu toàn cục của ứng dụng. Dữ liệu được ghi ",n.jsx(t.strong,{children:"một lần duy nhất"})," trong quá trình khởi tạo và sau đó chỉ có thể đọc. Được sử dụng để truyền cấu hình hoặc dữ liệu từ máy chủ sang phía client."]}),`
`,n.jsx(t.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Khởi tạo một lần"})," — Phương thức ",n.jsx(t.code,{children:"add"})," chỉ hoạt động trong lần gọi đầu tiên; các lần gọi tiếp theo bị bỏ qua."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Sao chép sâu"})," — Dữ liệu được sao chép qua ",n.jsx(t.code,{children:"copyObjectLite"}),", cô lập khỏi các thay đổi bên ngoài."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Không quản lý trạng thái"})," — Chỉ dành cho cấu hình tĩnh."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Truy cập tĩnh"})," — tất cả các phương thức đều là tĩnh, loại bỏ nhu cầu khởi tạo (",n.jsx(t.code,{children:"new Global()"}),")."]}),`
`]}),`
`,n.jsx(t.h2,{id:"cách-sử-dụng-cơ-bản",children:"Cách sử dụng cơ bản"}),`
`,n.jsx(t.p,{children:"Vì lớp này là tĩnh, các phương thức của nó có thể được gọi trực tiếp."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

// Thiết lập một lần (ví dụ: khi ứng dụng tải)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Lấy giá trị theo khóa
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,n.jsx(t.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"add(data: Record<string, any>): void"})," — Lưu dữ liệu toàn cục. Chỉ hoạt động ",n.jsx(t.strong,{children:"trong lần gọi đầu tiên"}),". Các lần gọi sau bị bỏ qua hoàn toàn."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"get<R>(name: string): R"})," — Trả về giá trị theo khóa từ dữ liệu toàn cục đã lưu."]}),`
`]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.h3,{id:"truy-xuất-dữ-liệu",children:"Truy xuất dữ liệu"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,n.jsx(t.h3,{id:"khởi-tạo-khi-ứng-dụng-bắt-đầu",children:"Khởi tạo khi ứng dụng bắt đầu"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`// main.ts (chạy một lần trước khi mount ứng dụng)
Global.add(window.__SERVER_DATA__ ?? {})

// Ở bất kỳ đâu trong code
const serverId = Global.get('serverId')
`})})]})}function g(c={}){const{wrapper:t}={...l(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{g as default};
