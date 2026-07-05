import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToSort - Bộ sắp xếp cây Token`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestosort`,children:`Lớp PropertiesToSort`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToSort`}),` sắp xếp và thứ tự hóa các phần tử trong cây token thiết kế theo các quy tắc, danh mục, biến và tên được xác định trước. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sắp xếp theo quy tắc`}),` — Sắp xếp các thuộc tính thiết kế bằng cách sử dụng các quy tắc sắp xếp được định nghĩa trong `,(0,c.jsx)(n.code,{children:`sortList`}),` dựa trên biến và danh mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sắp xếp lại theo cấp bậc`}),` — Sắp xếp đệ quy các giá trị lồng nhau và các nhánh con bên trong các nút chứa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp chỉ mục`}),` — Gán một điểm ưu tiên số được tính toán cho mỗi token để thực hiện sắp xếp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu cây thuộc tính đã sắp xếp vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`048-sort`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSort, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSort(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-sắp-xếp`,children:`Thao tác sắp xếp`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để bắt đầu sắp xếp cấu trúc token thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(properties?: PropertyItemsItem): PropertyList`}),` — Duyệt đệ quy các thuộc tính và sắp xếp các mảng con và giá trị thuộc tính của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCategoryName(item: PropertyItem): string`}),` — Trả về một chuỗi tham chiếu danh mục đã định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeys(item: PropertyItem): Item<number>`}),` — Trả về chuỗi khóa chỉ mục sắp xếp và tính toán thứ tự sắp xếp dựa trên các quy tắc của `,(0,c.jsx)(n.code,{children:`sortList`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`join(data: PropertiesSortList): PropertyList`}),` — Thực hiện sắp xếp mảng cuối cùng theo trọng số/thứ tự và ánh xạ các phần tử trở lại danh sách đối tượng đã sắp xếp.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};