import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/SearchListMatcher - Logic So khớp Tìm kiếm`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-searchlistmatcher`,children:`Lớp SearchListMatcher`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`SearchListMatcher`}),` chịu trách nhiệm về logic so khớp cốt lõi. Nó chuyển đổi chuỗi tìm kiếm hiện tại thành một biểu thức chính quy (regular expression) và cung cấp các phương thức để kiểm tra xem các giá trị dữ liệu khác nhau có khớp với biểu thức đó hay không.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo RegExp động`}),` — tự động xây dựng hoặc thiết lập lại trình so khớp khi cụm từ tìm kiếm hoặc tùy chọn thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chế độ tìm kiếm`}),` — hỗ trợ cả chế độ khớp một phần tiêu chuẩn và khớp chính xác dựa trên `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra hiệu quả`}),` — sử dụng kiểm tra biểu thức chính quy hiệu suất cao để xác định các kết quả khớp trong dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`SearchListMatcher(item, options)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SearchListItem`}),` — trạng thái thành phần tìm kiếm chứa giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: SearchListOptions`}),` — các tùy chọn cấu hình (ví dụ: `,(0,c.jsx)(t.code,{children:`findExactMatch`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Kiểm tra xem trình so khớp biểu thức chính quy nội bộ đã được khởi tạo hay chưa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelection(value: string): boolean`}),` — Kiểm tra xem giá trị đã cho có khớp với biểu thức tìm kiếm hiện tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): RegExp | undefined`}),` — Trả về thực thể biểu thức chính quy hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(): void`}),` — Khởi tạo lại trình so khớp dựa trên trạng thái hiện tại của thành phần tìm kiếm và các tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`chế-độ-tìm-kiếm`,children:`Chế độ tìm kiếm`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp hỗ trợ hai chế độ so khớp chính, được điều khiển bởi tùy chọn `,(0,c.jsx)(t.code,{children:`findExactMatch`}),` trong `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`:`]}),`
`,(0,c.jsx)(t.h3,{id:`1-chứa-tất-cả-các-từ-mặc-định`,children:`1. Chứa tất cả các từ (Mặc định)`}),`
`,(0,c.jsxs)(t.p,{children:[`Когда `,(0,c.jsx)(t.code,{children:`findExactMatch`}),` là `,(0,c.jsx)(t.code,{children:`false`}),`, chuỗi tìm kiếm được chia thành các từ riêng lẻ. Kết quả khớp chỉ được tìm thấy nếu `,(0,c.jsx)(t.strong,{children:`mọi từ`}),` đều có mặt trong chuỗi đích, bất kể thứ tự của chúng.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ví dụ`}),`: Tìm kiếm `,(0,c.jsx)(t.code,{children:`"chuột chơi game"`}),` sẽ khớp với `,(0,c.jsx)(t.code,{children:`"Chuột dành cho chơi game"`}),` và `,(0,c.jsx)(t.code,{children:`"Chơi game Pro Chuột"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-cụm-từ-chính-xác`,children:`2. Cụm từ chính xác`}),`
`,(0,c.jsxs)(t.p,{children:[`Когда `,(0,c.jsx)(t.code,{children:`findExactMatch`}),` là `,(0,c.jsx)(t.code,{children:`true`}),`, chuỗi tìm kiếm được xử lý như một cụm từ liên tục duy nhất. Kết quả khớp chỉ được tìm thấy nếu `,(0,c.jsx)(t.strong,{children:`chính xác trình tự`}),` các ký tự (không phân biệt hoa thường) tồn tại trong chuỗi đích.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ví dụ`}),`: Tìm kiếm `,(0,c.jsx)(t.code,{children:`"chuột chơi game"`}),` sẽ khớp với `,(0,c.jsx)(t.code,{children:`"Chuột chơi game cực ngầu"`}),`, nhưng sẽ `,(0,c.jsx)(t.strong,{children:`không`}),` khớp với `,(0,c.jsx)(t.code,{children:`"Chuột dành cho chơi game"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này chủ yếu sử dụng kiểu gốc `,(0,c.jsx)(t.code,{children:`RegExp`}),` và logic nội bộ được quản lý bởi `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};