import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/SearchListMatcher - Logic So khớp Tìm kiếm`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-searchlistmatcher`,children:`Lớp SearchListMatcher`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`SearchListMatcher`}),` chịu trách nhiệm về logic so khớp cốt lõi. Nó chuyển đổi chuỗi tìm kiếm hiện tại thành một biểu thức chính quy (regular expression) và cung cấp các phương thức để kiểm tra xem các giá trị dữ liệu khác nhau có khớp với biểu thức đó hay không.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo RegExp động`}),` — tự động xây dựng hoặc thiết lập lại trình so khớp khi cụm từ tìm kiếm hoặc tùy chọn thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chế độ tìm kiếm`}),` — hỗ trợ cả chế độ khớp một phần tiêu chuẩn và khớp chính xác dựa trên `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra hiệu quả`}),` — sử dụng kiểm tra biểu thức chính quy hiệu suất cao để xác định các kết quả khớp trong dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`SearchListMatcher(item, options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: SearchListItem`}),` — trạng thái thành phần tìm kiếm chứa giá trị.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: SearchListOptions`}),` — các tùy chọn cấu hình (ví dụ: `,(0,c.jsx)(n.code,{children:`findExactMatch`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Kiểm tra xem trình so khớp biểu thức chính quy nội bộ đã được khởi tạo hay chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(value: string): boolean`}),` — Kiểm tra xem giá trị đã cho có khớp với biểu thức tìm kiếm hiện tại hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): RegExp | undefined`}),` — Trả về thực thể biểu thức chính quy hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): void`}),` — Khởi tạo lại trình so khớp dựa trên trạng thái hiện tại của thành phần tìm kiếm và các tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`chế-độ-tìm-kiếm`,children:`Chế độ tìm kiếm`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp hỗ trợ hai chế độ so khớp chính, được điều khiển bởi tùy chọn `,(0,c.jsx)(n.code,{children:`findExactMatch`}),` trong `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`:`]}),`
`,(0,c.jsx)(n.h3,{id:`1-chứa-tất-cả-các-từ-mặc-định`,children:`1. Chứa tất cả các từ (Mặc định)`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда `,(0,c.jsx)(n.code,{children:`findExactMatch`}),` là `,(0,c.jsx)(n.code,{children:`false`}),`, chuỗi tìm kiếm được chia thành các từ riêng lẻ. Kết quả khớp chỉ được tìm thấy nếu `,(0,c.jsx)(n.strong,{children:`mọi từ`}),` đều có mặt trong chuỗi đích, bất kể thứ tự của chúng.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ví dụ`}),`: Tìm kiếm `,(0,c.jsx)(n.code,{children:`"chuột chơi game"`}),` sẽ khớp với `,(0,c.jsx)(n.code,{children:`"Chuột dành cho chơi game"`}),` và `,(0,c.jsx)(n.code,{children:`"Chơi game Pro Chuột"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-cụm-từ-chính-xác`,children:`2. Cụm từ chính xác`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда `,(0,c.jsx)(n.code,{children:`findExactMatch`}),` là `,(0,c.jsx)(n.code,{children:`true`}),`, chuỗi tìm kiếm được xử lý như một cụm từ liên tục duy nhất. Kết quả khớp chỉ được tìm thấy nếu `,(0,c.jsx)(n.strong,{children:`chính xác trình tự`}),` các ký tự (không phân biệt hoa thường) tồn tại trong chuỗi đích.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ví dụ`}),`: Tìm kiếm `,(0,c.jsx)(n.code,{children:`"chuột chơi game"`}),` sẽ khớp với `,(0,c.jsx)(n.code,{children:`"Chuột chơi game cực ngầu"`}),`, nhưng sẽ `,(0,c.jsx)(n.strong,{children:`không`}),` khớp với `,(0,c.jsx)(n.code,{children:`"Chuột dành cho chơi game"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này chủ yếu sử dụng kiểu gốc `,(0,c.jsx)(n.code,{children:`RegExp`}),` và logic nội bộ được quản lý bởi `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};