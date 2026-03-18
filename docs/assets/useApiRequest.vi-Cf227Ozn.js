import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useApiRequest - Thực hiện các yêu cầu"}),`
`,n.jsx(c.h1,{id:"useapirequest",children:n.jsx(c.code,{children:"useApiRequest"})}),`
`,n.jsxs(c.p,{children:["Trả về một đối tượng với trạng thái tải và phương thức ",n.jsx(c.code,{children:"send"})," để thực hiện các yêu cầu API."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path?: RefOrNormal<string | undefined>"})," — Đường dẫn đến endpoint API (có thể phản ứng)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"method: ApiMethodItem = ApiMethodItem.post"})," — Phương thức HTTP cho yêu cầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"transformation?: (data: T) => Return"})," — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào ",n.jsx(c.code,{children:"action"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"toData: boolean = true"})," — Việc trích xuất trường ",n.jsx(c.code,{children:"data"})," từ phản hồi hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: ApiOptions"})," — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số ",n.jsx(c.code,{children:"ApiFetch"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Giá trị t"}),`Trả về:**
Một đối tượng với các thuộc tính sau:`]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"loading: Ref<boolean>"})," — Trạng thái tải phản ứng. Sẽ là ",n.jsx(c.code,{children:"true"})," trong khi yêu cầu đang thực hiện và ",n.jsx(c.code,{children:"false"})," sau khi hoàn thành hoặc có lỗi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Phương thức bất đồng bộ để gửi yêu cầu. Nó tự động quản lý trạng thái ",n.jsx(c.code,{children:"loading"}),", áp dụng hàm biến đổi cho phản hồi, thực hiện callback ",n.jsx(c.code,{children:"action"})," khi thành công và xử lý lỗi một cách an toàn bằng cách ghi log ra console."]}),`
`]}),`
`,n.jsx(c.h2,{id:"đối-tượng-apioptions",children:"Đối tượng ApiOptions"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"ApiOptions"})," — có thể nhận một chuỗi tên ",n.jsx(c.code,{children:"method"})," (ví dụ: ",n.jsx(c.code,{children:"'GET'"}),") hoặc một đối tượng kiểu ",n.jsx(c.code,{children:"ApiFetch"}),". Các trường của đối tượng ",n.jsx(c.code,{children:"ApiFetch"}),":"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path?: string"})," — đường dẫn đến endpoint script tương đối so với URL cơ bản (ví dụ: ",n.jsx(c.code,{children:"'users/list'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"pathFull?: string"})," — URL đầy đủ của yêu cầu. Nếu được chỉ định, sẽ bỏ qua ",n.jsx(c.code,{children:"api"})," và ",n.jsx(c.code,{children:"path"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"api?: boolean"})," — có thêm URL cơ bản trước ",n.jsx(c.code,{children:"path"})," hay không. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"method?: ApiMethod"})," — phương thức HTTP (",n.jsx(c.code,{children:"'GET'"}),", ",n.jsx(c.code,{children:"'POST'"}),", ",n.jsx(c.code,{children:"'PUT'"}),", ",n.jsx(c.code,{children:"'DELETE'"}),"). Mặc định: ",n.jsx(c.code,{children:"'GET'"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request?: FormData | Record<string, any> | string"})," — thân yêu cầu (cho POST/PUT) hoặc các tham số truy vấn (cho GET). Được truyền dưới dạng JSON hoặc ",n.jsx(c.code,{children:"FormData"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"headers?: Record<string, string> | null"})," — các tiêu đề yêu cầu bổ sung. ",n.jsx(c.code,{children:"null"})," — vô hiệu hóa tất cả các tiêu đề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type?: string"})," — giá trị ",n.jsx(c.code,{children:"Content-Type"}),". Mặc định: ",n.jsx(c.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"auth?: boolean"})," — có thêm các tiêu đề xác thực hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"toData?: boolean"})," — nếu ",n.jsx(c.code,{children:"true"}),", tự động giải nén ",n.jsx(c.code,{children:"data"})," từ vỏ bọc ",n.jsx(c.code,{children:"{ data: ... }"}),". Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"hideError?: boolean"})," — ngăn chặn việc xuất lỗi ra ",n.jsx(c.code,{children:"console.error"})," khi thất bại. Mặc định: ",n.jsx(c.code,{children:"false"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"globalPreparation?: boolean"})," — có chạy hook toàn cục ",n.jsx(c.code,{children:"setPreparation"})," trước yêu cầu này hay không. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"globalEnd?: boolean"})," — có chạy hook toàn cục ",n.jsx(c.code,{children:"setEnd"})," sau phản hồi hay không. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — trình xử lý phản hồi thay vì đọc JSON tiêu chuẩn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"init?: RequestInit"})," — các tùy chọn bổ sung cho ",n.jsx(c.code,{children:"fetch()"})," gốc (CORS, chế độ cache, v.v.)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"controller?: AbortController"})," — bộ điều khiển để hủy yêu cầu."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { useApiRequest } from '@dxtmisha/functional'
import { ApiMethodItem } from '@dxtmisha/functional-basic'

const { loading, send } = useApiRequest(
  '/api/submit',
  ApiMethodItem.post,
  (data) => console.log('Hành động hoàn tất:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function x(e={}){const{wrapper:c}={...h(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
