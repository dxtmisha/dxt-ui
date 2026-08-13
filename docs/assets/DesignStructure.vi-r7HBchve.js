import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignStructure - Động cơ phân giải dữ liệu thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designstructure`,children:`Lớp DesignStructure`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignStructure`}),` là bộ phân giải dữ liệu nền tảng cho các thành phần của hệ thống thiết kế. Nó điều phối việc đọc, lưu trữ (caching) và xử lý dữ liệu thành phần có cấu trúc, bao gồm các thuộc tính, phân cấp lớp CSS và các token kiểu dáng. Nó đóng vai trò là một lớp trừu tượng giữa các tệp cấu hình thô và các động cơ chuyển đổi mẫu.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Truy cập dữ liệu thống nhất`}),` — Cung cấp API tập trung để truy xuất tất cả siêu dữ liệu liên quan đến một thành phần cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm thông minh`}),` — Sử dụng `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` để tránh các thao tác hệ thống tệp dư thừa và tăng tốc độ xử lý nhiều thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ánh xạ lớp con (Subclass Mapping)`}),` — Phân giải các phân cấp lớp CSS phức tạp cho các cấu trúc thành phần đệ quy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phơi bày Token kiểu dáng`}),` — Trích xuất và định dạng các token thiết kế thành một định dạng sẵn sàng cho việc tạo SCSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điều phối quy ước đặt tên`}),` — Tiêu chuẩn hóa việc đặt tên thành phần, thiết kế và tệp trong toàn bộ quá trình xây dựng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:`Để khởi tạo một bộ phân giải cấu trúc, hãy cung cấp mã định danh của thành phần. Lớp sẽ tự động liên kết nó với cấu hình thiết kế của dự án hiện tại.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component?: string`}),` — Mã định danh cho thành phần (ví dụ: `,(0,c.jsx)(t.code,{children:`'button'`}),`, `,(0,c.jsx)(t.code,{children:`'list'`}),`). Mặc định là `,(0,c.jsx)(t.code,{children:`'component'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thu-thập-dữ-liệu`,children:`Thu thập dữ liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): DesignStructureList`}),` — Truy xuất danh sách đầy đủ các thuộc tính và siêu dữ liệu của thành phần, có sử dụng bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClasses(): DesignStructureClassesList`}),` — Phân giải phân cấp các lớp CSS cho thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStyles(): string[]`}),` — Trả về các token kiểu dáng đã được định dạng được lấy từ cấu trúc của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`đặt-tên--định-danh`,children:`Đặt tên & Định danh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — Trả về mã định danh hệ thống thiết kế hiện tại (ví dụ: `,(0,c.jsx)(t.code,{children:`'misha'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignFirst(): string`}),` — Trả về mã định danh thiết kế được định dạng với chữ cái đầu viết hoa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentName(): string`}),` — Trả về tên thành phần thô.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentNameFirst(): string`}),` — Trả về tên thành phần với chữ cái đầu viết hoa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFullComponentName(): string`}),` — Kết hợp tên thiết kế và tên thành phần (ví dụ: `,(0,c.jsx)(t.code,{children:`'MishaButton'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFileName(): string`}),` — Trả về tên tệp tiêu chuẩn cho triển khai của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathName(): string`}),` — Trả về mã định danh duy nhất cho các khóa bộ nhớ đệm và đường dẫn hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`quy-trình-phân-giải-the-resolution-pipeline`,children:`Quy trình phân giải (The Resolution Pipeline)`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi dữ liệu được yêu cầu (ví dụ: thông qua `,(0,c.jsx)(t.code,{children:`get()`}),` hoặc `,(0,c.jsx)(t.code,{children:`getClasses()`}),`), lớp sẽ kích hoạt một quy trình phân giải theo mô-đun:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác thực bộ nhớ đệm`}),`: Đầu tiên, nó kiểm tra xem dữ liệu đã xử lý đã tồn tại trong `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` dưới một khóa được tạo bởi `,(0,c.jsx)(t.code,{children:`getPathName()`}),` hay chưa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ủy quyền mô-đun`}),`: Nếu dữ liệu thiếu trong bộ nhớ đệm, nó sẽ ủy quyền công việc nặng nề cho các lớp "Read" chuyên biệt:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureRead`}),`: Xử lý việc trích xuất các thuộc tính và giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureClasses`}),`: Quản lý việc xây dựng các cây lớp (class trees).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureStyles`}),`: Xử lý các token thành các chuỗi kiểu dáng.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ lâu dài`}),`: Dữ liệu đã phân giải được lưu ngược trở lại vào bộ nhớ đệm để nâng cao hiệu suất cho các lần gọi tiếp theo trong cùng một chu kỳ xây dựng.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tích-hợp-với-các-động-cơ-mẫu`,children:`Tích hợp với các động cơ mẫu`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignStructure`}),` cung cấp "Nguồn sự thật" cho các lớp như `,(0,c.jsx)(t.code,{children:`DesignReplace`}),`. Bằng cách tiêu chuẩn hóa cách phân giải tên và đường dẫn, nó đảm bảo rằng mọi tệp được tạo (Vue, TS, SCSS) đều sử dụng các mã định danh nhất quán và duy trì các tham chiếu đường dẫn tương đối chính xác trong không gian làm việc.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};