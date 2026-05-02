import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/DataStorage - Trình Bao bọc Local và Session Storage`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-datastorage`,children:`Lớp DataStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp linh hoạt để tương tác với `,(0,c.jsx)(n.code,{children:`localStorage`}),` và `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` của trình duyệt. Nó bao gồm các tiền tố được tích hợp sẵn, thời gian hết hạn bộ đệm (cache), lưu vào bộ nhớ đệm (memory caching) cho các bản sao hoạt động và chuyển đổi JSON tự động.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DataStorage`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp phụ trợ`}),`, được thiết kế để tương tác cấp thấp với bộ nhớ trình duyệt. Trong hầu hết các trường hợp, bạn nên sử dụng các lớp cấp cao hơn như `,(0,c.jsx)(n.code,{children:`Cookie`}),` hoặc `,(0,c.jsx)(n.code,{children:`Api`}),` cho các nhu cầu dữ liệu cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi Tự động`}),` — tự động xử lý phân tích và chuyển đổi chuỗi JSON cho các cấu hình và đối tượng được lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm Dựa trên Thời gian`}),` — cho phép lưu các đối tượng cùng với mốc thời gian và tôn trọng các ràng buộc về tuổi đời (age) của dữ liệu trong quá trình truy xuất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Tiền tố`}),` — hỗ trợ cả tiền tố toàn cục và riêng biệt để cách ly cũng như gom nhóm các khóa trong `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu Bộ nhớ`}),` — tạo ra các singleton cho những khóa giống nhau nhằm tránh các thao tác đọc đĩa bị lặp lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ SSR`}),` — sử dụng cơ chế cách ly theo từng request trong quá trình render phía server để ngăn chặn rò rỉ dữ liệu giữa các phiên làm việc song song.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`DataStorage(name, isSession)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Lớp hỗ trợ generic sau để đảm bảo kiểm soát kiểu dữ liệu nghiêm ngặt cho giá trị được lưu trữ:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Kiểu dữ liệu của giá trị được lưu trữ.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên của khóa lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSession: boolean = false`}),` — có sử dụng `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` hay không (mặc định là `,(0,c.jsx)(n.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// 1. Tạo một thực thể cho localStorage
const settings = new DataStorage('settings')

// 2. Tạo một thực thể cho sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-bộ-lưu-trữ`,children:`Truy cập Bộ lưu trữ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(defaultValue?: T | (() => T), cache?: number): T | undefined`}),` — Truy xuất giá trị hiện được lưu trữ. Nếu thời gian cache được cung cấp, nó sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu dữ liệu đã quá hạn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Thiết lập hoặc cập nhật giá trị trong cơ chế lưu trữ. Truyền `,(0,c.jsx)(n.code,{children:`undefined`}),` sẽ xóa mục đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Xóa khóa tương ứng khỏi môi trường lưu trữ và thực thể trong bộ nhớ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): this`}),` — Buộc thực thể bộ nhớ phải đồng bộ hóa với dữ liệu thô hiện tại bên trong các Storage API vật lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static setPrefix(newPrefix: string): void`}),` — Thay đổi tiền tố toàn cục áp dụng cho các thực thể mới. Tiền tố mặc định là `,(0,c.jsx)(n.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ssr-và-hydration`,children:`SSR và Hydration`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DataStorage`}),` hoàn toàn tương thích với Server-Side Rendering (SSR). Nó sử dụng một registry đặc biệt để cách ly các instance giữa các HTTP request khác nhau trên server.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Để tránh lỗi hydration (khi HTML render từ server khác với client), bạn nên gọi phương thức `,(0,c.jsx)(n.code,{children:`get()`}),` bên trong `,(0,c.jsx)(n.code,{children:`useEffect`}),` hoặc các hook chỉ chạy ở client. Trên server, `,(0,c.jsx)(n.code,{children:`get()`}),` sẽ luôn trả về `,(0,c.jsx)(n.code,{children:`undefined`}),` (hoặc `,(0,c.jsx)(n.code,{children:`defaultValue`}),`) vì `,(0,c.jsx)(n.code,{children:`localStorage`}),` không khả dụng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-giá-trị-mặc-định-và-cache`,children:`Sử dụng Giá trị Mặc định và Cache`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const settings = new DataStorage('user_settings')

// Lấy dữ liệu, trả về object rỗng nếu không tìm thấy
const currentSettings = settings.get({})

// Chỉ lấy dữ liệu nếu nó được lưu lại trong vòng 60 giây gần nhất
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(n.h3,{id:`đồng-bộ-hóa-thủ-công`,children:`Đồng bộ hóa Thủ công`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const storage = new DataStorage('shared_data')

// ... dữ liệu có thể đã thay đổi trong một tab khác hoặc phần khác của ứng dụng
storage.update() // Đồng bộ hóa bộ nhớ với ổ đĩa
console.log(storage.get())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};