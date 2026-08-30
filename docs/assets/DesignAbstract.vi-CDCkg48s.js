import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignAbstract - Lớp cơ sở Constructor`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designabstract`,children:`Lớp DesignAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp cơ sở trừu tượng được thiết kế để quản lý các thuộc tính constructor và các thay đổi trạng thái. Nó cung cấp một cách có cấu trúc để xử lý các thuộc tính đầu vào, theo dõi thay đổi và thực thi các hàm callback khi cập nhật dữ liệu.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý thuộc tính`}),` — xử lý có cấu trúc dữ liệu đầu vào (`,(0,c.jsx)(t.code,{children:`props`}),`) và lưu trữ sự kiện (`,(0,c.jsx)(t.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theo dõi thay đổi`}),` — tích hợp với `,(0,c.jsx)(t.code,{children:`DesignChanged`}),` để giám sát và cập nhật hiệu quả các thay đổi thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý vòng đời`}),` — tự động thực thi `,(0,c.jsx)(t.code,{children:`makeCallback`}),` và `,(0,c.jsx)(t.code,{children:`initEvent`}),` trong quá trình cập nhật dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignAbstract`}),` là một lớp cơ sở trừu tượng và không thể được khởi tạo trực tiếp. Nó phục vụ như một nền tảng để tạo ra các lớp thiết kế quản lý trạng thái dựa trên các thuộc tính đầu vào (`,(0,c.jsx)(t.code,{children:`props`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Lớp này sử dụng hai loại generic để đảm bảo kiểu dữ liệu nghiêm ngặt:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T extends Record<string, any>`}),` — Kiểu cho các thuộc tính đầu vào (`,(0,c.jsx)(t.code,{children:`props`}),`). Xác định cấu trúc dữ liệu được truyền vào hàm khởi tạo và được sử dụng để theo dõi các thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`C extends Record<string, any>`}),` — Kiểu cho dữ liệu đầu ra hoặc trạng thái (`,(0,c.jsx)(t.code,{children:`event`}),`). Xác định cấu trúc của đối tượng được hình thành trong `,(0,c.jsx)(t.code,{children:`initEvent`}),` và được truyền vào các hàm gọi lại.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số hàm khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: T`}),` — một đối tượng chứa dữ liệu khởi tạo ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: (event: C) => void`}),` — một hàm gọi lại tùy chọn được thực thi sau mỗi lần cập nhật dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`changed?: string[]`}),` — danh sách các tên thuộc tính từ `,(0,c.jsx)(t.code,{children:`props`}),` để theo dõi. Nếu không được chỉ định, tất cả các khóa của `,(0,c.jsx)(t.code,{children:`props`}),` sẽ được theo dõi.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Phương thức bắt buộc phải triển khai:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected abstract initEvent(): void`}),` — một phương thức mô tả logic để chuyển đổi hoặc lọc các `,(0,c.jsx)(t.code,{children:`props`}),` thành một đối tượng trạng thái `,(0,c.jsx)(t.code,{children:`event`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignAbstract } from '@dxtmisha/functional'

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
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-quản-lý-dữ-liệu`,children:`Các phương thức quản lý dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Bắt đầu quy trình cập nhật callback. Gọi `,(0,c.jsx)(t.code,{children:`makeCallback`}),` và trả về instance để thực hiện chuỗi phương thức (method chaining).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compelled?: boolean`}),` — nếu là `,(0,c.jsx)(t.code,{children:`true`}),`, sẽ ép buộc cập nhật dữ liệu bất kể có thay đổi hay không.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.h3,{id:`makecallback`,children:(0,c.jsx)(t.code,{children:`makeCallback`})}),`
`,(0,c.jsx)(t.p,{children:`Logic thực thi chính để cập nhật trạng thái. Kiểm tra các thay đổi hoặc yêu cầu cập nhật bắt buộc, sau đó khởi tạo sự kiện và kích hoạt các hàm callback.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compelled: boolean`}),` — ép buộc cập nhật dữ liệu. Mặc định: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-được-bảo-vệ-cho-lớp-kế-thừa`,children:`Các phương thức được bảo vệ (cho lớp kế thừa)`}),`
`,(0,c.jsx)(t.h3,{id:`is`,children:(0,c.jsx)(t.code,{children:`is`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem một giá trị có tồn tại trong `,(0,c.jsx)(t.code,{children:`props`}),` theo tên hay không.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: keyof T`}),` — tên thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`})]}),`
`,(0,c.jsx)(t.h3,{id:`ischanged`,children:(0,c.jsx)(t.code,{children:`isChanged`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem giá trị thuộc tính có bị thay đổi hay không. Được sử dụng để ngăn chặn các tính toán dư thừa.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: keyof C`}),` — tên thuộc tính trong sự kiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — tên thuộc tính hoặc danh sách tên thuộc tính trong `,(0,c.jsx)(t.code,{children:`props`}),` mà giá trị này phụ thuộc vào. Nếu không được chỉ định, `,(0,c.jsx)(t.code,{children:`name`}),` sẽ được sử dụng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`})]}),`
`,(0,c.jsx)(t.h3,{id:`makecallbackitem`,children:(0,c.jsx)(t.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(t.p,{children:`Thực thi hàm callback đã được truyền vào constructor.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsxs)(t.h3,{id:`initevent-trừu-tượng`,children:[(0,c.jsx)(t.code,{children:`initEvent`}),` (trừu tượng)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức trừu tượng phải được triển khai trong lớp con. Nó sẽ gán dữ liệu cho `,(0,c.jsx)(t.code,{children:`this.event`}),` dựa trên `,(0,c.jsx)(t.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};