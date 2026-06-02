import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiErrorStorage - Quản lý lỗi`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apierrorstorage`,children:`Lớp ApiErrorStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`ApiErrorStorage`}),` là một `,(0,c.jsx)(n.strong,{children:`Trình quản lý xử lý và nhận dạng các trạng thái lỗi API`}),`. Nó cung cấp một kho lưu trữ tập trung cho các tiêu chí lỗi API, cho phép hệ thống xác định các lỗi cụ thể bằng cách khớp mã trạng thái phản hồi, mã lỗi từ thân JSON, phương thức yêu cầu và URL.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ tập trung`}),` — tập hợp tất cả các mẫu lỗi API đã biết vào một nơi để xử lý nhất quán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khớp mẫu`}),` — xác định lỗi bằng trạng thái HTTP, mã lỗi tùy chỉnh, phương thức yêu cầu hoặc mẫu URL (bao gồm cả RegExp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi cấu trúc`}),` — chuyển đổi các lỗi mạng thô thành các mục lỗi cấp ứng dụng có cấu trúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực tùy chỉnh`}),` — hỗ trợ các hàm xác thực tùy chỉnh cho các kịch bản nhận dạng lỗi phức tạp.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý`,children:`Quản lý`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): this`}),` — Thêm một hoặc nhiều mục lỗi hoặc danh sách lỗi vào bộ lưu trữ nội bộ.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nhận-dạng`,children:`Nhận dạng`}),`
`,(0,c.jsx)(n.h4,{id:`find`,children:(0,c.jsx)(n.code,{children:`find`})}),`
`,(0,c.jsx)(n.p,{children:`Tìm một mục lỗi khớp trong bộ lưu trữ bằng cách phân tích phản hồi. Nó tự động cố gắng trích xuất mã lỗi và thông báo từ thân phản hồi.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — Phương thức HTTP được sử dụng cho yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: Response`}),` — Đối tượng phản hồi Fetch API.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiErrorStorageItem>`}),` — Mục lỗi khớp hoặc một mục lỗi được tạo nếu không tìm thấy kết quả khớp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const errorItem = await errorStorage.find(ApiMethodItem.get, response);

if (errorItem.code === 'USER_NOT_FOUND') {
  // Xử lý lỗi cụ thể
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-loại-dữ-liệu-types`,children:`Các loại dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`apierrorstorageitem`,children:`ApiErrorStorageItem`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string | RegExp`}),` — Chuỗi URL hoặc biểu thức chính quy để khớp với URL yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — Phương thức HTTP bắt buộc để khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Mã lỗi tùy chọn để khớp với thân JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — Mã trạng thái HTTP tùy chọn để khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validation?: (response: Response) => boolean`}),` — Hàm xác thực tùy chỉnh tùy chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string | ((response?: Response) => string)`}),` — Thông báo lỗi tùy chọn hoặc hàm tạo thông báo.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};