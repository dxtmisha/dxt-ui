import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Singleton được quản lý`}),`
`,(0,c.jsx)(n.h1,{id:`singleton-được-quản-lý-executeuse`,children:`Singleton được quản lý (executeUse)`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm `,(0,c.jsx)(n.strong,{children:`executeUse`}),` là một nhà máy tiên tiến (factory) để tạo ra các singleton được quản lý trong hệ sinh thái `,(0,c.jsx)(n.strong,{children:`Vue 3`}),`. Nó giải quyết vấn đề khởi tạo và tái sử dụng các trạng thái phản hồi, dịch vụ toàn cầu (như thẻ meta) hoặc các logic thành phần bằng cách cung cấp quyền kiểm soát linh hoạt đối với ngữ cảnh thực thi (toàn cầu - global, cục bộ - local, hoặc thông qua `,(0,c.jsx)(n.code,{children:`provide/inject`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`chế-độ-thực-thi`,children:`Chế độ thực thi`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`executeUse`}),` hỗ trợ ba chế độ khởi tạo (enum `,(0,c.jsx)(n.code,{children:`ExecuteUseType`}),`), mỗi chế độ được thiết kế cho những nhiệm vụ kiến trúc riêng biệt:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`global`}),` (`,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`) — một phiên bản duy nhất cho toàn bộ ứng dụng. Rất thích hợp để tạo các dịch vụ tồn tại bên ngoài một thành phần cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`provide`}),` (`,(0,c.jsx)(n.code,{children:`executeUseProvide`}),`) — chia sẻ trạng thái qua cây thành phần (`,(0,c.jsx)(n.code,{children:`provide`}),`/`,(0,c.jsx)(n.code,{children:`inject`}),`). Đảm bảo rằng các thành phần con sẽ nhận được cùng một phiên bản từ thành phần cha gần nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`local`}),` (`,(0,c.jsx)(n.code,{children:`executeUseLocal`}),`) — một phiên bản duy nhất trong một bao đóng (closure), được cách ly bên trong `,(0,c.jsx)(n.code,{children:`effectScope`}),` của riêng nó.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`sự-khác-biệt-giữa-global-và-local`,children:[`Sự khác biệt giữa `,(0,c.jsx)(n.code,{children:`global`}),` và `,(0,c.jsx)(n.code,{children:`local`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Sự khác biệt chính về mặt kiến trúc giữa các chế độ `,(0,c.jsx)(n.code,{children:`global`}),` và `,(0,c.jsx)(n.code,{children:`local`}),` nằm ở `,(0,c.jsx)(n.strong,{children:`thời điểm khởi tạo`}),` (thời điểm chính xác mà phiên bản được tạo):`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`global`}),` (Khởi tạo sớm / Hàng loạt):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Tất cả các lệnh gọi hàm được bọc trong `,(0,c.jsx)(n.code,{children:`global`}),` sẽ được thu thập vào một mảng toàn cục. Chúng được `,(0,c.jsx)(n.strong,{children:`thực thi ngay lập tức cùng nhau`}),` khi hàm `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` được gọi tại điểm xâm nhập của ứng dụng (ví dụ: trong `,(0,c.jsx)(n.code,{children:`main.ts`}),` hoặc trong quá trình chạy SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cú pháp sử dụng (Kịch bản):`}),` Các dịch vụ thiết yếu và quan trọng (Cài đặt, Thẻ meta, Bản dịch ngôn ngữ, Phiên của người dùng) phải SẴN SÀNG hoạt động `,(0,c.jsx)(n.em,{children:`trước`}),` khi render thành phần đầu tiên, hoặc các dịch vụ cần được khởi tạo lại tập trung khi ứng dụng thiết lập lại.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`local`}),` (Khởi tạo lười biếng - Lazy Initialization):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Phiên bản được tạo `,(0,c.jsx)(n.strong,{children:`chỉ vào đúng thời điểm được gọi lần đầu tiên`}),` bên trong một thành phần hoặc dịch vụ khác. Ở đây, nhờ việc khởi tạo được bọc bên trong một `,(0,c.jsx)(n.code,{children:`effectScope`}),` toàn cầu, singleton này – tương tự như `,(0,c.jsx)(n.code,{children:`global`}),` – sẽ "sống vĩnh viễn" và không bị hủy ngay cả khi thành phần gọi nó bị gỡ bỏ (unmount).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cú pháp sử dụng (Kịch bản):`}),` Các dịch vụ nặng hoặc đặc thù theo ngữ cảnh (ví dụ: bộ xử lý bộ lọc phức tạp, một trang chat websocket riêng biệt, phân tích thống kê) mà:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Có thể không bao giờ được dùng tới trong phiên làm việc hiện tại của người dùng.`}),`
`,(0,c.jsx)(n.li,{children:`Chỉ nên khởi tạo khi người dùng đi tới một trang cụ thể cần đến chức năng đó.`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cú-pháp-sử-dụng-ví-dụ-dịch-vụ-toàn-cầu`,children:`Cú pháp sử dụng (Ví dụ dịch vụ toàn cầu)`}),`
`,(0,c.jsx)(n.p,{children:`Kịch bản phổ biến nhất là khởi tạo một kho lưu trữ toàn cầu hoặc dịch vụ (ví dụ: để làm việc với các thẻ meta).`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeUseGlobal } from '@dxtmisha/functional'

// 1. Khai báo singleton
const item = executeUseGlobal(() => {
  const title = ref('Tiêu đề của tôi')
  
  const updateTitle = (newTitle: string) => {
    title.value = newTitle
  }

  return { title, updateTitle }
})

// 2. Xuất (export) hàm composable (theo quy ước của Vue)
export const useMeta = () => item()
`})}),`
`,(0,c.jsx)(n.p,{children:`Bên trong bất kỳ thành phần Vue nào:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useMeta } from './useMeta'

const { title, updateTitle } = useMeta() // title sẽ được dùng chung cho tất cả các lệnh gọi
`})}),`
`,(0,c.jsx)(n.h2,{id:`sử-dụng-provide--inject`,children:`Sử dụng Provide / Inject`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn cần trạng thái chỉ tồn tại trong một cây thành phần cụ thể (ví dụ: một biểu mẫu và các trường bên trong nó), hãy sử dụng `,(0,c.jsx)(n.code,{children:`executeUseProvide`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'

const useFormState = executeUseProvide((initialData: any) => {
  // ... logic khởi tạo trạng thái phản hồi
  return { /* ... */ }
})
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trong lần gọi `,(0,c.jsx)(n.code,{children:`useFormState(data)`}),` đầu tiên ở thành phần cha, trạng thái sẽ được khởi tạo và truyền xuống (qua `,(0,c.jsx)(n.code,{children:`provide`}),`). Bất kỳ thành phần con nào gọi `,(0,c.jsx)(n.code,{children:`useFormState()`}),` sau đó sẽ nhận được chính phiên bản này thông qua `,(0,c.jsx)(n.code,{children:`inject`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-phiên-bản`,children:`Quản lý phiên bản`}),`
`,(0,c.jsxs)(n.p,{children:[`Các hàm `,(0,c.jsx)(n.code,{children:`executeUse`}),` bọc kết quả từ factory của bạn và bổ sung thêm các phương thức đặc biệt để quản lý vòng đời (tùy thuộc vào chế độ).`]}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-init`,children:`Phương thức init()`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`init()`}),` chỉ đơn giản là một lệnh giữ chỗ (stub) trả về chính đối tượng. Nó được sử dụng độc quyền để làm nổi bật rõ ràng lệnh gọi ban đầu của composable trong mã của một thành phần.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const service = useMeta()

// Xác định rõ ràng điểm vào ban đầu
service.init()
`})}),`
`,(0,c.jsx)(n.h3,{id:`đặt-lại-và-khởi-tạo-lại`,children:`Đặt lại và Khởi tạo lại`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const service = useMeta()

// Đặt lại (reset) phiên bản được lưu trữ trong bộ nhớ đệm chế độ cục bộ (local) và toàn cầu (global).
// Trong lần gọi composable tiếp theo, một phiên bản mới sẽ được tạo ra.
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Ngoài ra, đối với các singleton toàn cầu, hàm `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` có sẵn để buộc kích hoạt lại tất cả các phương thức `,(0,c.jsx)(n.code,{children:`callback`}),` đã đăng ký (có ích trong trường hợp khởi tạo SSR hoặc đặt lại toàn bộ ứng dụng).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu ứng dụng của bạn sử dụng `,(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),`, bạn `,(0,c.jsx)(n.strong,{children:`không cần phải`}),` gọi `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` một cách thủ công lúc khởi động — plugin đã tự động xử lý việc này ở hậu trường.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};