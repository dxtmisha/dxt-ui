import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToVariable - Bộ giải quyết kiểu thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestovariable`,children:`Lớp PropertiesToVariable`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToVariable`}),` phân tích các thuộc tính trong cây token thiết kế để tự động giải quyết và gán các phân loại `,(0,c.jsx)(n.code,{children:`PropertyType`}),` phù hợp dựa trên phân cấp, tên và giá trị. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Suy luận kiểu dữ liệu động`}),` — Gán các cờ kiểu thuộc tính chính xác (ví dụ: `,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`property`}),`, `,(0,c.jsx)(n.code,{children:`selector`}),`, `,(0,c.jsx)(n.code,{children:`subclass`}),`, `,(0,c.jsx)(n.code,{children:`none`}),`) cho các token bằng cách so khớp với danh sách tương thích CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân loại theo cấp bậc`}),` — Duyệt các nút cha để kế thừa các phân loại và giải quyết các vỏ bọc cấp cao nhất của thành phần và thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện bộ chọn và phần tử giả`}),` — So sánh tên token với danh sách các bộ chọn và phần tử giả CSS tiêu chuẩn (như `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`::before`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các kiểu biến đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`008-variable`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToVariable, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVariable(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-giải-quyết-kiểu`,children:`Thao tác giải quyết kiểu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua tất cả các thuộc tính và gán các phân loại kiểu dữ liệu của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCategory(item: PropertyItem): PropertyType | undefined`}),` — Suy luận kiểu dựa trên các danh mục như `,(0,c.jsx)(n.code,{children:`root`}),` hoặc `,(0,c.jsx)(n.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByMain(design: string, component: string | undefined, name: string): PropertyType | undefined`}),` — Kiểm tra xem token có đại diện cho vỏ bọc không gian tên thiết kế hoặc thành phần chính hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByProperty(name: string): PropertyType | undefined`}),` — So khớp tên token với danh sách thuộc tính CSS tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySelector(name: string): PropertyType | undefined`}),` — So khớp tên token với các lớp giả CSS tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySubclass(item: PropertyItem): PropertyType | undefined`}),` — Xác định cấu trúc lớp con dựa trên cấu hình trống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByVarParent(parent?: PropertyItem): PropertyType | undefined`}),` — Kế thừa phân loại `,(0,c.jsx)(n.code,{children:`var`}),` nếu phần tử cha có kiểu biến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByNone(item: PropertyItem): PropertyType | undefined`}),` — Trả về kiểu `,(0,c.jsx)(n.code,{children:`none`}),` nếu token có cấu hình kiểu ẩn rõ ràng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByVirtual(name: string): PropertyType | undefined`}),` — So khớp tên token với các phần tử giả CSS tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findType(name: string, item: PropertyItem): PropertyType`}),` — Bộ điều phối trung tâm chạy tất cả các trình so khớp con để xác định giá trị dự phòng kiểu thuộc tính chính xác.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};