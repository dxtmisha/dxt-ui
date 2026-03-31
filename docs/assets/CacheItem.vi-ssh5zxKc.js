import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/CacheItem - Quản lý mục lưu trữ bộ nhớ đệm`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cacheitem`,children:`Lớp CacheItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Hệ thống cốt lõi (engine) quản lý độc lập từng mục lưu vào bộ nhớ cache. Trong khi `,(0,c.jsx)(n.code,{children:`Cache`}),` và `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` đóng vai trò là giao diện chung giúp lấy dữ liệu đang hoạt động trên hệ thống ứng dụng, thì `,(0,c.jsx)(n.code,{children:`CacheItem`}),` tạo những luồng bảo mật nghiêm ngặt kiểm soát vòng đời trạng thái (lifecycle), nơi lưu giữ biến nhớ, cũng như tính hợp lệ kết thúc vòng tuần hoàn cho từng giá trị được cấu hình cụ thể nhất.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trình theo dõi bộ phụ thuộc (Dependency Tracking)`}),` — duy trì mảng so sánh dùng làm gốc để tính toán nếu biến dữ liệu lưu trữ bị phát hiện tính vô hiệu/biến đổi sai lệch so với lần cuối lưu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toán tuần tự (Lazy Evaluation)`}),` — thực hiện nguyên lý tối giản tài nguyên: chỉ chạy lại quy trình tìm nạp từ đầu ở đoạn function nếu mảng lưu trữ đang bị lỗi thời hỏng cấu trúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ ghi nhớ bộ đệm cũ (Historical Memory)`}),` — vẫn giữ dữ liệu thuộc vùng cache cũ (`,(0,c.jsx)(n.code,{children:`getCacheOld`}),`) kể cả khi chức năng ghi đè/tỉnh toán lại đã hoàn tất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Async`}),` — hỗ trợ hoàn hảo phương pháp đồng bộ (`,(0,c.jsx)(n.code,{children:`getCache`}),`) và bất đồng bộ chạy kèm logic `,(0,c.jsx)(n.code,{children:`Promise`}),` (`,(0,c.jsx)(n.code,{children:`getCacheAsync`}),`) ở tiến trình nạp mảng dữ liệu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn thường không trực tiếp gọi/khởi tạo Class `,(0,c.jsx)(n.code,{children:`CacheItem`}),` trong mã ứng dụng của mình. Thay vào đó, bạn sử dụng `,(0,c.jsx)(n.code,{children:`Cache`}),` và class đó tự động bao đóng `,(0,c.jsx)(n.code,{children:`CacheItem`}),` ở định dạng nội bộ cho bạn. Dù vậy, việc hiểu rõ các hàm API từ gốc cũng hữu ích trong việc xây dựng kiến trúc nền nâng cao.`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`CacheItem(callback)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — hàm sẽ tạo dữ liệu cho bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional'

// 1. Khởi tạo với hàm lấy dữ liệu
const userCache = new CacheItem(() => fetchUserData())
`})}),`
`,(0,c.jsx)(n.h2,{id:`lấy-dữ-liệu-bộ-nhớ-đệm`,children:`Lấy dữ liệu bộ nhớ đệm`}),`
`,(0,c.jsx)(n.h3,{id:`getcache`,children:(0,c.jsx)(n.code,{children:`getCache`})}),`
`,(0,c.jsxs)(n.p,{children:[`Dùng `,(0,c.jsx)(n.code,{children:`getCache`}),` để móc nối lấy lại biến lưu trữ. Thiết lập cấu hình biến mảng đi kèm đóng vai trò so sánh mức độ trùng khớp cho tiến trình phân giải.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — danh sách các đối tượng thiết lập kèm. Nếu thông tin bị sai với lúc lưu lại thì callback tự động phân tách cấu trúc tính toán lần nữa.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — dữ liệu nguyên mẫu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Hàm đánh giá gọi: 1
counterCache.getCache([1])

// Tìm ngay cache nhận dạng lưu: 1
counterCache.getCache([1])

// Tham số gắn kết biến đổi qua [2], xoá cache khởi động và lưu kết quả: 2
counterCache.getCache([2])
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcacheasync`,children:(0,c.jsx)(n.code,{children:`getCacheAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mọi thông số giống với cách thiết lập và làm việc của `,(0,c.jsx)(n.code,{children:`getCache`}),`, nhưng hệ thống tiếp nhận biến `,(0,c.jsx)(n.code,{children:`Promise`}),` trả ra khi cần.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — mảng phụ thuộc.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — dữ liệu `,(0,c.jsx)(n.code,{children:`Promise`}),` được tạo kết nối mạng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => await fetch('/data').then(res => res.json()))

// Chạy mạng network để tải API thông tin
const data1 = await apiCache.getCacheAsync(['v1'])

// Vượt lớp mạng trỏ thẳng đến bộ đệm lưu trữ
const data2 = await apiCache.getCacheAsync(['v1'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`dữ-liệu-lịch-sử`,children:`Dữ liệu lịch sử`}),`
`,(0,c.jsx)(n.h3,{id:`getcacheold`,children:(0,c.jsx)(n.code,{children:`getCacheOld`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm phụ lấy lại biến thuộc nhóm ghi đè trước lần cuối tái tạo cache data, thông qua lệnh gọi `,(0,c.jsx)(n.code,{children:`getCacheOld()`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — biến định danh cũ nhất.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`counterCache.getCache([1]) // Trả 1
counterCache.getCache([2]) // Trả 2

console.log(counterCache.getCacheOld()) // Trả 1
`})}),`
`,(0,c.jsx)(n.h2,{id:`tổng-quan-nội-bộ`,children:`Tổng quan nội bộ`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CacheItem`}),` hoạt động chặt qua module `,(0,c.jsx)(n.code,{children:`isUpdate`}),` tiến hành phân giải và đánh dấu (`,(0,c.jsx)(n.code,{children:`===`}),`) xem giá trị từ array đầu vào của thuộc tính biến tham chiếu `,(0,c.jsx)(n.code,{children:`comparison`}),` với độ tin cậy được thiết lập từ mảng cũ đã giống về độ dài cấu trúc hoặc số chiều trong node hay không. Chỉ cần một giá trị khác với biến ban đầu thì `,(0,c.jsx)(n.code,{children:`CacheItem`}),` đánh dấu mảng thành cấu trúc chết (stale/hỏng) để tạo tiến trình đẩy `,(0,c.jsx)(n.code,{children:`value`}),` tính lại toàn bộ.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};