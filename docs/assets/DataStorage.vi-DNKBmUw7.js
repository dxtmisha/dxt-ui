import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/DataStorage - Trình Bao bọc Local và Session Storage`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-datastorage`,children:`Lớp DataStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp linh hoạt để tương tác với `,(0,c.jsx)(n.code,{children:`localStorage`}),` và `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` của trình duyệt. Nó bao gồm các tiền tố được tích hợp sẵn, thời gian hết hạn bộ đệm (cache), lưu vào bộ nhớ đệm (memory caching) cho các bản sao hoạt động và chuyển đổi JSON tự động.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi Tự động`}),` — tự động xử lý phân tích và chuyển đổi chuỗi JSON cho các cấu hình và đối tượng được lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm Dựa trên Thời gian`}),` — cho phép lưu các đối tượng cùng với mốc thời gian và tôn trọng các ràng buộc về tuổi đời (age) của dữ liệu trong quá trình truy xuất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Tiền tố`}),` — hỗ trợ cả tiền tố toàn cục và riêng biệt để cách ly cũng như gom nhóm các khóa trong `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu Bô nhớ`}),` — tạo ra các singleton cho những khóa giống nhau nhằm tránh các thao tác đọc đĩa bị lặp lại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`DataStorage(name, isSession)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên của khóa lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSession: boolean = false`}),` — có sử dụng `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` hay không (mặc định là `,(0,c.jsx)(n.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional'

// 1. Tạo một thực thể cho localStorage
const settings = new DataStorage('settings')

// 2. Tạo một thực thể cho sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng Cơ bản`}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình-toàn-cục`,children:`Cấu hình toàn cục`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPrefix(newPrefix: string): void`}),` (static) — Thay đổi tên tiền tố toàn cục áp dụng cho những instance mới đang định dùng môi trường `,(0,c.jsx)(n.code,{children:`localStorage`}),`. Giá trị tiền tố mặc định là `,(0,c.jsx)(n.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-dữ-liệu`,children:`Quản lý dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất cấu hình đã phân tích hiện tại được lưu lại từ trước.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — giá trị dự phòng được trả về nếu bên trong bộ lưu trữ trống rỗng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache?: number`}),` — độ tuổi tối đa cho phép (tính bằng giây). Nếu dữ liệu đã cũ hơn mức này, nó sẽ cư xử như thể không có gì được lưu trữ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — giá trị được lưu trữ hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Lấy dữ liệu, trả về object rỗng nếu không tìm thấy
const currentSettings = settings.get({})

// Chỉ lấy dữ liệu nếu nó được lưu lại trong vòng 60 giây gần nhất
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Thiết lập hoặc cập nhật một giá trị trong cơ chế lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | (() => T)`}),` — giá trị muốn lưu. Việc truyền `,(0,c.jsx)(n.code,{children:`undefined`}),` sẽ loại bỏ mục đó khỏi kho lưu trữ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — giá trị được lưu trữ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.set({ theme: 'dark', notifications: true })
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-bổ-sung`,children:`Các phương thức bổ sung`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Xóa bỏ chính xác khóa lưu trữ tương ứng từ phần môi trường phần mềm `,(0,c.jsx)(n.code,{children:`localStorage`}),` hoặc `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`, đồng thời lập tức dọn sạch dữ liệu khối nhớ hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): this`}),` — Buộc bộ đệm đối tượng trong bộ nhớ tự đồng bộ lại thật khít so với dữ liệu rỗng hiện hành bên trong các hàm Storage API vật lý.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};