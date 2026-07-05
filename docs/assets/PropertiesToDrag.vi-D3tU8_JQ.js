import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToDrag - Bộ chuyển đổi chuyển dời nhánh thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestodrag`,children:`Lớp PropertiesToDrag`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToDrag`}),` quản lý việc dịch chuyển và di dời các thuộc tính từ một nhánh của cây cấu hình thiết kế sang một nhánh khác dựa trên chỉ thị `,(0,c.jsx)(n.code,{children:`drag`}),`. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy tắc di dời`}),` — Di dời phần tử thuộc tính theo các đường dẫn được định nghĩa trong thuộc tính `,(0,c.jsx)(n.code,{children:`drag`}),` (sử dụng các phân đoạn đường dẫn tương đối như `,(0,c.jsx)(n.code,{children:`.`}),` hoặc `,(0,c.jsx)(n.code,{children:`..`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp đích đến`}),` — Tự động tạo thư mục đích và cấu trúc bằng cách sử dụng các định nghĩa của `,(0,c.jsx)(n.code,{children:`dragSetting`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Di chuyển giá trị nguyên tử`}),` — Trộn các giá trị vào phần tử đích trong khi xóa chúng khỏi vị trí nguồn một cách an toàn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu cây thuộc tính đã dịch chuyển vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`007-03-drag`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToDrag, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDrag(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-di-dời`,children:`Thao tác di dời`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để bắt đầu đọc và dịch chuyển các nhánh thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDragSetting(property: PropertyItemsItem): Record<string, PropertyItem> | undefined`}),` — Đánh giá cấu hình `,(0,c.jsx)(n.code,{children:`dragSetting`}),` để tìm nạp các thuộc tính mẫu đại diện cho các vị trí đích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(properties?: PropertyItemsItem): void`}),` — Duyệt đệ quy cây thuộc tính để xác định vị trí và xử lý các nút được nhắm mục tiêu bởi `,(0,c.jsx)(n.code,{children:`drag`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`drag(parents: PropertyItemsParent[], item: PropertyItem, setting: Record<string, PropertyItem>): PropertyItem | undefined`}),` — Thực hiện tìm kiếm đường dẫn (`,(0,c.jsx)(n.code,{children:`.`}),` cho gốc, `,(0,c.jsx)(n.code,{children:`..`}),` cho cha) để xác định nút đích chính xác.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toGo(item: PropertyItem, itemDrag: PropertyItem): boolean`}),` — Sao chép các thuộc tính và giá trị từ phần tử nguồn sang phần tử đích.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};