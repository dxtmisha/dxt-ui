import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useApiPost - Thực hiện yêu cầu POST"}),`
`,n.jsx(e.h1,{id:"useapipost",children:n.jsx(e.code,{children:"useApiPost"})}),`
`,n.jsxs(e.p,{children:["Trả về một đối tượng với trạng thái tải và phương thức ",n.jsx(e.code,{children:"send"})," để thực hiện các yêu cầu API ",n.jsx(e.code,{children:"POST"}),"."]}),`
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
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: Ref<boolean>"})," — Trạng thái tải phản ứng. Sẽ là ",n.jsx(e.code,{children:"true"})," trong khi yêu cầu đang thực hiện và ",n.jsx(e.code,{children:"false"})," sau khi hoàn thành hoặc có lỗi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Phương thức bất đồng bộ để gửi yêu cầu ",n.jsx(e.code,{children:"POST"}),". Nó tự động quản lý trạng thái ",n.jsx(e.code,{children:"loading"}),", áp dụng hàm biến đổi cho phản hồi, thực hiện callback ",n.jsx(e.code,{children:"action"})," khi thành công và xử lý lỗi một cách an toàn bằng cách ghi log ra console."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useApiPost } from '@dxtmisha/functional'

const { loading, send } = useApiPost(
  '/api/submit',
  (data) => console.log('Hành động hoàn tất:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function u(c={}){const{wrapper:e}={...t(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(i,{...c})}):i(c)}export{u as default};
