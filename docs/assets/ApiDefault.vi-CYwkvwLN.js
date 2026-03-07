import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(i){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/ApiDefault - Dữ liệu API mặc định"}),`
`,n.jsx(c.h1,{id:"lớp-apidefault",children:"Lớp ApiDefault"}),`
`,n.jsxs(c.p,{children:["Một lớp để quản lý dữ liệu mặc định cho các yêu cầu API. Nó cho phép thiết lập các tham số cơ bản cần được bao gồm trong mọi yêu cầu, hỗ trợ cả đối tượng thông thường và ",n.jsx(c.code,{children:"FormData"}),"."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Mặc định hóa tập trung"})," — định nghĩa các tham số chung (như token hoặc ngôn ngữ) một lần cho tất cả các cuộc gọi API."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ nhiều định dạng"})," — hoạt động mượt mà với cả đối tượng JavaScript thuần túy và ",n.jsx(c.code,{children:"FormData"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Gộp dữ liệu thông minh"})," — gộp các giá trị mặc định với dữ liệu cụ thể của yêu cầu, ưu tiên dữ liệu yêu cầu thực tế nếu có sự trùng lặp khóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kiểm tra dễ dàng"})," — các phương thức đơn giản để kiểm tra xem dữ liệu mặc định đã được thiết lập hay chưa."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Thông thường, lớp này được sử dụng nội bộ bởi hệ thống quản lý API, nhưng nó cũng có thể được sử dụng độc lập."}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { ApiDefault } from '@dxtmisha/functional'

const apiDefault = new ApiDefault()
apiDefault.set({ lang: 'vi', version: 'v1' })

if (apiDefault.is()) {
  console.log('Dữ liệu mặc định đã sẵn sàng')
}

// Với Đối tượng
const merged = apiDefault.request({ user_id: 5 })
// Kết quả: { lang: 'vi', version: 'v1', user_id: 5 }

// Với FormData
const fd = new FormData()
fd.append('file', myFile)
apiDefault.request(fd)
// Kết quả: fd bây giờ cũng chứa 'lang' và 'version' nếu chúng chưa tồn tại
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"is(): boolean"})," — Kiểm tra xem dữ liệu mặc định đã được thiết lập chưa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(): ApiDefaultValue"})," — Trả về dữ liệu mặc định hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request(request: ApiFetch['request']): ApiFetch['request']"})," — Gộp dữ liệu mặc định đã lưu vào một đối tượng yêu cầu hoặc biến biểu mẫu ",n.jsx(c.code,{children:"FormData"})," được cung cấp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"set(request: ApiDefaultValue)"})," — Thiết lập dữ liệu mặc định cho các yêu cầu."]}),`
`]})]})}function o(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(t,{...i})}):t(i)}export{o as default};
