import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToMedia - Bộ chuyển đổi truy vấn Media và Container`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestomedia`,children:`Lớp PropertiesToMedia`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToMedia`}),` xử lý các token thiết kế đại diện cho các truy vấn truyền thông (media queries) và truy vấn vùng chứa (container queries), chuyển đổi các bí danh (aliases) và các nhóm thô thành các ràng buộc CSS `,(0,c.jsx)(n.code,{children:`@media`}),` hoặc `,(0,c.jsx)(n.code,{children:`@container`}),` tiêu chuẩn. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mở rộng bí danh Media`}),` — Tra cứu các từ viết tắt khung nhìn tùy chỉnh (ví dụ: `,(0,c.jsx)(n.code,{children:`md`}),`, `,(0,c.jsx)(n.code,{children:`lg`}),`) bằng cách sử dụng cấu hình thiết kế và mở rộng chúng thành các định nghĩa pixel.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp kiểu truy vấn`}),` — Xác định các phạm vi chiều rộng tối thiểu (min-width) và chiều rộng tối đa (max-width) dựa trên các thuộc tính có tên `,(0,c.jsx)(n.code,{children:`media`}),`, `,(0,c.jsx)(n.code,{children:`mediaMax`}),`, `,(0,c.jsx)(n.code,{children:`container`}),`, hoặc `,(0,c.jsx)(n.code,{children:`containerMax`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mở rộng nhóm Media`}),` — Tạo các nhóm công cụ sửa đổi trạng thái cho mỗi điểm dừng (breakpoint) của media/container đang hoạt động được định nghĩa trong hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu đầu ra truy vấn media vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`040-media`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToMedia, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMedia(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-chuyển-đổi`,children:`Thao tác chuyển đổi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm và mở rộng các nút nhóm truy vấn media và chuyển đổi các tham số truy vấn riêng lẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(design: string, name: string, item: PropertyItem): string`}),` — Chuyển đổi các tham số cấu hình media thành các tiêu chí truy vấn CSS tiêu chuẩn (ví dụ: `,(0,c.jsx)(n.code,{children:`(min-width: 768px)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypeByGroup(item: PropertyItem): PropertyType`}),` — Giải quyết kiểu thuộc tính cơ sở từ một phần tử container hoặc nhóm media.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValueForMedia(design: string, values: string[]): string[]`}),` — Thay thế các bí danh thích ứng bằng các số đo pixel được cấu hình của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValueGroup(design: string, name: string, item: PropertyItem, type: PropertyType): Record<string, PropertyItem> | undefined`}),` — Tạo các bộ sửa đổi trạng thái riêng biệt cho mỗi breakpoint trong cấu trúc nhóm media.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};