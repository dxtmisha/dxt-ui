import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useApiRef - Yêu cầu API`}),`
`,(0,c.jsx)(n.h1,{id:`useapiref`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để làm việc với các yêu cầu API trong Vue component. Trả về dữ liệu phản ứng, cờ trạng thái và các phương thức quản lý tải.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo lười (Lazy)`}),`: Các yêu cầu và watcher phụ thuộc chỉ được khởi tạo khi truy cập lần đầu vào dữ liệu (`,(0,c.jsx)(n.code,{children:`data`}),` hoặc `,(0,c.jsx)(n.code,{children:`item`}),`). Điều này cho phép khai báo `,(0,c.jsx)(n.code,{children:`useApiRef`}),` mà không gây ra tải mạng hoặc CPU ngay lập tức.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phạm vi toàn cục (Eternal)`}),`: Nếu tham số `,(0,c.jsx)(n.code,{children:`unmounted`}),` được đặt thành `,(0,c.jsx)(n.code,{children:`false`}),`, tính phản ứng sẽ được chuyển sang `,(0,c.jsx)(n.code,{children:`EffectScopeGlobal`}),`. Điều này đảm bảo các yêu cầu tiếp tục cập nhật ngay cả sau khi component tạo ra chúng bị unmount.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — đường dẫn endpoint (có thể là `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — tùy chọn yêu cầu (đối tượng `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` hoặc chuỗi tên phương thức).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reactivity?: boolean`}),` — tự động chạy lại yêu cầu khi `,(0,c.jsx)(n.code,{children:`path`}),`, `,(0,c.jsx)(n.code,{children:`options`}),` hoặc ngôn ngữ thay đổi. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: RefType<boolean>`}),` — điều kiện thực thi phản ứng. Nếu `,(0,c.jsx)(n.code,{children:`false`}),` — yêu cầu không được thực hiện và dữ liệu bị xóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => ApiData<R>`}),` — hàm chuyển đổi phản hồi trước khi lưu vào `,(0,c.jsx)(n.code,{children:`data`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),` (mặc định), dữ liệu bị xóa và watcher dừng lại khi component unmount. Khi `,(0,c.jsx)(n.code,{children:`false`}),`, `,(0,c.jsx)(n.code,{children:`EffectScopeGlobal`}),` được sử dụng để duy trì chạy nền.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Trả về (`,(0,c.jsx)(n.code,{children:`UseApiRef<R>`}),`):`]})}),`
`,(0,c.jsx)(n.p,{children:`Trạng thái phản ứng:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — Tham chiếu đến dữ liệu đã tải (Computed). Bắt đầu `,(0,c.jsx)(n.strong,{children:`khởi tạo lười`}),` (yêu cầu và watcher) khi truy cập lần đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — Tham chiếu trực tiếp đến dữ liệu (Ref). Cũng bắt đầu khởi tạo lười khi truy cập.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`starting: ComputedRef<boolean>`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu dữ liệu chưa bao giờ được yêu cầu hoặc đang trong quá trình lấy phần dữ liệu đầu tiên (`,(0,c.jsx)(n.code,{children:`data`}),` vẫn là `,(0,c.jsx)(n.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu bất kỳ yêu cầu mạng nào (ban đầu hoặc `,(0,c.jsx)(n.code,{children:`reset`}),` sau đó) hiện đang được thực hiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reading: Ref<boolean>`}),` — Cờ cho quá trình đọc/xử lý dữ liệu đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Phương thức:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isStarting(): boolean`}),` — Phương thức đồng bộ trả về giá trị hiện tại của cờ `,(0,c.jsx)(n.code,{children:`starting`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLoading(): boolean`}),` — Phương thức đồng bộ trả về giá trị hiện tại của cờ `,(0,c.jsx)(n.code,{children:`loading`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isReading(): boolean`}),` — Phương thức đồng bộ trả về giá trị hiện tại của cờ `,(0,c.jsx)(n.code,{children:`reading`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiData<R> | undefined`}),` — Phương thức để lấy giá trị hiện tại của `,(0,c.jsx)(n.code,{children:`data`}),` mà không tạo ra phụ thuộc phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Phương thức để khởi tạo yêu cầu và watcher một cách rõ ràng. Tự động kích hoạt khi truy cập `,(0,c.jsx)(n.code,{children:`data`}),` lần đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): Promise<void>`}),` — Phương thức bất đồng bộ để buộc chạy lại yêu cầu. Hủy yêu cầu hiện tại (nếu có) và bắt đầu một yêu cầu mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): void`}),` — Dừng việc theo dõi các phụ thuộc phản ứng và đặt lại `,(0,c.jsx)(n.code,{children:`data`}),` thành `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`abort(): void`}),` — Hủy yêu cầu HTTP hiện tại thông qua `,(0,c.jsx)(n.code,{children:`AbortController`}),` nội bộ, trong khi vẫn giữ lại dữ liệu đã tải trong `,(0,c.jsx)(n.code,{children:`data`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo-lười-lazy-initialization`,children:`Khởi tạo lười (Lazy Initialization)`}),`
`,(0,c.jsxs)(n.p,{children:[`Yêu cầu và cơ chế theo dõi thay đổi `,(0,c.jsx)(n.strong,{children:`không được bắt đầu`}),` ngay lập tức khi gọi `,(0,c.jsx)(n.code,{children:`useApiRef`}),`. Chúng chỉ được kích hoạt khi truy cập `,(0,c.jsx)(n.code,{children:`data`}),`, `,(0,c.jsx)(n.code,{children:`item`}),` hoặc gọi `,(0,c.jsx)(n.code,{children:`init()`}),`. Điều này tối ưu hóa hiệu suất của các script setup.`]}),`
`,(0,c.jsx)(n.h2,{id:`điều-kiện-toàn-cục`,children:`Điều kiện toàn cục`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`setApiRefGlobalConditions(conditions)`}),` — thiết lập điều kiện toàn cục cho tất cả các instance `,(0,c.jsx)(n.code,{children:`useApiRef`}),`. Chỉ có hiệu lực một lần.`]}),`
`,(0,c.jsx)(n.h2,{id:`đối-tượng-apioptions`,children:`Đối tượng ApiOptions`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiOptions`}),` — có thể nhận một chuỗi tên `,(0,c.jsx)(n.code,{children:`method`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`'GET'`}),`) hoặc một đối tượng kiểu `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`. Các trường của đối tượng `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — đường dẫn đến endpoint script tương đối so với URL cơ bản (ví dụ: `,(0,c.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull?: string`}),` — URL đầy đủ của yêu cầu. Nếu được chỉ định, sẽ bỏ qua `,(0,c.jsx)(n.code,{children:`api`}),` và `,(0,c.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: boolean`}),` — có thêm URL cơ bản trước `,(0,c.jsx)(n.code,{children:`path`}),` hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method?: ApiMethod`}),` — phương thức HTTP (`,(0,c.jsx)(n.code,{children:`'GET'`}),`, `,(0,c.jsx)(n.code,{children:`'POST'`}),`, `,(0,c.jsx)(n.code,{children:`'PUT'`}),`, `,(0,c.jsx)(n.code,{children:`'DELETE'`}),`). Mặc định: `,(0,c.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — thân yêu cầu (cho POST/PUT) hoặc các tham số truy vấn (cho GET). Được truyền dưới dạng JSON hoặc `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — các tiêu đề yêu cầu bổ sung. `,(0,c.jsx)(n.code,{children:`null`}),` — vô hiệu hóa tất cả các tiêu đề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: string`}),` — giá trị `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`auth?: boolean`}),` — có thêm các tiêu đề xác thực hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, tự động giải nén `,(0,c.jsx)(n.code,{children:`data`}),` từ vỏ bọc `,(0,c.jsx)(n.code,{children:`{ data: ... }`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hideError?: boolean`}),` — ngăn chặn việc xuất lỗi ra `,(0,c.jsx)(n.code,{children:`console.error`}),` khi thất bại. Mặc định: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — có chạy hook toàn cục `,(0,c.jsx)(n.code,{children:`setPreparation`}),` trước yêu cầu này hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd?: boolean`}),` — có chạy hook toàn cục `,(0,c.jsx)(n.code,{children:`setEnd`}),` sau phản hồi hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — trình xử lý phản hồi thay vì đọc JSON tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init?: RequestInit`}),` — các tùy chọn bổ sung cho `,(0,c.jsx)(n.code,{children:`fetch()`}),` gốc (CORS, chế độ cache, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`controller?: AbortController`}),` — bộ điều khiển để hủy yêu cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};