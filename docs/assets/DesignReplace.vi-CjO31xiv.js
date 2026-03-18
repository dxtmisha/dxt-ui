import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/DesignReplace - Động cơ chuyển đổi mẫu"}),`
`,n.jsx(c.h1,{id:"lớp-designreplace",children:"Lớp DesignReplace"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignReplace"})," là động cơ cốt lõi để chuyển đổi các tệp mẫu (templates) thô thành mã nguồn sẵn sàng cho dự án. Nó sử dụng một hệ thống đánh dấu chuyên biệt để xác định các phần văn bản cần được thay thế linh hoạt bằng tên thành phần, định nghĩa thuộc tính, kiểu dữ liệu hoặc logic tạo kiểu dáng được lấy từ ",n.jsx(c.code,{children:"DesignStructure"})," của thành phần."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải nhãn thông minh"})," — Xác định và thay thế các khối văn bản được giới hạn bởi các nhận xét cụ thể (ví dụ: ",n.jsx(c.code,{children:"// :type"})," hoặc ",n.jsx(c.code,{children:"<!-- :props -->"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Đặt tên theo ngữ cảnh"})," — Tự động chuyển đổi các trình giữ chỗ (placeholders) chung như ",n.jsx(c.code,{children:"[project]"}),", ",n.jsx(c.code,{children:"[design]"}),", và ",n.jsx(c.code,{children:"[component]"})," dựa trên cấu hình."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tiêm kiểu dữ liệu (Type Injection)"})," — Tạo các liên hợp kiểu (type unions) và giao diện TypeScript phức tạp trực tiếp từ siêu dữ liệu thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ánh xạ giá trị mặc định"})," — Phân giải và tiêm các giá trị mặc định cho các thuộc tính vào các đối tượng hoặc đối số constructor."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo lớp có điều kiện"})," — Tạo các đối tượng liên kết lớp Vue/TS và ánh xạ bộ chọn CSS được tối ưu hóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa đường dẫn"})," — Tự động phân giải các đường dẫn nhập (import) tương đối dựa trên vị trí của tệp mục tiêu trong cây dự án."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Để khởi tạo một động cơ thay thế, hãy truyền vào cấu trúc dữ liệu của thành phần, mã định danh nhãn mục tiêu và chuỗi mẫu."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"structure: DesignStructure"})," — Nguồn sự thật cho siêu dữ liệu và các quy tắc cấu trúc của thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"mark: string"})," — Nhãn chính được sử dụng trong các mẫu để xác định các thành phần (ví dụ: ",n.jsx(c.code,{children:"'button'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"sample: string"})," — Nội dung văn bản của mẫu cần được sửa đổi."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignReplace } from '@dxtmisha/scripts'

const engine = new DesignReplace(structure, 'button', templateContent)
engine.replaceName().replaceType()
const output = engine.get()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(): string"})," — Trả về phiên bản cuối cùng của mẫu sau tất cả các chuyển đổi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getNameFile(name: string): string"})," — Xử lý tên tệp hoặc chuỗi để thay thế các trình giữ chỗ cấp dự án."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceName(): this"})," — Thay thế các nhãn tên thành phần chính trong toàn bộ mẫu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replacePath(): this"})," — Sửa các đường dẫn tương đối (",n.jsx(c.code,{children:"../../../"}),") để trỏ đến đúng vị trí gốc của dự án."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceMark(name: string, data: string[], end = ''): this"})," — Thực hiện thay thế khối cho một nhãn cụ thể bằng cách tiêm một mảng các chuỗi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceOnce(name?: string, removeReplacement?: boolean | Function): this"})," — Xử lý các dấu thay thế một lần (",n.jsx(c.code,{children:".once"}),")."]}),`
`]}),`
`,n.jsx(c.h3,{id:"tự-động-hóa-thuộc-tính--kiểu-dữ-liệu",children:"Tự động hóa thuộc tính & kiểu dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceType(constructor?: string): this"})," — Tạo và tiêm các kiểu TypeScript cho tất cả các thuộc tính thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceDefault(): this"})," — Tiêm các giá trị mặc định cho các thuộc tính vào mẫu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceProps(): this"})," — Tạo các đối tượng định nghĩa thuộc tính kiểu Vue."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replacePropsValues(): this"})," — Tạo các mảng giá trị được phép cho các thuộc tính (enums/unions)."]}),`
`]}),`
`,n.jsx(c.h3,{id:"kiểu-dáng--lớp-classes",children:"Kiểu dáng & Lớp (Classes)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceClasses(template?: Function, end = ''): this"})," — Tạo danh sách các lớp CSS có sẵn dựa trên cấu trúc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceClassesValues(): this"})," — Tạo logic liên kết lớp động cho các tệp triển khai logic."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceStylesValues(): this"})," — Ánh xạ các thuộc tính thành phần với các biến tùy chỉnh CSS (CSS Variables)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"replaceConstructorClasses(): this"})," — Trình tạo lớp chuyên biệt cho các constructor của thành phần."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"hệ-thống-đánh-dấu-marking-system",children:"Hệ thống đánh dấu (Marking System)"}),`
`,n.jsx(c.p,{children:"Động cơ quét các mẫu nhận xét cụ thể để xác định nơi tiêm mã. Nó hỗ trợ nhiều kiểu nhận xét:"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Logic nội dòng"}),": ",n.jsx(c.code,{children:"// :label data"})," hoặc ",n.jsx(c.code,{children:"/* :label */ content /* :label.end */"})]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nhận xét mẫu"}),": ",n.jsx(c.code,{children:"<!-- :label --> content <!-- :label.end -->"})]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính đặc hiệu của thuộc tính"}),": ",n.jsx(c.code,{children:":label.propertyName.none"})," (được sử dụng để loại trừ các thuộc tính cụ thể khỏi một khối)."]}),`
`]}),`
`,n.jsx(c.h3,{id:"quy-trình-chuyển-đổi",children:"Quy trình chuyển đổi"}),`
`,n.jsxs(c.p,{children:["Khi một phương thức thay thế như ",n.jsx(c.code,{children:"replaceType()"})," được gọi, lớp sẽ:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quét"}),": Xác định vị trí các dấu bắt đầu và kết thúc cho nhãn ",n.jsx(c.code,{children:"type"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tham chiếu cấu trúc"}),": Lặp qua các thuộc tính trong ",n.jsx(c.code,{children:"DesignStructure"})," được cung cấp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải logic"}),": Xác định cú pháp TypeScript chính xác cho mỗi thuộc tính dựa trên kiểu giá trị của nó (boolean, string, hoặc union)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tiêm mã"}),": Thay thế nội dung giữa các dấu bằng mã mới được tạo, duy trì lề (indentation) ban đầu."]}),`
`]})]})}function a(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(i,{...h})}):i(h)}export{a as default};
