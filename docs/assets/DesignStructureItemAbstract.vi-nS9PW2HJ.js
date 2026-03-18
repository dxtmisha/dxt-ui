import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/DesignStructureItemAbstract - Bộ phân giải cấu trúc cơ sở"}),`
`,n.jsx(t.h1,{id:"lớp-designstructureitemabstract",children:"Lớp DesignStructureItemAbstract"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"DesignStructureItemAbstract"})," đóng vai trò là khối xây dựng nền tảng cho tất cả các bộ phân giải cấu trúc chuyên biệt trong hệ thống thiết kế. Nó xử lý việc điều phối cấp thấp của động cơ ",n.jsx(t.code,{children:"Properties"}),", đảm bảo rằng mọi lớp kế thừa đều có quyền truy cập tức thì vào siêu dữ liệu thành phần và các token hệ thống thiết kế đã được xác thực."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Khởi tạo tiêu chuẩn hóa"})," — Tự động thiết lập môi trường ",n.jsx(t.code,{children:"Properties"})," cho bất kỳ bộ phân giải kế thừa nào."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tạo liên kết thống nhất"})," — Tập trung logic để tạo các tham chiếu chéo nội bộ trong siêu dữ liệu JSON của hệ thống thiết kế."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Lấy siêu dữ liệu"})," — Tự động truy xuất lát cắt dữ liệu cấu trúc cụ thể của thành phần trong quá trình xây dựng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thực thi hợp đồng"})," — Sử dụng các thuộc tính trừu tượng để đảm bảo tất cả các lớp con đều triển khai một mẫu truy cập dữ liệu tiêu chuẩn hóa."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Là một lớp trừu tượng, ",n.jsx(t.code,{children:"DesignStructureItemAbstract"})," không thể được khởi tạo trực tiếp. Các lớp kế thừa phải gọi ",n.jsx(t.code,{children:"super()"})," với mã định danh của thành phần."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"component: string"})," — Mã định danh của thành phần có cấu trúc đang được phân tích (ví dụ: ",n.jsx(t.code,{children:"'button'"}),")."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Trạng thái nội bộ:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"properties"}),": Một phiên bản của trình quản lý ",n.jsx(t.code,{children:"Properties"})," toàn cục."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"items"}),": Tập hợp con cụ thể của dữ liệu cấu trúc được phân giải cho thành phần đã cho."]}),`
`]}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"truy-cập-dữ-liệu",children:"Truy cập dữ liệu"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"get(): D"})," — Phương thức cụ thể theo triển khai trả về đối tượng dữ liệu đã được xử lý hoàn chỉnh."]}),`
`]}),`
`,n.jsx(t.h3,{id:"logic-nội-bộ-được-bảo-vệ",children:"Logic nội bộ (Được bảo vệ)"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getLink(): string"})," — Tạo liên kết nội bộ đã được định dạng (ví dụ: ",n.jsx(t.code,{children:"{misha.button}"}),") được dùng để tra cứu các token trong siêu dữ liệu thiết kế toàn cục."]}),`
`]}),`
`,n.jsx(t.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(t.h3,{id:"nền-tảng-của-bộ-phân-giải",children:"Nền tảng của bộ phân giải"}),`
`,n.jsxs(t.p,{children:["Khi một lớp con được khởi tạo (ví dụ: ",n.jsx(t.code,{children:"DesignStructureClasses"}),"), lớp cha trừu tượng sẽ điều phối vòng đời sau:"]}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thiết lập động cơ"}),": Một thực thể ",n.jsx(t.code,{children:"Properties"})," mới được khởi tạo để cung cấp quyền truy cập vào trạng thái toàn cục của hệ thống thiết kế."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Liên kết định danh"}),": Phương thức ",n.jsx(t.code,{children:"getLink()"})," tạo ra một mã định danh chuỗi chuyên biệt kết nối tên thành phần với chủ đề thiết kế hiện tại."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Bản địa hóa dữ liệu"}),": Sử dụng liên kết đã tạo, lớp sẽ truy vấn kho lưu trữ thuộc tính toàn cục để tách biệt chỉ các siêu dữ liệu liên quan cho thành phần hiện tại, lưu trữ nó trong thuộc tính ",n.jsx(t.code,{children:"items"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Mở rộng lớp con"}),": Lớp con sau đó có thể truy cập ",n.jsx(t.code,{children:"this.items"})," để thực hiện logic cụ thể của nó (như xây dựng cây lớp hoặc định dạng kiểu dáng) mà không cần lo lắng về việc phân giải tệp hoặc bộ nhớ đệm bên dưới."]}),`
`]}),`
`,n.jsx(t.h3,{id:"vai-trò-kiến-trúc",children:"Vai trò kiến trúc"}),`
`,n.jsx(t.p,{children:'Lớp trừu tượng này đảm bảo rằng các lớp "Read" và "Resolver" của thư viện tập lệnh tuân theo một mẫu nhất quán. Bằng cách trừu tượng hóa logic tải thuộc tính, nó cho phép nhà phát triển tạo ra các loại trình phân tích cấu trúc mới bằng cách chỉ tập trung vào logic chuyển đổi, thay vì cơ chế lấy dữ liệu.'})]})}function g(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{g as default};
