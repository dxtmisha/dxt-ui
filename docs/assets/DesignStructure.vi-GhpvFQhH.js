import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/DesignStructure - Động cơ phân giải dữ liệu thành phần"}),`
`,n.jsx(h.h1,{id:"lớp-designstructure",children:"Lớp DesignStructure"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"DesignStructure"})," là bộ phân giải dữ liệu nền tảng cho các thành phần của hệ thống thiết kế. Nó điều phối việc đọc, lưu trữ (caching) và xử lý dữ liệu thành phần có cấu trúc, bao gồm các thuộc tính, phân cấp lớp CSS và các token kiểu dáng. Nó đóng vai trò là một lớp trừu tượng giữa các tệp cấu hình thô và các động cơ chuyển đổi mẫu."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Truy cập dữ liệu thống nhất"})," — Cung cấp API tập trung để truy xuất tất cả siêu dữ liệu liên quan đến một thành phần cụ thể."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bộ nhớ đệm thông minh"})," — Sử dụng ",n.jsx(h.code,{children:"PropertiesCache"})," để tránh các thao tác hệ thống tệp dư thừa và tăng tốc độ xử lý nhiều thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Ánh xạ lớp con (Subclass Mapping)"})," — Phân giải các phân cấp lớp CSS phức tạp cho các cấu trúc thành phần đệ quy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phơi bày Token kiểu dáng"})," — Trích xuất và định dạng các token thiết kế thành một định dạng sẵn sàng cho việc tạo SCSS."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Điều phối quy ước đặt tên"})," — Tiêu chuẩn hóa việc đặt tên thành phần, thiết kế và tệp trong toàn bộ quá trình xây dựng."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(h.p,{children:"Để khởi tạo một bộ phân giải cấu trúc, hãy cung cấp mã định danh của thành phần. Lớp sẽ tự động liên kết nó với cấu hình thiết kế của dự án hiện tại."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"component?: string"})," — Mã định danh cho thành phần (ví dụ: ",n.jsx(h.code,{children:"'button'"}),", ",n.jsx(h.code,{children:"'list'"}),"). Mặc định là ",n.jsx(h.code,{children:"'component'"}),"."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"thu-thập-dữ-liệu",children:"Thu thập dữ liệu"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"get(): DesignStructureList"})," — Truy xuất danh sách đầy đủ các thuộc tính và siêu dữ liệu của thành phần, có sử dụng bộ nhớ đệm."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getClasses(): DesignStructureClassesList"})," — Phân giải phân cấp các lớp CSS cho thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getStyles(): string[]"})," — Trả về các token kiểu dáng đã được định dạng được lấy từ cấu trúc của thành phần."]}),`
`]}),`
`,n.jsx(h.h3,{id:"đặt-tên--định-danh",children:"Đặt tên & Định danh"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getDesign(): string"})," — Trả về mã định danh hệ thống thiết kế hiện tại (ví dụ: ",n.jsx(h.code,{children:"'misha'"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getDesignFirst(): string"})," — Trả về mã định danh thiết kế được định dạng với chữ cái đầu viết hoa."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getComponentName(): string"})," — Trả về tên thành phần thô."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getComponentNameFirst(): string"})," — Trả về tên thành phần với chữ cái đầu viết hoa."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getFullComponentName(): string"})," — Kết hợp tên thiết kế và tên thành phần (ví dụ: ",n.jsx(h.code,{children:"'MishaButton'"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getFileName(): string"})," — Trả về tên tệp tiêu chuẩn cho triển khai của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getPathName(): string"})," — Trả về mã định danh duy nhất cho các khóa bộ nhớ đệm và đường dẫn hệ thống."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"quy-trình-phân-giải-the-resolution-pipeline",children:"Quy trình phân giải (The Resolution Pipeline)"}),`
`,n.jsxs(h.p,{children:["Khi dữ liệu được yêu cầu (ví dụ: thông qua ",n.jsx(h.code,{children:"get()"})," hoặc ",n.jsx(h.code,{children:"getClasses()"}),"), lớp sẽ kích hoạt một quy trình phân giải theo mô-đun:"]}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Xác thực bộ nhớ đệm"}),": Đầu tiên, nó kiểm tra xem dữ liệu đã xử lý đã tồn tại trong ",n.jsx(h.code,{children:"PropertiesCache"})," dưới một khóa được tạo bởi ",n.jsx(h.code,{children:"getPathName()"})," hay chưa."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Ủy quyền mô-đun"}),': Nếu dữ liệu thiếu trong bộ nhớ đệm, nó sẽ ủy quyền công việc nặng nề cho các lớp "Read" chuyên biệt:',`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"DesignStructureRead"}),": Xử lý việc trích xuất các thuộc tính và giá trị."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"DesignStructureClasses"}),": Quản lý việc xây dựng các cây lớp (class trees)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"DesignStructureStyles"}),": Xử lý các token thành các chuỗi kiểu dáng."]}),`
`]}),`
`]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Lưu trữ lâu dài"}),": Dữ liệu đã phân giải được lưu ngược trở lại vào bộ nhớ đệm để nâng cao hiệu suất cho các lần gọi tiếp theo trong cùng một chu kỳ xây dựng."]}),`
`]}),`
`,n.jsx(h.h3,{id:"tích-hợp-với-các-động-cơ-mẫu",children:"Tích hợp với các động cơ mẫu"}),`
`,n.jsxs(h.p,{children:[n.jsx(h.code,{children:"DesignStructure"}),' cung cấp "Nguồn sự thật" cho các lớp như ',n.jsx(h.code,{children:"DesignReplace"}),". Bằng cách tiêu chuẩn hóa cách phân giải tên và đường dẫn, nó đảm bảo rằng mọi tệp được tạo (Vue, TS, SCSS) đều sử dụng các mã định danh nhất quán và duy trì các tham chiếu đường dẫn tương đối chính xác trong không gian làm việc."]})]})}function g(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{g as default};
