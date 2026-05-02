import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/SearchListItem - Quản lý Thành phần Tìm kiếm`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-searchlistitem`,children:`Lớp SearchListItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`SearchListItem`}),` đại diện cho trạng thái hiện tại của nội dung nhập tìm kiếm. Nó quản lý giá trị đang được tìm kiếm và xác định liệu có nên kích hoạt thao tác tìm kiếm hay không dựa trên các tùy chọn đã cấu hình.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý giá trị`}),` — cung cấp các phương thức dễ dàng để lấy và thiết lập chuỗi tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logic kích hoạt`}),` — xác định liệu có nên bắt đầu tìm kiếm hay không dựa trên độ dài của chuỗi tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn kiểu dữ liệu`}),` — bao gồm các type guard để xác minh xem giá trị có khác rỗng hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`SearchListItem(value, options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | undefined`}),` — giá trị tìm kiếm ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: SearchListOptions`}),` — một thực thể của `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),` để cung cấp giới hạn tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (độ dài < 3)
item.set('hello')
console.log(item.isSearch()) // true (độ dài >= 3)
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Kiểm tra xem giá trị hiện tại có khác rỗng hoặc không xác định hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch(): boolean`}),` — Kiểm tra xem có nên thực hiện tìm kiếm hay không (giá trị tồn tại VÀ độ dài >= giới hạn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — Trả về giá trị tìm kiếm hiện tại dưới dạng chuỗi.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: string): this`}),` — Thiết lập giá trị tìm kiếm mới và trả về thực thể hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kích-hoạt-tìm-kiếm`,children:`Kích hoạt tìm kiếm`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`SearchListItem`}),` đóng vai trò như một bộ lọc quyết định xem hệ thống tìm kiếm có nên bắt đầu xử lý dữ liệu hay không. Điều này được xử lý bởi phương thức `,(0,c.jsx)(n.code,{children:`isSearch()`}),`, phương thức này sử dụng tùy chọn `,(0,c.jsx)(n.code,{children:`limit`}),` từ `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Độ dài tối thiểu (`,(0,c.jsx)(n.code,{children:`limit`}),`)`]}),`: Một tìm kiếm chỉ được coi là hoạt động nếu số lượng ký tự trong chuỗi tìm kiếm lớn hơn hoặc bằng giới hạn đã xác định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hành vi mặc định`}),`: Theo mặc định, giới hạn được đặt thành `,(0,c.jsx)(n.code,{children:`2`}),`. Điều này có nghĩa là việc tìm kiếm `,(0,c.jsx)(n.code,{children:`"a"`}),` sẽ không kích hoạt kết quả khớp, nhưng `,(0,c.jsx)(n.code,{children:`"ad"`}),` hoặc `,(0,c.jsx)(n.code,{children:`"admin"`}),` thì có.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Logic này giúp ngăn chặn các tính toán không cần thiết và các kết quả "nhiễu" khi người dùng mới chỉ nhập một ký tự duy nhất.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};