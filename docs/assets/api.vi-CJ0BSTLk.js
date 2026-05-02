import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Hook làm việc với API`}),`
`,(0,c.jsx)(n.h1,{id:`hook-làm-việc-với-api`,children:`Hook làm việc với API`}),`
`,(0,c.jsxs)(n.p,{children:[`Một tập hợp các công cụ để tương tác hiệu quả với backend, được tích hợp hoàn toàn với `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`đặc-điểm`,children:`Đặc điểm`}),`
`,(0,c.jsxs)(n.p,{children:[`Nhiệm vụ chính của các công cụ này là tự động hóa các tác vụ thông thường: theo dõi trạng thái tải (`,(0,c.jsx)(n.code,{children:`loading`}),`), xử lý lỗi và đồng bộ hóa dữ liệu giữa các phần khác nhau của giao diện. Tất cả các hook đều hỗ trợ các tham số phản hồi, cho phép tạo ra các yêu cầu động tự động cập nhật khi các bộ lọc đầu vào hoặc đường dẫn thay đổi.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-công-cụ-hiện-có`,children:`Các công cụ hiện có`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRef`}),` — Truy xuất dữ liệu phản hồi (GET) với tính năng tự động chạy và lưu trữ trong `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRequest`}),` — Hook cơ bản để thực hiện thủ công bất kỳ yêu cầu HTTP nào (trả về phương thức `,(0,c.jsx)(n.code,{children:`send`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiPost / Put / Delete`}),` — Các lớp vỏ chuyên dụng cho các thay đổi (tạo, cập nhật, xóa).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` — Bộ điều phối toàn diện, kết hợp các yêu cầu GET, tìm kiếm, định dạng và thay đổi thành một chu kỳ duy nhất.`]}),`
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
`,(0,c.jsx)(n.p,{children:`Kiến trúc này cho phép bạn mô tả logic làm việc với dữ liệu một cách khai báo, tập trung vào cấu hình yêu cầu thay vì quản lý thủ công các trạng thái tải và cập nhật danh sách.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};