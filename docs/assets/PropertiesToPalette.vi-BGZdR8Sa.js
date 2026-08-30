import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToPalette - Bộ biên dịch bảng màu và chủ đề`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestopalette`,children:`Lớp PropertiesToPalette`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToPalette`}),` xử lý các token thiết kế được gán cho danh mục `,(0,c.jsx)(t.code,{children:`palette`}),` và biên dịch chúng thành các biến màu và lớp cụ thể được ánh xạ theo chủ đề. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biên dịch chủ đề`}),` — Ánh xạ màu sắc của bảng màu sang các biến thể chủ đề (chẳng hạn như chủ đề mặc định `,(0,c.jsx)(t.code,{children:`basic`}),`) và bố cục thiết kế tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thuộc tính CSS động`}),` — Chuyển đổi các sắc thái thô thành các biến CSS (kiểu `,(0,c.jsx)(t.code,{children:`PropertyType.var`}),` và danh mục `,(0,c.jsx)(t.code,{children:`PropertyCategory.color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp chủ đề mặc định`}),` — Tạo ra các giá trị ánh xạ biến chủ đề mặc định (`,(0,c.jsx)(t.code,{children:`sys-palette`}),`) bằng cách sử dụng cấu hình dự phòng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu báo cáo biên dịch vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`002-palette`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToPalette, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToPalette(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời--thao-tác-biên-dịch`,children:`Vòng đời & Thao tác biên dịch`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để chạy các quy tắc biên dịch cho màu tiêu chuẩn và chủ đề tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getParent(category: PropertyCategory.colors | PropertyCategory.class, parent: PropertyList): PropertyList`}),` — Lấy hoặc xây dựng một vùng chứa mới dưới khóa `,(0,c.jsx)(t.code,{children:`palette`}),` một cách an toàn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClass(items: PropertyList, name: string): PropertyList`}),` — Truy xuất hoặc khởi tạo một đối tượng lớp trong danh sách thuộc tính cho một màu nhất định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(theme: string, name: string): string`}),` — Kết hợp tên chủ đề và tên sắc thái màu (ví dụ: `,(0,c.jsx)(t.code,{children:`basic-primary`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(link: string, name: string): string`}),` — Xây dựng chuỗi biểu diễn biến trong ngoặc nhọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValueDefault(item: PropertyItem, theme: string): string`}),` — Giải quyết tên sắc thái màu mặc định được cấu hình cho bảng màu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(root?: PropertyList, theme?: string, designParent?: string): void`}),` — Duyệt qua các thuộc tính bảng màu, thêm các sắc thái chủ đề và chỉ báo mặc định vào các lớp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addItem(parent: PropertyList, link: string, theme: string, palette: PropertyList): void`}),` — Điền các token màu và liên kết vào danh sách thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addDefault(parent: PropertyList, theme: string, palette: PropertyItem): void`}),` — Cấu hình chỉ báo dự phòng bảng màu chính `,(0,c.jsx)(t.code,{children:`sys-palette`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};