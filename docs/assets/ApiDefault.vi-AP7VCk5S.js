import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/ApiDefault - Dữ liệu API mặc định"}),`
`,n.jsx(t.h1,{id:"lớp-apidefault",children:"Lớp ApiDefault"}),`
`,n.jsxs(t.p,{children:["Một lớp để quản lý dữ liệu mặc định cho các yêu cầu API. Nó cho phép thiết lập các tham số cơ bản cần được bao gồm trong mọi yêu cầu, hỗ trợ cả đối tượng thông thường và ",n.jsx(t.code,{children:"FormData"}),"."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Mặc định hóa tập trung"})," — định nghĩa các tham số chung (như token hoặc ngôn ngữ) một lần cho tất cả các cuộc gọi API."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hỗ trợ nhiều định dạng"})," — hoạt động mượt mà với cả đối tượng JavaScript thuần túy và ",n.jsx(t.code,{children:"FormData"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Gộp dữ liệu thông minh"})," — gộp các giá trị mặc định với dữ liệu cụ thể của yêu cầu, ưu tiên dữ liệu yêu cầu thực tế nếu có sự trùng lặp khóa."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Kiểm tra dễ dàng"})," — các phương thức đơn giản để kiểm tra xem dữ liệu mặc định đã được thiết lập hay chưa."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(t.code,{children:"ApiDefault()"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { ApiDefault } from '@dxtmisha/functional'

// 1. Khởi tạo đơn giản
const apiDefault = new ApiDefault()

// 2. Thiết lập dữ liệu mặc định
apiDefault.set({ lang: 'vi', version: 'v1' })

// 3. Ví dụ sử dụng với một đối tượng yêu cầu
const requestData = { user_id: 5 }
const mergedRequest = apiDefault.request(requestData)
// Kết quả: { lang: 'vi', version: 'v1', user_id: 5 }

// 4. Ví dụ sử dụng với FormData
const fd = new FormData()
fd.append('photo', fileBlob)
apiDefault.request(fd)
// Kết quả: fd bây giờ chứa 'lang' và 'version' nếu chúng bị thiếu
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"is(): boolean"})," — Kiểm tra xem dữ liệu mặc định đã được thiết lập chưa."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"get(): ApiDefaultValue"})," — Trả về dữ liệu mặc định hiện tại."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"request(request: ApiFetch['request']): ApiFetch['request']"})," — Gộp dữ liệu mặc định đã lưu vào một đối tượng yêu cầu hoặc biến biểu mẫu ",n.jsx(t.code,{children:"FormData"})," được cung cấp."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"set(request: ApiDefaultValue)"})," — Thiết lập dữ liệu mặc định cho các yêu cầu."]}),`
`]})]})}function a(i={}){const{wrapper:t}={...e(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(c,{...i})}):c(i)}export{a as default};
