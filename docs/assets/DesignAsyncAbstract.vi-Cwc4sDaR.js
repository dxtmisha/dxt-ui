import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional/Classes/DesignAsyncAbstract - Lớp thiết kế bất đồng bộ cơ sở"}),`
`,n.jsx(c.h1,{id:"lớp-designasyncabstract",children:"Lớp DesignAsyncAbstract"}),`
`,n.jsxs(c.p,{children:["Một lớp cơ sở trừu tượng bất đồng bộ để quản lý các thuộc tính của constructor và thay đổi trạng thái. Nó mở rộng ",n.jsx(c.code,{children:"DesignAbstract"})," để hỗ trợ khởi tạo sự kiện bất đồng bộ, lý tưởng cho các thiết kế yêu cầu lấy dữ liệu hoặc tính toán bất đồng bộ."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khởi tạo bất đồng bộ"})," — hỗ trợ khởi tạo sự kiện dựa trên ",n.jsx(c.code,{children:"Promise"})," thông qua ",n.jsx(c.code,{children:"initEvent"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý thuộc tính"})," — kế thừa việc xử lý có cấu trúc dữ liệu đầu vào (",n.jsx(c.code,{children:"props"}),") và lưu trữ sự kiện (",n.jsx(c.code,{children:"event"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Luồng công việc bất đồng bộ"})," — đảm bảo rằng các callback chỉ được kích hoạt sau khi quá trình chuẩn bị trạng thái bất đồng bộ hoàn tất."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"DesignAsyncAbstract"})," là một lớp trừu tượng và không thể được khởi tạo trực tiếp. Nó được thiết kế để mở rộng bởi các lớp khác, các lớp này phải triển khai phương thức ",n.jsx(c.code,{children:"initEvent"})," để chuẩn bị dữ liệu bất đồng bộ."]}),`
`,n.jsx(c.h3,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsx(c.p,{children:"Lớp này sử dụng hai loại generic để đảm bảo kiểu dữ liệu nghiêm ngặt:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"T extends Record<string, any>"})," — Kiểu cho các thuộc tính đầu vào (",n.jsx(c.code,{children:"props"}),"). Xác định cấu trúc dữ liệu được truyền vào hàm khởi tạo."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"C extends Record<string, any>"})," — Kiểu cho trạng thái nội bộ hoặc bộ nhớ đệm (",n.jsx(c.code,{children:"event"}),"). Xác định cấu trúc dữ liệu sẽ có sẵn trong các hàm gọi lại sau khi khởi tạo bất đồng bộ."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số hàm khởi tạo:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"props: T"})," — một đối tượng chứa dữ liệu ban đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback?: (event: C) => void"})," — một hàm gọi lại sẽ được gọi sau mỗi lần cập nhật thành công (bao gồm cả cập nhật bất đồng bộ)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"changed?: string[]"})," — danh sách các khóa từ ",n.jsx(c.code,{children:"props"})," cần theo dõi (tùy chọn). Nếu không được cung cấp, tất cả các khóa trong ",n.jsx(c.code,{children:"props"})," sẽ được theo dõi."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Thuộc tính nội bộ:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"protected readonly event: C"})," — đối tượng trạng thái. Đây là nơi bạn nên đổ dữ liệu vào trong ",n.jsx(c.code,{children:"initEvent"}),". Nó sẽ được truyền vào ",n.jsx(c.code,{children:"callback"}),"."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Phương thức bắt buộc phải triển khai:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"protected abstract initEvent(): Promise<void>"})," — một phương thức bất đồng bộ được gọi mỗi khi các thuộc tính được theo dõi thay đổi. Đây là nơi ",n.jsx(c.code,{children:"this.event"})," nên được chuẩn bị."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignAsyncAbstract } from '@dxtmisha/functional'

// 1. Xác định các interface
interface MyProps { userId: number }
interface MyState { userName: string; avatar: string }

// 2. Triển khai một lớp cụ thể
class UserDesign extends DesignAsyncAbstract<MyProps, MyState> {
  protected async initEvent(): Promise<void> {
    const response = await fetch(\`https://api.example.com/users/\${this.props.userId}\`)
    const data = await response.json()
    
    this.event.userName = data.name
    this.event.avatar = data.image
  }
}

// 3. Sử dụng
const user = new UserDesign(
  { userId: 1 }, 
  (state) => {
    console.log('Dữ liệu người dùng đã được tải:', state.userName)
  },
  ['userId'] // Chỉ theo dõi thay đổi của userId
)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức-quản-lý-dữ-liệu",children:"Các phương thức quản lý dữ liệu"}),`
`,n.jsx(c.h3,{id:"make",children:n.jsx(c.code,{children:"make"})}),`
`,n.jsxs(c.p,{children:["Khởi tạo quá trình cập nhật callback bất đồng bộ. Nó gọi ",n.jsx(c.code,{children:"makeCallback"})," (mà không đợi nó hoàn thành) và trả về instance để có thể thực hiện chuỗi lệnh (chaining)."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"compelled?: boolean"})," — nếu là ",n.jsx(c.code,{children:"true"}),", sẽ ép buộc cập nhật dữ liệu bất kể có phát hiện thay đổi hay không."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"this"})]}),`
`,n.jsx(c.h3,{id:"makecallback",children:n.jsx(c.code,{children:"makeCallback"})}),`
`,n.jsxs(c.p,{children:["Logic thực thi bất đồng bộ chính để cập nhật trạng thái. Nó đợi ",n.jsx(c.code,{children:"initEvent"})," hoàn thành trước khi kích hoạt các callback và cập nhật trình theo dõi thay đổi."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"compelled?: boolean"})," — ép buộc cập nhật dữ liệu."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<void>"})]}),`
`,n.jsx(c.h2,{id:"các-phương-thức-được-bảo-vệ-cho-lớp-kế-thừa",children:"Các phương thức được bảo vệ (cho lớp kế thừa)"}),`
`,n.jsx(c.p,{children:"Các phương thức này có sẵn trong các lớp con để quản lý logic cập nhật."}),`
`,n.jsx(c.h3,{id:"is",children:n.jsx(c.code,{children:"is"})}),`
`,n.jsxs(c.p,{children:["Kiểm tra sự tồn tại của một khóa trong đối tượng ",n.jsx(c.code,{children:"props"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: keyof T"})," — tên thuộc tính."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})]}),`
`,n.jsx(c.h3,{id:"ischanged",children:n.jsx(c.code,{children:"isChanged"})}),`
`,n.jsxs(c.p,{children:["Kiểm tra xem giá trị của một thuộc tính cụ thể có thay đổi so với trạng thái trước đó hay không. Hữu ích bên trong ",n.jsx(c.code,{children:"initEvent"})," để tối ưu hóa các yêu cầu (chỉ thực hiện hành động nếu một ID cụ thể đã thay đổi)."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: keyof C"})," — tên thuộc tính trong trạng thái."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"nameProp?: keyof T | (keyof T)[]"})," — tên hoặc danh sách tên các thuộc tính trong ",n.jsx(c.code,{children:"props"})," mà sự thay đổi dựa trên đó. Mặc định trùng với ",n.jsx(c.code,{children:"name"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})]}),`
`,n.jsx(c.h3,{id:"makecallbackitem",children:n.jsx(c.code,{children:"makeCallbackItem"})}),`
`,n.jsx(c.p,{children:"Thực thi hàm callback đã được truyền vào constructor."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"void"})]}),`
`,n.jsxs(c.h3,{id:"initevent-trừu-tượng",children:[n.jsx(c.code,{children:"initEvent"})," (trừu tượng)"]}),`
`,n.jsxs(c.p,{children:["Phương thức bất đồng bộ phải được triển khai trong lớp con. Nó sẽ gán dữ liệu cho ",n.jsx(c.code,{children:"this.event"})," dựa trên ",n.jsx(c.code,{children:"this.props"}),"."]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<void>"})]})]})}function x(i={}){const{wrapper:c}={...t(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(h,{...i})}):h(i)}export{x as default};
