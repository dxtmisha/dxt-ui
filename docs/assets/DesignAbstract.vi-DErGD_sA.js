import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional/Classes/DesignAbstract - Lớp cơ sở Constructor"}),`
`,n.jsx(c.h1,{id:"lớp-designabstract",children:"Lớp DesignAbstract"}),`
`,n.jsx(c.p,{children:"Một lớp cơ sở trừu tượng được thiết kế để quản lý các thuộc tính constructor và các thay đổi trạng thái. Nó cung cấp một cách có cấu trúc để xử lý các thuộc tính đầu vào, theo dõi thay đổi và thực thi các hàm callback khi cập nhật dữ liệu."}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý thuộc tính"})," — xử lý có cấu trúc dữ liệu đầu vào (",n.jsx(c.code,{children:"props"}),") và lưu trữ sự kiện (",n.jsx(c.code,{children:"event"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Theo dõi thay đổi"})," — tích hợp với ",n.jsx(c.code,{children:"DesignChanged"})," để giám sát và cập nhật hiệu quả các thay đổi thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý vòng đời"})," — tự động thực thi ",n.jsx(c.code,{children:"makeCallback"})," và ",n.jsx(c.code,{children:"initEvent"})," trong quá trình cập nhật dữ liệu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"DesignAbstract"})," là một lớp cơ sở trừu tượng và không thể được khởi tạo trực tiếp. Nó phục vụ như một nền tảng để tạo ra các lớp thiết kế quản lý trạng thái dựa trên các thuộc tính đầu vào (",n.jsx(c.code,{children:"props"}),")."]}),`
`,n.jsx(c.h3,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsx(c.p,{children:"Lớp này sử dụng hai loại generic để đảm bảo kiểu dữ liệu nghiêm ngặt:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"T extends Record<string, any>"})," — Kiểu cho các thuộc tính đầu vào (",n.jsx(c.code,{children:"props"}),"). Xác định cấu trúc dữ liệu được truyền vào hàm khởi tạo và được sử dụng để theo dõi các thay đổi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"C extends Record<string, any>"})," — Kiểu cho dữ liệu đầu ra hoặc trạng thái (",n.jsx(c.code,{children:"event"}),"). Xác định cấu trúc của đối tượng được hình thành trong ",n.jsx(c.code,{children:"initEvent"})," và được truyền vào các hàm gọi lại."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số hàm khởi tạo:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"props: T"})," — một đối tượng chứa dữ liệu khởi tạo ban đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback?: (event: C) => void"})," — một hàm gọi lại tùy chọn được thực thi sau mỗi lần cập nhật dữ liệu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"changed?: string[]"})," — danh sách các tên thuộc tính từ ",n.jsx(c.code,{children:"props"})," để theo dõi. Nếu không được chỉ định, tất cả các khóa của ",n.jsx(c.code,{children:"props"})," sẽ được theo dõi."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Phương thức bắt buộc phải triển khai:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"protected abstract initEvent(): void"})," — một phương thức mô tả logic để chuyển đổi hoặc lọc các ",n.jsx(c.code,{children:"props"})," thành một đối tượng trạng thái ",n.jsx(c.code,{children:"event"}),"."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignAbstract } from '@dxtmisha/functional'

// 1. Xác định cấu trúc
interface MyProps { label: string; value: number }
interface MyState { display: string }

// 2. Triển khai một lớp cụ thể
class MyDesign extends DesignAbstract<MyProps, MyState> {
  protected initEvent(): void {
    this.event.display = \`\${this.props.label}: \${this.props.value}\`
  }
}

// 3. Tạo một thực thể
const design = new MyDesign(
  { label: 'Counter', value: 10 }, 
  (state) => console.log('Trạng thái mới:', state.display)
)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức-quản-lý-dữ-liệu",children:"Các phương thức quản lý dữ liệu"}),`
`,n.jsx(c.h3,{id:"make",children:n.jsx(c.code,{children:"make"})}),`
`,n.jsxs(c.p,{children:["Bắt đầu quy trình cập nhật callback. Gọi ",n.jsx(c.code,{children:"makeCallback"})," và trả về instance để thực hiện chuỗi phương thức (method chaining)."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"compelled?: boolean"})," — nếu là ",n.jsx(c.code,{children:"true"}),", sẽ ép buộc cập nhật dữ liệu bất kể có thay đổi hay không."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"this"})]}),`
`,n.jsx(c.h3,{id:"makecallback",children:n.jsx(c.code,{children:"makeCallback"})}),`
`,n.jsx(c.p,{children:"Logic thực thi chính để cập nhật trạng thái. Kiểm tra các thay đổi hoặc yêu cầu cập nhật bắt buộc, sau đó khởi tạo sự kiện và kích hoạt các hàm callback."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"compelled: boolean"})," — ép buộc cập nhật dữ liệu. Mặc định: ",n.jsx(c.code,{children:"false"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"void"})]}),`
`,n.jsx(c.h2,{id:"các-phương-thức-được-bảo-vệ-cho-lớp-kế-thừa",children:"Các phương thức được bảo vệ (cho lớp kế thừa)"}),`
`,n.jsx(c.h3,{id:"is",children:n.jsx(c.code,{children:"is"})}),`
`,n.jsxs(c.p,{children:["Kiểm tra xem một giá trị có tồn tại trong ",n.jsx(c.code,{children:"props"})," theo tên hay không."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: keyof T"})," — tên thuộc tính."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})]}),`
`,n.jsx(c.h3,{id:"ischanged",children:n.jsx(c.code,{children:"isChanged"})}),`
`,n.jsx(c.p,{children:"Kiểm tra xem giá trị thuộc tính có bị thay đổi hay không. Được sử dụng để ngăn chặn các tính toán dư thừa."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: keyof C"})," — tên thuộc tính trong sự kiện."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"nameProp?: keyof T | (keyof T)[]"})," — tên thuộc tính hoặc danh sách tên thuộc tính trong ",n.jsx(c.code,{children:"props"})," mà giá trị này phụ thuộc vào. Nếu không được chỉ định, ",n.jsx(c.code,{children:"name"})," sẽ được sử dụng."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})]}),`
`,n.jsx(c.h3,{id:"makecallbackitem",children:n.jsx(c.code,{children:"makeCallbackItem"})}),`
`,n.jsx(c.p,{children:"Thực thi hàm callback đã được truyền vào constructor."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"void"})]}),`
`,n.jsxs(c.h3,{id:"initevent-trừu-tượng",children:[n.jsx(c.code,{children:"initEvent"})," (trừu tượng)"]}),`
`,n.jsxs(c.p,{children:["Phương thức trừu tượng phải được triển khai trong lớp con. Nó sẽ gán dữ liệu cho ",n.jsx(c.code,{children:"this.event"})," dựa trên ",n.jsx(c.code,{children:"this.props"}),"."]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"void"})]})]})}function a(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(i,{...h})}):i(h)}export{a as default};
