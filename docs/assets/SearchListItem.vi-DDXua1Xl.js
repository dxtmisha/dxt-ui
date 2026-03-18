import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/SearchListItem - Quản lý Thành phần Tìm kiếm"}),`
`,n.jsx(i.h1,{id:"lớp-searchlistitem",children:"Lớp SearchListItem"}),`
`,n.jsxs(i.p,{children:["Lớp ",n.jsx(i.code,{children:"SearchListItem"})," đại diện cho trạng thái hiện tại của nội dung nhập tìm kiếm. Nó quản lý giá trị đang được tìm kiếm và xác định liệu có nên kích hoạt thao tác tìm kiếm hay không dựa trên các tùy chọn đã cấu hình."]}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quản lý giá trị"})," — cung cấp các phương thức dễ dàng để lấy và thiết lập chuỗi tìm kiếm."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Logic kích hoạt"})," — xác định liệu có nên bắt đầu tìm kiếm hay không dựa trên độ dài của chuỗi tìm kiếm."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"An toàn kiểu dữ liệu"})," — bao gồm các type guard để xác minh xem giá trị có khác rỗng hay không."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(i.code,{children:"SearchListItem(value, options)"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"value: string | undefined"})," — giá trị tìm kiếm ban đầu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"options: SearchListOptions"})," — một thực thể của ",n.jsx(i.code,{children:"SearchListOptions"})," để cung cấp giới hạn tìm kiếm."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (độ dài < 3)
item.set('hello')
console.log(item.isSearch()) // true (độ dài >= 3)
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"is(): boolean"})," — Kiểm tra xem giá trị hiện tại có khác rỗng hoặc không xác định hay không."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isSearch(): boolean"})," — Kiểm tra xem có nên thực hiện tìm kiếm hay không (giá trị tồn tại VÀ độ dài >= giới hạn)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"get(): string"})," — Trả về giá trị tìm kiếm hiện tại dưới dạng chuỗi."]}),`
`]}),`
`,n.jsx(i.h3,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"set(value?: string): this"})," — Thiết lập giá trị tìm kiếm mới và trả về thực thể hiện tại."]}),`
`]}),`
`,n.jsx(i.h2,{id:"kích-hoạt-tìm-kiếm",children:"Kích hoạt tìm kiếm"}),`
`,n.jsxs(i.p,{children:["Lớp ",n.jsx(i.code,{children:"SearchListItem"})," đóng vai trò như một bộ lọc quyết định xem hệ thống tìm kiếm có nên bắt đầu xử lý dữ liệu hay không. Điều này được xử lý bởi phương thức ",n.jsx(i.code,{children:"isSearch()"}),", phương thức này sử dụng tùy chọn ",n.jsx(i.code,{children:"limit"})," từ ",n.jsx(i.code,{children:"SearchListOptions"}),"."]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsxs(i.strong,{children:["Độ dài tối thiểu (",n.jsx(i.code,{children:"limit"}),")"]}),": Một tìm kiếm chỉ được coi là hoạt động nếu số lượng ký tự trong chuỗi tìm kiếm lớn hơn hoặc bằng giới hạn đã xác định."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Hành vi mặc định"}),": Theo mặc định, giới hạn được đặt thành ",n.jsx(i.code,{children:"2"}),". Điều này có nghĩa là việc tìm kiếm ",n.jsx(i.code,{children:'"a"'})," sẽ không kích hoạt kết quả khớp, nhưng ",n.jsx(i.code,{children:'"ad"'})," hoặc ",n.jsx(i.code,{children:'"admin"'})," thì có."]}),`
`]}),`
`,n.jsx(i.p,{children:'Logic này giúp ngăn chặn các tính toán không cần thiết và các kết quả "nhiễu" khi người dùng mới chỉ nhập một ký tự duy nhất.'})]})}function g(h={}){const{wrapper:i}={...c(),...h.components};return i?n.jsx(i,{...h,children:n.jsx(t,{...h})}):t(h)}export{g as default};
