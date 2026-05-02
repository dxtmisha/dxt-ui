import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/CacheItem - Quản lý Bộ nhớ đệm Nâng cao`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cacheitem`,children:`Lớp CacheItem`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`⚠️ Đã lỗi thời`}),` — Lớp này đã lỗi thời và không nên được sử dụng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Hệ thống cốt lõi quản lý từng mục lưu trữ bộ nhớ đệm (cache) riêng biệt. Trong khi `,(0,c.jsx)(n.code,{children:`Cache`}),` và `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` cung cấp các giao diện công khai để truy xuất dữ liệu cache trong toàn bộ ứng dụng, thì lớp `,(0,c.jsx)(n.code,{children:`CacheItem`}),` đảm nhận việc quản lý an toàn vòng đời, lưu trữ và các quy tắc vô hiệu hóa (invalidation) cho từng giá trị cụ thể.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CacheItem`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp phụ trợ`}),`, được thiết kế để quản lý nội bộ các mục lưu trữ bộ nhớ đệm riêng lẻ. Trong hầu hết các trường hợp, bạn nên tương tác với bộ nhớ đệm thông qua các lớp `,(0,c.jsx)(n.code,{children:`Cache`}),` hoặc `,(0,c.jsx)(n.code,{children:`CacheStatic`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi phụ thuộc`}),` — duy trì các mảng so sánh để xác định xem giá trị được lưu trong bộ nhớ đệm có còn hiệu lực hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toán lười (Lazy Evaluation)`}),` — đảm bảo rằng hàm callback (vốn có thể tốn kém tài nguyên) chỉ chạy khi các thành phần phụ thuộc thực sự thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ lịch sử`}),` — giữ lại tham chiếu đến giá trị đã lưu trước đó (`,(0,c.jsx)(n.code,{children:`getCacheOld`}),`) ngay cả khi quá trình tính toán lại đã diễn ra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Async`}),` — xử lý tự nhiên cả việc nạp dữ liệu đồng bộ (`,(0,c.jsx)(n.code,{children:`getCache`}),`) và bất đồng bộ dựa trên `,(0,c.jsx)(n.code,{children:`Promise`}),` (`,(0,c.jsx)(n.code,{children:`getCacheAsync`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vô hiệu hóa nghiêm ngặt`}),` — sử dụng logic so sánh sâu để chỉ kích hoạt cập nhật khi thực sự cần thiết.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một thành phần phụ trợ, `,(0,c.jsx)(n.code,{children:`CacheItem`}),` thường được khởi tạo bởi các trình quản lý cấp cao hơn. Tuy nhiên, nó có thể được tạo thủ công nếu yêu cầu logic lưu trữ bộ nhớ đệm riêng biệt và tùy chỉnh.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Lớp hỗ trợ generic sau để đảm bảo kiểm soát kiểu dữ liệu nghiêm ngặt cho giá trị được lưu:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Kiểu dữ liệu của giá trị được lưu trong bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — một hàm sẽ tạo hoặc lấy dữ liệu cho bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional-basic'

// 1. Khởi tạo với một hàm truy xuất dữ liệu
const userCache = new CacheItem(() => fetchUserData())

// 2. Sử dụng generic để kiểm soát kiểu dữ liệu nghiêm ngặt
const numberCache = new CacheItem<number>(() => Math.random())
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-bộ-nhớ-đệm`,children:`Truy cập Bộ nhớ đệm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCache(comparison?: any[]): T`}),` — Lấy giá trị từ bộ nhớ đệm. Nếu các thành phần phụ thuộc trong mảng `,(0,c.jsx)(n.code,{children:`comparison`}),` thay đổi, nó sẽ kích hoạt tính toán lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCacheAsync(comparison?: any[]): Promise<T>`}),` — Phiên bản bất đồng bộ của `,(0,c.jsx)(n.code,{children:`getCache`}),`. Trả về một Promise giải quyết thành dữ liệu đã lưu hoặc dữ liệu mới được lấy về.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lịch-sử`,children:`Lịch sử`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCacheOld(): T | undefined`}),` — Trả về giá trị đã được lưu trong bộ nhớ đệm ngay trước lần cập nhật cuối cùng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`vô-hiệu-hóa-dựa-trên-phụ-thuộc`,children:`Vô hiệu hóa dựa trên phụ thuộc`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Gọi lần đầu: tính toán và lưu cache giá trị 1
counterCache.getCache([10]) // trả về 1

// Gọi lần hai: các thành phần phụ thuộc khớp với [10], trả về giá trị 1 đã lưu
counterCache.getCache([10]) // trả về 1

// Gọi lần ba: các thành phần phụ thuộc thay đổi thành [20], tính toán và lưu cache giá trị 2
counterCache.getCache([20]) // trả về 2

// Kiểm tra lịch sử:
console.log(counterCache.getCacheOld()) // trả về 1
`})}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-cache-cho-api-async`,children:`Cấu hình Cache cho API Async`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Lấy dữ liệu từ mạng cho yêu cầu 'v1' đầu tiên
const data1 = await apiCache.getCacheAsync(['v1'])

// Trả về từ bộ nhớ đệm ngay lập tức cho các yêu cầu 'v1' tiếp theo
const data2 = await apiCache.getCacheAsync(['v1'])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};