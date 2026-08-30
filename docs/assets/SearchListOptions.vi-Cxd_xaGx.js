import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/SearchListOptions - Quản lý Tùy chọn Danh sách Tìm kiếm`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-searchlistoptions`,children:`Lớp SearchListOptions`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),` chịu trách nhiệm quản lý và cung cấp quyền truy cập vào các tùy chọn cấu hình được sử dụng bởi hệ thống `,(0,c.jsx)(t.code,{children:`SearchList`}),`. Nó đảm bảo rằng các giá trị mặc định được sử dụng khi các tùy chọn cụ thể không được cung cấp.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình tập trung`}),` — cung cấp một điểm truy cập duy nhất cho tất cả các cài đặt liên quan đến tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý giá trị mặc định`}),` — tự động áp dụng các giá trị mặc định hợp lý (ví dụ: giới hạn, độ trễ) nếu chúng thiếu trong các tùy chọn được cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giao diện Fluent`}),` — hỗ trợ chuỗi lệnh (method chaining) để thiết lập các tùy chọn mới.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`SearchListOptions(options)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — một đối tượng chứa cấu hình tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOptions(): SearchOptions`}),` — Trả về đối tượng tùy chọn tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLimit(): number`}),` — Trả về số lượng ký tự tối thiểu cần thiết để kích hoạt tìm kiếm (mặc định là `,(0,c.jsx)(t.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getReturnEverything(): boolean`}),` — Trả về liệu có trả về tất cả các mục ngay cả khi chúng không khớp với truy vấn tìm kiếm hay không (mặc định là `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDelay(): number`}),` — Trả về độ trễ tìm kiếm tính bằng mili giây (mặc định là `,(0,c.jsx)(t.code,{children:`0`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFindExactMatch(): boolean`}),` — Trả về liệu có thực hiện tìm kiếm khớp chính xác hay không (mặc định là `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClassName(): string`}),` — Trả về tên lớp CSS được sử dụng để làm nổi bật các kết quả khớp (mặc định là `,(0,c.jsx)(t.code,{children:`'sys-search-selection'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options: SearchOptions): this`}),` — Thiết lập các tùy chọn tìm kiếm mới và trả về thực thể hiện tại để tạo chuỗi lệnh.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(t.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsx)(t.p,{children:`Đối tượng cấu hình chính cho hệ thống tìm kiếm. Tất cả các trường là tùy chọn:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — độ dài ký tự tối thiểu để kích hoạt tìm kiếm. Mặc định: `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — nếu là `,(0,c.jsx)(t.code,{children:`true`}),`, trả về tất cả các mục bất kể có khớp hay không. Mặc định: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — độ trễ thực hiện tìm kiếm tính bằng mili giây. Mặc định: `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — cho phép khớp từ chính xác. Mặc định: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — tên lớp CSS để làm nổi bật các kết quả khớp. Mặc định: `,(0,c.jsx)(t.code,{children:`'sys-search-selection'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};