import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Classes/CacheItem - Quản lý mục lưu trữ bộ nhớ đệm"}),`
`,n.jsx(c.h1,{id:"lớp-cacheitem",children:"Lớp CacheItem"}),`
`,n.jsxs(c.p,{children:["Hệ thống cốt lõi (engine) quản lý độc lập từng mục lưu vào bộ nhớ cache. Trong khi ",n.jsx(c.code,{children:"Cache"})," và ",n.jsx(c.code,{children:"CacheStatic"})," đóng vai trò là giao diện chung giúp lấy dữ liệu đang hoạt động trên hệ thống ứng dụng, thì ",n.jsx(c.code,{children:"CacheItem"})," tạo những luồng bảo mật nghiêm ngặt kiểm soát vòng đời trạng thái (lifecycle), nơi lưu giữ biến nhớ, cũng như tính hợp lệ kết thúc vòng tuần hoàn cho từng giá trị được cấu hình cụ thể nhất."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Trình theo dõi bộ phụ thuộc (Dependency Tracking)"})," — duy trì mảng so sánh dùng làm gốc để tính toán nếu biến dữ liệu lưu trữ bị phát hiện tính vô hiệu/biến đổi sai lệch so với lần cuối lưu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính toán tuần tự (Lazy Evaluation)"})," — thực hiện nguyên lý tối giản tài nguyên: chỉ chạy lại quy trình tìm nạp từ đầu ở đoạn function nếu mảng lưu trữ đang bị lỗi thời hỏng cấu trúc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lưu trữ ghi nhớ bộ đệm cũ (Historical Memory)"})," — vẫn giữ dữ liệu thuộc vùng cache cũ (",n.jsx(c.code,{children:"getCacheOld"}),") kể cả khi chức năng ghi đè/tỉnh toán lại đã hoàn tất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi Async"})," — hỗ trợ hoàn hảo phương pháp đồng bộ (",n.jsx(c.code,{children:"getCache"}),") và bất đồng bộ chạy kèm logic ",n.jsx(c.code,{children:"Promise"})," (",n.jsx(c.code,{children:"getCacheAsync"}),") ở tiến trình nạp mảng dữ liệu."]}),`
`]}),`
`,n.jsxs(c.p,{children:["Bạn thường không trực tiếp gọi/khởi tạo Class ",n.jsx(c.code,{children:"CacheItem"})," trong mã ứng dụng của mình. Thay vào đó, bạn sử dụng ",n.jsx(c.code,{children:"Cache"})," và class đó tự động bao đóng ",n.jsx(c.code,{children:"CacheItem"})," ở định dạng nội bộ cho bạn. Dù vậy, việc hiểu rõ các hàm API từ gốc cũng hữu ích trong việc xây dựng kiến trúc nền nâng cao."]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"CacheItem(callback)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback: () => T"})," — hàm sẽ tạo dữ liệu cho bộ nhớ đệm."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { CacheItem } from '@dxtmisha/functional'

// 1. Khởi tạo với hàm lấy dữ liệu
const userCache = new CacheItem(() => fetchUserData())
`})}),`
`,n.jsx(c.h2,{id:"lấy-dữ-liệu-bộ-nhớ-đệm",children:"Lấy dữ liệu bộ nhớ đệm"}),`
`,n.jsx(c.h3,{id:"getcache",children:n.jsx(c.code,{children:"getCache"})}),`
`,n.jsxs(c.p,{children:["Dùng ",n.jsx(c.code,{children:"getCache"})," để móc nối lấy lại biến lưu trữ. Thiết lập cấu hình biến mảng đi kèm đóng vai trò so sánh mức độ trùng khớp cho tiến trình phân giải."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"comparison?: any[]"})," — danh sách các đối tượng thiết lập kèm. Nếu thông tin bị sai với lúc lưu lại thì callback tự động phân tách cấu trúc tính toán lần nữa."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T"})," — dữ liệu nguyên mẫu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Hàm đánh giá gọi: 1
counterCache.getCache([1])

// Tìm ngay cache nhận dạng lưu: 1
counterCache.getCache([1])

// Tham số gắn kết biến đổi qua [2], xoá cache khởi động và lưu kết quả: 2
counterCache.getCache([2])
`})}),`
`,n.jsx(c.h3,{id:"getcacheasync",children:n.jsx(c.code,{children:"getCacheAsync"})}),`
`,n.jsxs(c.p,{children:["Mọi thông số giống với cách thiết lập và làm việc của ",n.jsx(c.code,{children:"getCache"}),", nhưng hệ thống tiếp nhận biến ",n.jsx(c.code,{children:"Promise"})," trả ra khi cần."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"comparison?: any[]"})," — mảng phụ thuộc."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<T>"})," — dữ liệu ",n.jsx(c.code,{children:"Promise"})," được tạo kết nối mạng."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => await fetch('/data').then(res => res.json()))

// Chạy mạng network để tải API thông tin
const data1 = await apiCache.getCacheAsync(['v1'])

// Vượt lớp mạng trỏ thẳng đến bộ đệm lưu trữ
const data2 = await apiCache.getCacheAsync(['v1'])
`})}),`
`,n.jsx(c.h2,{id:"dữ-liệu-lịch-sử",children:"Dữ liệu lịch sử"}),`
`,n.jsx(c.h3,{id:"getcacheold",children:n.jsx(c.code,{children:"getCacheOld"})}),`
`,n.jsxs(c.p,{children:["Hàm phụ lấy lại biến thuộc nhóm ghi đè trước lần cuối tái tạo cache data, thông qua lệnh gọi ",n.jsx(c.code,{children:"getCacheOld()"}),"."]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T | undefined"})," — biến định danh cũ nhất."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`counterCache.getCache([1]) // Trả 1
counterCache.getCache([2]) // Trả 2

console.log(counterCache.getCacheOld()) // Trả 1
`})}),`
`,n.jsx(c.h2,{id:"tổng-quan-nội-bộ",children:"Tổng quan nội bộ"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"CacheItem"})," hoạt động chặt qua module ",n.jsx(c.code,{children:"isUpdate"})," tiến hành phân giải và đánh dấu (",n.jsx(c.code,{children:"==="}),") xem giá trị từ array đầu vào của thuộc tính biến tham chiếu ",n.jsx(c.code,{children:"comparison"})," với độ tin cậy được thiết lập từ mảng cũ đã giống về độ dài cấu trúc hoặc số chiều trong node hay không. Chỉ cần một giá trị khác với biến ban đầu thì ",n.jsx(c.code,{children:"CacheItem"})," đánh dấu mảng thành cấu trúc chết (stale/hỏng) để tạo tiến trình đẩy ",n.jsx(c.code,{children:"value"})," tính lại toàn bộ."]})]})}function g(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(e,{...h})}):e(h)}export{g as default};
