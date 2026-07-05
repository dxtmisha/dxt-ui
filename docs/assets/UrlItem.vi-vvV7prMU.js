import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/UrlItem - Quản lý URL`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-urlitem`,children:`Lớp UrlItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`UrlItem`}),` là một `,(0,c.jsx)(n.strong,{children:`Lớp tiện ích isomorphic`}),` để phân tích cú pháp, quản lý và cập nhật URL trong cả môi trường client-side (DOM) và server-side (SSR). Nó bao bọc đối tượng `,(0,c.jsx)(n.code,{children:`URL`}),` tiêu chuẩn, cung cấp các thuộc tính getter chỉ đọc sạch sẽ và các phương thức hỗ trợ để thao tác với tham số truy vấn (query parameter).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ isomorphic`}),` — tự động phân giải URL tương đối dựa trên ngữ cảnh runtime (window.location trong trình duyệt, localhost trong quá trình render phía máy chủ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cách ly yêu cầu trong SSR`}),` — cung cấp phương thức `,(0,c.jsx)(n.code,{children:`getInstance()`}),` được hỗ trợ bởi `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` để giữ cho ngữ cảnh URL được cách ly trong mỗi luồng yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ tham số truy vấn`}),` — cung cấp các phương thức sạch sẽ và có thể chuỗi hóa (chainable) để kiểm tra, truy xuất, thiết lập hoặc xóa các tham số truy vấn mà không cần định dạng chuỗi tìm kiếm thủ công.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`các-bộ-truy-cập-accessors`,children:`Các bộ truy cập (Accessors)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get href(): string`}),` — Trả về chuỗi URL đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get protocol(): string`}),` — Trả về giao thức bao gồm cả dấu hai chấm ở cuối.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get username(): string`}),` — Trả về tên người dùng (username).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get password(): string`}),` — Trả về mật khẩu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get host(): string`}),` — Trả về host (tên miền và cổng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get hostname(): string`}),` — Trả về tên miền (không bao gồm cổng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get port(): string`}),` — Trả về cổng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get pathname(): string`}),` — Trả về đường dẫn tài nguyên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get search(): string`}),` — Trả về chuỗi truy vấn bao gồm cả dấu hỏi chấm ở đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get searchParams(): URLSearchParams`}),` — Trả về đối tượng `,(0,c.jsx)(n.code,{children:`URLSearchParams`}),` tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get hash(): string`}),` — Trả về chuỗi hash bao gồm cả dấu thăng ở đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get origin(): string`}),` — Trả về nguồn gốc (origin) của URL (chỉ đọc).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParam(name: string): string | undefined`}),` — Trả về giá trị của tham số truy vấn, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParams(): Record<string, any>`}),` — Trả về tất cả các tham số truy vấn dưới dạng một đối tượng với các kiểu đã biến đổi.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hasParam(name: string): boolean`}),` — Kiểm tra xem tham số truy vấn được chỉ định có tồn tại hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(url?: string | URL): this`}),` — Cập nhật giá trị URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setParam(name: string, value: string): this`}),` — Thiết lập giá trị của tham số truy vấn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setParams(params: Record<string, any>): this`}),` — Thay thế tất cả các tham số truy vấn bằng đối tượng được chỉ định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`deleteParam(name: string): this`}),` — Xóa tham số truy vấn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phụ-trợ`,children:`Phụ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstance(): UrlItem`}),` — Trả về instance cách ly theo yêu cầu của UrlItem.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toString(): string`}),` — Chuyển đổi instance Url thành biểu diễn chuỗi của nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toJSON(): string`}),` — Chuyển đổi instance Url thành biểu diễn chuỗi JSON.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiến-trúc-ssr`,children:`Kiến trúc SSR`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`UrlItem`}),` cung cấp khả năng quản lý instance cách ly theo yêu cầu thông qua `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-instance`,children:`Quản lý Instance`}),`
`,(0,c.jsxs)(n.p,{children:[`Bằng cách gọi `,(0,c.jsx)(n.code,{children:`UrlItem.getInstance()`}),`, lớp này sẽ truy xuất hoặc khởi tạo một instance được lưu trữ trong `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` dưới một khóa duy nhất (`,(0,c.jsx)(n.code,{children:`__ui:url-item__`}),`). Kiến trúc này giải quyết hai vấn đề lớn:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn luồng trong SSR`}),`: Trong quá trình render phía máy chủ, nhiều yêu cầu máy chủ chạy đồng thời. `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` đảm bảo rằng mỗi yêu cầu có ngữ cảnh `,(0,c.jsx)(n.code,{children:`UrlItem`}),` cách ly riêng, ngăn chặn việc rò rỉ tham số truy vấn giữa các phiên làm việc của người dùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sự đơn giản của Singleton trên Client`}),`: Ở phía client, nó hoạt động như một singleton thực sự, cho phép các component đọc và cập nhật các tham số URL toàn cục.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};