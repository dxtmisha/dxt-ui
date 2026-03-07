import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useApiDelete - Thực hiện yêu cầu DELETE"}),`
`,n.jsx(e.h1,{id:"useapidelete",children:n.jsx(e.code,{children:"useApiDelete"})}),`
`,n.jsxs(e.p,{children:["Trả về một đối tượng với trạng thái tải và phương thức ",n.jsx(e.code,{children:"send"})," để thực hiện các yêu cầu API ",n.jsx(e.code,{children:"DELETE"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path?: RefOrNormal<string | undefined>"})," — Đường dẫn đến endpoint API (có thể phản ứng)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transformation?: (data: T) => Return"})," — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào ",n.jsx(e.code,{children:"action"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toData: boolean = true"})," — Việc trích xuất trường ",n.jsx(e.code,{children:"data"})," từ phản hồi hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ApiOptions"})," — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số ",n.jsx(e.code,{children:"ApiFetch"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Giá trị trả về:"}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading"})," — Trạng thái tải phản ứng (",n.jsx(e.code,{children:"true"})," trong khi chờ phản hồi)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Phương thức bất đồng bộ để gửi yêu cầu. Nó quản lý trạng thái tải, áp dụng biến đổi hàm, thực thi callback ",n.jsx(e.code,{children:"action"})," và bắt lỗi an toàn."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useApiDelete } from '@dxtmisha/functional'

const { loading, send } = useApiDelete(
  '/api/delete',
  (data) => console.log('Hành động hoàn tất:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleDelete = async () => {
  const result = await send({ id: 1 })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function u(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{u as default};
