import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Classes/DesignAsyncAbstract - Lớp thiết kế bất đồng bộ cơ sở`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designasyncabstract`,children:`Lớp DesignAsyncAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp cơ sở trừu tượng bất đồng bộ để quản lý các thuộc tính của constructor và thay đổi trạng thái. Nó mở rộng `,(0,c.jsx)(n.code,{children:`DesignAbstract`}),` để hỗ trợ khởi tạo sự kiện bất đồng bộ, lý tưởng cho các thiết kế yêu cầu lấy dữ liệu hoặc tính toán bất đồng bộ.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo bất đồng bộ`}),` — hỗ trợ khởi tạo sự kiện dựa trên `,(0,c.jsx)(n.code,{children:`Promise`}),` thông qua `,(0,c.jsx)(n.code,{children:`initEvent`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý thuộc tính`}),` — kế thừa việc xử lý có cấu trúc dữ liệu đầu vào (`,(0,c.jsx)(n.code,{children:`props`}),`) và lưu trữ sự kiện (`,(0,c.jsx)(n.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Luồng công việc bất đồng bộ`}),` — đảm bảo rằng các callback chỉ được kích hoạt sau khi quá trình chuẩn bị trạng thái bất đồng bộ hoàn tất.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignAsyncAbstract`}),` là một lớp trừu tượng và không thể được khởi tạo trực tiếp. Nó được thiết kế để mở rộng bởi các lớp khác, các lớp này phải triển khai phương thức `,(0,c.jsx)(n.code,{children:`initEvent`}),` để chuẩn bị dữ liệu bất đồng bộ.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này sử dụng hai loại generic để đảm bảo kiểu dữ liệu nghiêm ngặt:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends Record<string, any>`}),` — Kiểu cho các thuộc tính đầu vào (`,(0,c.jsx)(n.code,{children:`props`}),`). Xác định cấu trúc dữ liệu được truyền vào hàm khởi tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`C extends Record<string, any>`}),` — Kiểu cho trạng thái nội bộ hoặc bộ nhớ đệm (`,(0,c.jsx)(n.code,{children:`event`}),`). Xác định cấu trúc dữ liệu sẽ có sẵn trong các hàm gọi lại sau khi khởi tạo bất đồng bộ.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số hàm khởi tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: T`}),` — một đối tượng chứa dữ liệu ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: C) => void`}),` — một hàm gọi lại sẽ được gọi sau mỗi lần cập nhật thành công (bao gồm cả cập nhật bất đồng bộ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`changed?: string[]`}),` — danh sách các khóa từ `,(0,c.jsx)(n.code,{children:`props`}),` cần theo dõi (tùy chọn). Nếu không được cung cấp, tất cả các khóa trong `,(0,c.jsx)(n.code,{children:`props`}),` sẽ được theo dõi.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Thuộc tính nội bộ:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected readonly event: C`}),` — đối tượng trạng thái. Đây là nơi bạn nên đổ dữ liệu vào trong `,(0,c.jsx)(n.code,{children:`initEvent`}),`. Nó sẽ được truyền vào `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Phương thức bắt buộc phải triển khai:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected abstract initEvent(): Promise<void>`}),` — một phương thức bất đồng bộ được gọi mỗi khi các thuộc tính được theo dõi thay đổi. Đây là nơi `,(0,c.jsx)(n.code,{children:`this.event`}),` nên được chuẩn bị.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignAsyncAbstract } from '@dxtmisha/functional'

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
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-quản-lý-dữ-liệu`,children:`Các phương thức quản lý dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo quá trình cập nhật callback bất đồng bộ. Nó gọi `,(0,c.jsx)(n.code,{children:`makeCallback`}),` (mà không đợi nó hoàn thành) và trả về instance để có thể thực hiện chuỗi lệnh (chaining).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, sẽ ép buộc cập nhật dữ liệu bất kể có phát hiện thay đổi hay không.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallback`,children:(0,c.jsx)(n.code,{children:`makeCallback`})}),`
`,(0,c.jsxs)(n.p,{children:[`Logic thực thi bất đồng bộ chính để cập nhật trạng thái. Nó đợi `,(0,c.jsx)(n.code,{children:`initEvent`}),` hoàn thành trước khi kích hoạt các callback và cập nhật trình theo dõi thay đổi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — ép buộc cập nhật dữ liệu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-được-bảo-vệ-cho-lớp-kế-thừa`,children:`Các phương thức được bảo vệ (cho lớp kế thừa)`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức này có sẵn trong các lớp con để quản lý logic cập nhật.`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểm tra sự tồn tại của một khóa trong đối tượng `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof T`}),` — tên thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`ischanged`,children:(0,c.jsx)(n.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểm tra xem giá trị của một thuộc tính cụ thể có thay đổi so với trạng thái trước đó hay không. Hữu ích bên trong `,(0,c.jsx)(n.code,{children:`initEvent`}),` để tối ưu hóa các yêu cầu (chỉ thực hiện hành động nếu một ID cụ thể đã thay đổi).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof C`}),` — tên thuộc tính trong trạng thái.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — tên hoặc danh sách tên các thuộc tính trong `,(0,c.jsx)(n.code,{children:`props`}),` mà sự thay đổi dựa trên đó. Mặc định trùng với `,(0,c.jsx)(n.code,{children:`name`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallbackitem`,children:(0,c.jsx)(n.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(n.p,{children:`Thực thi hàm callback đã được truyền vào constructor.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsxs)(n.h3,{id:`initevent-trừu-tượng`,children:[(0,c.jsx)(n.code,{children:`initEvent`}),` (trừu tượng)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức bất đồng bộ phải được triển khai trong lớp con. Nó sẽ gán dữ liệu cho `,(0,c.jsx)(n.code,{children:`this.event`}),` dựa trên `,(0,c.jsx)(n.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};