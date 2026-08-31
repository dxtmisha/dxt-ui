import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToVariable - Bộ giải quyết kiểu thuộc tính`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestovariable`,children:`Lớp PropertiesToVariable`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToVariable`}),` phân tích các thuộc tính trong cây token thiết kế để tự động giải quyết và gán các phân loại `,(0,c.jsx)(t.code,{children:`PropertyType`}),` phù hợp dựa trên phân cấp, tên và giá trị. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Suy luận kiểu dữ liệu động`}),` — Gán các cờ kiểu thuộc tính chính xác (ví dụ: `,(0,c.jsx)(t.code,{children:`var`}),`, `,(0,c.jsx)(t.code,{children:`property`}),`, `,(0,c.jsx)(t.code,{children:`selector`}),`, `,(0,c.jsx)(t.code,{children:`subclass`}),`, `,(0,c.jsx)(t.code,{children:`none`}),`) cho các token bằng cách so khớp với danh sách tương thích CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân loại theo cấp bậc`}),` — Duyệt các nút cha để kế thừa các phân loại và giải quyết các vỏ bọc cấp cao nhất của thành phần và thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát hiện bộ chọn và phần tử giả`}),` — So sánh tên token với danh sách các bộ chọn và phần tử giả CSS tiêu chuẩn (như `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`::before`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các kiểu biến đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`008-variable`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToVariable, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVariable(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thao-tác-giải-quyết-kiểu`,children:`Thao tác giải quyết kiểu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua tất cả các thuộc tính và gán các phân loại kiểu dữ liệu của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCategory(item: PropertyItem): PropertyType | undefined`}),` — Suy luận kiểu dựa trên các danh mục như `,(0,c.jsx)(t.code,{children:`root`}),` hoặc `,(0,c.jsx)(t.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByMain(design: string, component: string | undefined, name: string): PropertyType | undefined`}),` — Kiểm tra xem token có đại diện cho vỏ bọc không gian tên thiết kế hoặc thành phần chính hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByProperty(name: string): PropertyType | undefined`}),` — So khớp tên token với danh sách thuộc tính CSS tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySelector(name: string): PropertyType | undefined`}),` — So khớp tên token với các lớp giả CSS tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySubclass(item: PropertyItem): PropertyType | undefined`}),` — Xác định cấu trúc lớp con dựa trên cấu hình trống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByVarParent(parent?: PropertyItem): PropertyType | undefined`}),` — Kế thừa phân loại `,(0,c.jsx)(t.code,{children:`var`}),` nếu phần tử cha có kiểu biến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByNone(item: PropertyItem): PropertyType | undefined`}),` — Trả về kiểu `,(0,c.jsx)(t.code,{children:`none`}),` nếu token có cấu hình kiểu ẩn rõ ràng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByVirtual(name: string): PropertyType | undefined`}),` — So khớp tên token với các phần tử giả CSS tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findType(name: string, item: PropertyItem): PropertyType`}),` — Bộ điều phối trung tâm chạy tất cả các trình so khớp con để xác định giá trị dự phòng kiểu thuộc tính chính xác.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};