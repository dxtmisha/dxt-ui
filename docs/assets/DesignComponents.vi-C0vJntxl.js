import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Classes/DesignComponents - Trình quản lý thành phần cơ sở`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designcomponents`,children:`Lớp DesignComponents`}),`
`,(0,c.jsx)(n.p,{children:`Lớp cơ sở để làm việc với các thành phần kết nối (connected components) và quản lý logic render của chúng trong hệ thống thiết kế. Nó cho phép đăng ký thành phần, sửa đổi các thuộc tính mặc định và tạo VNode một cách linh hoạt.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý thành phần`}),` — đăng ký và truy xuất các thành phần Vue một cách tập trung.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sửa đổi động`}),` — hỗ trợ áp dụng các sửa đổi thuộc tính toàn cục hoặc cụ thể cho các thành phần trước khi render.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Render linh hoạt`}),` — cung cấp nhiều phương thức (`,(0,c.jsx)(n.code,{children:`render`}),`, `,(0,c.jsx)(n.code,{children:`renderOne`}),`, `,(0,c.jsx)(n.code,{children:`renderAdd`}),`) để tạo Vue VNode với tính năng tự động liên kết thuộc tính (binding).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa hiệu suất`}),` — sử dụng bộ nhớ đệm nội bộ với các thuộc tính `,(0,c.jsx)(n.code,{children:`computed`}),` của Vue cho các sửa đổi thuộc tính.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một thực thể `,(0,c.jsx)(n.code,{children:`DesignComponents`}),` mới. Lớp này kết hợp các thành phần và các sửa đổi của chúng vào một cơ chế quản lý hiển thị duy nhất.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này sử dụng các generic để đảm bảo cấu hình kiểu render linh hoạt:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`COMP extends ConstrComponent`}),` — Một đối tượng chứa danh sách các thành phần có sẵn. Xác định cấu trúc mà `,(0,c.jsx)(n.code,{children:`DesignComponents`}),` sẽ sử dụng để tìm kiếm và trả về các thành phần để render.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`P extends ConstrItem`}),` — Kiểu thuộc tính (props) được sử dụng để định kiểu cho các sửa đổi và dữ liệu được truyền trong quá trình render.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`components: COMP = {}`}),` — danh sách các thành phần được kết nối (một đối tượng trong đó khóa là tên và giá trị là các thành phần Vue).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`modification?: ConstrComponentMod<P>`}),` — một đối tượng sửa đổi cho phép ghi đè các thuộc tính (props) cho mỗi thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignComponents } from '@dxtmisha/functional'
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

// 1. Đăng ký thành phần
const components = {
  button: MyButton,
  input: MyInput
}

// 2. Xác định các sửa đổi (props mặc định)
const modification = {
  button: { size: 'large', color: 'primary' },
  input: { focus: true }
}

const design = new DesignComponents(components, modification)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-render`,children:`Các phương thức Render`}),`
`,(0,c.jsx)(n.h3,{id:`render`,children:(0,c.jsx)(n.code,{children:`render`})}),`
`,(0,c.jsxs)(n.p,{children:[`Render một thành phần theo tên và trả về một mảng chứa một `,(0,c.jsx)(n.code,{children:`VNode`}),` duy nhất. Điều này hữu ích cho Vue, nơi thường yêu cầu các mảng nút.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của thành phần đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Các thuộc tính được truyền cho thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Các phần tử con hoặc slot của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — Khóa (key) cho VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`VNode[]`}),` — Một mảng chứa VNode đã được tạo.`]}),`
`,(0,c.jsx)(n.h3,{id:`renderone`,children:(0,c.jsx)(n.code,{children:`renderOne`})}),`
`,(0,c.jsxs)(n.p,{children:[`Render một thành phần duy nhất và trả về đối tượng `,(0,c.jsx)(n.code,{children:`VNode`}),` trực tiếp. Nếu không tìm thấy thành phần, nó sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của thành phần đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Các thuộc tính cho thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Các phần tử con của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — Khóa (key) cho VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`VNode | undefined`}),` — Đối tượng VNode hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`renderadd`,children:(0,c.jsx)(n.code,{children:`renderAdd`})}),`
`,(0,c.jsxs)(n.p,{children:[`Render một thành phần và đẩy `,(0,c.jsx)(n.code,{children:`VNode`}),` kết quả vào một mảng được cung cấp. Điều này cho phép thu thập nhiều nút trong một lần thực thi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any[]`}),` — Mảng mà kết quả render sẽ được thêm vào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Các thuộc tính cho thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Các phần tử con của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — Khóa (key) cho VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`}),` — Một tham chiếu đến instance hiện tại để thực hiện chuỗi lệnh (chaining).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-bổ-sung`,children:`Các phương thức bổ sung`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(name: string): boolean`}),` — Kiểm tra xem một thành phần có được đăng ký hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(name: string): COMP[K]`}),` — Trả về đối tượng thành phần đã đăng ký theo tên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getModification(index?: string, props?: object): object | undefined`}),` — Trả về dữ liệu đầu vào đã sửa đổi cho các thành phần kết nối.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};