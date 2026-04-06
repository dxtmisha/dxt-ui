import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignStructureItemAbstract - Bộ phân giải cấu trúc cơ sở`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designstructureitemabstract`,children:`Lớp DesignStructureItemAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignStructureItemAbstract`}),` đóng vai trò là khối xây dựng nền tảng cho tất cả các bộ phân giải cấu trúc chuyên biệt trong hệ thống thiết kế. Nó xử lý việc điều phối cấp thấp của động cơ `,(0,c.jsx)(n.code,{children:`Properties`}),`, đảm bảo rằng mọi lớp kế thừa đều có quyền truy cập tức thì vào siêu dữ liệu thành phần và các token hệ thống thiết kế đã được xác thực.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo tiêu chuẩn hóa`}),` — Tự động thiết lập môi trường `,(0,c.jsx)(n.code,{children:`Properties`}),` cho bất kỳ bộ phân giải kế thừa nào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo liên kết thống nhất`}),` — Tập trung logic để tạo các tham chiếu chéo nội bộ trong siêu dữ liệu JSON của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lấy siêu dữ liệu`}),` — Tự động truy xuất lát cắt dữ liệu cấu trúc cụ thể của thành phần trong quá trình xây dựng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi hợp đồng`}),` — Sử dụng các thuộc tính trừu tượng để đảm bảo tất cả các lớp con đều triển khai một mẫu truy cập dữ liệu tiêu chuẩn hóa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp trừu tượng, `,(0,c.jsx)(n.code,{children:`DesignStructureItemAbstract`}),` không thể được khởi tạo trực tiếp. Các lớp kế thừa phải gọi `,(0,c.jsx)(n.code,{children:`super()`}),` với mã định danh của thành phần.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — Mã định danh của thành phần có cấu trúc đang được phân tích (ví dụ: `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trạng thái nội bộ:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties`}),`: Một phiên bản của trình quản lý `,(0,c.jsx)(n.code,{children:`Properties`}),` toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items`}),`: Tập hợp con cụ thể của dữ liệu cấu trúc được phân giải cho thành phần đã cho.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-dữ-liệu`,children:`Truy cập dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): D`}),` — Phương thức cụ thể theo triển khai trả về đối tượng dữ liệu đã được xử lý hoàn chỉnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`logic-nội-bộ-được-bảo-vệ`,children:`Logic nội bộ (Được bảo vệ)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLink(): string`}),` — Tạo liên kết nội bộ đã được định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`{misha.button}`}),`) được dùng để tra cứu các token trong siêu dữ liệu thiết kế toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`nền-tảng-của-bộ-phân-giải`,children:`Nền tảng của bộ phân giải`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi một lớp con được khởi tạo (ví dụ: `,(0,c.jsx)(n.code,{children:`DesignStructureClasses`}),`), lớp cha trừu tượng sẽ điều phối vòng đời sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thiết lập động cơ`}),`: Một thực thể `,(0,c.jsx)(n.code,{children:`Properties`}),` mới được khởi tạo để cung cấp quyền truy cập vào trạng thái toàn cục của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Liên kết định danh`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`getLink()`}),` tạo ra một mã định danh chuỗi chuyên biệt kết nối tên thành phần với chủ đề thiết kế hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bản địa hóa dữ liệu`}),`: Sử dụng liên kết đã tạo, lớp sẽ truy vấn kho lưu trữ thuộc tính toàn cục để tách biệt chỉ các siêu dữ liệu liên quan cho thành phần hiện tại, lưu trữ nó trong thuộc tính `,(0,c.jsx)(n.code,{children:`items`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mở rộng lớp con`}),`: Lớp con sau đó có thể truy cập `,(0,c.jsx)(n.code,{children:`this.items`}),` để thực hiện logic cụ thể của nó (như xây dựng cây lớp hoặc định dạng kiểu dáng) mà không cần lo lắng về việc phân giải tệp hoặc bộ nhớ đệm bên dưới.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`vai-trò-kiến-trúc`,children:`Vai trò kiến trúc`}),`
`,(0,c.jsx)(n.p,{children:`Lớp trừu tượng này đảm bảo rằng các lớp "Read" và "Resolver" của thư viện tập lệnh tuân theo một mẫu nhất quán. Bằng cách trừu tượng hóa logic tải thuộc tính, nó cho phép nhà phát triển tạo ra các loại trình phân tích cấu trúc mới bằng cách chỉ tập trung vào logic chuyển đổi, thay vì cơ chế lấy dữ liệu.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};