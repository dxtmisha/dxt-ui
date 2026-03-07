import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(e){const c={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useRouterList - Quản lý danh sách liên kết"}),`
`,n.jsx(c.h1,{id:"userouterlist",children:n.jsx(c.code,{children:"useRouterList"})}),`
`,n.jsx(c.p,{children:"Quản lý danh sách liên kết cho router. Cho phép tạo menu điều hướng dựa trên danh sách dữ liệu, tự động xử lý trạng thái hoạt động và chuyển đổi."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"list: RefType<ConstrBind<T>[] | undefined>"})," — danh sách các mục điều hướng. Mỗi mục phải chứa ",n.jsx(c.code,{children:"value"})," và ",n.jsx(c.code,{children:"label"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"selected?: Ref<string> | string"})," — mục được chọn ban đầu hoặc giá trị của nó. Nếu không được chỉ định, mục đầu tiên trong danh sách sẽ được chọn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"hasTo?: boolean"})," — tự động thêm thuộc tính ",n.jsx(c.code,{children:"to"})," vào các mục danh sách để điều hướng (mặc định là ",n.jsx(c.code,{children:"false"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
Một đối tượng với các thuộc tính phản ứng và phương thức điều khiển:`]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"item"})," — mục hiện tại đang hoạt động (thuộc tính được tính toán)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"selected"})," — tham chiếu (",n.jsx(c.code,{children:"ref"}),") đến giá trị của mục được chọn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"label"})," — nhãn của mục hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"list"})," — danh sách các mục. Nếu ",n.jsx(c.code,{children:"hasTo"})," là ",n.jsx(c.code,{children:"true"}),", các mục được bổ sung thuộc tính ",n.jsx(c.code,{children:"to"})," để sử dụng với ",n.jsx(c.code,{children:"router-link"})," hoặc các thành phần tương tự."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"to(name: string)"})," — phương thức để chuyển đến một mục theo giá trị của nó."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"toMain()"})," — phương thức để chuyển đến mục đầu tiên trong danh sách."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function u(e={}){const{wrapper:c}={...h(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(t,{...e})}):t(e)}export{u as default};
