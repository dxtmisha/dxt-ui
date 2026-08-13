import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ApiError - Tiện ích lỗi (Tĩnh)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-apierror`,children:`Lớp ApiError`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`ApiError`}),` là một `,(0,c.jsx)(t.strong,{children:`Tiện ích chính (Tĩnh)`}),` để quản lý bộ lưu trữ lỗi API và xác định các thất bại. Nó cung cấp một giao diện singleton tập trung để đăng ký các mẫu lỗi và chuyển đổi các phản hồi mạng thô thành các đối tượng `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),` có cấu trúc.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giao diện tĩnh`}),` — quản lý tiêu chí lỗi và phân tích phản hồi mà không cần khởi tạo thủ công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Singleton an toàn cho SSR`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` để duy trì bộ lưu trữ lỗi riêng biệt giữa các yêu cầu khác nhau trong quá trình render phía máy chủ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký mẫu`}),` — API đơn giản để thêm các mẫu lỗi riêng lẻ hoặc danh sách hàng loạt để nhận dạng lỗi toàn cầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-bộ-lưu-trữ`,children:`Quản lý bộ lưu trữ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStorage(): ApiErrorStorage`}),` — Lấy instance singleton nội bộ của bộ lưu trữ lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): void`}),` — Thêm một hoặc nhiều mẫu lỗi vào bộ lưu trữ toàn cầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`phân-tích`,children:`Phân tích`}),`
`,(0,c.jsx)(t.h4,{id:`getitem`,children:(0,c.jsx)(t.code,{children:`getItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phân tích một phản hồi Fetch thô và tạo một instance `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),` có cấu trúc. Đây là phương thức chính để xử lý các thất bại API.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — Phương thức HTTP của yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: Response`}),` — Đối tượng phản hồi Fetch thô.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiErrorItem>`}),` — Một đối tượng lỗi có cấu trúc chứa các chi tiết đã được phân tích.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`try {
  const response = await fetch('/api/user');
  if (!response.ok) {
    const errorItem = await ApiError.getItem(ApiMethodItem.get, response);
    console.error(errorItem.getMessage());
  }
} catch (e) {
  // Xử lý lỗi mạng
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};