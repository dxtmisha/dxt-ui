import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional/Composables/useApiRef - Yêu cầu API"}),`
`,n.jsx(e.h1,{id:"useapiref",children:n.jsx(e.code,{children:"useApiRef"})}),`
`,n.jsxs(e.p,{children:["Composable để làm việc với các yêu cầu API trong Vue component. Trả về dữ liệu phản ứng, cờ trạng thái và các phương thức quản lý tải. Sử dụng ",n.jsx(e.strong,{children:"lazy loading"})," — yêu cầu chỉ được gửi khi lần đầu truy cập vào thuộc tính ",n.jsx(e.code,{children:"data"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path?: RefOrNormal<string | undefined>"})," — đường dẫn endpoint (có thể là ",n.jsx(e.code,{children:"Ref"})," phản ứng)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ApiOptions"})," — tùy chọn yêu cầu (đối tượng ",n.jsx(e.code,{children:"ApiFetch"})," hoặc chuỗi tên phương thức)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reactivity?: boolean"})," — tự động chạy lại yêu cầu khi ",n.jsx(e.code,{children:"path"}),", ",n.jsx(e.code,{children:"options"})," hoặc ngôn ngữ thay đổi. Mặc định: ",n.jsx(e.code,{children:"true"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"conditions?: RefType<boolean>"})," — điều kiện thực thi phản ứng. Nếu ",n.jsx(e.code,{children:"false"})," — yêu cầu không được thực hiện và dữ liệu bị xóa."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transformation?: (data: T) => ApiData<R>"})," — hàm chuyển đổi phản hồi trước khi lưu vào ",n.jsx(e.code,{children:"data"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unmounted?: boolean"})," — nếu ",n.jsx(e.code,{children:"true"}),", dữ liệu bị xóa và watcher dừng lại khi component unmount."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Trả về (",n.jsx(e.code,{children:"UseApiRef<R>"}),"):"]})}),`
`,n.jsxs(e.p,{children:["Trạng thái phản ứng (getter ",n.jsx(e.code,{children:"ComputedRef"}),"):"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data"})," — ",n.jsx(e.code,{children:"Ref<ApiData<R> | undefined>"})," — dữ liệu đã tải. Kích hoạt yêu cầu (lazy) khi truy cập lần đầu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"starting"})," — ",n.jsx(e.code,{children:"ComputedRef<boolean>"})," — ",n.jsx(e.code,{children:"true"})," khi dữ liệu chưa bao giờ được tải (",n.jsx(e.code,{children:"data === undefined"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading"})," — ",n.jsx(e.code,{children:"ComputedRef<boolean>"})," — ",n.jsx(e.code,{children:"true"})," khi đang có yêu cầu tích cực đến máy chủ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reading"})," — ",n.jsx(e.code,{children:"ComputedRef<boolean>"})," — ",n.jsx(e.code,{children:"true"})," khi đang trong quá trình đọc dữ liệu."]}),`
`]}),`
`,n.jsx(e.p,{children:"Phương thức:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isStarting(): boolean"})," — trả về giá trị hiện tại của cờ ",n.jsx(e.code,{children:"starting"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isLoading(): boolean"})," — trả về giá trị hiện tại của cờ ",n.jsx(e.code,{children:"loading"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isReading(): boolean"})," — trả về giá trị hiện tại của cờ ",n.jsx(e.code,{children:"reading"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItem(): ApiData<R> | undefined"})," — trả về dữ liệu đã tải hiện tại mà không có tính phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reset(): Promise<void>"})," — chạy lại yêu cầu một cách bắt buộc."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"stop(): void"})," — dừng watcher và đặt lại ",n.jsx(e.code,{children:"data"})," về ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"abort(): void"})," — hủy yêu cầu hiện tại qua ",n.jsx(e.code,{children:"AbortController"})," mà không xóa dữ liệu."]}),`
`]}),`
`,n.jsx(e.h2,{id:"lazy-loading",children:"Lazy Loading"}),`
`,n.jsxs(e.p,{children:["Yêu cầu ",n.jsx(e.strong,{children:"không được gửi"})," khi gọi ",n.jsx(e.code,{children:"useApiRef"}),". Nó chỉ được kích hoạt khi lần đầu truy cập vào thuộc tính ",n.jsx(e.code,{children:"data"}),". Điều này cho phép gọi composable ở đầu ",n.jsx(e.code,{children:"setup()"})," mà không có các yêu cầu mạng không cần thiết."]}),`
`,n.jsx(e.h2,{id:"điều-kiện-toàn-cục",children:"Điều kiện toàn cục"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"setApiRefGlobalConditions(conditions)"})," — thiết lập điều kiện toàn cục cho tất cả các instance ",n.jsx(e.code,{children:"useApiRef"}),". Chỉ có hiệu lực một lần."]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useApiRef, setApiRefGlobalConditions } from '@dxtmisha/functional'

const userId = ref('123')
const isAuthenticated = ref(true)

// Điều kiện toàn cục (tất cả yêu cầu chỉ chạy nếu đã xác thực)
setApiRefGlobalConditions(isAuthenticated)

const {
  data: user,
  starting,
  loading,
  reading,
  getItem,
  reset,
  stop,
  abort
} = useApiRef(
  () => \`users/\${userId.value}\`,
  { method: 'GET' },
  true // Tự động chạy lại khi userId thay đổi
)

// Kiểm tra trạng thái không có tính phản ứng
console.log(getItem()) // undefined trước khi truy cập data lần đầu

// Tải lại bắt buộc
await reset()

// Hủy yêu cầu (không xóa dữ liệu)
abort()

// Dừng theo dõi (xóa dữ liệu)
stop()
`})})]})}function a(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{a as default};
