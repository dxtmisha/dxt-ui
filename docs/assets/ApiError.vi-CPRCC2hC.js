import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiError - Tiện ích lỗi (Tĩnh)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apierror`,children:`Lớp ApiError`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`ApiError`}),` là một `,(0,c.jsx)(n.strong,{children:`Tiện ích chính (Tĩnh)`}),` để quản lý bộ lưu trữ lỗi API và xác định các thất bại. Nó cung cấp một giao diện singleton tập trung để đăng ký các mẫu lỗi và chuyển đổi các phản hồi mạng thô thành các đối tượng `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` có cấu trúc.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao diện tĩnh`}),` — quản lý tiêu chí lỗi và phân tích phản hồi mà không cần khởi tạo thủ công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Singleton an toàn cho SSR`}),` — sử dụng `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` để duy trì bộ lưu trữ lỗi riêng biệt giữa các yêu cầu khác nhau trong quá trình render phía máy chủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký mẫu`}),` — API đơn giản để thêm các mẫu lỗi riêng lẻ hoặc danh sách hàng loạt để nhận dạng lỗi toàn cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-bộ-lưu-trữ`,children:`Quản lý bộ lưu trữ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStorage(): ApiErrorStorage`}),` — Lấy instance singleton nội bộ của bộ lưu trữ lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): void`}),` — Thêm một hoặc nhiều mẫu lỗi vào bộ lưu trữ toàn cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phân-tích`,children:`Phân tích`}),`
`,(0,c.jsx)(n.h4,{id:`getitem`,children:(0,c.jsx)(n.code,{children:`getItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phân tích một phản hồi Fetch thô và tạo một instance `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` có cấu trúc. Đây là phương thức chính để xử lý các thất bại API.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — Phương thức HTTP của yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: Response`}),` — Đối tượng phản hồi Fetch thô.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiErrorItem>`}),` — Một đối tượng lỗi có cấu trúc chứa các chi tiết đã được phân tích.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`try {
  const response = await fetch('/api/user');
  if (!response.ok) {
    const errorItem = await ApiError.getItem(ApiMethodItem.get, response);
    console.error(errorItem.getMessage());
  }
} catch (e) {
  // Xử lý lỗi mạng
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};