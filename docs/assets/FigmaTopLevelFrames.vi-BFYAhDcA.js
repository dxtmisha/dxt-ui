import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-code/Classes/FigmaTopLevelFrames - Quản lý frame cấp cao nhất`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmatoplevelframes`,children:`Lớp FigmaTopLevelFrames`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích tĩnh (static utility class) dùng để quản lý, lưu trữ bộ nhớ đệm (cache) và truyền tải danh sách các frame cấp cao nhất trong môi trường plugin Figma. Nó đóng vai trò là cầu nối giữa cấu trúc tài liệu Figma và giao diện người dùng (UI) của plugin thông qua một messenger chuyên dụng.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động lưu bộ nhớ đệm`}),` — Quản lý hiệu quả bộ nhớ đệm của dữ liệu frame đã được định dạng theo mô hình singleton.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Messenger`}),` — Đơn giản hóa việc giao tiếp hai chiều giữa plugin và giao diện người dùng về danh sách các frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý các Node`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` để trích xuất và định dạng các thuộc tính cốt lõi của node (ID, tên, xuất JPG) để hiển thị trên UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-tĩnh-static-methods`,children:`Các phương thức tĩnh (Static Methods)`}),`
`,(0,c.jsx)(n.h3,{id:`getlistdata`,children:(0,c.jsx)(n.code,{children:`getListData`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy và lưu vào bộ nhớ đệm danh sách các frame cấp cao nhất đã được định dạng. Nó xử lý từng frame chính từ trang hiện tại, trích xuất ID, tên và xuất nó sang định dạng JPG.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — Một promise sẽ trả về mảng dữ liệu frame đã được định dạng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const frames = await FigmaTopLevelFrames.getListData()
`})}),`
`,(0,c.jsx)(n.h3,{id:`send`,children:(0,c.jsx)(n.code,{children:`send`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thiết lập một listener cho các yêu cầu frame bằng cách sử dụng messenger của plugin. Khi nhận được thông báo `,(0,c.jsx)(n.code,{children:`UI_FIGMA_FRAMES_POST_NAME`}),` từ giao diện người dùng (UI), nó sẽ tự động lấy dữ liệu mới nhất và gửi ngược lại cho UI.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(n.p,{children:`Một mảng các đối tượng đại diện cho dữ liệu frame đã được xử lý cho UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — ID duy nhất của node Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên hiển thị của frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — Dữ liệu JPG đã được xuất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: FigmaItem`}),` — Instance của `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` để thực hiện các thao tác tiếp theo.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};