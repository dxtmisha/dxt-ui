import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Composables/useRouterList - Quản lý danh sách liên kết"}),`
`,n.jsx(e.h1,{id:"userouterlist",children:n.jsx(e.code,{children:"useRouterList"})}),`
`,n.jsx(e.p,{children:"Quản lý danh sách liên kết cho router. Cho phép tạo menu điều hướng dựa trên danh sách dữ liệu, tự động xử lý trạng thái hoạt động và chuyển đổi."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: RefType<ConstrBind<T>[] | undefined>"})," — danh sách các mục điều hướng. Mỗi mục phải chứa ",n.jsx(e.code,{children:"value"})," và ",n.jsx(e.code,{children:"label"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected?: Ref<string> | string"})," — mục được chọn ban đầu hoặc giá trị của nó. Nếu không được chỉ định, mục đầu tiên trong danh sách sẽ được chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hasTo?: boolean"})," — tự động thêm thuộc tính ",n.jsx(e.code,{children:"to"})," vào các mục danh sách để điều hướng (mặc định là ",n.jsx(e.code,{children:"false"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
Một đối tượng với các thuộc tính phản ứng và phương thức điều khiển:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: ComputedRef<T | undefined>"})," — Thuộc tính được tính toán trả về đối tượng mục hiện đang hoạt động dựa trên ",n.jsx(e.code,{children:"selected"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected: Ref<string>"})," — Tham chiếu phản ứng (",n.jsx(e.code,{children:"ref"}),") đến giá trị của mục được chọn. Cho phép cả lấy và thiết lập lựa chọn hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label: ComputedRef<NumberOrString>"})," — Thuộc tính được tính toán trả về nhãn (",n.jsx(e.code,{children:"label"}),") của mục hiện được chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: ComputedRef<ConstrBind<T>[]>"})," — Danh sách các mục được tính toán. Nếu ",n.jsx(e.code,{children:"hasTo"})," là ",n.jsx(e.code,{children:"true"}),", mỗi mục được tự động bổ sung thuộc tính ",n.jsx(e.code,{children:"to"})," để tích hợp điều hướng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"to(name?: string): void"})," — Phương thức điều hướng lập trình đến một mục theo tên (",n.jsx(e.code,{children:"value"}),") của nó. Cập nhật ",n.jsx(e.code,{children:"selected"})," và thực hiện ",n.jsx(e.code,{children:"router.push"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toMain(): void"}),' — Phương thức điều hướng nhanh đến mục đầu tiên ("mục chính") trong danh sách ',n.jsx(e.code,{children:"list"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useRouterList } from '@dxtmisha/functional'

const menuItems = ref([
  { value: 'dashboard', label: 'Bảng điều khiển' },
  { value: 'settings', label: 'Cài đặt' }
])

// Khởi tạo với 'dashboard' được chọn và tự động tạo thuộc tính 'to'
const { list, selected, to } = useRouterList(menuItems, 'dashboard', true)

// Danh sách sẽ chứa các đối tượng có trường 'to', ví dụ:
// { value: 'dashboard', label: 'Bảng điều khiển', to: { name: 'dashboard' } }

// Điều hướng bằng lập trình
to('settings')
`})})]})}function a(c={}){const{wrapper:e}={...t(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(h,{...c})}):h(c)}export{a as default};
