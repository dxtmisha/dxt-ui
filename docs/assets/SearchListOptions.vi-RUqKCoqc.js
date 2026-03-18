import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/SearchListOptions - Quản lý Tùy chọn Danh sách Tìm kiếm"}),`
`,n.jsx(c.h1,{id:"lớp-searchlistoptions",children:"Lớp SearchListOptions"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"SearchListOptions"})," chịu trách nhiệm quản lý và cung cấp quyền truy cập vào các tùy chọn cấu hình được sử dụng bởi hệ thống ",n.jsx(c.code,{children:"SearchList"}),". Nó đảm bảo rằng các giá trị mặc định được sử dụng khi các tùy chọn cụ thể không được cung cấp."]}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cấu hình tập trung"})," — cung cấp một điểm truy cập duy nhất cho tất cả các cài đặt liên quan đến tìm kiếm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý giá trị mặc định"})," — tự động áp dụng các giá trị mặc định hợp lý (ví dụ: giới hạn, độ trễ) nếu chúng thiếu trong các tùy chọn được cung cấp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Giao diện Fluent"})," — hỗ trợ chuỗi lệnh (method chaining) để thiết lập các tùy chọn mới."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"SearchListOptions(options)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: SearchOptions"})," — một đối tượng chứa cấu hình tìm kiếm."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,n.jsx(c.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(c.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getOptions(): SearchOptions"})," — Trả về đối tượng tùy chọn tìm kiếm hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getLimit(): number"})," — Trả về số lượng ký tự tối thiểu cần thiết để kích hoạt tìm kiếm (mặc định là ",n.jsx(c.code,{children:"2"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getReturnEverything(): boolean"})," — Trả về liệu có trả về tất cả các mục ngay cả khi chúng không khớp với truy vấn tìm kiếm hay không (mặc định là ",n.jsx(c.code,{children:"false"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getDelay(): number"})," — Trả về độ trễ tìm kiếm tính bằng mili giây (mặc định là ",n.jsx(c.code,{children:"0"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getFindExactMatch(): boolean"})," — Trả về liệu có thực hiện tìm kiếm khớp chính xác hay không (mặc định là ",n.jsx(c.code,{children:"false"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getClassName(): string"})," — Trả về tên lớp CSS được sử dụng để làm nổi bật các kết quả khớp (mặc định là ",n.jsx(c.code,{children:"'sys-search-selection'"}),")."]}),`
`]}),`
`,n.jsx(c.h3,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setOptions(options: SearchOptions): this"})," — Thiết lập các tùy chọn tìm kiếm mới và trả về thực thể hiện tại để tạo chuỗi lệnh."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-kiểu-dữ-liệu-types",children:"Các kiểu dữ liệu (Types)"}),`
`,n.jsx(c.h3,{id:"searchoptions",children:"SearchOptions"}),`
`,n.jsx(c.p,{children:"Đối tượng cấu hình chính cho hệ thống tìm kiếm. Tất cả các trường là tùy chọn:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"limit?: number"})," — độ dài ký tự tối thiểu để kích hoạt tìm kiếm. Mặc định: ",n.jsx(c.code,{children:"2"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"returnEverything?: boolean"})," — nếu là ",n.jsx(c.code,{children:"true"}),", trả về tất cả các mục bất kể có khớp hay không. Mặc định: ",n.jsx(c.code,{children:"false"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"delay?: number"})," — độ trễ thực hiện tìm kiếm tính bằng mili giây. Mặc định: ",n.jsx(c.code,{children:"0"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"findExactMatch?: boolean"})," — cho phép khớp từ chính xác. Mặc định: ",n.jsx(c.code,{children:"false"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"classSearchName?: string"})," — tên lớp CSS để làm nổi bật các kết quả khớp. Mặc định: ",n.jsx(c.code,{children:"'sys-search-selection'"}),"."]}),`
`]})]})}function m(i={}){const{wrapper:c}={...t(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(h,{...i})}):h(i)}export{m as default};
