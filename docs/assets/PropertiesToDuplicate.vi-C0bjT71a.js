import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToDuplicate - Bộ phát hiện Token trùng lặp`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoduplicate`,children:`Lớp PropertiesToDuplicate`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToDuplicate`}),` quét cây cấu hình thiết kế để xác định vị trí các cấu trúc hoặc nhóm giá trị giống hệt nhau, đánh dấu các nút trùng lặp để khuyến khích tái sử dụng. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét các nút giống nhau`}),` — So sánh giá trị chuỗi đã tuần tự hóa của các cấu hình token chứa từ 5 khóa trở lên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gom nhóm trùng lặp`}),` — Gom nhóm các đối tượng giống nhau và tạo ra một tên camelCase chung đại diện cho mối liên kết logic của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đánh dấu siêu dữ liệu`}),` — Ghi một tham chiếu `,(0,c.jsx)(n.code,{children:`duplicate`}),` vào các phần tử, cho phép các bộ xử lý khác đề xuất tối ưu hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu báo cáo trùng lặp vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`910-duplicate`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToDuplicate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDuplicate(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-phát-hiện`,children:`Thao tác phát hiện`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để chạy kiểm tra trùng lặp và áp dụng các cờ đánh dấu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(properties: PropertiesDuplicateItem['properties']): string`}),` — Định dạng tên nhóm dạng camelCase bằng cách sử dụng các phần đường dẫn duy nhất của các phần tử trùng lặp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findDuplicate(list: PropertiesDuplicateList, valueDuplicate: string): PropertiesDuplicateList`}),` — Duyệt qua danh sách các cấu hình ứng cử viên để tìm các kết quả khớp với chuỗi trùng lặp mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initList(): PropertiesDuplicateList`}),` — Quét toàn bộ cây token để xây dựng bản đồ phẳng các cấu hình phức tạp (có >= 5 khóa) để so sánh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initDuplicate(list: PropertiesDuplicateList): PropertiesDuplicate`}),` — Gom nhóm các mục trùng khớp thành các nhóm đã được loại bỏ trùng lặp.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};