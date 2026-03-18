import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(i){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/vi/functional/Composables/useApiRef - Yêu cầu API"}),`
`,n.jsx(c.h1,{id:"useapiref",children:n.jsx(c.code,{children:"useApiRef"})}),`
`,n.jsx(c.p,{children:"Composable để làm việc với các yêu cầu API trong Vue component. Trả về dữ liệu phản ứng, cờ trạng thái và các phương thức quản lý tải."}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khởi tạo lười (Lazy)"}),": Các yêu cầu và watcher phụ thuộc chỉ được khởi tạo khi truy cập lần đầu vào dữ liệu (",n.jsx(c.code,{children:"data"})," hoặc ",n.jsx(c.code,{children:"item"}),"). Điều này cho phép khai báo ",n.jsx(c.code,{children:"useApiRef"})," mà không gây ra tải mạng hoặc CPU ngay lập tức."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phạm vi toàn cục (Eternal)"}),": Nếu tham số ",n.jsx(c.code,{children:"unmounted"})," được đặt thành ",n.jsx(c.code,{children:"false"}),", tính phản ứng sẽ được chuyển sang ",n.jsx(c.code,{children:"EffectScopeGlobal"}),". Điều này đảm bảo các yêu cầu tiếp tục cập nhật ngay cả sau khi component tạo ra chúng bị unmount."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path?: RefOrNormal<string | undefined>"})," — đường dẫn endpoint (có thể là ",n.jsx(c.code,{children:"Ref"})," phản ứng)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: ApiOptions"})," — tùy chọn yêu cầu (đối tượng ",n.jsx(c.code,{children:"ApiFetch"})," hoặc chuỗi tên phương thức)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"reactivity?: boolean"})," — tự động chạy lại yêu cầu khi ",n.jsx(c.code,{children:"path"}),", ",n.jsx(c.code,{children:"options"})," hoặc ngôn ngữ thay đổi. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"conditions?: RefType<boolean>"})," — điều kiện thực thi phản ứng. Nếu ",n.jsx(c.code,{children:"false"})," — yêu cầu không được thực hiện và dữ liệu bị xóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"transformation?: (data: T) => ApiData<R>"})," — hàm chuyển đổi phản hồi trước khi lưu vào ",n.jsx(c.code,{children:"data"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"unmounted?: boolean"})," — nếu ",n.jsx(c.code,{children:"true"})," (mặc định), dữ liệu bị xóa và watcher dừng lại khi component unmount. Khi ",n.jsx(c.code,{children:"false"}),", ",n.jsx(c.code,{children:"EffectScopeGlobal"})," được sử dụng để duy trì chạy nền."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsxs(c.strong,{children:["Trả về (",n.jsx(c.code,{children:"UseApiRef<R>"}),"):"]})}),`
`,n.jsx(c.p,{children:"Trạng thái phản ứng:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"data: ComputedRef<ApiData<R> | undefined>"})," — Tham chiếu đến dữ liệu đã tải (Computed). Bắt đầu ",n.jsx(c.strong,{children:"khởi tạo lười"})," (yêu cầu và watcher) khi truy cập lần đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"item: Ref<ApiData<R> | undefined>"})," — Tham chiếu trực tiếp đến dữ liệu (Ref). Cũng bắt đầu khởi tạo lười khi truy cập."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"starting: ComputedRef<boolean>"})," — Trả về ",n.jsx(c.code,{children:"true"})," nếu dữ liệu chưa bao giờ được yêu cầu hoặc đang trong quá trình lấy phần dữ liệu đầu tiên (",n.jsx(c.code,{children:"data"})," vẫn là ",n.jsx(c.code,{children:"undefined"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"loading: Ref<boolean>"})," — Trả về ",n.jsx(c.code,{children:"true"})," nếu bất kỳ yêu cầu mạng nào (ban đầu hoặc ",n.jsx(c.code,{children:"reset"})," sau đó) hiện đang được thực hiện."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"reading: Ref<boolean>"})," — Cờ cho quá trình đọc/xử lý dữ liệu đang hoạt động."]}),`
`]}),`
`,n.jsx(c.p,{children:"Phương thức:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isStarting(): boolean"})," — Phương thức đồng bộ trả về giá trị hiện tại của cờ ",n.jsx(c.code,{children:"starting"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isLoading(): boolean"})," — Phương thức đồng bộ trả về giá trị hiện tại của cờ ",n.jsx(c.code,{children:"loading"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isReading(): boolean"})," — Phương thức đồng bộ trả về giá trị hiện tại của cờ ",n.jsx(c.code,{children:"reading"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getItem(): ApiData<R> | undefined"})," — Phương thức để lấy giá trị hiện tại của ",n.jsx(c.code,{children:"data"})," mà không tạo ra phụ thuộc phản ứng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"init(): void"})," — Phương thức để khởi tạo yêu cầu và watcher một cách rõ ràng. Tự động kích hoạt khi truy cập ",n.jsx(c.code,{children:"data"})," lần đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"reset(): Promise<void>"})," — Phương thức bất đồng bộ để buộc chạy lại yêu cầu. Hủy yêu cầu hiện tại (nếu có) và bắt đầu một yêu cầu mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"stop(): void"})," — Dừng việc theo dõi các phụ thuộc phản ứng và đặt lại ",n.jsx(c.code,{children:"data"})," thành ",n.jsx(c.code,{children:"undefined"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"abort(): void"})," — Hủy yêu cầu HTTP hiện tại thông qua ",n.jsx(c.code,{children:"AbortController"})," nội bộ, trong khi vẫn giữ lại dữ liệu đã tải trong ",n.jsx(c.code,{children:"data"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo-lười-lazy-initialization",children:"Khởi tạo lười (Lazy Initialization)"}),`
`,n.jsxs(c.p,{children:["Yêu cầu và cơ chế theo dõi thay đổi ",n.jsx(c.strong,{children:"không được bắt đầu"})," ngay lập tức khi gọi ",n.jsx(c.code,{children:"useApiRef"}),". Chúng chỉ được kích hoạt khi truy cập ",n.jsx(c.code,{children:"data"}),", ",n.jsx(c.code,{children:"item"})," hoặc gọi ",n.jsx(c.code,{children:"init()"}),". Điều này tối ưu hóa hiệu suất của các script setup."]}),`
`,n.jsx(c.h2,{id:"điều-kiện-toàn-cục",children:"Điều kiện toàn cục"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"setApiRefGlobalConditions(conditions)"})," — thiết lập điều kiện toàn cục cho tất cả các instance ",n.jsx(c.code,{children:"useApiRef"}),". Chỉ có hiệu lực một lần."]}),`
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
`,n.jsx(c.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function a(i={}){const{wrapper:c}={...h(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(e,{...i})}):e(i)}export{a as default};
