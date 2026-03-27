import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignConstructor - Trình tạo hàm khởi tạo thiết kế`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designconstructor`,children:`Lớp DesignConstructor`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` là một triển khai chuyên biệt của `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` tập trung vào việc tạo logic nội bộ và các "constructor" cho các thành phần. Nó tự động hóa việc tạo các định nghĩa thuộc tính, loại TypeScript và các điểm nối (hooks) kiểu dáng hình thành nên nền tảng của lớp hành vi của thành phần.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo khung Constructor`}),` — Tự động tạo toàn bộ bộ tệp cần thiết cho logic hành vi của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa an toàn kiểu (Type Safety)`}),` — Tạo các tệp `,(0,c.jsx)(n.code,{children:`props.ts`}),`, `,(0,c.jsx)(n.code,{children:`types.ts`}),` và `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),` để đảm bảo định kiểu nghiêm ngặt trong toàn bộ thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nền tảng kiểu dáng`}),` — Tạo tệp `,(0,c.jsx)(n.code,{children:`style.scss`}),` ban đầu tương thích với hệ thống lớp của constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo logic thống nhất`}),` — Tạo cả tệp `,(0,c.jsx)(n.code,{children:`.ts`}),` và `,(0,c.jsx)(n.code,{children:`.tsx`}),` để triển khai logic thành phần linh hoạt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp hệ thống`}),` — Tự động cập nhật `,(0,c.jsx)(n.code,{children:`package.json`}),` và tạo các xuất bản thư viện cho constructor mới.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo một thực thể trình tạo, hãy sử dụng hàm khởi tạo. Nó tự động phân giải thư mục mục tiêu trong thư mục `,(0,c.jsx)(n.code,{children:`src/constructors`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — Mã định danh duy nhất cho thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — Các cặp khóa-giá trị cấu hình tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Thực hiện toàn bộ chuỗi tạo thư mục, tạo tệp và đăng ký hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`cấu-trúc-các-tệp-được-tạo`,children:`Cấu trúc các tệp được tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi được khởi tạo, `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` xử lý một số tệp do mẫu điều khiển:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` — Cấu hình ánh xạ cho các thuộc tính nội bộ của constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — Định nghĩa thuộc tính bao gồm các kiểu và giá trị mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),` & `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),` — Các giao diện TypeScript và định nghĩa kiểu cho trạng thái và cấu hình thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style.scss`}),` — Định nghĩa kiểu dáng ban đầu được liên kết với cấu trúc lớp của constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Constructors.ts`}),` — Tệp triển khai logic chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),` — Triển khai lớp hiển thị/render bằng TSX.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),` — Điểm nhập cho các xuất bản của constructor.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời-thực-thi`,children:`Vòng đời thực thi`}),`
`,(0,c.jsxs)(n.p,{children:[`Quy trình `,(0,c.jsx)(n.code,{children:`make()`}),` thực thi theo một thứ tự chính xác để duy trì tính toàn vẹn của dữ liệu:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thiết lập thư mục`}),`: Phân giải và xác nhận đường dẫn mục tiêu trong thư mục `,(0,c.jsx)(n.code,{children:`src/constructors`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo tệp`}),`: Lần lượt gọi các phương thức `,(0,c.jsx)(n.code,{children:`make[File]()`}),` chuyên biệt để chuyển đổi các mẫu thành mã dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp nội bộ`}),`: Cập nhật tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` gốc của dự án để hiển thị constructor mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất bản thư viện`}),`: Tạo một tệp xuất bản trong thư mục gốc của thư viện để cho phép sử dụng toàn cầu.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};