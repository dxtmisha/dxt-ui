import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignTypescript - Bộ phân tích siêu dữ liệu kiểu"}),`
`,n.jsx(c.h1,{id:"lớp-designtypescript",children:"Lớp DesignTypescript"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignTypescript"})," cung cấp một lớp bọc cấp cao xung quanh TypeScript Compiler API, cho phép phân tích theo chương trình các siêu dữ liệu của mã nguồn. Nó chuyên trích xuất thông tin có cấu trúc từ các interface và type alias, làm cho nó trở thành một công cụ thiết yếu để tạo tài liệu, lược đồ xác thực hoặc các định nghĩa kiểu được tối ưu hóa cho các trợ lý AI."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp Compiler API"})," — Tương tác liền mạch với chương trình nội bộ và trình kiểm tra kiểu (type checker) của TypeScript."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Trích xuất kiểu sâu"})," — Phân giải các kiểu thuộc tính phức tạp, literal unions và tính tùy chọn (optionality)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Truy xuất tài liệu"})," — Tự động trích xuất các chú thích JSDoc để duy trì ngữ cảnh do nhà phát triển viết."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân tích cú pháp dựa trên AST"})," — Điều hướng Cây Cú pháp Trừu tượng (AST) để xác định chính xác các interfaces và khai báo kiểu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá giá trị Literal"})," — Mở rộng các literal unions một cách thông minh thành các tùy chọn chuỗi/số có thể sử dụng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Khởi tạo bộ phân tích bằng cách cung cấp đường dẫn đến tệp nguồn TypeScript. Bạn cũng có thể chỉ định các tùy chọn trình biên dịch tùy chỉnh để phù hợp với môi trường dự án của mình."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path: string"})," — Đường dẫn tuyệt đối hoặc tương đối đến tệp ",n.jsx(c.code,{children:".ts"})," (mặc định là ",n.jsx(c.code,{children:"''"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options: ts.CompilerOptions"})," — Cấu hình trình biên dịch TypeScript tùy chọn (mặc định là ",n.jsx(c.code,{children:"{}"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignTypescript } from '@dxtmisha/scripts'

const analyzer = new DesignTypescript('src/types/component.ts')
const types = analyzer.getTypes()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"thu-thập-dữ-liệu",children:"Thu thập dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getTypes(): DesignTypescriptList"})," — Quét tệp nguồn và trả về một mảng siêu dữ liệu của tất cả các kiểu và interface được phát hiện."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getType(name: string): DesignTypescriptItem | undefined"})," — Truy xuất siêu dữ liệu cho một kiểu hoặc interface cụ thể theo tên của nó."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-phân-tích-siêu-dữ-liệu",children:"Quy trình phân tích siêu dữ liệu"}),`
`,n.jsxs(c.p,{children:["Khi phân tích một tệp, ",n.jsx(c.code,{children:"DesignTypescript"})," thực hiện các bước sau:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo chương trình"}),": Nó khởi tạo một TypeScript Program và Type Checker cho tệp đã chỉ định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Duyệt qua các nút"}),": Nó truy cập mọi nút trong AST, đặc biệt tìm kiếm các nút ",n.jsx(c.code,{children:"TypeAliasDeclaration"})," và ",n.jsx(c.code,{children:"InterfaceDeclaration"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải thuộc tính"}),": Đối với mỗi kiểu được xác định, nó truy vấn Type Checker để lấy các thuộc tính của nó (ngay cả những thuộc tính được kế thừa)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tổng hợp thông tin"}),": Đối với mỗi thuộc tính, nó xây dựng một đối tượng siêu dữ liệu chứa:",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Name"}),": Mã định danh thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Type"}),": Một biểu diễn chuỗi sạch của kiểu (ví dụ: ",n.jsx(c.code,{children:"'string | number'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Options"}),": Nếu thuộc tính là một literal union, nó sẽ trích xuất các giá trị thực tế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Description"}),": Chú thích JSDoc liên quan."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(c.h3,{id:"vai-trò-trong-chuỗi-công-cụ",children:"Vai trò trong chuỗi công cụ"}),`
`,n.jsxs(c.p,{children:["Lớp này thường được sử dụng bởi các trình tạo khác (như ",n.jsx(c.code,{children:"DesignTypes"})," hoặc ",n.jsx(c.code,{children:"DesignCommand"}),') để thu hẹp khoảng cách giữa mã tĩnh và logic động. Bằng cách cung cấp một API sạch cho TypeScript Compiler phức tạp, nó cho phép hệ thống thiết kế luôn "nhận biết kiểu" trong tất cả các quy trình tự động của nó.']})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
