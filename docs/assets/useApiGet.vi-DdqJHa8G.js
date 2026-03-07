import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useApiGet - Thực hiện yêu cầu GET"}),`
`,n.jsx(t.h1,{id:"useapiget",children:n.jsx(t.code,{children:"useApiGet"})}),`
`,n.jsxs(t.p,{children:["Trả về một đối tượng với trạng thái tải và phương thức ",n.jsx(t.code,{children:"send"})," để thực hiện các yêu cầu API ",n.jsx(t.code,{children:"GET"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path?: RefOrNormal<string | undefined>"})," — Đường dẫn đến endpoint API (có thể phản ứng)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"transformation?: (data: T) => Return"})," — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào ",n.jsx(t.code,{children:"action"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"toData: boolean = true"})," — Việc trích xuất trường ",n.jsx(t.code,{children:"data"})," từ phản hồi hay không."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"options?: ApiOptions"})," — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số ",n.jsx(t.code,{children:"ApiFetch"}),")."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Giá trị trả về:"}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"loading"})," — Trạng thái tải phản ứng (",n.jsx(t.code,{children:"true"})," trong khi chờ phản hồi)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Phương thức bất đồng bộ để gửi yêu cầu. Nó quản lý trạng thái tải, áp dụng biến đổi hàm, thực thi callback ",n.jsx(t.code,{children:"action"})," và bắt lỗi an toàn."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { useApiGet } from '@dxtmisha/functional'

const { loading, send } = useApiGet(
  '/api/data',
  (data) => console.log('Hành động hoàn tất:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const fetchData = async () => {
  const result = await send({ id: 1 })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function u(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{u as default};
