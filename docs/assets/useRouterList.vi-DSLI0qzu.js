import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useRouterList - Quản lý danh sách liên kết`}),`
`,(0,c.jsx)(t.h1,{id:`userouterlist`,children:(0,c.jsx)(t.code,{children:`useRouterList`})}),`
`,(0,c.jsx)(t.p,{children:`Quản lý danh sách liên kết cho router. Cho phép tạo menu điều hướng dựa trên danh sách dữ liệu, tự động xử lý trạng thái hoạt động và chuyển đổi.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefType<ConstrBind<T>[] | undefined>`}),` — danh sách các mục điều hướng. Mỗi mục phải chứa `,(0,c.jsx)(t.code,{children:`value`}),` và `,(0,c.jsx)(t.code,{children:`label`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: Ref<string> | string`}),` — mục được chọn ban đầu hoặc giá trị của nó. Nếu không được chỉ định, mục đầu tiên trong danh sách sẽ được chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasTo?: boolean`}),` — tự động thêm thuộc tính `,(0,c.jsx)(t.code,{children:`to`}),` vào các mục danh sách để điều hướng (mặc định là `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Một đối tượng với các thuộc tính phản ứng và phương thức điều khiển:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ComputedRef<T | undefined>`}),` — Thuộc tính được tính toán trả về đối tượng mục hiện đang hoạt động dựa trên `,(0,c.jsx)(t.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: Ref<string>`}),` — Tham chiếu phản ứng (`,(0,c.jsx)(t.code,{children:`ref`}),`) đến giá trị của mục được chọn. Cho phép cả lấy và thiết lập lựa chọn hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label: ComputedRef<NumberOrString>`}),` — Thuộc tính được tính toán trả về nhãn (`,(0,c.jsx)(t.code,{children:`label`}),`) của mục hiện được chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef<ConstrBind<T>[]>`}),` — Danh sách các mục được tính toán. Nếu `,(0,c.jsx)(t.code,{children:`hasTo`}),` là `,(0,c.jsx)(t.code,{children:`true`}),`, mỗi mục được tự động bổ sung thuộc tính `,(0,c.jsx)(t.code,{children:`to`}),` để tích hợp điều hướng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(name?: string): void`}),` — Phương thức điều hướng lập trình đến một mục theo tên (`,(0,c.jsx)(t.code,{children:`value`}),`) của nó. Cập nhật `,(0,c.jsx)(t.code,{children:`selected`}),` và thực hiện `,(0,c.jsx)(t.code,{children:`router.push`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toMain(): void`}),` — Phương thức điều hướng nhanh đến mục đầu tiên ("mục chính") trong danh sách `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};