import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useRouterList - Quản lý danh sách liên kết`}),`
`,(0,c.jsx)(n.h1,{id:`userouterlist`,children:(0,c.jsx)(n.code,{children:`useRouterList`})}),`
`,(0,c.jsx)(n.p,{children:`Quản lý danh sách liên kết cho router. Cho phép tạo menu điều hướng dựa trên danh sách dữ liệu, tự động xử lý trạng thái hoạt động và chuyển đổi.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefType<ConstrBind<T>[] | undefined>`}),` — danh sách các mục điều hướng. Mỗi mục phải chứa `,(0,c.jsx)(n.code,{children:`value`}),` và `,(0,c.jsx)(n.code,{children:`label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected?: Ref<string> | string`}),` — mục được chọn ban đầu hoặc giá trị của nó. Nếu không được chỉ định, mục đầu tiên trong danh sách sẽ được chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hasTo?: boolean`}),` — tự động thêm thuộc tính `,(0,c.jsx)(n.code,{children:`to`}),` vào các mục danh sách để điều hướng (mặc định là `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Một đối tượng với các thuộc tính phản ứng và phương thức điều khiển:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: ComputedRef<T | undefined>`}),` — Thuộc tính được tính toán trả về đối tượng mục hiện đang hoạt động dựa trên `,(0,c.jsx)(n.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: Ref<string>`}),` — Tham chiếu phản ứng (`,(0,c.jsx)(n.code,{children:`ref`}),`) đến giá trị của mục được chọn. Cho phép cả lấy và thiết lập lựa chọn hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label: ComputedRef<NumberOrString>`}),` — Thuộc tính được tính toán trả về nhãn (`,(0,c.jsx)(n.code,{children:`label`}),`) của mục hiện được chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: ComputedRef<ConstrBind<T>[]>`}),` — Danh sách các mục được tính toán. Nếu `,(0,c.jsx)(n.code,{children:`hasTo`}),` là `,(0,c.jsx)(n.code,{children:`true`}),`, mỗi mục được tự động bổ sung thuộc tính `,(0,c.jsx)(n.code,{children:`to`}),` để tích hợp điều hướng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(name?: string): void`}),` — Phương thức điều hướng lập trình đến một mục theo tên (`,(0,c.jsx)(n.code,{children:`value`}),`) của nó. Cập nhật `,(0,c.jsx)(n.code,{children:`selected`}),` và thực hiện `,(0,c.jsx)(n.code,{children:`router.push`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toMain(): void`}),` — Phương thức điều hướng nhanh đến mục đầu tiên ("mục chính") trong danh sách `,(0,c.jsx)(n.code,{children:`list`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};