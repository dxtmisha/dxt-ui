import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional/Classes/DesignComponents - Trình quản lý thành phần cơ sở"}),`
`,n.jsx(h.h1,{id:"lớp-designcomponents",children:"Lớp DesignComponents"}),`
`,n.jsx(h.p,{children:"Lớp cơ sở để làm việc với các thành phần kết nối (connected components) và quản lý logic render của chúng trong hệ thống thiết kế. Nó cho phép đăng ký thành phần, sửa đổi các thuộc tính mặc định và tạo VNode một cách linh hoạt."}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý thành phần"})," — đăng ký và truy xuất các thành phần Vue một cách tập trung."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Sửa đổi động"})," — hỗ trợ áp dụng các sửa đổi thuộc tính toàn cục hoặc cụ thể cho các thành phần trước khi render."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Render linh hoạt"})," — cung cấp nhiều phương thức (",n.jsx(h.code,{children:"render"}),", ",n.jsx(h.code,{children:"renderOne"}),", ",n.jsx(h.code,{children:"renderAdd"}),") để tạo Vue VNode với tính năng tự động liên kết thuộc tính (binding)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tối ưu hóa hiệu suất"})," — sử dụng bộ nhớ đệm nội bộ với các thuộc tính ",n.jsx(h.code,{children:"computed"})," của Vue cho các sửa đổi thuộc tính."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Tạo một thực thể ",n.jsx(h.code,{children:"DesignComponents"})," mới. Lớp này kết hợp các thành phần và các sửa đổi của chúng vào một cơ chế quản lý hiển thị duy nhất."]}),`
`,n.jsx(h.h3,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsx(h.p,{children:"Lớp này sử dụng các generic để đảm bảo cấu hình kiểu render linh hoạt:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"COMP extends ConstrComponent"})," — Một đối tượng chứa danh sách các thành phần có sẵn. Xác định cấu trúc mà ",n.jsx(h.code,{children:"DesignComponents"})," sẽ sử dụng để tìm kiếm và trả về các thành phần để render."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"P extends ConstrItem"})," — Kiểu thuộc tính (props) được sử dụng để định kiểu cho các sửa đổi và dữ liệu được truyền trong quá trình render."]}),`
`]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"components: COMP = {}"})," — danh sách các thành phần được kết nối (một đối tượng trong đó khóa là tên và giá trị là các thành phần Vue)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"modification?: ConstrComponentMod<P>"})," — một đối tượng sửa đổi cho phép ghi đè các thuộc tính (props) cho mỗi thành phần."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignComponents } from '@dxtmisha/functional'
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
`,n.jsx(h.h2,{id:"các-phương-thức-render",children:"Các phương thức Render"}),`
`,n.jsx(h.h3,{id:"render",children:n.jsx(h.code,{children:"render"})}),`
`,n.jsxs(h.p,{children:["Render một thành phần theo tên và trả về một mảng chứa một ",n.jsx(h.code,{children:"VNode"})," duy nhất. Điều này hữu ích cho Vue, nơi thường yêu cầu các mảng nút."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"name: string"})," — Tên của thành phần đã đăng ký."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"props: object"})," — Các thuộc tính được truyền cho thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"children: any"})," — Các phần tử con hoặc slot của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"index: string"})," — Khóa (key) cho VNode."]}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"VNode[]"})," — Một mảng chứa VNode đã được tạo."]}),`
`,n.jsx(h.h3,{id:"renderone",children:n.jsx(h.code,{children:"renderOne"})}),`
`,n.jsxs(h.p,{children:["Render một thành phần duy nhất và trả về đối tượng ",n.jsx(h.code,{children:"VNode"})," trực tiếp. Nếu không tìm thấy thành phần, nó sẽ trả về ",n.jsx(h.code,{children:"undefined"}),"."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"name: string"})," — Tên của thành phần đã đăng ký."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"props: object"})," — Các thuộc tính cho thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"children: any"})," — Các phần tử con của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"index: string"})," — Khóa (key) cho VNode."]}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"VNode | undefined"})," — Đối tượng VNode hoặc ",n.jsx(h.code,{children:"undefined"}),"."]}),`
`,n.jsx(h.h3,{id:"renderadd",children:n.jsx(h.code,{children:"renderAdd"})}),`
`,n.jsxs(h.p,{children:["Render một thành phần và đẩy ",n.jsx(h.code,{children:"VNode"})," kết quả vào một mảng được cung cấp. Điều này cho phép thu thập nhiều nút trong một lần thực thi."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"item: any[]"})," — Mảng mà kết quả render sẽ được thêm vào."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"name: string"})," — Tên của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"props: object"})," — Các thuộc tính cho thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"children: any"})," — Các phần tử con của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"index: string"})," — Khóa (key) cho VNode."]}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"this"})," — Một tham chiếu đến instance hiện tại để thực hiện chuỗi lệnh (chaining)."]}),`
`,n.jsx(h.h2,{id:"các-phương-thức-bổ-sung",children:"Các phương thức bổ sung"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"is(name: string): boolean"})," — Kiểm tra xem một thành phần có được đăng ký hay không."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"get(name: string): COMP[K]"})," — Trả về đối tượng thành phần đã đăng ký theo tên."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getModification(index?: string, props?: object): object | undefined"})," — Trả về dữ liệu đầu vào đã sửa đổi cho các thành phần kết nối."]}),`
`]})]})}function p(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(e,{...c})}):e(c)}export{p as default};
