import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-code/Classes/FigmaFramesSelected - Quản lý các frame đang chọn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmaframesselected`,children:`Lớp FigmaFramesSelected`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích tĩnh dùng để quản lý, lưu trữ bộ nhớ đệm (cache) và đồng bộ hóa danh sách các frame đang được chọn trong môi trường plugin Figma. Nó chịu trách nhiệm lưu trữ lâu dài và giao tiếp hai chiều giữa plugin và giao diện người dùng (UI) về trạng thái lựa chọn.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ lâu dài`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` để giữ danh sách các ID frame đang chọn ngay cả khi tải lại plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động lưu bộ nhớ đệm`}),` — Quản lý hiệu quả bộ nhớ đệm của các ID đang chọn để truy cập nhanh chóng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Messenger`}),` — Đơn giản hóa việc giao tiếp hai chiều để cập nhật và lấy trạng thái lựa chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-tĩnh-static-methods`,children:`Các phương thức tĩnh (Static Methods)`}),`
`,(0,c.jsx)(n.h3,{id:`has`,children:(0,c.jsx)(n.code,{children:`has`})}),`
`,(0,c.jsx)(n.p,{children:`Kiểm tra xem một frame với ID cụ thể có đang được chọn hay không.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Mã định danh (ID) duy nhất của node Figma.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu frame đang được chọn, `,(0,c.jsx)(n.code,{children:`false`}),` nếu ngược lại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const has = FigmaFramesSelected.has('123:456')
`})}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy danh sách các ID frame đang được chọn hiện tại, sử dụng bộ nhớ đệm nếu có sẵn.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — Một mảng chứa danh sách các ID các frame đang chọn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const selectedIds = FigmaFramesSelected.get()
`})}),`
`,(0,c.jsx)(n.h3,{id:`toggle`,children:(0,c.jsx)(n.code,{children:`toggle`})}),`
`,(0,c.jsx)(n.p,{children:`Thay đổi trạng thái lựa chọn của một frame.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Mã định danh (ID) duy nhất của node Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: boolean`}),` — Chọn (`,(0,c.jsx)(n.code,{children:`true`}),`) hoặc bỏ chọn (`,(0,c.jsx)(n.code,{children:`false`}),`) frame.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.toggle('123:456', true)
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Thêm một ID frame vào danh sách lựa chọn và cập nhật bộ nhớ lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Mã định danh (ID) duy nhất của frame Figma cần thêm.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.add('123:456')
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Xóa một ID frame khỏi danh sách lựa chọn và cập nhật bộ nhớ lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Mã định danh (ID) duy nhất của frame Figma cần xóa.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.remove('123:456')
`})}),`
`,(0,c.jsx)(n.h3,{id:`send`,children:(0,c.jsx)(n.code,{children:`send`})}),`
`,(0,c.jsx)(n.p,{children:`Thiết lập các listener qua messenger của plugin để xử lý các yêu cầu về danh sách lựa chọn và các cập nhật từ giao diện người dùng (UI).`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaFramesSelected.send()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};