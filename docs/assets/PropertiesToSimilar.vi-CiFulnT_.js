import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToSimilar - Bộ kế thừa thuộc tính Token tương tự`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestosimilar`,children:`Lớp PropertiesToSimilar`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToSimilar`}),` tìm kiếm ở các cấp cha của cây cấu hình thiết kế để định vị các thuộc tính tương tự (có tên khớp nhau) và kế thừa kiểu cũng như các quy tắc đổi tên của chúng. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kế thừa thuộc tính`}),` — Cho phép các token con kế thừa định dạng đổi tên và các biến thuộc tính từ các đường dẫn gốc/cha khớp nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc ngoại lệ`}),` — Tự động chặn kế thừa từ các nút được chỉ định làm không gian tên `,(0,c.jsx)(n.code,{children:`classType`}),` hoặc `,(0,c.jsx)(n.code,{children:`subclass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tìm kiếm ngược lên`}),` — Quét đệ quy các tổ tiên cha theo thứ tự ngược lại (từ dưới lên) để tìm các thuộc tính phù hợp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu cấu trúc token đã cập nhật vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`010-similar`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSimilar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSimilar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-kế-thừa`,children:`Thao tác kế thừa`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua tất cả các thuộc tính và áp dụng các giá trị kế thừa từ các phần tử cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(name: string, item: PropertyItem, parents: PropertyItemsParent[]): PropertyItem | undefined`}),` — Đánh giá các cấu trúc cha khớp nhau để tìm một ứng cử viên thuộc tính nguồn cho việc kế thừa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(item: PropertyItem): boolean`}),` — Xác thực xem một phần tử token có phải là biến hoặc thuộc tính thích hợp để kế thừa hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isException(item?: PropertyItem): boolean`}),` — Trả về true nếu kiểu token khớp với một trong những ngoại lệ không gian tên bị chặn.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};