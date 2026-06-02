import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Hook làm việc với API`}),`
`,(0,c.jsx)(n.h1,{id:`hook-làm-việc-với-api`,children:`Hook làm việc với API`}),`
`,(0,c.jsxs)(n.p,{children:[`Một tập hợp các công cụ để tương tác hiệu quả với backend, được tích hợp hoàn toàn với `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`đặc-điểm`,children:`Đặc điểm`}),`
`,(0,c.jsxs)(n.p,{children:[`Nhiệm vụ chính của các công cụ này là tự động hóa các tác vụ thông thường: theo dõi trạng thái tải (`,(0,c.jsx)(n.code,{children:`loading`}),`), xử lý lỗi và đồng bộ hóa dữ liệu giữa các phần khác nhau của giao diện. Tất cả các hook đều hỗ trợ các tham số phản hồi, cho phép tạo ra các yêu cầu động tự động cập nhật khi các bộ lọc đầu vào hoặc đường dẫn thay đổi.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-công-cụ-hiện-có`,children:`Các công cụ hiện có`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRef`}),` — Truy xuất dữ liệu phản hồi (GET) với tính năng tự động chạy và lưu trữ trong `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` — Phiên bản bất đồng bộ của `,(0,c.jsx)(n.code,{children:`useApiRef`}),` để khởi tạo ngay lập tức (SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRequest`}),` — Hook cơ bản để thực hiện thủ công bất kỳ yêu cầu HTTP nào (trả về phương thức `,(0,c.jsx)(n.code,{children:`send`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiPost / Put / Delete`}),` — Các lớp vỏ chuyên dụng cho các thay đổi (tạo, cập nhật, xóa).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` — Bộ điều phối toàn diện, kết hợp các yêu cầu GET, tìm kiếm, định dạng và thay đổi thành một chu kỳ duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`}),` — Bộ điều phối bất đồng bộ để khởi tạo ngay lập tức (SSR).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-làm-việc-với-chúng`,children:`Cách làm việc với chúng`}),`
`,(0,c.jsxs)(n.p,{children:[`Để hiển thị dữ liệu đơn giản, chỉ cần sử dụng `,(0,c.jsx)(n.code,{children:`useApiRef`}),`. Bạn không cần phải gọi hàm tải một cách thủ công — yêu cầu sẽ tự động được thực hiện ngay khi bạn truy cập vào thuộc tính `,(0,c.jsx)(n.code,{children:`data`}),`. Nếu đường dẫn API là một tham chiếu phản hồi (ref), hook sẽ tự theo dõi sự thay đổi của nó và tải dữ liệu mới.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiRef } from '@dxtmisha/functional'

// Dữ liệu sẽ tự động tải khi truy cập vào data
const { data, loading } = useApiRef('api/profile')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn cần thực hiện một hành động dựa trên sự kiện (ví dụ: lưu biểu mẫu), các hook thay đổi (mutation) sẽ được sử dụng. Chúng trả về một phương thức `,(0,c.jsx)(n.code,{children:`send`}),` có thể được gọi trong trình xử lý sự kiện và một cờ `,(0,c.jsx)(n.code,{children:`loading`}),` để chặn các nút bấm.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { send, loading } = useApiPost('api/save')

const onSave = async () => {
  await send({ data: { name: 'Dxt' } })
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`useapimanagementref`,children:`useApiManagementRef`}),`
`,(0,c.jsxs)(n.p,{children:[`Cách tiếp cận mạnh mẽ nhất là sử dụng `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`. Đây là một trung tâm hoàn chỉnh để quản lý dữ liệu trong các giao diện phức tạp (ví dụ: trong bảng). Nó liên kết yêu cầu GET với các thay đổi: ngay khi bạn thực hiện thành công `,(0,c.jsx)(n.code,{children:`sendDelete`}),` hoặc `,(0,c.jsx)(n.code,{children:`sendPost`}),`, bộ điều phối sẽ tự gọi `,(0,c.jsx)(n.code,{children:`reset()`}),` cho danh sách chính và dữ liệu trên màn hình sẽ tự động cập nhật.`]}),`
`,(0,c.jsx)(n.h3,{id:`các-khả-năng-chính`,children:`Các khả năng chính:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa`}),`: Đồng bộ hóa hoàn toàn giữa việc đọc và thay đổi dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp`}),`: Bao gồm chức năng tìm kiếm (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`) và định dạng (`,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Skeleton`}),`: Hỗ trợ các trình giữ chỗ (placeholder) trong quá trình tải để ngăn chặn thay đổi bố cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Linh hoạt`}),`: Cấu hình các đường dẫn và chuyển đổi riêng lẻ cho từng loại yêu cầu (GET, POST, PUT, DELETE).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiManagementRef } from '@dxtmisha/functional'

const search = ref('')
const { 
  list, 
  sendPost, 
  sendDelete 
} = useApiManagementRef(
  { path: 'api/items' },      // Theo dõi GET
  undefined,                  // Bộ định dạng
  { columns: ['name'], value: search }, // Tìm kiếm trực tiếp
  { path: 'api/items/add' },  // Cấu hình POST
  undefined,
  { path: 'api/items/delete' } // Cấu hình DELETE
)

// Sau khi gọi sendDelete(), danh sách chính 'list' sẽ TỰ ĐỘNG cập nhật!
`})}),`
`,(0,c.jsx)(n.h2,{id:`xử-lý-lỗi`,children:`Xử lý lỗi`}),`
`,(0,c.jsx)(n.p,{children:`Các hook API sử dụng hệ thống quản lý lỗi dựa trên hợp đồng. Thay vì xử lý thủ công từng trạng thái phản hồi trong các component, bạn xác định một "cơ sở" các lỗi dự kiến và để hệ thống tự động giải quyết chúng.`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-làm-việc`,children:`Quy trình làm việc:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Xác định Hợp đồng (`,(0,c.jsx)(n.code,{children:`errorContract`}),`)`]}),`: Bạn truyền một danh sách các mẫu lỗi tiềm năng (một hợp đồng) cho hook. Điều này đóng vai trò như một cơ sở dữ liệu về các lỗi bạn muốn xử lý cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`So khớp tự động`}),`: Khi một yêu cầu thất bại (trạng thái ≥ 400), hệ thống sẽ so sánh phản hồi với hợp đồng của bạn. Nó khớp dựa trên:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái HTTP`}),`: ví dụ: `,(0,c.jsx)(n.code,{children:`404`}),` hoặc `,(0,c.jsx)(n.code,{children:`500`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mã lỗi`}),`: Một mã chuỗi cụ thể được trích xuất từ thân phản hồi JSON (ví dụ: `,(0,c.jsx)(n.code,{children:`'USER_NOT_FOUND'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mẫu URL`}),`: Các endpoint cụ thể hoặc các mẫu (RegExp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực tùy chỉnh`}),`: Một hàm trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu phản hồi khớp với lỗi.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết dữ liệu`}),`: Nếu tìm thấy sự phù hợp, hệ thống sẽ điền vào thuộc tính reactive `,(0,c.jsx)(n.code,{children:`errorItem`}),` các dữ liệu có cấu trúc, bao gồm thông báo đã được bản địa hóa và mã lỗi đã được giải quyết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Triển khai UI`}),`: Trong component của mình, bạn chỉ cần sử dụng `,(0,c.jsx)(n.code,{children:`errorItem`}),` để hiển thị thông báo hoặc chuyển đổi trạng thái UI, tin tưởng rằng logic so khớp lỗi đã được xử lý tập trung.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống này đảm bảo rằng các component của bạn luôn sạch sẽ và tập trung vào logic hiển thị, trong khi việc nhận diện lỗi vẫn mang tính khai báo và có thể tái sử dụng.`}),`
`,(0,c.jsx)(n.h2,{id:`server-side-rendering-ssr`,children:`Server-Side Rendering (SSR)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các hook API được thiết kế với sự hỗ trợ cho `,(0,c.jsx)(n.strong,{children:`Server-Side Rendering (SSR)`}),`. Để đảm bảo dữ liệu được lấy trước trên máy chủ trước khi trang được gửi đến máy khách, bạn có hai lựa chọn:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phiên bản bất đồng bộ`}),`: Sử dụng `,(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` hoặc `,(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`}),`. Các hook này tự động gọi `,(0,c.jsx)(n.code,{children:`initSsr()`}),` khi được tạo, đảm bảo yêu cầu được thực thi trong quá trình render phía máy chủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Gọi `,(0,c.jsx)(n.code,{children:`initSsr()`}),` thủ công`]}),`: Đối với các hook tiêu chuẩn (như `,(0,c.jsx)(n.code,{children:`useApiRef`}),`), bạn phải gọi phương thức `,(0,c.jsx)(n.code,{children:`.initSsr()`}),` một cách rõ ràng bên trong khối `,(0,c.jsx)(n.code,{children:`setup()`}),` của component.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Điều này giúp ngăn chặn hiện tượng "nhấp nháy nội dung" (khi người dùng thấy trạng thái trống hoặc skeleton trước khi dữ liệu được tải ở máy khách) và cải thiện SEO bằng cách cung cấp HTML đã có đầy đủ dữ liệu từ máy chủ.`}),`
`,(0,c.jsx)(n.p,{children:`Kiến trúc này cho phép bạn mô tả logic làm việc với dữ liệu một cách khai báo, tập trung vào cấu hình yêu cầu thay vì quản lý thủ công các trạng thái tải và cập nhật danh sách.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};