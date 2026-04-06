import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignTypescript - Bộ phân tích siêu dữ liệu kiểu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designtypescript`,children:`Lớp DesignTypescript`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignTypescript`}),` cung cấp một lớp bọc cấp cao xung quanh TypeScript Compiler API, cho phép phân tích theo chương trình các siêu dữ liệu của mã nguồn. Nó chuyên trích xuất thông tin có cấu trúc từ các interface và type alias, làm cho nó trở thành một công cụ thiết yếu để tạo tài liệu, lược đồ xác thực hoặc các định nghĩa kiểu được tối ưu hóa cho các trợ lý AI.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Compiler API`}),` — Tương tác liền mạch với chương trình nội bộ và trình kiểm tra kiểu (type checker) của TypeScript.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất kiểu sâu`}),` — Phân giải các kiểu thuộc tính phức tạp, literal unions và tính tùy chọn (optionality).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy xuất tài liệu`}),` — Tự động trích xuất các chú thích JSDoc để duy trì ngữ cảnh do nhà phát triển viết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích cú pháp dựa trên AST`}),` — Điều hướng Cây Cú pháp Trừu tượng (AST) để xác định chính xác các interfaces và khai báo kiểu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá giá trị Literal`}),` — Mở rộng các literal unions một cách thông minh thành các tùy chọn chuỗi/số có thể sử dụng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo bộ phân tích bằng cách cung cấp đường dẫn đến tệp nguồn TypeScript. Bạn cũng có thể chỉ định các tùy chọn trình biên dịch tùy chỉnh để phù hợp với môi trường dự án của mình.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn tuyệt đối hoặc tương đối đến tệp `,(0,c.jsx)(n.code,{children:`.ts`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`''`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ts.CompilerOptions`}),` — Cấu hình trình biên dịch TypeScript tùy chọn (mặc định là `,(0,c.jsx)(n.code,{children:`{}`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignTypescript } from '@dxtmisha/scripts'

const analyzer = new DesignTypescript('src/types/component.ts')
const types = analyzer.getTypes()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thu-thập-dữ-liệu`,children:`Thu thập dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypes(): DesignTypescriptList`}),` — Quét tệp nguồn và trả về một mảng siêu dữ liệu của tất cả các kiểu và interface được phát hiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(name: string): DesignTypescriptItem | undefined`}),` — Truy xuất siêu dữ liệu cho một kiểu hoặc interface cụ thể theo tên của nó.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-phân-tích-siêu-dữ-liệu`,children:`Quy trình phân tích siêu dữ liệu`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi phân tích một tệp, `,(0,c.jsx)(n.code,{children:`DesignTypescript`}),` thực hiện các bước sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo chương trình`}),`: Nó khởi tạo một TypeScript Program và Type Checker cho tệp đã chỉ định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duyệt qua các nút`}),`: Nó truy cập mọi nút trong AST, đặc biệt tìm kiếm các nút `,(0,c.jsx)(n.code,{children:`TypeAliasDeclaration`}),` và `,(0,c.jsx)(n.code,{children:`InterfaceDeclaration`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải thuộc tính`}),`: Đối với mỗi kiểu được xác định, nó truy vấn Type Checker để lấy các thuộc tính của nó (ngay cả những thuộc tính được kế thừa).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp thông tin`}),`: Đối với mỗi thuộc tính, nó xây dựng một đối tượng siêu dữ liệu chứa:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Name`}),`: Mã định danh thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type`}),`: Một biểu diễn chuỗi sạch của kiểu (ví dụ: `,(0,c.jsx)(n.code,{children:`'string | number'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Options`}),`: Nếu thuộc tính là một literal union, nó sẽ trích xuất các giá trị thực tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Description`}),`: Chú thích JSDoc liên quan.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`vai-trò-trong-chuỗi-công-cụ`,children:`Vai trò trong chuỗi công cụ`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này thường được sử dụng bởi các trình tạo khác (như `,(0,c.jsx)(n.code,{children:`DesignTypes`}),` hoặc `,(0,c.jsx)(n.code,{children:`DesignCommand`}),`) để thu hẹp khoảng cách giữa mã tĩnh và logic động. Bằng cách cung cấp một API sạch cho TypeScript Compiler phức tạp, nó cho phép hệ thống thiết kế luôn "nhận biết kiểu" trong tất cả các quy trình tự động của nó.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};