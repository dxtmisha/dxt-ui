import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignConstructorAbstract - Logic Constructor cơ sở`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designconstructorabstract`,children:`Lớp DesignConstructorAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp cơ sở trừu tượng cung cấp cấu trúc tiêu chuẩn hóa cho logic constructor của thành phần. Nó giúp quản lý dữ liệu thành phần, kiểu dáng và các sửa đổi dựa trên trạng thái.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu trúc dữ liệu tiêu chuẩn hóa`}),` — xử lý các thuộc tính, lớp và kiểu dáng của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp trạng thái`}),` — cập nhật phản ứng dựa trên trạng thái của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mở rộng linh hoạt`}),` — nền tảng để tạo các specialized constructors.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignConstructorAbstract`}),` là một lớp cơ sở trừu tượng và không thể được khởi tạo trực tiếp. Nó phục vụ như một nền tảng để tạo ra các hàm khởi tạo thành phần chức năng, kết hợp quản lý phong cách (styles), lớp (classes), thành phần và hiển thị (rendering).`]}),`
`,(0,c.jsx)(t.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Lớp này sử dụng một hệ thống generic phức tạp để đảm bảo định kiểu đầy đủ cho thành phần:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`E extends Element`}),` — Kiểu của phần tử HTML gốc (ví dụ: `,(0,c.jsx)(t.code,{children:`HTMLElement`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`COMP extends ConstrComponent`}),` — Danh sách các thành phần phụ được kết nối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`EMITS extends ConstrItem`}),` — Định kiểu cho các sự kiện (emits) do thành phần tạo ra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`EXPOSE extends ConstrItem`}),` — Cấu trúc dữ liệu được xuất ra môi trường bên ngoài thông qua `,(0,c.jsx)(t.code,{children:`expose`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SLOTS extends ConstrItem`}),` — Các slot hiện có của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`CLASSES extends ConstrClasses`}),` — Đối tượng lớp CSS kết quả.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`P extends ConstrItem`}),` — Các thuộc tính (props) của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số hàm khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên thành phần cơ sở (được sử dụng để tạo tên lớp và kiểu dáng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — một đối tượng chứa các thuộc tính của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ConstrOptions<COMP, EMITS, P>`}),` — các tham số bổ sung (thành phần, sửa đổi, trình xử lý sự kiện, ghi đè kiểu dáng và lớp).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignConstructorAbstract } from '@dxtmisha/functional'

// 1. Xác định giao diện thành phần
interface MyProps { size?: 'small' | 'medium' }
interface MyClasses { main: { [key: string]: boolean } }

// 2. Triển khai hàm khởi tạo
class ButtonDesign extends DesignConstructorAbstract<
  HTMLButtonElement, // E
  {},                // COMP
  {},                // EMITS
  {},                // EXPOSE
  {},                // SLOTS
  MyClasses,         // CLASSES
  MyProps            // P
> {
  constructor(name: string, props: MyProps) {
    super(name, props)
    this.init()
  }

  // Các phương thức bắt buộc phải triển khai
  protected initExpose() { return {} }
  protected initClasses() { return { main: { active: true } } }
  protected initStyles() { return {} }
  protected initRender() { return h('button', this.getAttrs(), this.slots.default?.()) }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-vòng-đời--render`,children:`Các phương thức Vòng đời & Render`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): this`}),` — Khởi tạo instance, chuẩn bị trạng thái nội bộ, lớp và kiểu dáng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`render(): Function`}),` — Trả về hàm render để sử dụng trong `,(0,c.jsx)(t.code,{children:`setup()`}),` của thành phần Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setup(): void`}),` — Thực thi trình tự thiết lập chính cho logic thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-hỗ-trợ-đặt-tên`,children:`Các phương thức Hỗ trợ Đặt tên`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — Trả về tên đầy đủ của thành phần (ví dụ: `,(0,c.jsx)(t.code,{children:`button-large`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — Trả về tên thiết kế cơ sở (phần đầu tiên của tên).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSubClass(name: string | string[]): string`}),` — Tạo tên lớp cho phần tử con theo phong cách BEM (`,(0,c.jsx)(t.code,{children:`__`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusClass(name: string | string[]): string`}),` — Tạo tên lớp trạng thái theo phong cách BEM (`,(0,c.jsx)(t.code,{children:`--`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStyle(name: string | string[]): string`}),` — Tạo tên biến CSS hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`dữ-liệu-thành-phần`,children:`Dữ liệu Thành phần`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAttrs(): object`}),` — Trả về đối tượng thuộc tính, loại trừ các thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),` và `,(0,c.jsx)(t.code,{children:`style`}),` đã được bảo lưu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`expose(): object`}),` — Trả về dữ liệu và tham chiếu để xuất thông qua `,(0,c.jsx)(t.code,{children:`expose`}),` của Vue.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};